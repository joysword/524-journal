# Design study methodology: Reflections from the trenches and the stacks
###### Michael Sedlmair, Miriah Meyer, Tamara Munzner

## CITATION
Sedlmair, M., Meyer, M., & Munzner, T. (2012). Design study methodology: Reflections from the trenches and the stacks. *IEEE Transactions on Visualization and Computer Graphics, 18*(October), 2431–2440. doi:10.1109/TVCG.2012.213

## SUMMARY
### Introduction
This paper provided, for the first time, a discussion about design study methodology, including a clear definition of design studies as well as practical guidance for conducting them effectively.

They articulated two axes, *task clarity* and *information location*, to reason about *what contributions design studies can make*, *when they are an appropriate research device*, and *how they are unique from other approaches*.

They proposed a *nine-stage framework*: *learn*, *winnow*, *cast*, *discover*, *design*, *implement*, *deploy*, *reflect*, and *write*.

In summary, the main contributions of this paper are:

* definitions for design study methodology, and articulation of the task clarity and information location axes;
* a nine-stage framework;
* 32 pitfalls identified;
* a comparison of design study methodology to that of ethnography, grounded theory and action research.

### Related Work
Design study methodology were not discussed a lot before this paper.

Related work that are potentially interesting to me include:

[42] D. Lloyd and J. Dykes. Human-centered approaches in geovisualization design: investigating multiple methods through a long-term case study. *IEEE Trans. Visualization and Computer Graphics (Proc. InfoVis 2011)*, 17(12):498–507, 2011.  
[88] J. J. van Wijk. *Views on visualization. IEEE Trans. Visualization and Computer Graphics (TVCG)*, 12(4):421–432, 2006.  
[13] S. Carpendale. Evaluating information visualizations. In A. Kerren, J. T. Stasko, J.- D. Fekete, and C. North, editors, *Information Visualization: Human-Centered Issues and Perspectives*, volume 4950, pages 19–45. Springer LNCS, 2008. and  
[39] H. Lam, E. Bertini, P. Isenberg, C. Plaisant, and S. Carpendale. Empirical studies information visualization: Seven scenarios. *IEEE Trans. Visualization and Computer Graphics (TVCG)*, 2012. Appeared online: 30 Nov. 2011.

### Characterizing Design Studies
#### Definitions
A design study is defined by the authors as follows (with five main concepts highlighted):

_A design study is a project in which visualization researchers **analyze** a specific **real-world problem** faced by domain experts, **design** a visualization system that supports solving this problem, **validate** the design, and **reflect** about lessons learned in order to refine visualization design guidelines._

Some lessons I learned:

* Successful design typically requires the explicit consideration of multiple alternatives and a thorough knowledge of the space of possibilities.
* Designbecomesresearchwhenreflectionleadstoimproving the process of design itself, by confirming, refining, rejecting, or proposing guidelines.
* The domain expert role is crucial; attempts to simply apply techniques without a thorough understanding of the domain context can fail dramatically.
* Conducting a design study using the nine-stage framework can lead to three types of design study research contributions: *problem characterization and abstraction*, *validated visualization design*, *reflection*.

#### Task Clarity and Information Location Axes
The **task clarity** axis depicts how precisely a task is defined, with `fuzzy` on the one side and `crisp` on the other.

The **information location** axis characterizes how much information is only available in the `head` of the expert versus what has been made explicit in the `computer`.

#### Design Study Methodology Suitability

![]()

[Fig. 1. The task clarity and information location axes as a way to analyze the suitability of design study methodology. Red and blue areas mark regions where design studies may be the wrong methodological choice.]

### Nine-Stage Framework

![](http://www.cs.ubc.ca/labs/imager/tr/2012/dsm/figures/framework.jpg)

[Fig. 2. Nine-stage design study methodology framework classified into three top-level categories. While outlined as a linear process, the overlapping stages and gray arrows imply the iterative dynamics of this process.]

#### Precondition Phase
##### Learn: Visualization Literature
A crucial precondition for conducting an effective design study is a solid knowledge of the visualization literature, including *visual encoding* and *interaction techniques*, *design guidelines*, and *evaluation methods*.

##### Winnow: Select Promising Collaborations
The goal of this stage is to identify the most promising collaborations. The author suggeted us to 'talk with many but stay with few, start early, and always keep looking'.

There are some questions to ask in this stage:

**PRACTICAL CONSIDERATIONS** (can be easily checked in initial meetings)  
**_Data_**: *Does real data exist, is it enough, and can I have it?*  
**_Engagement_**: *How much time do they have for the project, and how much time do I have? How much time can I spend in their environment?**  

**INTELLECTUAL CONSIDERATIONS** (should be kept in mind during initial meetings)  
**_Problem_**: *Is there an interesting visualization research question in this problem?*  
**_Need_**: *Is there a real need or are existing approaches good enough?*  
**_Task_**: *Am I addressing a real task? How long will the need persist? How central is the task, and to how many people?*  

**INTERPERSONAL CONSIDERATIONS**

##### Cast: Identify Collaborator Roles

critical roles:  
**front-line analyst**: the domain expert end user doing the actual data analysis, and is the person who will use the new visualization tool.  
**gatekeeper**: the person with the power to approve or block the project, including authorizing people to spend time on the project and release of the data.

non-critical roles:  
**connectors**: people who connect the visualization researcher to other interesting people, usually front-line analysts.  
**translators**: people who are very good in abstracting their domain problems into a more generic form, and relating them to larger-context domain goals.  
**co-authors**  
**fellow tool builders**: people who want to augment a tool they have designed with visualization capabilities, but may not have had direct contact with front-line analysts and thus may not have correctly characterized the visualization needs

#### Core Phase
##### Discover: Problem Characterization & Abstraction
##### Design: Data Abstraction, Visual Encoding & Interaction
##### Implement: Prototypes, Tool & Usability
##### Deploy: Release & Gather Feedback

#### Analysis Phase
##### Reflect: Confirm, Refine, Reject, Propose Guidelines
##### Write: Design Study Paper

### Summary of the 32 design study pitfalls
no. | pitfall | stage
----|----|----
PF-1 | premature advance: jumping forward over stages | general
PF-2 | premature start: insufficient knowledge of vis literature | learn
PF-3 | premature commitment: collaboration with wrong people | winnow
PF-4 | no real data available (yet) | winnow
PF-5 | insufficient time available from potential collaborators | winnow
PF-6 | no need for visualization: problem can be automated | winnow
PF-7 | researcher expertise does not match domain problem | winnow
PF-8 | no need for research: engineering vs. research project | winnow
PF-9 | no need for change: existing tools are good enough | winnow
PF-10 | no real/important/recurring task | winnow
PF-11 | no rapport with collaborators | winnow
PF-12 | not identifying front line analyst and gatekeeper before start | cast
PF-13 | assuming every project will have the same role distribution | cast
PF-14 | mistaking fellow tool builders for real end users | cast
PF-15 | ignoring practices that currently work well | discover
PF-16 | expecting just talking or fly on wall to work | discover
PF-17 | experts focusing on visualization design vs. domain problem | discover
PF-18 | learning their problems/language: too little / too much | discover
PF-19 | abstraction: too little | design
PF-20 | premature design commitment: consideration space too small | design
PF-21 | mistaking technique-driven for problem-driven work | design
PF-22 | non-rapid prototyping | implement
PF-23 | usability: too little / too much | implement
PF-24 | premature end: insufficient deploy time built into schedule | deploy
PF-25 | usage scenario not case study: non-real task/data/user | deploy
PF-26 | liking necessary but not sufficient for validation | deploy
PF-27 | failing to improve guidelines: confirm, refine, reject, propose | reflect
PF-28 | insufficient writing time built into schedule | write
PF-29 | no technique contribution 6= good design study | write
PF-30 | too much domain background in paper | write
PF-31 | story told chronologically vs. focus on final results | write
PF-32 | premature end: win race vs. practice music for debut | write

## REFERENCE
[1] Munzner, T. (2008). Process and Pitfalls in Writing Information Visualization Research Papers. In A. Kerren, J. T. Stasko, J.-D. Fekete, & C. North (Eds.), *Information Visualization: Human-Centered Issues and Perspectives* (Vol. 4950, pp. 134–153). Springer Berlin Heidelberg. doi:10.1007/978-3-540-70956-5_6
