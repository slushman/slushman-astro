---
layout: layout:Post
title: "New Site for 2022"
pubDate: "2022-06-10"
category: ["News"]
heroAccount: "ninjason"
heroPhotographer: "Jason Leung"
description: "I rebuilt this site using the relatively new static site generator, Astro. Check out some details and things I learned along the way."
slug: new-site-2022
draft: true
---

So you're looking at a completely rebuilt site! Yeah, the design didn't change at all, but under the hood, it's all-new.

My previous site was built with Gatsby, which uses React. At the time, I was learning React and thought I'd get some additional practice by building my site. Gatsby was also relatively new at the time and seemed to fit the bill. While it was a bit of a challenge to work with, especially as a newer React developer, it was even more challenging to update it to the latest version this year. So, I opted for something else.

I used Astro because it promises to be a simple and easy static site generator that can use Markdown files for the content. It can use any JS-based library. It even has a custom component system, if you want to use that. So, I did. I'm glad I did because frankly, it makes updating my blog much, much easier. But getting the project built took more engineering muscle than I thought I would need. So, here are some things I learned while working with Astro.

## Tailwind

Ok, this technically isn't part of working with Astro, but I used the Tailwind library to style the entire site. Well, almost the entire site. I found the utility classes easy to work with and much simpler to keep track of how things are styled vs css-in-js. I still have to keep the documentation open when styling things because some of the style classes don't use the numbers I would use or immediately understand, but I've still found it fun to use.

Astro has built-in support for Tailwind and clear instructions, so it would very easy to set up and use. The biggest challenge I had with Tailwind was trying some more advanced things, like combining pseudo-classes. I think it may still be possible, but falling back to the global stylesheet was easier.

## Images

On the Gatsby of the blog, any images I wanted to use in a post, I'd put in the same folder as the post and would reference that image as I would in React, just as a local file in the same folder where I was working. That's not how things work in the Astro realm though. Most images are put into the /public folder and then you can include them in your content easily.

## React and Image Galleries

This was the biggest disappointment with using Astro. It says you can use just about any JS library and gives instructions for React, Preact, Svelte, and a few others. I chose React, since I work with that every day, and while the syntax for using Astro components works almost the same way as a React component, I wasn't able to get any actual React components to work. This was especially frustrating with my image galleries.

### The Problem

One of the few features on this site is the two image galleries on the [Code Samples Styling](/post/code-and-pre-styling/) post. On the Gatsby and WordPress versions of this site, creating a gallery was fairly easy. You put together a grid of thumbnail images and when you click one, it opens a larger version with an underlay and lightbox.

When I put together this Astro site, I thought I'd be able to easily build a simple React-based component that would do the lightbox/underlay functionality. But as I worked with the React components, I found they weren't doing anything. Showing HTML worked, but any kind of JS just did nothing.

### The Solution

Thankfully, I did find a workable solution, as you'll notice if you go to that post and click one of the images. [CSSBox](https://github.com/TheLastProject/CSSBox) is an ingenious CSS-only image gallery, with no JS at all. Which is amazing.

I won't go into all the details, but it works like this: each thumbnail is an image within a link. The link links back to itself as an on-page link, which sets the `:target` pseudo attribute on that element. You then use that `:target` pseudo attribute to then display the larger version of the image. It's ingenious and simple.

As far as React, I probably did something wrong, but I have no idea what. If I need it, I'll explore adding actual React components to this site in the future, but I'll always go for plain HTML and CSS first anyway.

### How to Get the Images

As far as including the images, I had to rig up a bunch of workarounds. First, all the images are in the /public folder. In there, I created a gallery folder, then each gallery has a folder in there, which then contains the images for the gallery.

Each gallery has a unique slug, so you can get those specific images for that specific gallery from wherever. I wanted to grab all the image files in said folder but couldn't figure that out. Ultimately, I created an Astro component for each gallery, then included that in the content. The component contains all the URLs to get to each image, so you can order them however you prefer. But it would be much nicer to just create the folder, fill it with images, then include the Gallery component and give it the folder name. Maybe someday.

## getStaticPaths

The other thing I got stuck on was creating a layout used for dynamic paths, like a category page that shows whatever posts are in that category. I read through the documentation and didn't understand it at all. The getStaticPaths function was the thing to use, but it took me longer than I preferred to understand what I was supposed to do with it. What I wanted was a good example of how to use it. I eventually found it, which was helpful. And funny enough, once I figured it out, the documentation made complete sense. Documentation is generally funny that way. It's usually written concisely, so if you already understand the concept, it makes perfect sense, but if you're clueless like I was, it's not much help. But even crazier, it's also difficult to go back and write something that would help you understand it better.

## Code Samples

This last challenge just got resolved with the release of version 0.24. I'm not sure what kind of magic they sprinkled in there, but it completely fixed my issue.

As you'll see, if you explore my blog, I have tons of code samples mixed into the content, much of which are snippets of PHP or CSS to use with WordPress. For some reason, the Markdown parser used by Astro wasn't detecting the code sample content correctly, so things like:

```php
function someRandoFunc() {
 // code here
}
```

Would get all tripped up on the opening curly braces and break the site. When I updated to version 0.24, it all just worked. 🤷‍♂️

All in all, I think Astro has a bright future and I'm planning to keep it around. I'm hoping they add some built-in components for dealing with images so you get an optimized image for the viewer size like Gatsby has. I believe it's in the works, but it's not out there, as of this writing.

## Conclusion

I'm planning to post much more soon. I plan to start with a short series about getting a job as a web developer; starting with what to learn.
