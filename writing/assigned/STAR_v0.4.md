# The Application of Visualization in Urban Planning related tasks

### Abstract

### 1. Introduction

### 2. Urban Accessibility

### 3. Geographic Information Systems Using Google Maps API
Geographic Information Systems (GIS) is probably the most popular and the most famous visualization system that are used by urban planning researchers, professionals and students to process, manipulate, manage, and visualize geographical information data, and known by researchers from other research areas.

...

Here we list some interesting work that facilitates Google Maps API to visualize geographical urban data to give readers an understanding of the range of applications of GIS systems.

#### logistics network system
In [http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=5461215], the authors introduced a logistics network system built upon Google Maps API. The major features of Google Maps API utilized by this system include: basics functions of mapping, including the map layers and UI controls; event-driven asynchronous HTTP communication that interact with Google Maps API, and geocoding service that allows converting address to coordinates.

The system consists of 5 modules. **Registration module** and **Information Publishing module** are for administrative purposes and we omit them here. **Transaction module** and **Information Query and Matching module** are to match the vehicle and cargo based on a series of parameters such as the vehicle's location, cargo types, cargo weight and route, and then saves the transaction information into the database, waiting for monitoring and other queries.

The last module, **Map Service module** is the major module of the system. This module itself includes 4 sub-modules. **Querying sub-module**, which provides functionality for the vehicle owner or the cargo owner to conduct historical information management, and **Navigating sub-module**, whose primary function is to supply the vehicle owners and the drivers with map navigation, are with no significant interest.

The more important sub-module of this system as a logistics management tool, is the **Monitoring sub-module** that is able to show real time location of vehicles and goods dynamically, as well as several previous checkpoints through the route. In the backend, this module receives GPS positioning data with real-time communication, processes it and stores it in the database awaiting for user's call.

![](http://ieeexplore.ieee.org/ielx5/5455877/5461034/5461215/html/img/5461215-fig-7-large.gif).

The fourth sub-module of Map Service module is **POI sub-module**, where Points of Interest associated with the logistics, such as large-scale logistics park, logistics companies, and distribution centers, are stored and ready to be displayed. Served as a auxiliary companion of **Monitoring sub-module**, POI sub-module enhances the usability of this system.

#### tourism information systems
In [http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6626139], the author introduced their design and implementation of a tourism information system based on Google Maps API. The traditional way that a tourist collects tourism-related information, such as restaurants, hotels, attractions, transportation and entertainment, is by searching on different websites. Three deficiencies are within this traditional way of information collecting: 1) tourism information is scattered; 2) tourism information is unconfirmed; 3) tourism information is flat. This work is an attempt to solve these issues by building an integrated tourism information platform where tourists can conveniently obtain more references for their travel.
![](http://ieeexplore.ieee.org/ielx7/6601058/6626018/6626139/html/img/6626139-fig-2-large.gif)

A similar system for tourists is presented in [http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=5291141]. This system makes use of services made available through Google Maps API such as Geocoding which from given address returns a geolocation, Directions which provides routing instructions from a start point to a destination point, Streetview which shows virtual picture of locations, GoogleBar for local search of the map, and so on. The difference is that this platform not only provides basic mapping functionality but also integrated an expert system that can provide customized information to users.

#### land use information release system
    In 2010, Zhang et al. [1] introduced a land use information release system. It uses Google Maps API for map service, XML for data storage. It has a three-layer architecture (data layer, business logic layer and presentation layer). It allows user to query land use information by selecting filters (text query), keyword search (local search), geocoding search (reverse address resolution). It also allows user to send feedback about each data feature on the map.

#### railroad settlement information management system
Also in 2010, Wang and Zhou [2] proposed a railroad settlement system that makes use of similar techniques as [1], such as Google Map Service, XML, Ajax, etc. The major difference is they provided a better front-end, which visulized data using traditional charts such as line charts and bar charts to perform analysis on the data.

![](http://joysword.com/doc/cs524/star-3.1.png)  
**Figure 3.1** Search, warning and statistics of monitor point’s settlement information

![](http://joysword.com/doc/cs524/star-3.2.png)  
**Figure 3.2** Statistical analysis of railway profile’s cumulative settlement information

### 4. Urban Search & Rescue Mission Planning system
In an *Urban Search & Rescue* (USAR) operation, victims’ survivability is mostly determined by the time-to-rescue. It is critical that medical attention or extraction be provided as fast as possible. As structural damage caused by disasters makes available floor plans outdated, it is very important that the *Incident Commander* (IC) can analyze the available information and coordinate multiple rescue responders. In recent years, the traditional way of assessment where 2D maps of the collapsed buildings are hand-drawn based on the descriptions of rescue responders on site is replaced by unmanned robots equipped with sensors to detect victims, gather information about hazardous area, and perform scans of rooms to create a 3D point cloud of the building’s interior.

In 2014, Bock, A. et al. [http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=7017652] proposed a visualization system for IC to use in USAR scenarios. The system creates an interactive 3D rendering that increases the commander's spatial awareness of the building (Figure 4.1 (a-c) and Figure 4.3) and supports the planning and analysis of available access paths that are automatically generated by the system based on varying risk factors (Figure 4.4). Then IC uses this information to instruct rescue responders to reach *Points of Interests* (POI). At the same time the IC is able to annotate the visualization with new information provided by the on-site responders and thus shift the decision making process from opportunistic to being strategical.

This is the first system facing post-disaster USAR scenarios that uses 3D point cloud for visualization. Before this system, most of visualization-oriented work published in the field is concerned with pre-disaster evacuation planning. Reddy et al. performed notable work based on analyzing possible bottlenecks of escape routes [1]. Ribarsky et al. presented a system organizing first responders in intact structures [2]. Kim et al. developed a system enhancing the situational awareness of responders using a mobile visual analytics tool [3]. As for post-disaster USAR planning, existing systems are mostly based on 2D representations [5][6][7][8].

![](http://ieeexplore.ieee.org/ielx7/7002491/7017643/7017652/html/img/7017652-fig-1-hires.gif)  
**Figure 4.1** the system applied to a building at Tohoku University. Different views support a comprehensive understanding, allowing the IC to select and inspect paths that reach a Point of Interest, which are integrated into the rendering. Inspection and path computation is based on a set of derived attributes (c).

![](http://ieeexplore.ieee.org/ielx7/7002491/7017643/7017652/html/img/7017652-fig-2-hires.gif)  
**Figure 4.2** a screenshot showing our system for a typical scenario. each view can be maximized to fill the entire screen for in-depth inspection. an overview (left) shows a top-down view of the building to provide context, a multi-view (right) shows the different components of our system

![](http://ieeexplore.ieee.org/ielx7/7002491/7017643/7017652/html/img/7017652-fig-3-hires.gif)  
**Figure 4.3** these images show different rendering techniques of the same location in the Tohoku dataset (a-d). Rendering the individual voxels as points does not allow for an immersive rendering as depth-cues are missing (a). Binning the point cloud and representing each voxel as a axis-aligned box solves this problem (b). In order to enhance the contours of the scene and produce a better immersion, image-space enhancements were performed (c). Alternatively, the IC can choose a rendering method imitating the output of range imaging cameras (d). It is possible to render the point cloud in stereoscopic fisheye that can be used for dome surfaces or VR glasses (e). The voxel size's effect during binning is shown for the rescue arena dataset (f-h).

![](http://ieeexplore.ieee.org/ielx7/7002491/7017643/7017652/html/img/7017652-fig-4-large.gif)  
**Figure 4.4** Views supporting comparative path analysis. (a) the profile plot presents the change of an attribute along paths; here the distance to the closest hazard. (b) parallel coordinates plot showing correlations between attributes.

#### side note about point cloud
It is worth mentioning that there are not many applications we found in urban planning context that utilizes point cloud for 3D rendering. There are great potential in point cloud visualization in urban planning related tasks though, as large amount of fundamental research has been conducted, making point cloud ready-to-use.

There has been work by Richter et al. using a level-of-detail structure to render massive point clouds at high frame rates [10]
Xu et al. showed that non-photorealistic rendering techniques can be applied to point cloud data [11]. It is the contour lines in their rendering that inspired xx's rendering algorithm.
More recently, Pintus et al. presented a rendering algorithm that enhances features of unstructured point clouds in real-time without preprocessing [12].
Some other work in this area that converts point cloud to surfaces, which is essential in urban modeling, include [Fabio, Remondino. "From point cloud to surface: the modeling and visualization problem." International Archives of Photogrammetry, Remote Sensing and Spatial Information Sciences 34.5 (2003): W10.], [http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=6385999] and [http://www.sciencedirect.com/science/article/pii/S0097849314001228].
Last but not least, the widely used Point Cloud Library (PCL) [http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=5980567&tag=1] is also making major contribution to the increasing popularity of point cloud.

### 5. Urban Modeling and Urban Simulation
Another field in urban planning context where visualizing data plays a central role in research activity is urban simulation. The term **urban simulation** has two definitions in urban planning context. One common use of this term by domain scientists in urban planning is to describe 3D rendering of urban landscapes, like in [12][19][20][21][23][28]. Here in our discussion, we focus on the second definition though, where urban simulation is a behavioral or process modeling of the dynamic changes in urban activities and landscapes.

Urban simulation models and the visualization of their results have been increasingly used by planning agencies in city, county, and regional scopes to assess alternative transportation investments, land use regulations, and environmental protection policies.

There are two major challenges in urban simulation. The first and fundamental one is to adequately model and predict the complex socio-economic interactions that determine the growth of an urban space in order to simulate the change of this urban space over time. The future structure of a city is governed by both deterministic rules (e.g. population capacity of the city must grow) and organic rules (e.g. social, cultural, and economic interactions strongly influence how a city grows). Because of the intricate nature in urban simulation, a simulation model will usually generate an overwhelming amount of data when running over a long period of forecasting time in a large geographical scale (e.g., one or more decades for a large city with a several million population). This makes it difficult for researchers, planners, or policy-makers to interpret the data.

This is where the second challenge in urban simulation lies. An effective and intuitive visualization is essential to extract useful information from the large mass of data generated by such simulations. In fact, visualization has played an integral part in the development and use of urban simulations of different types for a while. Batty introduced various approaches that relate urban modeling, GIS, and computer graphics in [5] and described the impact of virtual reality and 3D visualization to GIS and demonstrated it in a variety of examples [6]. Cartograms, which use map shape warping to visualize relationships and values of urban and geospatial datasets, is widely used [10][13][22][24]. Dykes and Brunsdon [11] introduced geowigs, a series of geographically weighted interactive graphics, to provide large‐scale geographical environment visualization. Visualization has also been used for the purposes of education, exploration, explanation, and engagement [4]. Some approaches also make use of choroplethic maps, generated by exporting simulation results to GIS for rendering.

Recently, Carlos et al. [https://www.cs.purdue.edu/cgvlab/papers/aliaga/tvcg09-urban.pdf] introduced a method that automatically and interactively infers geometry and image content of urban layouts using the input data and output data of an urban simulation, pushing urban simulation and urban visualization one more step forward. The major contributions of their work are:
1. A methodology for enhancing the visualization of the result of urban simulations by using inferred higher-level structural information.
2. A set of automatic and interactive algorithms for generating a visually plausible urban layout from the data generated by an urban simulation.

The input of this method consists of three components: the first one is a set of parcel and street geometries obtained from shapefiles from ArcGIS; the second is the high-resolution geo-referenced aerial imagery of the targeted area, in this case GeoTIFF files containing coordinates information; and the last is the socio-economic data of this area, which is used as input to an urban simulation engine, this case UrbanSim, that predicts the future value of several state variables of the urban space. These intermediate results of the simulation will then be used by the visualization tool to generate detailed urban layouts for any point in the simulation. The overall process of the pipeline is illustrated in Figure 5.1.

![](http://joysword.com/doc/cs524/star-5.1.png)  
**Figure 5.1** (a) This method is built upon the combination of urban simulation, urban visualization and computer graphics. (b) the processing pipeline completes an urban simulation with visualization. Images and GIS data, together with simulation results data, are fed into the framework to generate parcels and streets, which are then be used as basis for generating urban layout images.

#### simulation of urban spaces

#### layout generation
Spatial transformations of parcels and of the buildings that occupy them can be inferred from the state variables of the urban simulation system. The transformations that frequently take place in the layout include the replacement of buildings with newer and/or larger structures, the division of a parcel into smaller parcels, and the creation of new streets. The visualization system can detect changes in user-defined state variables and translates such changes into transformations to the initial street and parcel information, and also to the fragments of aerial imagery associated to each transformed parcel.

This part is where the core visualization algorithm of the system lies. It can be divided into three steps: parcel generation, street generation and parcel-content generation.

##### parcel generation
The first step is to generate new parcels based on simulation results. How a parcel is partitioned is built upon some desired properties: (i) parcels generally have egress, (ii) city blocks are usually formed by rows of one or two parcels, and (iii) the contour of a parcel is most often a quadrilateral and often nearly rectangular.

Based on these properties, the system uses an recursive algorithm to partition an existing city block or a large parcel. Firstly, parcels whose population has changed (based on simulation data) are marked as candidate for subdivision. Then subdivision attempts start from the largest candidate parcel. A block-sized parcel is split into two parcels, each of which is recursively subdivided until reaching either the number of households specified by the simulation or a minimum parcel area, which is computed automatically as the mean parcel area of all parcels within a chosen distance threshold. If egress is desired (first property), a split is not made if resulting parcels will have no access to streets. This also makes sure that up to two rows of parcels are generated (second property). Since this algorithm works recursively, after a few subdivisions, most new parcels will be nearly rectangular (third property), even if the initial parcel is with complex contour.

![](http://joysword.com/doc/cs524/star-5.2.png)  
**Figure 5.2** (a) A candidate large parcel corresponding to a city-block is divided into smaller parcels (beige=street, light blue=parcels/city-blocks, dark-blue=parcel to subdivide). (b) First four subdivisions of the original parcel yield to parcels with egress (green=oriented bounding box)

##### street generation
The second step is to generate streets. Parcel subdivision generates a subdivision line in each step. For street generation, decisions about whether the subdivision line corresponds to a new street segment or a new parcel boundary segment are made. To make the decision, the system takes the number of parcels per city-block, a value whether from simulation or specified by user, into consideration. When the subdivision line is selected to be a street segment, the system will make sure newly-generated city blocks has similar aspect ratio to that of nearby city blocks.

The geometry of a new street is obtained by perturbing the initial subdivision line segment, which is in fact a poly-line with a certain number of inner control points. These control points are used to make sure the new street segment is similar to the streets in nearby area. In this step, each initial large parcel is subdivided independently, and further processing is conducted to prevent too many deadends or T-intersections. When endpoints of two street segments are close and the turning angle is not too sharp, they are joined to form a single longer street segment.

This step uses the same stop condition as the first step. The result of this process is a new network of parcels and streets that can be output in vector format. Figure 5.3 shows an example of the recursive process, where the target number of additional parcels is twelve and the chosen approximate number of parcels per city block is four.

![](http://joysword.com/doc/cs524/star-5.3.png)  
**Figure 5.3** (a) An initial parcel (from Figure 4). (b-c) First two subdivisions are chosen to be streets. (d) In further iterations, only more parcels per city-block are produced.

##### parcel-content generation
The last step of layout generation is to generate plausible image content for each of the newly generated parcels. The way to do this is to reuse existing aerial image fragments of parcels with similar characteristics. The similarity metric is defined as the weighted sum of the similarity of the simulation state values (e.g. households per parcel, year of the construction for buildings, zoning classification, etc) and similarity of geometric shape (e.g. area, aspect ratio, etc).

Since the number of vertices of the source and destination parcels does not necessarily match, a image-wraping algorithm is used to warp an *a*‐sided polygon to a *b*‐sided polygon. The selected source image fragment is texture‐mapped onto the destination parcel geometry and rendered together with the rest of the layout. Oriented-bouding box of both source parcel and destination parcel are partitioned into scan lines perpendicular to their longest axis. A fixed number of points is regularly spaced and the points are generated along both scan lines and culled to be inside each respective polygon. These points correspond one‐to‐one. The process is repeated for each scan line. The destination parcel is rendered using (i) the coordinates of the points to define a quadrilateral mesh and (ii) the coordinates of the corresponding source parcel quadrilateral mesh to make texture coordinates.

![](http://joysword.com/doc/cs524/star-5.4.png)  
**Figure 5.4** (a) An original urban area from where parcel image fragments are extracted; (b) The newly generated area, with some of reused image content highlighted.

#### rendering and user interaction
The system enables the visualization of the simulation results using a variety of rendering methods, such as rainbow maps and choroplethic maps, to display one of several simulation variables, such as house holds, buildings, distance to large streets, distance to highways, land value, and year built of the constructions, etc. (See Figure 5.6)

The system loads the data within the current field-of-view dynamically, allowing user to explore the dataset freely. The whole process is fully automatic, with only minimal selection of the simulation variables and visualization methods. This simplifies the visualization task and makes a web-based viewing program possible.

#### examples

![](http://joysword.com/doc/cs524/star-5.5.png)  
**Figure 5.5 Geometry generation.** (a) Original area. (b) Automatic subdivision of the area. (c) Additional streets are generated in order to enforce egress rule.

![](http://joysword.com/doc/cs524/star-5.6.png)  
**Figure 5.6 Exemplary choroplethic visualizations of urban simulation data and views.** (a) A screen snapshot from the Indicator system supported by UrbanSim. (b) A rainbow color map used to represent changes in households/buildings for the initial set of parcels; blue corresponds to no change and green/yellow/red corresponds to a small/medium/large increase in the number of households. (c) The original layout of an urban area before the simulation and (d) generated layout after the simulation.

#### side note about urban simulation

For more information about urban simulation modeling, please refer to the excellent overview by Waddell [Waddell P, Ulfarsson G F. INTRODUCTION TO URBAN SIMULATION: DESIGN AND DEVELOPMENT OF OPERATIONAL[J]. 2004.].

The urban simulation tool used by [Carlos et al.] is UrbanSim, a widely used software-based simulation system for supporting planning and analysis of urban development, incorporating the interactions between land use, transportation, the economy, and the environment. Overviews about UrbanSim can be found at [overview 1][ovewview 2].

There are multiple research projects ongoing that utilizes or extends UrbanSim, here we list some of such projects that are of particular importance:
* **SustainCity Project** (http://www.sustaincity.org). This project is funded by the European Research Council and is seeking to develop an European-adapted version of UrbanSim (called UrbanSim-E) to make it more suitable for the context of European cities. The system was then tested in three European case studies: Brussels, Paris and Zurich.
* **FHWA: Modeling the Urban Continuum** (http://urbanmodel.asu.edu/intmod.html). This project is funded by the Federal Highway Administration, and focuses on 'Modeling the Urban Continuum in an Integrated Framework: Location Choice, Activity-Travel Behavior, and Dynamic Traffic Patterns'.
* **NSF: Robust Intelligence Project**. This project focuses on melding artificial intelligence techniques with discrete choice econometric methods to develop dynamic models of activity and routing behaviors.UC ITS Multi-Campus Research Program on Sustainable Transportation.

These projects, among some others, are part of a initiative that is intended to develop common data structures for urban modeling and 3D visualization.

### 6. Interviews

### 7. Conclusion

### 8. References
[1] R. Reddy, M. Ho ̈ferlin, M. Dambier, and D. Weiskopf, “Visual Analytics for Dynamic Evacuation Planning,” in *International Workshop on Visual Analytics*, 2012, pp. 13–17.  
[2] W. Ribarsky, K. R. Subramanian, J. Liu, O. Obirieze, and J. Guest, “Mobile Application for First Response and Emergency Evacuation in Urban Settings,” in *International Conference and Exhibition on Computing for Geospatial Research & Application*, 2010.  
[3] S. Kim, R. Maciejewski, K. Ostmo, E. J. Delp, T. F. Collins, and D. S. Ebert, “Mobile Analytics for Emergency Response and Training,” *Information Visualization*, vol. 7, no. 1, pp. 77–88, 2008.  
[5] A. Kleiner and C. Dornhege, “Operator-Assistive Mapping in Harsh Environments,” in *IEEE International Workshop on Safety, Security & Rescue Robotics*, 2009, pp. 1–6.  
[6] J. Pellenz and D. Paulus, “Stable Mapping Using a Hyper Particle Filter,” in *Robot Soccer World Cup XIII*, 2009, pp. 252–263.  
[7] S. Wirth and J. Pellenz, “Exploration Transform: A Stable Exploring Algorithm for Robots in Rescue Environments,” in *IEEE International Workshop on Safety, Security & Rescue Robotics*, 2007, pp. 1–5.  
[8] C. Dornhege and A. Kleiner, “A Frontier-Void-based Approach for Autonomous Exploration in 3D,” in *IEEE International Symposium on Safety, Security & Rescue Robotics*, 2011, pp. 351–356.  
[10] R. Richter and J. Do ̈llner, “Out-of-core Real-time Visualization of Massive 3D Point Clouds,” in *Computer Graphics, Virtual Reality, Visualisation and Interaction in Africa*, 2010, pp. 121–128.  
[11] H. Xu and B. Chen, “Stylized Rendering of 3D Scanned Real World Environments,” in *Symposium on Non-photorealistic Animation and Rendering*, 2004, pp. 25–34.  
[12] R. Pintus, E. Gobbetti, and M. Agus, “Real-time Rendering of Massive Unstructured Raw Point Clouds using Screen-space Operators,” in *International Conwference on Virtual Reality, Archaeology and Cultural Heritage*, 2011, pp. 105–112.

[4] Batty, M., P. Steadman, and Xie Y., 2004. Visualization in Spatial Modeling. Center for Applied Spatial Analysis, University College London, *Working Paper, 79*.  
[5] Batty M. 1992, Urban modeling in computer‐graphic and geographic information system environments, *Environment and Planning B: Planning and Design*, 19(6) 663‐688.  
[6] Batty M. 1997, Virtual Geography. *Time and Space Geographics Perspectives on the Future*, 29(4‐5), 337‐352.  
[10] Dorling, D. Barford, A., Newman, M. 2006. Worldmapper: The World as Youʹve Never Seen it Before. *IEEE Transactions on Visualization and Computer Graphics*, IEEE Educational Activities Department, 12, 757‐764.  
[11] Dykes, J. and Brunsdon, C. 2007. Geographically Weighted Visualization: Interactive Graphics for Scale‐Varying Exploratory Analysis. *IEEE Transactions on Visualization and Computer Graphics*, IEEE Educational Activities Department, 2007, 13, 1161‐1168.  
[12] Frueh, C., and Zakhor, A. 2003. Constructing 3D city models by merging aerial and ground views. *IEEE Computer Graphics & Applications*, 23, 6, 52–61.  
[13] Hertzmann A., Jacobs C., Oliver N., Curless B., and Salesin D. 2001. Image Analogies. In *Proceedings of ACM SIGGRAPH 2001*, 327‐340.  
[19] Merrell, P. 2007. Example‐based model synthesis. *ACM Symposium on Interactive 3D Graphics*, 105–112.
[20] Mueller, P., Wonka, P., Haegler, S., Ulmer, A., and Gool, L. V. 2006. Procedural modeling of buildings. *ACM Transactions on Graphics*, 25, 3, 614–623.  
[21] Mueller, P., Zeng, G., Wonka, P., and Gool, L. V. 2007. Image-base procedural modeling of facades. *ACM Transactions on Graphics*, 26, 3, 85.  
[22] Panse, C., Sips, M., Keim, D. and North, S. 2006. Visualization of Geo‐spatial Point Sets via Global Shape Transformation and Local Pixel Placement. *IEEE Transactions on Visualization and Computer Graphics*, IEEE Educational Activities Department, 2006, 12, 749‐756.  
[23] Parish,Y. I. H., and Mueller, P. 2001. Procedural modeling of cities. In *Proceedings of ACM SIGGRAPH*, 2001, 301‐308.  
[24] Pinnel, L. D., and Dockrey, M., Brush, A. J. B., and Borning, A., 2000. Design of Visualizations for Urban Modeling. *VisSym ʹ00: Joint Eurographics‐‐IEEE TVCG Symposium on Visualization*.  
[28] Ribarsky, W., Wasilewski, T., and Faust, N. 2002. From urban terrain models to visible cities. *IEEE Computer Graphics & Applications*, 22(4), 10–15.  
[overview 1] Paul Waddell, UrbanSim: Modeling Urban Development for Land Use, Transportation and Environmental Planning. Journal of the American Planning Association, Vol. 68 No. 3, 2002, pp. 297-314.  
[overview 2] Waddell, Paul (2011) Integrated Land Use and Transportation Planning and Modeling: Addressing Challenges in Research and Practice. Transport Reviews, Vol. 31, No. 2, pp 209 – 229.
