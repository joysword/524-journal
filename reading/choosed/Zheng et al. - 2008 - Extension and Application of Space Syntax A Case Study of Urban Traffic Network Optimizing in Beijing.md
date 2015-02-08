# Extension and Application of Space Syntax - A Case Study of Urban Traffic Network Optimizing in Beijing
###### Zheng Xinqi, Zhao Lu, Fu Meichen, Wang Shuqing

## CITATION
Zheng, X., Zhao, L., Fu, M., & Wang, S. (2008). Extension and Application of Space Syntax A Case Study of Urban Traffic Network Optimizing in Beijing. In *Workshop on Power Electronics and Intelligent Transportation System* (pp. 291–295). IEEE. doi:10.1109/PEITS.2008.22

## SUMMARY

This article talked about using extended space syntax theory on urban traffic network optimization in the city of Beijing.

According to the authors, some research has been done to discuss applicability of space syntax theory in urban traffic problems. But previous work mainly analyzed current condition of urban traffic network and studied improvement of some local parts in the city, rarely analyzed and evaluated urban planning from the urban traffic point of view.

In this study, the authors extended space syntax theory, which mainly included three variables: connectivity, controlling value and integration, by defining the concept of Accessibility. A node's Accessibility is calculated as the sum of the connectivity of it's neighbor nodes.

The calculation of space syntax has been developed well [1]. the authors extended Axwoman3.0, a plug-in for ArcView, to calcualate related variables.

The authors calculated Accessibility value throughout the city, then added 10 different optimization plans to current traffic network, including:

1. add 2 roads along the east and west;
2. add 2 roads along the north and south; 
3. add 4 roads along the northwest, southwest, southeast and northeast;
4. add 6 roads along the east, west, northwest, southwest, southeast and northeast;
5. add 6 roads along the south, north, northwest, southwest, southeast and northeast;
6. add 6 roads in arbitrary directions;
7. add 8 roads along the east, west, south, north, northwest, southwest, southeast and northeast;
8. on the basis of (7), referring to (6), add 2 more according to the amount of radicalized roads in every direction;
9. on the basis of (7), referring to (6), add 4 more according to the amount of radicalized roads in every direction;
10. on the basis of (7), add the 6 ones in (6).

Then the authors showed the optimization results to us using the following two images:
![](http://ieeexplore.ieee.org/ielx5/4634794/4634795/4634862/html/img/4634862-fig-4-hires.gif "Contrast of integration under each project")
![](http://ieeexplore.ieee.org/ielx5/4634794/4634795/4634862/html/img/4634862-fig-5-hires.gif "Improvement of integration and accessibility")

The authors concluded, based on the results, that `adding 6~8 more radialized roads is the best choice in reality`.

## COMMENT

### For STAR report
Visualization only played a limited role in this study, just like in many other studies in urban planning.

It seems that ESRI software (ArcView, ArcGIS, etc) has been a popular tool for long, and is still the major way of visualizing in urban planning community.

## REFERENCE
[1] http://en.wikipedia.org/wiki/Spatial_network_analysis_software