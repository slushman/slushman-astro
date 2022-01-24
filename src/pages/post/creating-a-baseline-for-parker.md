---
layout: layout:Post
date: "2016-10-25"
title: "Creating a Baseline for Parker"
category: ["Parker"]
heroAccount: 'elisamichelet'
heroPhotographer: 'Elisa Michelet'
description: "In order to optimize the Underscores stylesheet using the CSS tool Parker, we need to start by creating a baseline, so we can compare the changes."
slug: creating-a-baseline-for-parker
relatedPosts:
- parker-and-wordpress-theme-development
- installing-parker
- improving-underscores-stylesheet-using-parker
- simplifying-wordpress-menu-styling
- results-underscores-stylesheet
- parker-wordpress-menus
---

In the [previous post](/post/installing-parker/) in this [series about Parker](/post/parker-and-wordpress-theme-development/), we installed the stylesheet analysis tool and all its dependencies. Now, we're going to create a baseline measurement of the default _s stylesheet and explain the results from Parker.

## Create a Baseline

First, open Finder/Windows Explorer and navigate to the folder where you cloned _s. Open Terminal (or your preferred command line app), type in:

```astro
parker 
```

Note the space at the end! Drag the _s stylesheet file to Terminal. This puts the path to the stylesheet in Terminal. Hit enter to run Parker. The results will be something like this:

```astro
PARKER-JS

Total Stylesheets: 1

Total Stylesheet Size: 15432

Total Rules: 134

Total Selectors: 280

Total Identifiers: 508

Total Declarations: 243

Selectors Per Rule: 2.08955223880597

Identifiers Per Selector: 1.8285714285714285

Specificity Per Selector: 10.446428571428571

Top Selector Specificity: 120

Top Selector Specificity Selector: #content[tabindex="-1"]:focus

Total Id Selectors: 1

Total Unique Colors: 15

Unique Colors: #FFFF00,#000000,#C0C0C0,#404040,#EEEEEE,#666666,#FFF9C0,#FFFFFF,#CCCCCC,#BBBBBB,#E6E6E6,#AAAAAA,#111111,#F1F1F1,#21759B

Total Important Keywords: 2

Total Media Queries: 1

Media Queries: screen and (min-width: 37.5em)
```

Before we move on, let's briefly go through the terminology in the results so we understand everything and what may need to change.

### Selector vs Declaration vs Identifier vs Rule

If you're like me and find all the terms confusing, this diagram maps it out. At minimum, I'm adding this for my future self who doesn't remember what's what.

![This entire thing is a rule.](/post/creating-a-baseline-for-parker/Parker-CSS-Parts.jpg "Parker CSS Parts")

## Parker Results, Explained

### Total Stylesheets

The total quantity of stylesheets Parker examined. You can add multiple stylesheets at once and Parker will spit out results for all of them. If you do examine multiple stylesheets at once, Parker combines the results into one set of results. I'd advise testing each sheet separately.

### Total Stylesheet Size

The size, in bytes, of the stylesheet. While there's not really an "ideal" size, smaller is better.

### Total Rules

The total quantity of CSS rules in the stylesheet. A "rule" is the selector and the styles applied to it. There's not an ideal number of total rules to achieve, but a smaller number means the stylesheet is simpler.

### Total Selectors

The total quantity of selectors used in the stylesheet. Selectors are combinations of identifiers for selecting an element on the site to which styles are applied. There's not an ideal number of total selectors to achieve, but a smaller number means the stylesheet is simpler. Here are some examples, each of these counts as one selector:

* .this-is-a-class
* .this-is-a-class a
* .this-is-a-class a:hover
* .main-navigation ul ul ul li a


### Total Identifiers

The total quantity of identifiers used in the stylesheet. Not to be confused with IDs, identifiers are each part of a selector. There's not an ideal number of total identifiers to achieve, but a smaller number means the stylesheet is simpler. Here are some examples with their identifier count:

* .this-is-a-class - 1
* .this-is-a-class a - 2
* .this-is-a-class:hover- 2 (pseudo selectors count separately)
* .main-navigation ul ul ul li a - 6

### Total Declarations

The total quantity of declarations in the stylesheet. Declarations are the CSS property and value. There's not an ideal number of total declarations to achieve, but a smaller number means the stylesheet is simpler. An example declaration is:

```astro
color: #fff;
```

### Selectors Per Rule

The total quantity of selectors used in each rule. Rules can apply to more than one selector, like ".this-is-a-class, .this-is-another-class". This metric shows the mean of selectors used for each rule. Ideally, this number would 1 and each class would be reusable and only contain the styles needed for that class. This is one of those opinionated things I mentioned before. In Harry's opinion, using multiple selectors like this should be avoided:

```astro
button,
[type="button"],
[role="button"],
[type="reset"],
[type="submit"]
```

We should create a single class and apply that class to all elements requiring those styles. However, as theme developers, we are often stuck having to cover all possible bases, since we can't control the code output from plugins and sometimes WordPress itself.

The ideal for this value is 1, but I would advise getting as close to 1 as possible. Getting this number under 2 is doing really well.

### Identifiers Per Selector

The total quantity of identifiers per selector. An ideal value is between 1 & 2. A single identifier per selector makes the minimum score of 1: ".this-is-a-class" is one identifier and one selector. This is one of the more challenging metrics to achieve the ideal score since we can't control the code and classes we get from plugins and sometimes WordPress. Particularly, the default WordPress menu classes cause many developers to use selectors like: ".nav-primary ul ul ul li a". While this gets the job done, it also results in an abysmal score for this metric: 6. Later, we'll go over a method to reduce this particular selector down to a 1.

### Specificity Per Selector

The mean of the specificity score of each selector. The easiest way to explain specificity is through examples:

```astro
a { color: #000; }
```

Applies to all links, so it's not very specific.

```astro
.link-to-home { color: #000; }
```

Applies to any element with the class "link-to-home". More specific than styling all the "a" tags, but less specific than using an ID.

```astro
#link-to-home { color: #000; }
```

Only applies to the element with the ID "link-to-home". There should only be one of these elements, so it is extremely specific.

Parker is intended to help make your CSS classes reusable, so your specificity score should be as low as possible. This means your styles are reusable and don't apply to super-specific elements. Typically, between 10 and 20 is doing pretty well, since we'll mostly use classes for applying styles. Here's the scoreboard used by Parker:

* Universal selectors (like *): 0
* Element selectors (like input or a): 1
* Classes, attributes, and pseudo selectors: 10
* IDs: 100

### Top Selector Specificity

The highest specificity score in the stylesheet. There's not really an ideal, but I'd say if you're most specific selector is 30 or less, you're doing pretty good.

### Top Selector Specificity Selector

The selector with the highest specificity score in the stylesheet. This makes is easier to find the "worst offender" and refactor your code to eliminate it.

### Total Id Selectors

Total quantity of IDs used in the stylesheet. Ideally, this is 0 since we shouldn't style using IDs - they are too specific and the style rule cannot be reused.

### Total Unique Colors

The total quantity of colors used in the stylesheet. This could be useful to spot small color variances (like multiple shades of light gray) and refactor them to use fewer colors throughout. A stylesheet with fewer colors is a simpler stylesheet.

### Unique Colors

A comma-separated list of all the color codes used in the stylesheet.

### Total Important Keywords

The total quantity of the use of "!important" in the stylesheet. Ideally, this number would be 0, but there are still [valid uses of !important](https://csswizardry.com/2016/05/the-importance-of-important/), so make sure your usage is justified.

### Total Media Queries

The total quantity of media queries in the stylesheet. There's no ideal number, but a smaller number of total media queries means a simpler stylesheet.

### Media Queries

A comma-separated list of all the media queries used in the stylesheet. Useful for refactoring media queries for simplicity.

## Wrapping Up

Now that we've learned what each result from Parker means and the ideal scores for each metric, we can start tweaking the _s stylesheet to get better scores and create a simpler, more maintainable stylesheet. In the [next post](/post/improving-underscores-stylesheet-using-parker/), we'll cover some easy wins to get closer to our goal.
