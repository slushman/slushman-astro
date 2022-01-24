---
layout: layout:Post
date: "2016-10-28"
title: "Results for the Underscores Stylesheet"
category: ["Parker"]
heroAccount: 'dylan_nolte'
heroPhotographer: 'dylan nolte'
description: "Check out these results for the Underscores stylesheet from Parker."
slug: results-underscores-stylesheet
relatedPosts:
- parker-and-wordpress-theme-development
- installing-parker
- creating-a-baseline-for-parker
- improving-underscores-stylesheet-using-parker
- simplifying-wordpress-menu-styling
- parker-wordpress-menus
---

In the [previous posts](/post/simplifying-menu-styling/) in the [Parker series](/post/parker-and-wordpress-theme-development/), we optimized the stylesheet for the _s starter theme. We also used hooks and functions to customize the WordPress menus. In this post, we will compare our goals and the results we achieved using Parker. Here were our the goals:

* Reduce stylesheet complexity
* Increasing maintainability
* Making more CSS classes reusable

Now, lets compare our baseline to our final results:

## Baseline

* Total Stylesheets: 1
* Total Stylesheet Size: 15432
* Total Rules: 134
* Total Selectors: 280
* Total Identifiers: 508
* Total Declarations: 243
* Selectors Per Rule: 2.08955223880597
* Identifiers Per Selector: 1.8285714285714285
* Specificity Per Selector: 10.446428571428571
* Top Selector Specificity: 120
* Top Selector Specificity Selector: #content[tabindex="-1"]:focus
* Total Id Selectors: 1
* Total Unique Colors: 15
* Unique Colors: #FFFF00,#000000,#C0C0C0,#404040,#EEEEEE,#666666,#FFF9C0,#FFFFFF,#CCCCCC,#BBBBBB,#E6E6E6,#AAAAAA,#111111,#F1F1F1,#21759B
* Total Important Keywords: 2
* Total Media Queries: 1
* Media Queries: screen and (min-width: 37.5em)

## Final Results

* Total Stylesheets: 1
* Total Stylesheet Size: 14405
* Total Rules: 134
* Total Selectors: 240
* Total Identifiers: 350
* Total Declarations: 243
* Selectors Per Rule: 1.791044776119403
* Identifiers Per Selector: 1.475
* Specificity Per Selector: 8.566666666666666
* Top Selector Specificity: 30
* Top Selector Specificity Selector: .infinite-scroll.neverending .site-footer
* Total Id Selectors: 0
* Total Unique Colors: 15
* Unique Colors: #FFFF00,#000000,#C0C0C0,#404040,#EEEEEE,#666666,#FFF9C0,#FFFFFF,#CCCCCC,#111111,#BBBBBB,#E6E6E6,#AAAAAA,#F1F1F1,#21759B
* Total Important Keywords: 2
* Total Media Queries: 1
* Media Queries: screen and (min-width: 37.5em)

## Comparison

These lists are helpful, but lets take a look at each optimization and compare the numbers.

### Stylesheet Size

Stylesheet size went from 15432kb to 14405kb. That's an over 1kb reduction! While it's "only" a 1kb reduction, we're working with a starter theme. Our future projects benefit by having a smaller starting stylesheet.

### Total Selectors

Total Selectors reduced from 280 to 240. This is not a drastic reduction, but fewer selectors mean styles are easier to understand. Your future self will thank you!

### Total Identifiers

Total Identifiers reduced from 508 to 350. This is a much larger reduction. Reducing the number of identifiers makes the stylesheet easier to understand. Styles are also easier to override, if necessary.

### Selectors Per Rule

Selectors Per Rule reduced from 2.08955223880597 to 1.791044776119403. Ideally, that final number would just be one so styles apply to a single class.

### Identifiers Per Selector

Identifiers Per Selector reduced from 1.8285714285714285 to 1.475. This should also be, ideally, one. Selectors should apply to a single class. However, pseudo classes like hover or focus count against you here, making this difficult to avoid.

### Specificity Per Selector

Specificity Per Selector reduced from 10.446428571428571 to 8.566666666666666. The ideal is up for debate and depends on your CSS methodology. Parker favors the lowest possible specificity. However, BEM and other CSS methodologies favor using classes for everything. Meaning the lowest possible score would be 10. Either way, reducing specificity makes stylesheets easier to understand and maintain. The "ideal" should be whatever works best for you.

### Top Selector Specificity

Top Selector Specificity score reduced from 120 to 30. This is not a vital metric, but still a good one. This reduction involves a major break away from how _s styles things by default though. The most specific selector they use is for the skip-to-content link target. I asked [why this was so specific](https://github.com/Automattic/_s/issues/1037) and it appears they want the higher-level specificity.

### Total ID Selectors

The Total Id Selectors reduced from 1 to 0. This is the same thing as above. The skip link target styling uses an ID. If you change this one style, you lower this metric to 0. You also drastically reduce the Top Selector Specificity at the same time.

## Wrapping Up

Those are some pretty good results for a starter theme stylesheet. You'll see much better results with a fully-developed theme. Having done all this work though, what does it all mean?

Reducing the stylesheet size helps the site load faster. Each browser request can only return 14kb at a time. Our newly optimized stylesheet, now at 14.4kb, is almost small enough to fit into a single request.

We've made the stylesheet easier to read by eliminating the longer selectors, also making it easier to maintain.

Finally, we've added more reusable classes and made the remaining rules less specific. In future projects, one would create only reusable classes and use WordPress hooks to style elements directly.

I plan to submit pull requests to the _s repo based on some of these tweaks. Hopefully, some of these changes will already exist in future versions of _s. I highly recommend running Parker on your finished stylesheets. Parker doesn't solve everything but rather shows what needs improving.

Parker integrates nicely into Gulp. My gulpfile runs Parker after processing my SASS files, then displays a simple report in the command line. Let me know how Parker is changing your stylesheets and/or development process!
