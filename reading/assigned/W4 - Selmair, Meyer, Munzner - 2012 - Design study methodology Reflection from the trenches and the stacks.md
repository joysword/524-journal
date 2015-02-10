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
[88] J. J. van Wijk. Views on visualization. *IEEE Trans. Visualization and Computer Graphics (TVCG)*, 12(4):421–432, 2006.  
[13] S. Carpendale. Evaluating information visualizations. In A. Kerren, J. T. Stasko, J.- D. Fekete, and C. North, editors, *Information Visualization: Human-Centered Issues and Perspectives*, volume 4950, pages 19–45. Springer LNCS, 2008. and  
[39] H. Lam, E. Bertini, P. Isenberg, C. Plaisant, and S. Carpendale. Empirical studies information visualization: Seven scenarios. *IEEE Trans. Visualization and Computer Graphics (TVCG)*, 2012. Appeared online: 30 Nov. 2011.

### Characterizing Design Studies
#### Definitions
A design study is defined by the authors as follows (with five main concepts highlighted):

_A design study is a project in which visualization researchers **analyze** a specific **real-world problem** faced by domain experts, **design** a visualization system that supports solving this problem, **validate** the design, and **reflect** about lessons learned in order to refine visualization design guidelines._

Some lessons I learned:

* Successful design typically requires the explicit consideration of multiple alternatives and a thorough knowledge of the space of possibilities.
* Design becomes research when reflection leads to improving the process of design itself, by confirming, refining, rejecting, or proposing guidelines.
* The domain expert role is crucial; attempts to simply apply techniques without a thorough understanding of the domain context can fail dramatically.
* Conducting a design study using the nine-stage framework can lead to three types of design study research contributions: *problem characterization and abstraction*, *validated visualization design*, *reflection*.

#### Task Clarity and Information Location Axes
The **task clarity** axis depicts how precisely a task is defined, with `fuzzy` on the one side and `crisp` on the other.

The **information location** axis characterizes how much information is only available in the `head` of the expert versus what has been made explicit in the `computer`.

#### Design Study Methodology Suitability

![](http://joysword.com/doc/cs524/Selmair-2012-1.png)

[Fig. 1. The task clarity and information location axes as a way to analyze the suitability of design study methodology. Red and blue areas mark regions where design studies may be the wrong methodological choice.]

### Nine-Stage Framework

![](http://www.cs.ubc.ca/labs/imager/tr/2012/dsm/figures/framework.jpg)

[Fig. 2. Nine-stage design study methodology framework classified into three top-level categories. While outlined as a linear process, the overlapping stages and gray arrows imply the iterative dynamics of this process.]

The first thing to be kept in mind is that these stages should not be jumped forward over without even being considered or started.

#### Precondition Phase
##### Learn: Visualization Literature
A crucial precondition for conducting an effective design study is a solid knowledge of the visualization literature, including *visual encoding* and *interaction techniques*, *design guidelines*, and *evaluation methods*.

A design study should not be started without enough prior knowledge of the visualization literature.

##### Winnow: Select Promising Collaborations
The goal of this stage is to identify the most promising collaborations. The author suggested us to 'talk with many but stay with few, start early, and always keep looking'.

Premature commitment to a collaboration should be avoided.

There are some questions to ask in this stage:

1) PRACTICAL CONSIDERATIONS* (can be easily checked in initial meetings)  
**_Data_**: *Does real data exist, is it enough, and can I have it?*  
**_Engagement_**: *How much time do they have for the project, and how much time do I have? How much time can I spend in their environment?*

2) INTELLECTUAL CONSIDERATIONS* (should be kept in mind during initial meetings)  
**_Problem_**: *Is there an interesting visualization research question in this problem?*  
**_Need_**: *Is there a real need or are existing approaches good enough?*  
**_Task_**: *Am I addressing a real task? How long will the need persist? How central is the task, and to how many people?*  

3) INTERPERSONAL CONSIDERATIONS

##### Cast: Identify Collaborator Roles

The distribution of roles to people can be different for different design studies. One shall not expect them to be same for each project.

critical roles:  
**front-line analyst**: the domain expert end user doing the actual data analysis, and is the person who will use the new visualization tool.  
**gatekeeper**: the person with the power to approve or block the project, including authorizing people to spend time on the project and release of the data.

A design study should not be started before contact is established with at least one front-line analyst, usually graduate students or postdocs, and approval is obtained from the central gatekeeper, usually the faculty member who is the PI of a lab.

non-critical roles:  
**connectors**: people who connect the visualization researcher to other interesting people, usually front-line analysts.  
**translators**: people who are very good in abstracting their domain problems into a more generic form, and relating them to larger-context domain goals.  
**co-authors**  
**fellow tool builders**: people who want to augment a tool they have designed with visualization capabilities, but may not have had direct contact with front-line analysts and thus may not have correctly characterized the visualization needs

Fellow tool builders should not be mistaken for front-line analysts.

#### Core Phase
##### Discover: Problem Characterization & Abstraction
In a design study it is essential to learn about the target domain and the practices, needs, problems, and requirements of the domain ex- perts in order to discover if and how visualization can enable insight and discovery.

Problematic parts of the workflow should be focused on, as well as the successful aspects. The latter should not be ignored.

Two methods of discovering have to be used together: *just talking* and *fly-on-the-wall*. Expecting them to work alone should be avoided.

When discussing with domain experts, researchers need to actively push them to explain their problems, not their vision of possible visualization solutions.

A visualization researcher shall learn *just enough* of domain knowledge to abstract the problem, rather than attempting to understand all details.

##### Design: Data Abstraction, Visual Encoding & Interaction
After reaching a shared understanding of a problem with domain experts in the *discover* phase, the visualization researcher can begin designing a visualization solution.

This stage includes generating and validating data abstractions, visual encodings, and interaction mechanisms, where the first aspect (data abstraction) should be given enough attention instead of being ignored.

The authors suggested researchers to have a **broad consideration space** of possible solutions and iteratively filter it down to a **narrow proposal space**, before discussing with domain experts in the form of paper mockups, data sketches, or low-level prototypes, whose feedback will be used then to select one or several design solutions to be implemented in depth.

Considering too few solutions and prematurely committing to a selected solution should be avoided.

Researchers, especially who are accustomed to technique-driven work, should not assume that a particular algorithm or technique they developed in the past is a right match for a new problem, and thus don't consider multiple ideas.

##### Implement: Prototypes, Tool & Usability
Prototyping should be rapid. The more time spent coding a solution the harder it is to throw it away.

Some tactics for design studies are: start simply, ideally with paper prototypes; quickly write code that can be thrown away; and close user feedback loops with methods such as design interviews and workshops, or deploying early versions of a tool as technology probes.

Visualization researcher should pay neither too little nor too much attention to usability. The former makes the tool difficult to use, while the latter can obscure more interesting questions about the usefulness and utility of a novel approach.

##### Deploy: Release & Gather Feedback
This is the final stage of the core phase, involving deploying a tool and gathering feedback about its use *in the wild*.

Enough deploying time should be scheduled. Several weeks is a bare minimum, and several months is much safer.

A major goal in validating a deployed system is to find out whether domain experts are indeed helped by it. The most common form of validation are *case studies* with real users, real problems, and real data. A case study where the users, tasks, or data are not real should be avoided.

#### Analysis Phase
##### Reflect: Confirm, Refine, Reject, Propose Guidelines
Reflection is where research emerges from engineering. Researchers should avoid failing to do so.

Reflection on how a specific design study relates to the larger research area of visualization is crucial for adding to the body of knowledge and allowing other researchers to benefit from the work. It is particularly informative for improving currently available design guidelines: based on new findings, previously proposed guidelines can be either *confirmed*, by substantiating further evidence of their usefulness; *refined* or extended with new insights; *rejected* when they are applied but do not work; or new guidelines might be *proposed*.

##### Write: Design Study Paper
Writing about a design study is often done in parallel with reflection, but can be started at any point.

Writing a design study paper is harder and more time-consuming then writing other types of visualization papers because of the amount of reconsideration and reorganization necessary. Enough time should be given to this stage. A few weeks is usually not enough, and a few months is more realistic.

Visualization researchers should avoid thinking that a paper without a technique contribution is equal to a design study paper. A good design study paper is not simply a weak technique paper dressed up with a bit of retroactive introspection.

Also should be avoided is including too much domain background in the paper. Design study papers should include only the bare minimum of domain knowledge that is required to understand the abstractions of the task and data.

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
