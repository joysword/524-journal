# Web Mapping Service on Second Life Compatible Virtual World System
###### Bin Chen, Xiao Cai, Rui Wang, Qiang Cao

## CITATION
Chen, B., Cai, X., Wang, R., & Cao, Q. (2010). Web mapping service on second life compatible virtual world system. In *2010 18th International Conference on Geoinformatics* (pp. 1–4). doi:10.1109/GEOINFORMATICS.2010.5567582

## SUMMARY

### Introduction
This paper introduced their technique to create web mapping service for online virtual world.

### Design Criteria
There were three design criteria they kept in mind when building the system:

* Interoperability with other geo-spatial information system over the Internet
* Update the spatial data in an "almost real time" way to reflect the latest change of the virtual world
* Extent the query ability of the current system to support spatial-based query

### Approach
They explicitly discussed how they abstract the data to be visualized.

Firstly they investigated how OpenSimulator, the platform they used to mimid Second Life, represents the space. The space is made up of regions, which is in turn composed by its terrain and objects (volume primitives or sculpt) in it.

Then they convert these spatial data into maps by extracting three kinds of data (terrain, objects, and avatar) into three different layers.

2D visualization of terrain data is trivial, and they wrote an algorithm to project 3D objects into 2D.

Also, they transformed OpenSimulator Coordinate System `{(i,j)region (x,y,z)inner}` to Map Cartes CRS `(i*256+x, j*256+y, z)`.

#### Prototype System
Their prototype system, released as a plugin of OpenSimulator, consists of three components:

* the **kernel** is the coordinator of the whole system, in control of the data flow.
* the **layers** are in charge of extracting data, generating cache bitmaps and storing the coordinate metadata.
* the **OWS handlers** play the role of 'listener', receiving request from client and convert it into corresponding internal API calling and wrapping query results with specified data format as response when the process is finished.

An demo of the prototype system showed that objects whose profile is apparent in 2D projection perspective are easy to recognize, while other object, whose profile is retrieved in primitive level and not well integrated in object level, are hard to recognize.

### Future Work
Three things were listed by the authors as future work:

1. improve the visualization effects of the map presentation to make features easy to recognize
2. strengthen the user interface to make it friendly to users
3. support Web Feature Service and Web Coverage Service

## COMMENT
One thing to learn from this paper is that their explicit discussion of their design criteria.

I think it is a good idea to include design criteria into the paper where available. It helps readers/viewers to understand the purpose of the application and thus it is easier to show the contribution the design study, or technique.

<hr>

Another good thing is its explicit discussion of data extraction. They provided enough-but-not-too-much information to give readers an basic understanding of domain knowledge and of their process of abstracting.

<hr>

It would be interesting to see how their future work turns out, as for now, two of the elements of a design study are not ideal: interaction (future work 2) and visual encoding (future work 3)

Unfortunately, there are not yet any update on this project from the authors (the only paper that cites this paper is a report [1])

## REFERENCE
[1] Rusak, Filip. (2014). Development of outdoor attractions application using GIS and Web 2.0 technologies.
