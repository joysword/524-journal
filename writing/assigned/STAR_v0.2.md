# The Application of Visualization in Urban Planning related tasks

### Abstract

### 1. Introduction

### 2. Urban Planning

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

#### notes about point cloud
It is worth mentioning that there are not many applications we found in urban planning context that utilizes point cloud for 3D rendering. There are great potential in point cloud visualization in urban planning related tasks though, as large amount of fundamental research has been conducted, making point cloud ready-to-use.

There has been work by Richter et al. using a level-of-detail structure to render massive point clouds at high frame rates [10]
Xu et al. showed that non-photorealistic rendering techniques can be applied to point cloud data [11]. It is the contour lines in their rendering that inspired xx's rendering algorithm.
More recently, Pintus et al. presented a rendering algorithm that enhances features of unstructured point clouds in real-time without preprocessing [12].
Some other work in this area that converts point cloud to surfaces, which is essential in urban modeling, include [Fabio, Remondino. "From point cloud to surface: the modeling and visualization problem." International Archives of Photogrammetry, Remote Sensing and Spatial Information Sciences 34.5 (2003): W10.], [http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=6385999] and [http://www.sciencedirect.com/science/article/pii/S0097849314001228].
Last but not least, the widely used Point Cloud Library (PCL) [http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=5980567&tag=1] is also making major contribution to the increasing popularity of point cloud.

### 6. Interviews

### 7. Conclusion

### 8. References
[1] R. Reddy, M. Ho ̈ferlin, M. Dambier, and D. Weiskopf, “Visual Analytics for Dynamic Evacuation Planning,” in International Workshop on Visual Analytics, 2012, pp. 13–17.
[2] W. Ribarsky, K. R. Subramanian, J. Liu, O. Obirieze, and J. Guest, “Mobile Application for First Response and Emergency Evacuation in Urban Settings,” in International Conference and Exhibition on Computing for Geospatial Research & Application, 2010.
[3] S. Kim, R. Maciejewski, K. Ostmo, E. J. Delp, T. F. Collins, and D. S. Ebert, “Mobile Analytics for Emergency Response and Training,” Information Visualization, vol. 7, no. 1, pp. 77–88, 2008.
[5] A. Kleiner and C. Dornhege, “Operator-Assistive Mapping in Harsh Environments,” in IEEE International Workshop on Safety, Security & Rescue Robotics, 2009, pp. 1–6.
[6] J. Pellenz and D. Paulus, “Stable Mapping Using a Hyper Particle Filter,” in Robot Soccer World Cup XIII, 2009, pp. 252–263.
[7] S. Wirth and J. Pellenz, “Exploration Transform: A Stable Exploring Algorithm for Robots in Rescue Environments,” in IEEE International Workshop on Safety, Security & Rescue Robotics, 2007, pp. 1–5.
[8] C. Dornhege and A. Kleiner, “A Frontier-Void-based Approach for Autonomous Exploration in 3D,” in IEEE International Symposium on Safety, Security & Rescue Robotics, 2011, pp. 351–356.
[10] R. Richter and J. Do ̈llner, “Out-of-core Real-time Visualization of Massive 3D Point Clouds,” in Computer Graphics, Virtual Reality, Visualisation and Interaction in Africa, 2010, pp. 121–128.
[11] H. Xu and B. Chen, “Stylized Rendering of 3D Scanned Real World Environments,” in Symposium on Non-photorealistic Animation and Rendering, 2004, pp. 25–34.
[12] R. Pintus, E. Gobbetti, and M. Agus, “Real-time Rendering of Massive Unstructured Raw Point Clouds using Screen-space Operators,” in International Conwference on Virtual Reality, Archaeology and Cultural Heritage, 2011, pp. 105–112.
