---
layout: layout:Post
title: "Avoiding get_theme_mod Errors"
date: "2015-04-16"
category: ["Code Samples"]
heroAccount: 'korpa'
heroPhotographer: 'JR Korpa'
description: "If you're getting an error related to the get_theme_mod function, the solution is simpler than you think. Check out this solution."
slug: avoiding-get_theme_mod-errors
---

If you're getting an error related to [get_theme_mod](https://developer.wordpress.org/reference/functions/get_theme_mod/), its most likely from how you're checking if the returned result is empty. Most developers will probably do the same thing I did: make a variable and assign it to the result of get_theme_mod. Then check if its empty using PHP's [empty()](https://php.net/manual/en/function.empty.php) method. Sadly, this is where you're getting an error. Instead, check if the result is equal to '', or blank.

```astro
/**
 * Do this
 */
if ('' === get_theme_mod('something')) { ... }
 
/**
 * Not this
 */
if (empty(get_theme_mod('something'))) { ... }
```

[Gist of the code above](https://gist.github.com/slushman/42b281e4a7b368052e6f)
