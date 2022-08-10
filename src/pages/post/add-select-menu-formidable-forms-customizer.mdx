---
layout: layout:Post
title: "How to Add a Select Menu of Formidable Forms in Customizer"
pubDate: "2016-07-18"
category: ["Code Samples"]
heroAccount: "bearock"
heroPhotographer: "Yan Xiong"
description: "Formidable is a great WordPress forms plugin, but it doesn't include a Customizer control for listing your forms. Here's I made one."
slug: add-select-menu-formidable-forms-customizer
relatedPosts:
  - how-to-link-to-the-customizer
---

I recently had a need to list all the published Formidable forms as a select control in Customizer. Formidable doesn't spell out how to get this list, but I eventually stumbled on this method.

```php
$forms = FrmForm::get_published_forms();
$choices = [];

foreach ($forms as $form) {
  $choices[$form->id] = $form->name;
}

// Formidable Forms Select Field
$wp_customize->add_setting(
	'formidable_form_select',
	[
		'capability' => 'edit_theme_options',
		'default' => '',
		'transport' => 'postMessage',
		'type' => 'theme_mod'
	]
);

$wp_customize->add_control(
	'formidable_form_select',
	[
		'active_callback' => '',
		'choices' => $choices,
		'description' => esc_html__('', 'text-domain'),
		'label' => esc_html__('Formidable Forms Select', 'text-domain'),
		'priority' => 10,
		'section' => 'your-section',
		'settings' => 'formidable_form_select',
		'type' => 'select'
	]
);

$wp_customize->get_setting('formidable_form_select')->transport = 'postMessage';
```

[Gist of the code above](https://gist.github.com/slushman/c468381070f431d837afbf5af7e09247)

Brief explanation

Use the get_published_forms() static function in the FrmForm class from Formidable to get an array of public form objects.

Loop through them and add each to the $choices array, which is used for the choices in the Customizer select control.

This control will return the form ID. You could tweak this to use the form key or any other data from the form object.
