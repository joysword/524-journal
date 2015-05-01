# Land Use Information Release System Based on Google Maps API and XML
###### Hao Zhang, Manchun Li, Zhenjie Chen, Zhiliang Bao, Qiuhao Huang, Dong Cai

## CITATION
Zhang, H., Li, M., Chen, Z., Bao, Z., Huang, Q., & Cai, D. (2010). Land Use Information Release System Based on Google Maps API and XML. In *2010 18th International Conference on Geoinformatics* (pp. 1–4). IEEE. doi:10.1109/GEOINFORMATICS.2010.5567575

## SUMMARY
This paper introduced a land use information release system. It uses Google Maps API for map service, XML for data storage. It has a three-layer architecture (data layer, business logic layer and presentation layer). It allows user to query land use information by selecting filters (text query), keyword search (local search), geocoding search (reverse address resolution). It also allows user to send feedback about each data feature on the map.

The authors didn't provide any validation for the system.

## COMMENT

This is similar to what I did for [NURail project](http://nurail.uic.edu/interactive_maptool.html). Only difference is that I used Geoserver to host shapefiles and the authors' system used XML to store information and WMS to request images to render.

This system is complete naive compared with the mature Geoserver.

More useful will be a GUI allowing users to add new land use information to data server (and convert it to XML in background).

### For STAR report
This article will probably be included in my start report as this is one of rare system papers. However, this article's contribution is fairly small. I'd not include this one if a more state-of-the-art system was found.
