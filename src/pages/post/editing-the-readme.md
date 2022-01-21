---
layout: layout:Post
date: "2017-06-19"
title: "Editing the README"
category: ["WordPress Plugin Boilerplate"]
heroAccount: 'jaysung'
heroPhotographer: 'Jehyun Sung'
description: "Explore the eight parts of a plugin README file."
slug: editing-the-readme
---

In the [previous post](/post/using-plugin-generator/) of this [WordPress Plugin Boilerplate series](/post/guide-using-wordpress-plugin-boilerplate/), we created the WP Starter Plugin using the plugin generator. However, before we begin developing, there is at least one thing we need to edit: the README file.

The plugin generator barely touches the README file (remind me to file a bug report), leaving it incomplete. Since we want to learn to develop plugins properly as we go, we start by editing the README.

## Examining the Parts

The README consists of several parts which are typical for most plugin README files:

* Tags (at the top)
* Description
* Installation Instructions
* Frequently Asked Questions
* Screenshot List
* Changelog
* Upgrade Notices
* Arbitrary Section

### Tags

The tags populate much of the information you see in a plugin listing on the WordPress Plugin Directory.

For starters, correct the `=== Plugin Name ===` to your plugin's name.

The contributors tag needs your wordpress.org username and any other developer's usernames as well.

The Donate link should already be your Author URI. If you have a specific site where people can donate money for your plugin, use that instead.

Tags helps classify your plugin in the directory. Its similar to how news websites use categories like World, Sports, Entertainment, etc. If you need to use more than one, be sure to separate them with commas.

WordPress uses the Requires At Least and Tested Up To tags for compatibility checks. If a plugin requires a specific version of WordPress, then users below that version will not receive automatic updates.

Stable Tag is the current version of your plugin. Update this every time you create a new version. Since this is a new plugin, change this to 1.0.0.

License and License URI tags should remain "GPL-2.0" and the URL given. To remain compatible with the GPL 2 license, you can use a more permissive license, like the MIT license, but not a more restrictive one.

### Description

There are actually two descriptions in the README file. There's a short description above the `=== Description ===` header and a long description just below the header.

Limit the short description to 150 characters or less and do not use markup. Think of this as a tweet describing your plugin.

The long description explains the details of your plugin. This section uses [Markdown formatting](https://developer.wordpress.org/plugins/wordpress-org/how-your-readme-txt-works/#markdown) so you can dress it up with lists, links, headings, and even videos. It can be as long as you prefer and can include just about anything. Many developers use this section to convince users to choose this plugin, up-sell paid versions of this plugin, provide documentation for simpler plugins, and/or usage instructions.

As an example, the [Yoast SEO plugin](https://wordpress.org/plugins/wordpress-seo/) uses the long description to convince users to install the plugin, up-sell the paid version of the plugin, then detail the plugin features. Others simply provide a link to the plugin's website where the details are provided.

I would advise using this space to add as much information as possible about your plugin. Give people reasons to use your plugin and list out the features. Then, provide more detailed documentation on your website or on a dedicated plugin site.

### Installation Instructions

Give people the instructions what they need to get your plugin working. Some plugins only require installation and activation to work. Others need shortcodes placed into content. Some may require template tags. I saw one recently on github that required moving a folder into your theme.

Most of the time, the first two instructions in the example list are consistently the same. For the rest, give step-by-step details. Be sure to test this out on a new WordPress install to make sure you don't miss anything.

### Frequently Asked Questions

This is your chance to provide some basic documentation to users. If your plugin uses a shortcode, give the basic usage instructions in an FAQ. Same for template tags or any other major plugin feature. Try to anticipate what people may ask and answer it here first. Be sure to pay attention to the example's formatting.

### Screenshot List

Provide some screenshots of your plugin in action. These could be the settings pages or examples of the output. For example, if you provide 3 screenshots, name the image files screenshot-1.jpg, screenshot-2.jpg, and screenshot-3.jpg. Then the screenshot descriptions in this list match the corresponding file based on the list order. Since this is a new plugin, leave the examples alone. We'll add screenshots later and edit these accordingly.

### Changelog

The changelog provides details about the changes from one version to the next. I recommend providing as much as detail as you can. For example, if the next version has 10 commits, use the commit messages as list items in the changelog for this version. If you don't use the commit messages, at least tell what major things changed in this new version. For a new plugin, there isn't a changelog yet, so remove the examples and enter something like:

```astro
= 1.0.0 =
* New plugin.
```

### Upgrade Notices

At first it seems like the upgrade notice is the same as the changelog entry. However, these notices are considerably shorter. I think of them like a mini-sales pitch for why a user should update to this new version. Keep them short, the limit is 300 characters. New plugins also don't need an upgrade notice, so you can delete the examples here. The formatting is the same as the changelog, so we can look there for an example later.

### Arbitrary Section

You can add additional sections to the README and they can be whatever you need. They use the same heading formatting as the other headings and also use Markdown formatting. I've seen just a handful of plugins that use another section. They are usually for something really outside the norm or where the plugin requires additional information outside not classified under the provided headings. In this case, remove the entire section.

## Wrapping Up the README

At this point, your README should have an accurate set of tags and plugin name at the top, good plugin descriptions (long and short), good installation instructions, no FAQs, no screenshots, no upgrade notices, and one changelog entry. In the next post, we will begin creating the WP Starter Plugin and learning to build plugin parts in the boilerplate.
