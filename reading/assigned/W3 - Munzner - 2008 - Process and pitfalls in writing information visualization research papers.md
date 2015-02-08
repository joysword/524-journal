# Process and Pitfalls in Writing Information Visualization Research Papers
###### Tamara Munzner

## CITATION
Munzner, T. (2008). Process and Pitfalls in Writing Information Visualization Research Papers. In A. Kerren, J. T. Stasko, J.-D. Fekete, & C. North (Eds.), *Information Visualization: Human-Centered Issues and Perspectives* (Vol. 4950, pp. 134–153). Springer Berlin Heidelberg. doi:10.1007/978-3-540-70956-5_6

## SUMMARY
### Introduction
This paper introduced a series of pitfalls and recur in many rejected infovis papers. It is structured around a chronological model of the information visualization research process.

### Initial Stage - Paper Types
In this part the author introduced 6 types of infovis papers and suggested researchers to consider where they want a research project to end before they start.

#### Technique
Technique papers write about novel algorithms and implement them.

This kind of paper needs to use algorithm complexity analysis, quantitative timing measurements of the implementation, a qualitative discussion of images created by this new algorithm, or quantitative metrics of image quality as validation.

It is a good practice to compare the results against those from competing algorithms.

#### Design Study
Design Study papers write about new designs of visual representation for a particular domain problem.

In this kind of paper, an author needs to first explain the target problem, then state the design requirements determined through task analysis, before justify these design choices by showing how they fulfill the requirements. The fourth thing to do is to present results that back up the claim that this new approach is better than others (e.g. case studies or scenarios of use).

The contribution of a design study is usually not a new algorithm or technique, but a well-reasoned justification of how existing techniques can be combined in a useful way.

#### Systems
Systems papers focus on the architectural choices made in the design of an infrastructure, framework, or toolkit. Typically, no new technique/algorithm is introduced in a systems paper, so is new design for an application solving a specific problem.

#### Evaluation
Evaluation papers assess how an infovis system or technique helps target users.

The most common approach in infovis is formal user studies, where tasks are abstracted and can be quantitatively measured in terms of time and accuracy and analyzed with statistical methods. A different approach is field studies.

#### Model
Model papers present formalisms and abstractions as opposed to the design or evaluation of any particular technique or system.

Subcategory of model papers include:

* Taxonomy
* Formalism
* Commentary

#### Combinations
The last type of paper is a mixture of previous types.

#### Type Pitfalls
Some pitfalls need to be avoided in the initial stage are:

* *Design in Technique's Clothing:* don't validate a new design by providing only performance measurements.
* *Application Bingo versus Design Study:* don't apply some random technique to a new problem without thoroughly thinking if the technique is suitable.
* *All That Coding Means I Deserve A Systems Paper:* many significant coding efforts do not lead to a systems paper.
* *Neither Fish Nor Fowl:* papers that try to straddle multiple categories often fail to succeed in any of them.

### Middle Pitfalls: Visual Encoding
A major concern in the middle stage is whether visual encoding choices are appropriate and justifiable. In this stage are following pitfalls:

* *Unjustified Visual Encoding:* an infovis design study paper must carefully justify why the visual encoding chosen is appropriate for the problem at hand.
* *Hammer In Search Of Nail:* discuss potential use cases before proposing a new technique.
* *2D Good, 3d Better:* use of 3D rather than 2D requires careful justification.
* *Color Cacophony:* take basic color perception common sense into consideration.
* *Rainbows Just Like In The Sky:* avoid using a continuous rainbow colormap.

### Late Pitfalls: Paper Strategy, Tactics, and Results
The time to consider the late pitfalls is after the bulk of the project work has been done, but before starting to write paper draft.

#### Strategy Pitfalls
* *What I Did Over My Summer Vacation:* do not simply enumerate all activities that required effort when writing a paper.
* *Least Publishable Unit:* do not try to squeeze too many papers out of the same project.
* *Dense As Plutonium:* do not try to cram many papers’ worth of content and contributions into one.
* *Bad Slice and Dice* 

#### Tactical Pitfalls
* *Stealth Contributions:* do not leave contributions implicit or unsaid.
* *I am So Unique:* do not ignore previous work.
* *Enumeration Without Justification:* simply citing the previous work is necessary but not sufficient. Explain why this previous work doesn't solve your problem, and what specific limitations of it are addressed by the new approach.
* *Sweeping Assertions:* a research paper should not contain sweeping unattributed assertions. Cite the source, delete the assertion, or explicitly tag the statement as an observation, a conjecture, or an explanation of the results of the study.
* *I Am Utterly Perfect:* an explicit discussion of limitations strengthens the paper

#### Results Pitfalls
* *Unfettered By Time:* don't omit time performance, because it is almost always interesting and worth documenting.
* *Fear and Loathing of Complexity:* technique papers that focus on accelerating performance should usually include some statement of algorithm complexity.
* *Straw Man Comparison:* compare the new technique against state-of-the-art approaches rather than outdated work.
* *Tiny Toy Datasets:* avoid using only tiny toy datasets in technique papers that refine previously proposed visual encodings.
* *But My Friends Liked It:* positive informal evaluation by a few of labmates is not enough to justify usefulness.
* *Unjustified Tasks:* tasks in a user study should be justified.

### Final Pitfalls: Style and Submission
This type of pitfall is for after a full paper draft is written.

#### Writing Style Pitfalls
* *Deadly Detail Dump:* don't simply dump out all the details and declare victory.
* *Story-Free Captions:* avoid using a single brusque sentence fragment as caption text.
* *My Picture Speaks For Itself:* don't assume the superiority of the method is obvious. Talk the reader through how the visual representation exposes meaningful structure in the dataset.
* *Grammar is Optional*
* *Mistakes Were Made:* avoid using passive voice as much as possible.
* *Jargon Attack:* avoid jargon as much as possible. Define it if have to use.
* *Nonspecific Use of Large:* never use the words 'large' or 'huge' without clarifying the order of magnitude under discussion.

#### Submission Pitfalls
* *Slimy Simultaneous Submission*
* *Resubmit Unchanged* 

### Pitfalls By Generality
The author defined *infovis* as visualizations for which spatial representation is chosen, and *scivis* when spatial representation is given. Based on these definitions, the author then summarized the generality of pitfalls discussed:
* First stage pitfalls are specific to infovis;
* Visual encoding pitfalls are specific to visualization. *Color Cacophony* and *Rainbows Just Like In The Sky* pertain to both infovis and scivis. *Unjustified Visual Encoding*, *Hammer In Search Of Nail*, and *2D Good, 3D Better* focus on issues that are more central for an infovis audience, but may well be of benefit to scivis as well;
* Strategy pitfalls pertain to any research paper;
* Tactical pitfalls are very general;
* Result pitfalls hold for all visualization papers, and *Straw Man Comparison* is general enough for all research papers;
* Final pitfalls are very general, except for *Story-Free Captions*, which is specific to both visualization and computer graphics and *My Picture Speaks For Itself*, which is most tuned for infovis, but certainly may pique the interest of the scivis community.

## COMMENT

This paper is a wonderful work. It gave me a lot of insights while, and after, reading.

I only had a vague idea about questions like 'what should a paper include', 'how to make a paper more influential'. This paper provided me with a systematic, well-organized classification of infovis papers. Each contained detailed explanation and examples.

Although the title indicates this article is about how to write a research paper, but this paper is actually a guidance of research itself, as many pitfalls needs to be taken into consideration at the start of, or in the middle of a research project.

In summary, to avoid pitfalls in writing research papers, the most important thing to do is to keep these pitfalls in mind and avoid them when conducting research. (Maybe except for Final Pitfalls, which are merely for writing papers, rather than for doing research)

