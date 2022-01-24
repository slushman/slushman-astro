---
layout: layout:Post
date: "2017-04-16"
title: "Parker and WordPress Menus"
category: ["Parker"]
heroAccount: 'bookcrafters'
heroPhotographer: 'Joe McDaniel'
description: "Fixing your mens styling based on Parker results is tricky, but this article shows you how."
slug: parker-wordpress-menus
relatedPosts:
- parker-and-wordpress-theme-development
- installing-parker
- creating-a-baseline-for-parker
- improving-underscores-stylesheet-using-parker
- simplifying-wordpress-menu-styling
- results-underscores-stylesheet
---

As a sort-of follow up to my previous posts, I ran across an issue with styling menu items and found a great way to add classes so I can style those items directly.

Many of our designs have a vertical bar between menu items. While there are several ways to accomplish this, I've been using something like this in recent projects to style the top-level menu items:

```astro
.primary-menu-item-0 :not(:first-child) a {
    border-left: 1px solid; 
    padding-left: 1em;
}
```

Basically, add a left border and some padding to every menu item, except the first child. This results in a vertical bar between each menu item and the first child just has nothing. You can further refine it by targeting the first and last children to remove the outside padding as well.

Since using Parker to style as directly as possible, it struck me that having a selector that complex shouldn't be necessary. Thankfully, there's a simple way around it.

## Adding Menu Item Classes

In the menus part of the Parker series, we added classes to each menu item and menu item link. The functions we used can have up to 4 parameters, which are passed in from the filter.

In the nav_menu_css_class hook, the $item parameter is the menu item object. We're going to check the menu_order property value and if its either the first or last menu item, we'll add classes so we can style those two menu items directly.

```astro
/**
 * Adds a class with the menu name and depth level to each menu item.
 * Makes styling menus much easier.
 *
 * @hooked nav_menu_css_class 10  
 * @param array $classes The current menu item classes.
 * @param object $item The current menu item.
 * @param array $args The wp_nav_menu args.
 * @param int $depth The menu item depth.
 * @return array The modified menu item classes.
 */
function example_add_menu_order_to_menu_item_classes($classes, $item, $args, $depth) {
    if (empty($item)) { return $classes; }

    if (1 === $item->menu_order) {
        $classes[] = $args->menu_id . '-item-first';  
        $classes[] = $args->menu_id . '-item-' . $depth . '-first';  
    }

    if ($args->menu->count === $item->menu_order) {
        $classes[] = $args->menu_id . '-item-last';
        $classes[] = $args->menu_id . '-item-' . $depth . '-last';
    }

    return $classes;
} // example_add_menu_order_to_menu_item_classes()

add_filter('nav_menu_css_class', 'example_add_menu_order_to_menu_item_classes', 10, 4);
```

To add the "first" classes, we check is $item->menu_order equals 1. If so, add a class that will allow for styling any first menu item and a second class that allow for styling the first menu item at that particular menu depth. Now, we can style all the first menu items and any first menu item at any depth directly using single class.

To add the "last" classes, we compare the menu item count from the menu $args object against the $item->menu_order. If they are equal, we're on the last menu item, so we can add the appropriate classes.

## Adding Menu Link Classes

However, my first example was actually styling the menu item link. We can add classes using the nav_menu_link_attributes filter, just like we did when we added the depth classes.

```astro
/**
 * Adds classes to menu item links.
 *
 * Adds the depth class to make styling easier.
 * Adds the "coin" class if the menu item has the text-coin class.
 *
 * @hooked nav_menu_link_attributes 10
 * @param array $atts The current menu item link attributes.
 * @param object $item The current menu item.
 * @param object $args The wp_nav_menu args.
 * @param int $depth The menu item depth.
 * @return array The modified menu item link attributes.
 */
function example_add_menu_order_to_menu_item_links($atts, $item, $args, $depth) {
    if (empty($item)) { return $atts; }

    if (1 === $item->menu_order) { 
        $atts['class'] .= $args->menu_id . '-item-link-first ';
        $atts['class'] .= $args->menu_id . '-item-link-' . $depth . '-first ';
    }
	
    if ($args->menu->count === $item->menu_order) {
        $atts['class'] .= $args->menu_id . '-item-link-last ';
        $atts['class'] .= $args->menu_id . '-item-link-' . $depth . '-last ';	
    } 
	
    return $atts;
} // example_add_menu_order_to_menu_item_links()

add_filter('nav_menu_link_attributes', 'example_add_menu_order_to_menu_item_links', 10, 4);
```

This function follows the same basic pattern, except how the class is added. Now, the first menu item links and last menu item links can be styled using a single class. We can also style the first or last menu item link at any depth using a single class.

## Wrapping Up

So instead of this:

```astro
.primary-menu-item-0 :not(:first-child) a { 
    border-left: 1px solid; 
    padding-left: 1em;
}
```

We do this:

```astro
.primary-menu-item-link-0 {
    border-left : 1px solid $teal;
    padding : 0 1em; 
} 

.primary-menu-item-link-0-first { 
    border-left: none; 
    padding-left: 0; 
}
```

These are much simpler selectors, so maintainability and troubleshooting will be easier. We also have some really useful classes for styling menu items as needed. Admittedly though, its not as fun as doing it all in one selector.
