---
layout: layout:Post
title: "Returning a submit button"
date: "2013-01-17"
category: ["Code Samples"]
heroAccount: 'joshcala'
heroPhotographer: 'Josh Calabrese'
description: "See how to return a submit button instead of echoing it."
slug: returning-submit-button
---

In WordPress, the submit_button() function echoes a submit button. However, there are occasions where one might need a submit button, but not echoed. Like when returning a form from a function. For those occasions, use the [get_submit_button()](https://codex.wordpress.org/Function_Reference/get_submit_button) function instead. get_submit_button() accepts the same arguments as submit_button(), but returns instead of echoing.
