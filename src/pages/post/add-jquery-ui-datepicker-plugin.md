---
layout: layout:Post
title: "How to Add the jQuery UI Datepicker to a Plugin"
date: "2012-02-23"
category: ["Code Samples"]
heroAccount: 'rawpixel'
heroPhotographer: 'rawpixel'
description: "Using a datepicker when choosing dates is a much nicer user experience. See the best way to add a jQuery DatePicker to a WordPress plugin."
slug: add-jquery-ui-datepicker-plugin
---

**Updated - 4/14/2015**

I've since learned a better way to do this. It essentially does the same thing, the same way, but using better WordPress practices. Use this updated code:

```astro
/**
 * Adds the datepicker settings to the admin footer.
 * Only loads on the plugin-name settings page
 */
function admin_footer() {
	$screen = get_current_screen();

	if ($screen->id == 'settings_page_plugin-name') {
		?><script type="text/javascript">
			jQuery(document).ready(function(){
				jQuery('.datepicker').datepicker({
					dateFormat : 'D, m/d/yy'
				});
			});
		</script><?php
	}
} // admin_footer()
add_action('admin_print_scripts', [$this, 'admin_footer'], 1000);

/**
 * Enqueues the built-in Datepicker script
 * Only loads on the plugin-name settings page
 */
function enqueue_scripts($hook_suffix) {
	$screen = get_current_screen();

	if ($screen->id == $hook_suffix) {
		wp_enqueue_script('jquery-ui-datepicker');
	}
} // enqueue_scripts()
add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);

/**
 * Enqueues a Datepicker theme
 * Only loads on the plugin-name settings page
 */
function enqueue_styles($hook_suffix) {
	$screen = get_current_screen();

	if ($screen->id == $hook_suffix) {
		wp_enqueue_style(
			'jquery.ui.theme',
			plugin_dir_url(__FILE__) . '/css/datepicker.css',
			['jquery-ui-core', 'jquery-ui-datepicker'],
			$this->version,
			'all'
		);
	}
} // enqueue_styles()
add_action('admin_enqueue_scripts', [$this, 'enqueue_styles']);
```

[Gist of the code above](https://gist.github.com/slushman/8fd9e1cc8161c395ec5b)

## Older Method

![datepicker-head](/post/add-jquery-ui-datepicker-plugin/datepicker-head.jpg)

I recently decided to dive into jQuery and figure out how to add a Datepicker to the Seminar system plugin I'm building for the Curb College at Belmont. Thankfully, I didn't need to write one from scratch because [jQuery UI](https://jqueryui.com/) already makes a great Datepicker and including it in a plugin is super easy. While I owe a great deal to [Zigpress's great tutorial](https://www.zigpress.com/2011/04/27/jquery-ui-datepicker-in-wordpress-admin/), the instructions are unfortunately outdated, so I'm going to update them here.

WordPress 3.3 included the jQuery UI Datepicker by default. If you're not using that version or higher, update your WordPress install or you will need to include the files manually. In either case, you will need to include a theme for the Datepicker and add a few lines of code.

FYI, the following code samples show functions and hook calls written within a class. Feel free to adapt as necessary for your code. First, in your __construct() function, you'll need to add a few lines that tell the plugin to reference a function that will include the jQuery references.

### **Add Actions**

```astro
// Add jQuery calender
add_action('admin_print_scripts-post.php', [$this, 'seminar_scripts'], 1000);
add_action('admin_print_scripts-post-new.php', [$this, 'seminar_scripts'], 1000);
add_action('admin_footer', [$this, 'admin_footer']);
```

In my plugin, I'm using the Datepicker for a meta box on the custom post type pages in the admin area, so I'm using the actions admin_print_scripts-post.php and admin_print_scripts-post-new.php and they both call the 'seminar_scripts' function. I also have the admin_footer action call the admin_footer function. Calling the Datepicker only on the required admin pages lowers the overhead for loading the Admin pages, keeping things as small as possible without sacrificing functionality.

### **Enqueue the Script and Theme**

Now we have to functions to define two functions: seminar_scripts() and admin_footer().

```astro
function seminar_scripts() {
   global $post_type;
   if('cemb_seminar' != $post_type) { return; }
   wp_enqueue_script('jquery-ui-datepicker');
   wp_enqueue_style('jquery.ui.theme', plugins_url('/css/jquery-ui-1.8.17.custom.css', __FILE__));
} // End of seminar_scripts() 
```

`seminar_scripts()` starts by checking the post type. If we're not in the correct post type, (cemb_seminar is my custom post type - be sure to change this to match your plugin), then return. Otherwise, enqueue the Datepicker and its theme. Change the plugins_url() link to match your plugin folder structure.

![jqui-theme](/post/add-jquery-ui-datepicker-plugin/jqui-theme.jpg)

For now (2/23/2012), you will need to include a theme for your Datepicker. WordPress doesn't include a theme for the Datepicker, but that should be resolved in a [coming update](https://core.trac.wordpress.org/ticket/18909). To get a theme, go to the jQuery UI [ThemeRoller](https://jqueryui.com/themeroller/), select the Gallery tab on the right sidebar, and choose your theme. I'm using [Smoothness](https://jqueryui.com/download/?themeParams=%3FffDefault%3DVerdana%2CArial%2Csans-serif%26fwDefault%3Dnormal%26fsDefault%3D1.1em%26cornerRadius%3D4px%26bgColorHeader%3Dcccccc%26bgTextureHeader%3D03_highlight_soft.png%26bgImgOpacityHeader%3D75%26borderColorHeader%3Daaaaaa%26fcHeader%3D222222%26iconColorHeader%3D222222%26bgColorContent%3Dffffff%26bgTextureContent%3D01_flat.png%26bgImgOpacityContent%3D75%26borderColorContent%3Daaaaaa%26fcContent%3D222222%26iconColorContent%3D222222%26bgColorDefault%3De6e6e6%26bgTextureDefault%3D02_glass.png%26bgImgOpacityDefault%3D75%26borderColorDefault%3Dd3d3d3%26fcDefault%3D555555%26iconColorDefault%3D888888%26bgColorHover%3Ddadada%26bgTextureHover%3D02_glass.png%26bgImgOpacityHover%3D75%26borderColorHover%3D999999%26fcHover%3D212121%26iconColorHover%3D454545%26bgColorActive%3Dffffff%26bgTextureActive%3D02_glass.png%26bgImgOpacityActive%3D65%26borderColorActive%3Daaaaaa%26fcActive%3D212121%26iconColorActive%3D454545%26bgColorHighlight%3Dfbf9ee%26bgTextureHighlight%3D02_glass.png%26bgImgOpacityHighlight%3D55%26borderColorHighlight%3Dfcefa1%26fcHighlight%3D363636%26iconColorHighlight%3D2e83ff%26bgColorError%3Dfef1ec%26bgTextureError%3D02_glass.png%26bgImgOpacityError%3D95%26borderColorError%3Dcd0a0a%26fcError%3Dcd0a0a%26iconColorError%3Dcd0a0a%26bgColorOverlay%3Daaaaaa%26bgTextureOverlay%3D01_flat.png%26bgImgOpacityOverlay%3D0%26opacityOverlay%3D30%26bgColorShadow%3Daaaaaa%26bgTextureShadow%3D01_flat.png%26bgImgOpacityShadow%3D0%26opacityShadow%3D30%26thicknessShadow%3D8px%26offsetTopShadow%3D-8px%26offsetLeftShadow%3D-8px%26cornerRadiusShadow%3D8px) because I think it most closely matches the WordPress Admin UI.

![jqui-download](/post/add-jquery-ui-datepicker-plugin/jqui-download.jpg)

Clicking the Download button under a theme will take you to a page where you can select options for your jQuery UI download. Select your theme from the Theme drop menu, select the stable version, and click the Download button.

![zip-folder](/post/add-jquery-ui-datepicker-plugin/zip-folder.jpg)

When it finishes downloading, unzip the file and go to the css > smoothness folder. In my plugin, I've got a CSS folder. Drag the jquery-ui-1.8.17.custom.css file and images folder from the zip file into your plugin's CSS folder (or wherever you pointed the plugins_url() line in the enqueue statement in seminar_scripts()).

### **Add the jQuery Script**

```astro
function admin_footer() { ?>
   <script type="text/javascript">
      jQuery(document).ready(function(){
         jQuery('.seminar_date').datepicker({
            dateFormat : 'D, m/d/yy'
         });
      });
   </script><?php
} // End of admin_footer() 
```

admin_footer() includes the actual jQuery statement to make things happen on the page in the footer of your admin page. There are two things here you will need to customize for your plugin: the selector and the date format. jQuery works by looking at the page and finding a part of the page - aka the selector - and performing the script. My selector is the CSS class (.seminar_date) for the date field in the meta box. You'll need to modify that to match the CSS class (or ID) for your date field. The date format determines how the date appears on the page. For my plugin, I choose a format like Mon 2/22/2012. You can see [all the options](https://docs.jquery.com/UI/Datepicker/formatDate) for formatting dates.

That's it!  Once you've added all that code and uploaded the jQuery UI theme, test it out and see the Datepicker appear when you click in the field you selected in the selector.
