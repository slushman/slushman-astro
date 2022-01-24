---
layout: layout:Post
title: "The Structure of the WordPress Plugin Boilerplate"
date: "2017-05-29"
category: ["WordPress Plugin Boilerplate"]
heroAccount: 'alain_pham'
heroPhotographer: 'Alain Pham'
description: "Understanding the structure of the boilerplate makes building your plugin much easier. Learn how the boilerplate structures your plugin."
slug: the-structure-of-the-wordpress-plugin-boilerplate
relatedPosts:
- guide-using-wordpress-plugin-boilerplate
- why-use-the-boilerplate
- understanding-loader-class
- using-plugin-generator
- editing-the-readme
---

In the [previous post](/post/why-use-the-boilerplate) of the [WordPress Plugin Boilerplate series](/post/guide-using-wordpress-plugin-boilerplate/), we looked at why one would use the boilerplate. This post will explore the organized structure in more detail.

The structure makes plugin development more predictable and easier to maintain in the future. The boilerplate organizes files into four main folders:

## Plugin Folder

![WordPress Plugin Boilerplate Main Folder](/post/the-structure-of-the-wordpress-plugin-boilerplate/wp-plugin-boilerplate-root-folder.png)The main plugin folder contains basic files for creating a WordPress plugin.

### Main Plugin File

This file contains the comments describing what it does, who authored it, the current version, etc. The boilerplate also uses the PHPDoc versions of those same properties.

This file also registers the activation and deactivation hooks, then runs the main plugin file.

### readme.txt file

A required file for any WordPress plugin. It describes what the plugin does, who authored it, as well as a changelog and versioning information.

### GPL 2.0 license

The boilerplate uses the GPL 2.0 license which is the same license as WordPress. A copy of the license is a wise thing to include in your plugin.

### index.php file

The index.php file is internationally blank. Some developers have questioned the necessity of including this file. However, many experienced developers have explained a file like this helps with security concerns.

### uninstall.php file

Plugins usually remove settings and other database-related features in the uninstall file.

## Languages

![WordPress Plugin Boilerplate Languages Folder](/post/the-structure-of-the-wordpress-plugin-boilerplate/wp-plugin-boilerplate-languages-folder.png) The languages folder contains all the files needed for translations. The boilerplate includes an empty .pot file for translations. You can optionally include additional .pot files containing the translated strings.

## Admin & Public

![WordPress Plugin Boilerplate Public Folder](/post/the-structure-of-the-wordpress-plugin-boilerplate/wp-plugin-boilerplate-public-folder.png) ![WordPress Plugin Boilerplate Admin Folder](/post/the-structure-of-the-wordpress-plugin-boilerplate/wp-plugin-boilerplate-admin-folder.png) Since both the admin and public folders have the same structures, I'll explain both at once. The admin and public classes have the same structure and methods, but keep the different concerns separated.

### class-plugin-name-admin.php & class-plugin-name-public.php

This is the main class. Most of the plugin code will reside in one or both of these files.

### partials

![WordPress Plugin Boilerplate Admin Partials Folder](/post/the-structure-of-the-wordpress-plugin-boilerplate/wp-plugin-boilerplate-admin-partials-folder.png) The partials subfolder contains PHP files with the output HTML code. For example, displaying a settings page in the admin requires using two files. The WordPRess API code resides in the admin class, but the HTML output would be in a partial file.

### JS

![WordPress Plugin Boilerplate Admin JS Folder](/post/the-structure-of-the-wordpress-plugin-boilerplate/wp-plugin-boilerplate-admin-js-folder.png) This folder contains all the Javascript files for the plugin.

### CSS

![WordPress Plugin Boilerplate Admin CSS Folder](/post/the-structure-of-the-wordpress-plugin-boilerplate/wp-plugin-boilerplate-admin-css-folder.png) This folder contains all the CSS files for the plugin.

## Includes

![WordPress Plugin Boilerplate Includes Folder](/post/the-structure-of-the-wordpress-plugin-boilerplate/wp-plugin-boilerplate-includes-folder.png) The includes folder is Tom's answer for where to put code that isn't exclusive to the admin or public. A common question prior to version three was where to put code for features that are both public and admin, like widgets.

### class-plugin-name.php

This is the main plugin file. All the plugin's WordPress hooks register through the Loader class here. All the class files become available throughout the plugin in this file as well.

The constructor sets the class variables. plugin_name is for naming things, like enqueueing stylesheets, and version is for caching busting scripts and stylesheets. Then these four methods run:

- load_dependencies(): includes each of the classes used in the plugin. Instantiates the loader class.
- set_locale(): contains the hooks for translation using methods in the i18n class.
- define_admin_hooks(): contains the hooks for the plugin admin using methods in the admin class.
- define_public_hooks(): contains the hooks for the public-facing parts of the plugin using methods in the public class.

### class-plugin-name-activator.php

Contains any code that runs during plugin activation.

### class-plugin-name-deactivator.php

Contains any code that runs during plugin deactivation.

### class-plugin-name-i18n.php

Loads and defines the internationalization files for this plugin so all the strings are ready for translation.

### class-plugin-name-loader.php

This is the big new feature of version three. The loader class takes all the hooks defined in the main plugin file and registers them with WordPress.

In the next post, we'll examine the loader class in detail and how it differs from writing normal WordPress hooks.
