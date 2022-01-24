---
layout: layout:Post
date: "2017-05-21"
title: "Why Use the Boilerplate?"
category: ["WordPress Plugin Boilerplate"]
heroAccount: 'emilymorter'
heroPhotographer: 'Emily Morter'
description: "Here are seven reasons why you should use the WordPress Plugin Boilerplate to make WordPress plugins in the second post in the series."
slug: why-use-the-boilerplate
relatedPosts:
- guide-using-wordpress-plugin-boilerplate
- the-structure-of-the-wordpress-plugin-boilerplate
- understanding-loader-class
- using-plugin-generator
- editing-the-readme
---

In the first post of the [WordPress Plugin Boilerplate series](/post/guide-using-wordpress-plugin-boilerplate/), we covered the history of the project. In this post, we're going to address a common question. The first question both new and experienced developers ask about the boilerplate is: why should I use this? The boilerplate describes itself as "a standardized, organized, object-oriented foundation for building high-quality WordPress plugins." Here are at least five different ways the boilerplate helps when building plugins.

## Organized

WordPress plugins don't have a required structure. Many plugins are literally just one file. However, as a plugin gets more complex, better organization keeps it maintainable. The Boilerplate has an existing folder structure for keeping all the parts organized. While you're able to customize everything, the pre-existing structure offers a predictable format can make building plugins easier.

## Object-Oriented

Each class in the boilerplate separates the responsibilities of the methods and functionality. The included classes start with one public-facing object, one admin-facing object, and several classes used in either. You can see included examples to continue the good OOP practices in your custom classes.

## WordPress Coding Standards

The boilerplate uses the WordPress Coding Standards. Seeing good examples can only help the code quality of plugins, especially for ones submitted to the plugin directory.

## WordPress Documentation Standards

One of the best things you can do while building a plugin is document your code. The boilerplate uses the WordPress Documentation Standards and gives you plenty of really good examples of properly documenting code. I write my documentation to explain to my future self how the code works and why I wrote the code this particular way.

## WordPress APIs

Of course, the boilerplate uses standard WordPress APIs so the examples you find in the Codex and every WordPress code blog are still usable.Codex examples would require some minor alterations to work within the boilerplate. We'll go over those in detail as we build the WP Starter Plugin.

## Translatable

The boilerplate includes a blank .pot file so you can add your translatable string easily. As WordPress becomes more popular outside the English-speaking community, making your plugin translatable increases the potential reach of your plugin.

## Plugin Generator

The WordPress Plugin Boilerplate has a companion project - a plugin generator. The generator replaces the various strings and file names with your plugin's information so you don't have to do all this manually. Its a major head start. You can find the generator at [https://wppb.me/](https://wppb.me/).

## Coming Next

I hope you see the boilerplate can be a useful tool for building plugins. In the next post, we'll examine the files and folder structure.
