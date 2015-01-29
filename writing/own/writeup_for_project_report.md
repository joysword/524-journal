## Data Acquiring

[skipped for now]  
[do we need to include how we get OSM data and GTFS data?]

## Data Processing

We used two tools to calculate a Travel Time Matrix (TTM), a customized data structure that behaves like a 2D array, but with customized functionality, in which travel time from each block group to all other block groups in the area is stored.

The first tool is the Open Source Routing Machine (OSRM). OSRM is a high-performance routing engine for shortest paths in road networks written in C++. We used it to calculate TTMs for automobile travel time. OSRM has native support for calculating travel time from a list of origins to a list of destinations.  
We modified it slightly to fix our needs for our TTM.  
The calculation was done in Mac OS X Mavericks.

The second tool we used is OpenTripPlanner (OTP). OTP is an open source platform for multi-modal and multi-agency trip planning written in Java. We used it to calculate TTM for transit.  
We used a library [otp-jython][1] written by Matthew Conway to write python scripts to do batch processing via Java-written OTP.  
The calculation was done in Mac OS X Yosemite.

In summary, the process is as follows:

* using OTP, together with OSM data and GTFS data, to create the `Graph`.
* writing python script that makes use of otp-jython to calculate TTMs.
* writing python script to calculate accessibility (actual number) data based on TTM.

Steps from accessibility data to geojson layers are listed below:

* convert accessibility from actual number to percentage (using Python)
* convert them to `dbf` files (in LibreOffice)
* join our data into shapefile of the area, and change column names (in QGIS)
* convert generated shapefiles to geojson files (using command line tool)

## Rendering Layers

To customize what data set to look into, the first parameter that users can set is which type of accssibility they would like to investigate, currently including `Jobs`, `Park Area`, `Park counts`, `Fire Stations`, `Schools (public/private)`, `Grocery Stores`, `Hospitals` and `Libraries`.

Users are allowed to select which travle type they are interested in. For jobs, three options are available: Auto, Transit and Weighted. For all other land uses, users can choose between Auto, Transit and Walking.

If transit is selected, then a new drop down menu will appear to allow users selecting for which time of day the transit accessibility should be shown, because transit accessibility varies significantly by time of a day.

Then users should specify a travel time threshold that are interesting to them.

If current accessibility type is `Jobs`, users can specify a category of filter. Jobs are categorized using different classification methods, including age, earning, industry, race, ethnicity, education and gender. The fields corresponded to variables in the U.S. Census Bureau’s LODES data format.

We used Jenks optimization method to cluster block groups into 7 classes, and rendered them using a monochromatic green color scheme. Hovering the mouse over any block group will show detailed accessibility value as well as the total number of job in currently selected data set.

Users are also able to bring up CTA subway lines onto the map for reference, as well as Metra railway lines. CTA and Metra lines are also GeoJSON files converted from shapefiles.

We used leaflet and mapbox for online map service and javascript API.  
We used Amazon EC2 for hosting.  
We used Flask as our framework, providing scalability for future expansion.

## Street and Transport Network
This part is majorly from [the documentation of OpenTripPlanner][2].

Street and transport networks are represented in OTP using directed graphs.

![](https://github.com/openplans/OpenTripPlanner/wiki/GraphStructure/transit_graph.png "figure 1")

Nodes represent intersections and edges represent road segments between intersections. Edges in OTP are directed, so a street segment is usually composed of two edges, one in each direction. Each edge has travel modes attached to it. For example, in a one-way street, one can drive in only one direction but can walk in both directions. (See figure 1)

Each edge also has annotation about turn restriction which explicitly allow or disallow turns onto other edges for individual modes of travel.

Each transit stop is represented by at least one node in the graph. There could be several nodes for a single stop if it has multiple platforms. Street-Transit-Link edges, which have small weight, connect transit stops to street network.

Transit trips are represented by four kinds of edges: Board, Alight, Dwell, and Hop. These edges are time-dependent. For example, a Board edge will search for the next departure time for its associated trip pattern and vary its weight accordingly.

[1]: https://github.com/mattwigway/opentripplanner-jython
[2]: https://github.com/opentripplanner/OpenTripPlanner/wiki/GraphStructure