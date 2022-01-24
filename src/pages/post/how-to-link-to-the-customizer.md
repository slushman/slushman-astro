---
layout: layout:Post
title: "How to Link to the Customizer"
date: "2016-06-02"
category: ["Code Samples"]
heroAccount: 'scottwebb'
heroPhotographer: 'Scott Webb'
description: "You won't believe the simple solution for linking to the Customizer in WordPress. You can also link to panels, section, and controls too!"
slug: how-to-link-to-the-customizer
relatedPosts:
- add-select-menu-formidable-forms-customizer
---

I recently needed to link to a custom panel in the Customizer and had to figure it out. [Devin Price](http://wptheming.com/2015/01/link-to-customizer-sections/) pointed me in the right direction, but I ended up looking in the WordPress core to see how they do it and this is how.

This a simple link to Customizer:

```astro
<a href="<?php echo esc_url(admin_url('customize.php')); ?>">Link to Customizer</a>
```

## Linking to Panels, Sections, and Controls in the Customizer

If you want to link to a specific panel in the Customizer, you'll want to use this:

```astro
$query['autofocus[panel]'] = 'nav_menus';

$panel_link = add_query_arg($query, admin_url('customize.php'));

?><a href="<?php echo esc_url($panel_link); ?>">Link to Panel</a>
```

If you aren't familiar with [add_query_args](https://developer.wordpress.org/reference/functions/add_query_arg/), its worth reading up on it. I learned about it from [Fränk Klein](https://twitter.com/fklux) for how to properly [add Google Fonts to WordPress](https://themeshaper.com/2014/08/13/how-to-add-google-fonts-to-wordpress-themes/). [Pippin Williamson](https://pippinsplugins.com/) also has a good post about write-up about [using add_query_args](https://pippinsplugins.com/the-add_query_arg-helper-function/) too. We'll see later how you can use it to create more advanced links into the Customizer.

### Security Warning!

One warning: always specify the URL parameter and always escape the output. The core developers [discussed this issue](https://make.wordpress.org/plugins/2015/04/20/fixing-add_query_arg-and-remove_query_arg-usage/) in April of 2015. If you don't specify the URL and don't escape the output of this function, then someone might be able to use it as a XSS attack vector. If you'll notice, I'm including the [esc_url()](https://developer.wordpress.org/reference/functions/esc_url/) function in the output of each of the examples above and the URL parameter is specified too.

In the $query array, the key tells the Customizer what to do, then the value tells it where we're going. From the example above: autofocus in a panel called "nav_menus".

### Panel Options

You can change the value to the panel of your choice. Here's a list of the default panels included in WordPress (as of version 4.5.2):

- widgets = Widget panel
- nav_menus = Menus panel

If you want to link to a section instead, you can change part of the key:

```astro
$query['autofocus[section]'] = 'title_tagline';

$section_link = add_query_arg($query, admin_url('customize.php'));

?><a href="<?php echo esc_url($section_link); ?>">Link to Section</a>
```

### Section Options

Here are the IDs for the default sections in WordPress:

- static_front_page = Static Front Page section
- title_tagline = Site Identity section

Some of the default themes like Twenty Sixteen add their own sections and any theme can add the following sections by declaring theme support for them:

- background_image = Background Image section
- header_image = Header Image section

### Field Options

The real magic is linking to the customizer and autofocusing on a specific field (aka control):

```astro
$query['autofocus[control]'] = 'blogname';

$control_link = add_query_arg($query, admin_url('customize.php'));

?><a href="<?php echo esc_url($control_link); ?>">Link to Control</a>
```

This links to the Site Title field in the Site Identity section. If you're asking people to go to a specific place and make an edit, go ahead and link this way to make it easier.

## After the Customizer

In addition to linking to somewhere within the Customizer, you can also specify where to go after you exit. Core uses the page you're currently on by default. You can check the link to the Customizer from different places in the admin and see that return value changes.

```astro
$query['return'] = admin_url();

$link_with_return = add_query_arg($query, admin_url('customize.php'));
```

That will link to the Customizer and return you to the Dashboard.

FYI, you cannot specify any old URL to go to afterward. For instance, this does not work:

```astro
$query['return'] = 'https://www.cnn.com';

$link = add_query_arg($query, admin_url('customize.php'));

?><a href="<?php echo esc_url($link); ?>">Go to CNN after</a>
```

The Customizer runs these return URLs through the function [wp_validate_redirect()](https://developer.wordpress.org/reference/functions/wp_validate_redirect/). By default, the only allowed URL is the [home_url()](https://developer.wordpress.org/reference/functions/home_url/). Additional URLs can be added using the [allowed_redirect_hosts()](https://developer.wordpress.org/reference/hooks/allowed_redirect_hosts/) filter. The wp_validate_redirect() function is used for many parts of WordPress, so I'd advise caution when adding URLs to this allowed list.

Now, we can build more specific URLs for the Customizer. This could be especially useful if you're walking a site admin through performing several steps:

```astro
$query['autofocus[control]'] = 'blogname';

$query['return'] = admin_url('post-new.php');

$link = add_query_arg($query, admin_url('customize.php'));

?><a href="<?php echo esc_url($link); ?>">Set title, then write post</a>
```

This links into the Customizer, autofocuses on the Site Title field, then once you're done, takes you to the new post page.

## Set the Preview Page

If you have Customizer controls that only apply to specific pages, you can specify which page appears in the previewer:

```astro
$query['url'] = site_url('/news');

$link = add_query_arg($query, admin_url( 'customize.php'));

?><a href="<?php echo esc_url($link); ?>">News Page in Preview</a>
```

In this case, the Previewer will display the News page instead of the home page. I'm planning to do additional testing to see if this could be used to style a plugin-specific page.

## All Together Now!

Those are all the parameters currently available for the Customizer. Now you can get really crazy (and specific) about your links to the Customizer. For example, go to the Menu Locations, show the About page in the previewer, then when you're done, add a new page:

```astro
$query['autofocus[section]'] = 'menu_locations';
$query['return'] = admin_url('post-new.php?post_type=page');
$query['url'] = site_url('/about-us');

$link = add_query_arg($query, admin_url('customize.php'));

?><a href="<?php echo esc_url($link); ?>">Craziness!</a>
```

To wrap up, there are three parameters you can use to link into the customizer: return, url, and autofocus. Use add_query_arg to build the URL and esc_url to display it. The autofocus parameter lets you focus on a panel, a section, or a specific field. Then the url parameter lets you display a specific page in the Previewer. You can use the return parameter to go to a particular place after going to the Customizer. Happy linking!

Here's a [gist of all the code](https://gist.github.com/slushman/6f08885853d4a7ef31ebceafd9e0c180), if you prefer that.
