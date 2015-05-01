# Accessibility Analysis at a Fine Spatial Scale
###### Matthew Wigginton Conway

## CITATION
Conway, M. W. (2013). Accessibility Analysis at a Fine Spatial Scale. Retrieved from http://www.indicatrix.org/publications/2013/Conway-Accessibility-UCSB.pdf

## SUMMARY
### Methodology
This article introduced an accessibility analysis study at a very small spatial scale over short temporal scales, i.e. a university campus.

In this study, the author computed accessibility to eateries for each hour of the day for a typical week.

The accessibility measure used was a simple cumulative-opportunity measure. That is, the count of opening eateries that can be reached within a certain amount of time from an origin point.

The author used OSM for map data, and used OTP for routing and batch analysis. Another tool is QGIS, by which the author visualized the result.

### Results
This part described the findings from the result. The animated maps of accessibility can be found at [http://www.indicatrix.org/ucsb-accessibility](http://www.indicatrix.org/ucsb-accessibility).

This research paid attention on how accessibility changes over a *day* and over a *week*. Future possibilities include measuring accessibility changes over a *quarter* or over a *year*.

One challenge with mapping accessibility over such a small area is that slight errors in the network or in the assumptions of the trip planner can lead to large percentage-wise errors in the final result. This led to one of the issues of the project: OTP did not take bicycle parking into consideration when calculating travel time.

Another challenge is that the network is actually not accurate, because there are a lot of shortcuts on a university campus that are not recorded as paths. For example, people can easily cut through a building to make a long trip much shorter. What makes the issue more complicated is that buildings on campus are not opening 24/7. Thus, additional modeling of opening hours of buildings, as well as path data through buildings need to be added into the network to make it accurate.

Yet another issue is that people are not following the rules. One example is that in residential area where cycling is strictly forbidden, cycling is in fact very common. Whether to allow cycling in these areas are one problem needs to be considered.

### Usefulness
One could criticize standalone activity measures as tools for decision support, especially ones using simplistic measures such as the cumulative-opportunities measure.

However, there are several benefits. Accessibility measures, especially ones like the cumulative-opportunities measure used in this study, are very understandable for both the public and non-technical decision makers. Thus, they can be used to present in an understandable manner proposals that have been tested using more complex models.

They can also play a role in individual decision support. Generating single-location isochrones, or accessibility measures such as these, could allow people to make informed decisions about locating residences or small businesses, things not usually studied quantitatively.

## COMMENT
One of the interesting aspects of this study that is different from my project is that in this study, travel time from origin to destination is constant, while whether a destination counts to the accessibility (whether a eatery is open) varies with time.

Although this is a small project, it raised some interesting questions that worth thinking about.

The nature of small spatial scale requires more accurate and detailed network to be generated in order to make travel time calculation accurate enough.

One thing to keep in mind is that the author explicitly selected to measure accessibility at five minutes after flat hours to avoid potential *border effect*.

