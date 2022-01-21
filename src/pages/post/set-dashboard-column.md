---
layout: layout:Post
title: "How to Set Dashboard to Use One Column"
date: "2011-08-11"
category: ["Code Samples"]
heroAccount: 'alexread'
heroPhotographer: 'Alex Read'
description: "Check out how to change the Dashboard columns to what you want."
slug: set-dashboard-column
---

I'm working on a plugin where I need the Dashboard to have one column for all users. While I could log into every user and change their Screen Options to one column, it would take next to forever with thousands of students accessing this site. Thankfully, I found this bit of code on [Stackexchange](https://wordpress.stackexchange.com/questions/4552/how-do-i-force-a-single-column-layout-in-screen-layout) (thanks sorich87!) and modified it for the Dashboard page. This will force all users to have one column on the Dashboard.

```astro
function screen_layout_columns($columns) {
    $columns['dashboard'] = 1;

    return $columns;
}

add_filter('screen_layout_columns', 'screen_layout_columns');



function screen_layout_dashboard() {
    return 1;
}

add_filter('get_user_option_screen_layout_dashboard', 'screen_layout_dashboard');
```

[Gist of the code above](https://gist.github.com/slushman/dafa494f9d76ce4252b5)
