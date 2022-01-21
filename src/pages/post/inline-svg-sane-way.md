---
layout: layout:Post
title: "Inline SVG the Sane Way"
date: "2014-11-10"
category: ["Code Samples"]
heroAccount: 'bady'
heroPhotographer: 'bady qb'
description: "Keep your sanity. Use SVGs like this."
slug: inline-svg-sane-way
---

Like everyone else these days, I've totally jumped onboard [the SVG train](https://www.smashingmagazine.com/2012/01/16/resolution-independence-with-svg/). They're scalable and easy to use. If you use inline SVG, they are style-able and reduce server requests, which can help your SEO and loading times.

Sadly, inlining SVG also borks up your code. There's nothing more disappointing than combing through neatly organized code completely marred by a giant block of SVG gibberish in the middle of it.

Recently, I discovered a simple way to have my cake and eat it too (mmm, cake!). Check this out:

```astro
/**
 * Returns the requested SVG icon.
 * 
 * Returns FALSE if $svg is not set.
 *
 * @param 	string 		$svg 		The name of the SVG icon
 * @return 	mixed 				The SVG icon
 */
function prefix_get_svg($svg) {
    if (empty($svg)) { return FALSE; }

    $icons['logo'] = '<svg... SVG stuff here..."/></svg>';

    return $icons[$svg];
} // prefix_get_svg()
```

The $svg parameter determines which icon in the array the function returns. The function returns FALSE if $svg is empty. The $icons array contains each icon's SVG code as a separate array item. The function simply returns the requested icon, assuming its actually in the array.

This gives you all the advantages of inline SVG, without borking up your nicely indented, organized code. In my next post, I'll show how combining this with some other simple functions can give you inline SVGs in menu items!
