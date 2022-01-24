---
layout: layout:Post
date: "2018-08-22"
title: "Editor Links for Headless WordPress Themes"
category: ["Headless WordPress"]
heroAccount: 'joshstyle'
heroPhotographer: 'JOSHUA COLEMAN'
description: "You won't believe the solution for customing links in the WordPress editor."
slug: editor-links-for-headless-wordpress-themes
relatedPosts:
- headless-theme-for-wordpress
- headless-wordpress-create-react-app
---

In my [previous post](/post/headless-wordpress-create-react-app), I talked about creating a headless front end for WordPress using Create React App. Turning my WordPress site into a headless React app was a massive learning experience. There were many challenges, like learning React, then learning the REST API, and creating custom endpoints. I won't even mention battling CORS headers. One of the more interesting issues I ran into, with editor links, ultimately had a very simple solution.

## The Problem

My WordPress install lives at api.slushman.com and my live site (the part you're reading now) lives at slushman.com. So when I'm writing content in WordPress and link to another post on my site, it creates a little problem. Should I link to api.slushman.com/something? Ideally, I'd link to slushman.com/something since readers would visit that page. The question is: how can I link to the live domain while the site exists on another domain? I'd like to avoid manually editing every single link, especially for all the existing posts.

## The Solution

Thankfully, the solution was much simpler than I originally thought. In my mind, this problem was an insurmountable monster. But WordPress solved this problem years ago. Before the REST API existed, people wanted to install WordPress in a subfolder so all the files don't clutter up their site's root folder. But they wanted the WordPress content to appear like it was just part of the rest of the site. The solution for this problem also solves the editor links problem for a headless front end.

### Change URL Settings

In the admin, on the Settings > General page, there are two fields for a URL:

* WordPress Address
* Site Address

Since most every site I've worked on used WordPress to both manage and display the content, these settings have always been the same. However, since the front end and back end are on two different URLs, they need to be different values.

WordPress Address is the URL where your WordPress install lives. In this case, this is my WordPress backend, so the correct value is api.slushman.com.

Site Address is the URL for the viewable site. Since I'm going headless, this setting would be slushman.com. WordPress uses this value when creating editor links. So now when I create a link within the editor to another page or post within the site, the link goes to slushman.com.

![](/post/editor-links-for-headless-wordpress-themes/site-settings-wordpress.png "Site settings in WordPress")

The other big upside is all the links I've already created in past posts point to valid locations within my headless front end. If someone tries to visit my WordPress backend, the browser redirects to the same requested location on the front end.

## Coming Up

Those redirects happen in my Headless Theme. But wait, why would I have a theme in WordPress if it's not displaying any content? In my next post, I'll talk through the details of my [Headless WordPress Theme](/post/headless-theme-for-wordpress) and why you still need a theme.
