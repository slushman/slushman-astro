---
layout: layout:Post
title: "Find User ID by User MetaData"
date: "2011-07-25"
category: ["Code Samples"]
heroAccount: 'd_dandelion'
heroPhotographer: 'david pl'
description: "Getting a particular user by their metadata is not possibile with built-in WordPress functions, but this function does the job."
slug: find-user-id-user-metadata
---

I just wrote this useful function and thought I'd share. I'm working on a plugin for my employer, [Belmont University.](https://www.belmont.edu) I needed to find a user's ID by the user's barcode metadata. WordPress does not have a built-in function for this, but this custom function works nicely. Add it to your theme's functions.php file or to a plugin file (in my case, this is part of plugin). Here's the function:

```astro
/**
 * Returns a list of user IDs matching the metavalue
 * @param 	string 		$metakey 	The metadata key
 * @param 	string 		$metavalue 	The value to find
 * @return	array|bool 			An array of user IDs or false
 */
function get_user_by_metadata($metakey, $metavalue) {
    $return = [];
	
    $args['fields'] = 'ID';
    $args['meta_key'] = $metakey; 
    $args['meta_value'] = $metavalue;

    $user_query = new WP_User_Query($args);
	
    if (empty($user_query->results)) { return FALSE; }
	
    return $user_query;
} // get_user_by_metadata()
```

[Gist of the code above](https://gist.github.com/slushman/f236ae998f7b5cd7a49c)

Keep in mind, this returns an array, not a string.
