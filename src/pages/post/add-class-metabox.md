---
layout: layout:Post
title: "How to Add a Class to a Metabox"
date: "2012-09-08"
category: ["Code Samples"]
heroAccount: 'noodle-kimm'
heroPhotographer: 'noodle kimm'
description: "Toggling the visibility of a metabox using a form requires the metabox to have a custom class. This is how to add custom classes to a metabox."
slug: add-class-metabox
---
While developing a new plugin, I needed to toggle the visibility of some metaboxes. The visibility of each metabox depends on the selected radio button in another metabox. In order to toggle the correct metabox, each metabox needs a distinct class. Check the code samples below for how to add a class to a metabox.

## The Simple Way

```astro
/**
 * The simplistic way to add a custom class to a specific metabox
 *
 * @param   array   $classes    The current classes on the metabox
 * @return  array               The modified classes on the metabox
 */
function add_metabox_classes( $classes = array() ) {

    return array_push( $classes, sanitize_html_class( 'my-custom-class' ) );

} // add_metabox_classes()

/**
 * post_type_name     The name of the post type
 * metabox_id         The ID attribute of the metabox
 */
add_filter( 'postbox_classes_{post_type_name}_{metabox_id}, 'add_metabox_classes' );
```

The add_filter() statement works like this: replace `{post_type_name}` with the name of your post type. Then replace `{metabox_id}` with the metabox id for which you want to add a class.

The add_metabox_classes() function accepts the $classes array, which contains all the classes for the class attribute. In the function, we add a new class to the end of the array, then return it.

Now, you're all finished. The metabox will have your new class and you can target it in a script. I'll write another tutorial on how to use jQuery to show or hide that metabox based on the value of the radio buttons.

EDIT (4/7/2014):

I've recently updated this method in four ways to make it simpler and easier. First of all, the $classes parameter passed in from WordPress is an array, so make sure the parameter itself is optional by assigning it as a blank array if its empty. Second, create an array of the class or classes you'd like to add. Third, check the existing $classes array to make sure you don't add a class that's already in there. Fourth, instead of using the array\_push function, just assign it to the next place in the $classes array using the brackets after the variable.

## The Thorough Way

The more thorough way checks if the class already exists in the metabox classes before adding it. Obviously, this is better, so use this method.

```astro
/**
 * The more thorough way to add a custom class to a specific metabox
 *
 * Uses the same add_filter call, but its easier to add additional classes
 * and it checks if new class is already there.
 *
 * @param   array   $classes    The current classes on the metabox
 * @return  array               The modified classes on the metabox
 */
function add_metabox_classes($classes = []) {
	$add_classes = ['new_class1', 'new_class2'];

	foreach ($add_classes as $class) {
		if (!in_array($class, $classes)) {
			$classes[] = sanitize_html_class($class);
		}
	} // End of foreach loop

	return $classes;
} // add_metabox_classes()

/**
 * post_type_name     The name of the post type
 * metabox_id         The ID attribute of the metabox
 */
add_filter('postbox_classes_{post_type_name}_{metabox_id}, 'add_metabox_classes');
```
