---
layout: layout:Post
title: "Parker and WordPress Theme Development"
date: "2016-10-23"
category: ["Parker"]
heroAccount: 'harryjamesgrout'
heroPhotographer: 'Harry Grout'
description: "Using Parker can make you a better WordPress theme developer."
slug: parker-and-wordpress-theme-development
relatedPosts:
- installing-parker
- creating-a-baseline-for-parker
- improving-underscores-stylesheet-using-parker
- simplifying-wordpress-menu-styling
- results-underscores-stylesheet
- parker-wordpress-menus
---

Lately, I've been playing with a CSS analysis tool called [Parker](https://github.com/katiefenn/parker) created by [Katie Fenn](https://twitter.com/katie_fenn). Parker examines your stylesheet and gives a treasure trove of metrics. While some of these metrics are merely interesting factoids (like the number of CSS rules), others offer constructive criticism for improvement. The general philosophy is to create more maintainable CSS by simplifying your stylesheet.

Harry Roberts, of [csswizardry.com](https://csswizardry.com), has an [excellent write-up](https://csswizardry.com/2016/06/improving-your-css-with-parker/) about using Parker. He explains some of the options and offers some ideal scores to shoot for, which I'll list and explain in later posts. WordPress developers will need additional code to change the WordPress-generated code, like in menus.

In the following posts, I'm going to use Parker to test my fork of the _s starter theme and made optimize it based on the results. I've based every project over the past two years on _s and advise anyone learning theme development to start there. This post will serve as a sort of table of contents; I'll link to each post as they are published.

## Why Use Parker?

As I mentioned above, Parker is good for reducing the size and complexity of your stylesheet. While that's not a big concern for small projects, for larger projects, this can be a lifesaver. Maybe other developers come along and start adding new features, new CSS methods (floats vs flexbox vs grid) or using different methods ([BEM](http://getbem.com/) vs [Atomic](http://atomicdesign.bradfrost.com/) vs random...) and your stylesheet gets more and more complex.

Ideally, the newer developer(s) would check the stylesheet for existing styles that accomplish what they want. Since this doesn't happen many times, Parker can at least tell them whether their code and existing code can be simpler.

## Posts in This Series

- The first thing you will need to know is [how to install Parker](/post/improving-wordpress-theme-development-using-parker-part-1/).
- Next, you'll want to to [create a baseline](/post/creating-a-baseline-for-parker/) of your current code before making changes.
- We'll make a [first pass](/post/improving-underscores-stylesheet-using-parker/) at the _s stylesheet to find some improvements.
- The biggest improvements can be made by [restyling the menus](/post/simplifying-menu-styling/).
- Finally, we'll [compare all our changes](/post/finishing-the-underscores-stylesheet/) to the baseline.
- BONUS: using some code tweaks, we can simplify our [menu styling](/post/parker-wordpress-menus/) even more.
