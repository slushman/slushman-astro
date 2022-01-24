---
layout: layout:Post
date: "2017-06-05"
title: "Understanding the Loader Class"
category: ["WordPress Plugin Boilerplate"]
heroAccount: 'markusspiske'
heroPhotographer: 'Markus Spiske'
description: "Understand the central file for the WordPress Plugin Boilerplate, how it works, how to register hooks and filters, and additional parameters available."
slug: understanding-loader-class
relatedPosts:
- guide-using-wordpress-plugin-boilerplate
- why-use-the-boilerplate
- the-structure-of-the-wordpress-plugin-boilerplate
- using-plugin-generator
- editing-the-readme
---

In the [previous post](/post/the-structure-of…ugin-boilerplate/) of the [WordPress Plugin Boilerplate series](/post/guide-using-wordpress-plugin-boilerplate/), we walked through the structure. We also examined each file and what they do. The biggest feature of the version 3 rewrite is the new loader class.

The loader class loops through all the hook calls and registers them with WordPress all at once. The class consists of two class variables and four methods.

## Class Variables

Each of the class variables are arrays containing the hooks and their corresponding functions.

### $actions

An array of the all actions to register with WordPress.

### $filters

An array of the all the filters to register with WordPress.

## Methods

There are only four methods in the loader class, not counting the constructor.

### Constructor

The class constructor simply assigns a blank array to each of those class variables.

### add_action()

Adds the action passed to it to the $actions class variable using the add() method.

### add_filter()

Adds the filter passed to it to the $filters class variable using the add() method.

### add()
Takes the passed in hook and the other parameters and restructures everything into an array.

### run()

Loops through the $actions and $filters class variables and registers each hook with WordPress.

### Summary

The main plugin class calls add_action() and add_filter() with the hook parameters. Each method passes parameters to the add() method, which collects all the hooks into respective class variables. The main plugin class calls the run() method, loops through the class variables, then registers the hooks with WordPress.

## How to Register Hooks

The most confusing part of using the new loader class is properly registering hooks. While the boilerplate has methods named add_action() and add_filter(), they work differently than the [WordPress functions](https://developer.wordpress.org/reference/functions/add_action/).

The boilerplate gathers all the hooks to register them with WordPress all at once. Let's use the enqueue_styles declaration in define_admin_hooks() as an example.

First, we have to create an instance of the admin class and assign it as the variable $plugin_admin. We also pass the plugin_name and version using the get_plugin_name() and get_version() methods in this class.

```astro
$plugin_admin = new Plugin_Name_Admin($this->get_plugin_name(), $this->get_version());
```

Next, we use the add_action method in the Loader instance. Each hook registers separately with the loader class. In the load_dependencies() method, we assigned the instantiated loader class to the $loader class variable.

```astro
$this->loader
```

Since enqueue_styles is an action hook, we use the add_action() method from the loader class.

```astro
$this->loader->add_action
```

This first parameter of the boilerplate's add_action method is the name of the hook. In this case, admin_enqueue_scripts.

```astro
$this->loader->add_action('admin_enqueue_scripts',
```

The second parameter of the add_action method is the class instance of our action.

```astro
$this->loader->add_action('admin_enqueue_scripts', $plugin_admin,
```

Finally, we put the name of the method in the class where WordPress can find our action. In this case, the name of the method is enqueue_styles.

```astro
$this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_styles');
```

## Additional Loader Method Parameters

The loader class accepts two additional parameters: the hook priority and the accepted arguments. Both are optional and in this case, we're not using either. However, a complete example would be:

```astro
$this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_styles', 10, 1);
```

Finally, in the admin class, the enqueue_styles() method contains:

```astro
wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/plugin-name-admin.css', array(), $this->version, 'all');
```

This is the standard way to enqueue a CSS file into the WordPress admin through the plugin boilerplate methods.

## Summary

We have seen how the loader class works and the proper way to register a hook.

In future posts, we will learn how to create various plugin features using the boilerplate. Let's start by creating the WP Starter Plugin by using the plugin generator.
