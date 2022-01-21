---
layout: layout:Post
title: "Adding a Custom Class to a Submit Button"
date: "2013-01-17"
category: ["Code Samples"]
heroAccount: 'coolmilo'
heroPhotographer: 'camilo jimenez'
description: "Adding another class to a submit button can make certain designs easier to manage."
slug: adding-custom-class-submit-button
---
While you can hand-code the HTML for a submit button in a form, WordPress has a nice function, [submit_button()](https://codex.wordpress.org/Function_Reference/submit_button), that echoes the correct code for you.

For a recent project, I wanted to restyle some buttons to make them look like links rather than buttons. While you don't NEED a special class to pull this off, it is easier and neater in the CSS. I thought this would be achievable in the $other_attributes. However, the $type parameter accepts any string, not just the WordPress defaults.

Whatever you put there appears in the class attribute of the button. Then use that class to style the button however you wish!

```astro
/**
 * Default WordPress submit() parameters
 * 
 * @param  string  $text              changes the text on the button
 * @param  string  $type              determines the style of the button. WordPress styling options:
 *    primary - the default
 *    secondary
 *    delete
 *    custom - add your custom class for styling here!
 * @param  string  $name              sets the name attribute for the button, its "Submit" by default.
 * @param  string  $wrap              determines if the button is wrapped in paragraphs tags or not,
 *     the default is true.
 * @param  array   $other_attributes  sets other attributes for the button.
 */
submit_button('Whatever Text', 'my-custom-class');
```

[Gist of the code above](https://gist.github.com/slushman/a32d7d8f5bbd4fa04602)
