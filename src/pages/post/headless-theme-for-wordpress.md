---
layout: layout:Post
date: "2018-09-18"
title: "Headless Theme for WordPress"
category: ["Headless WordPress"]
heroAccount: 'lisanguyen'
heroPhotographer: 'Lisa Nguyen'
description: "How to create a theme for a headless WordPress install. Even when the front-end of your site isn't displayed by WordPress, you still need a theme."
slug: headless-theme-for-wordpress
relatedPosts:
- deploying-a-react-app-to-netlify
- editor-links-for-headless-wordpress-themes
- headless-wordpress-create-react-app
---

In my previous [post about editor links](/post/editor-links-for-headless-wordpress-themes), I showed how WordPress can create editor links using the live site URL instead of the WordPress URL. When I created a React app for my WordPress site, I run into two issues. First, I wanted to get as much data from WordPress as possible. Second, I want visitors to only view the React app, not the WordPress install. The solution for both of these problems lies in building a WordPress theme. Huh?

## WordPress Theme for a Headless App

Our headless React app still requires an activated, installed theme in our WordPress installation. Others have built [similar projects](https://github.com/paramander/wp-headless-theme), but mine serves two purposes:

1. Adds support for menus, featured images, and other WordPress features
2. Redirects users to the live site

I wanted my React app to behave similarly to how a typical WordPress theme behaves. For example, while most React apps use hard-coded menus, I wanted the menus to update when I manage them in WordPress. There's no reason to edit React code just to add a menu item. Especially if the React app can get the menu structure from WordPress instead. Let's start by looking at the files included in my [Headless WordPress Theme](https://github.com/slushman/headless-theme).

### Theme Structure

Since this theme does not display any content, it should be minimal. Here is the list of files:

* style.css
* functions.php
* index.php

The [style.css](https://github.com/slushman/headless-theme/blob/master/style.css) file only contains the required WordPress comment block. Next, let's look at these other two files in more detail.

### WordPress Feature Supports

First and foremost, the [functions.php](https://github.com/slushman/headless-theme/blob/master/functions.php) file registers support for all the WordPress features you'll need. As an example, if you need featured images for posts and pages, you'll need to add a statement like:

```astro
add_theme_support('post-thumbnails');
```

Same goes for menus. Register each menu needed for your site.

This file can also be a catch-all for anything else you discover you'll need. In future posts, I'll talk about some of the weird WordPress quirks I corrected using the functions.php file.

We'll also need to redirect people trying to visit our WordPress install.

### Redirects in a WordPress Theme

We only want people to see our headless React app. So if they accidentally (or purposefully) visit our WordPress install, everything should redirect them to the React app. The [index.php](https://github.com/slushman/headless-theme/blob/master/index.php) file contains a small JavaScript redirection, along with an HTML message. The HTML message links to the live site URL. The JavaScript redirects the user to the live site along with the requested route. For example, if someone tries to go to api.slushman.com/post/headless-theme-for-wordpress (that's this post), they will redirect to www.slushman.com/post/headless-theme-for-wordpress instead.

I started off trying to redirect using PHP, then JavaScript as a fallback, but found it wasn't working properly and the JavaScript seemed to work better overall. Anyone not using JavaScript would see the message with the link. While that's not the best experience for them, the React app definitely wouldn't function, so the link works well enough.

## Coming Up

Now that I've explained the simple Headless WordPress Theme, next I'll walk through the React app itself. Creating a React app posed its own set of challenges. It requires a different way of thinking compared to building a WordPress theme.
