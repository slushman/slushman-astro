---
layout: layout:Post
title: "Child themes for WooThemes"
date: "2014-09-08"
category: ["Development"]
heroAccount: 'sixstreetunder'
heroPhotographer: 'Craig Whitehead'
description: "This is the hidden secret to styling child themes for WooThemes."
slug: child-themes-woothemes
---

I've been using child themes for several years now, but I'd never used one with a theme by WooThemes. Most of my clients needed simple customizing, so I used WooTheme's backend options to make the changes.

A recent client needed a bit more than I could do through their backend though. I started off making the customization directly in the theme, which is never a good idea. Catching my mistake, I decided to throw my changes in a child theme and work from there. However, when I reloaded after activating the child theme, the site broke. Looking at the source code, I noticed the order of the stylesheets. My child theme stylesheet should be last in the cascade, therefore overriding all other styles. There were two files from the parent theme loading after mine. I tried several solutions, hoping a [newer one](https://ulrich.pogson.ch/how-to-load-the-parent-styles-in-child-themes) using `wp_enqueue_style` to load the parent stylesheet instead of @import would work, but that didn't affect the other two stylesheets.

Thankfully (before pulling my hair out), I found [this page](https://support.woothemes.com/hc/en-us/articles/203105897-How-to-setup-and-use-a-child-theme) in the WooThemes support docs. What they don't spell out on the page is that you don't actually make CSS changes in the child theme style.css. You make a second CSS file called custom.css and make your changes there. The custom.css file loads next-to-last followed by styles put into their custom CSS field on the backend forms and therefore overrides all the other stylesheets.
