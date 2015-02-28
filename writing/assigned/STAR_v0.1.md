# The Application of Visualization in Urban Planning related tasks

## Abstract

## 1. Introduction

## 2. Urban Planning

## 3. Geographic Information Systems Using Google Maps API
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

### 5. Interviews

### 6. Conclusion
