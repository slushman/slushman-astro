---
layout: layout:Post
pubDate: "2018-05-23"
title: "Code Sample Styling"
category: ["Design"]
gallery: ["library", "existing-ideas"]
heroAccount: "markusspiske"
heroPhotographer: "Markus Spiske"
description: "While redesigning my site, I wanted to customize the way code samples are displayed. Let's look at the options I explored."
slug: code-and-pre-styling
setup: |
  import Codepen from 'component:Codepen';
  import LibraryGallery from 'gallery:LibraryGallery';
  import ExistingIdeasGallery from 'gallery:ExistingIdeasGallery';
---

I'm starting the process of redesigning this site. One of the components I have found most difficult to style are the code samples. Unfortunately, finding examples of what other people have done is not simple since googling words like "code", "HTML", "CSS", "styling", "code sample", and/or "pre" result in all kinds of randomness. So I thought it would be helpful to publish what I've found so far in case anyone else wants inspiration or to explore possibilities.

## Examples from Known Libraries

I believe there's wisdom in listening to experts first, since (hopefully) they have already figured out all the things. In this case, I wanted to see the designs created by popular CSS libraries. Specifically, I wanted to see how these libraries style pre and code elements out-of-the-box.

NOTE: I'm combining the styling for both the `<pre />` and `<code />` elements here since I want to display a code sample (which uses both elements). I did not use any reset tools on these examples.

### Library Gallery

<LibraryGallery />

Here's the [CodePen Collection](https://codepen.io/collection/nxqYdx/) of all the designs I explored, including some of the ones below.

### No Styling / No Design

While exploring these libraries, I found many either didn't include any specific design at all. I'm not posting screenshots of these since they would be really boring, but here's the list:

- [Tachyons](https://tachyons.io)
- [Semantic UI](https://semantic-ui.com)
- [Pure CSS](https://purecss.io)
- [Blueprint CSS](https://blueprintcss.io)
- [BassCSS](http://basscss.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Kickstart](http://getkickstart.com)
- [Materialize](https://materializecss.com)
- [MUI CSS](https://www.muicss.com)
- [Solid](https://solid.buzzfeed.com)
- [Expressive CSS](http://johnpolacek.github.io/expressive-css/)
- [Beard](http://buildwithbeard.com)
- [Inuit CSS](https://github.com/inuitcss/inuitcss)

### Results for Libraries

Frankly, I had hoped for some amazing design I just copy/paste and move on. But it appears none of them offer a great option. I don't judge too harshly since these libraries are probably great at solving other problems - just not this particular one.

From these options, I would choose Bulma or UIKit. Even those are still pretty basic, so it would still require some polishing to make it look "designed". Next, let's see some examples of how others are styling code samples on their websites.

## Existing Ideas

NOTE: many of these screenshots also include syntax highlighting, which colorizes the code samples. At this point, I'm not talking about coloring the code within the samples, I'm just looking at the pre and code element styling.

<ExistingIdeasGallery />

The most common two styles are the background color only and the borders and background color. Most of the blogs and documentation sites I visited used one of these two options.

Since these two were so popular, I wondered if this was the default browser styling and the site/theme developers didn't bother changing it. So I put together a code sample on my local development server and here's the result:

![Code sample with no styling](/post/code-and-pre-styling/code-sample-with-no-styling.png "Code sample with no styling")

As you can see, in Chrome the only styling appears to be a monospaced font and a 1 em margin on top and bottom. So, while Borders and Background Color and Background Color Only do require adding some styling, they are still rather plain. That said, code samples aren't common for most websites, so it's understandable that designers and developers focus their time and talents on other elements.

Here's a CodePen showing the basic styling for each of these examples (except the line numbers):

<Codepen height="600px" id="bMMKrb" title="Styling Code Samples" />

### Results for Existing Ideas

I think Background Color Only is a little too plain. The Borders with Background Color is a bit better as it feels like someone actually worked on it to make it look that way. Dashed Lines Top and Bottom has a classy feel without adding too much. Border Left and Border Right feel understated, but not lazy or forgotten. All that said, I have to explain the Header With Label option since it's the most involved to do.

### Header With Label

The HTML is just like an y other: a code element wrapped in a pre element. However, the pre element also has a rel attribute that contains the type of the code. In the screenshot below, the "JSX" label text is in the rel attribute on the pre element.

![](/post/code-and-pre-styling/code-sample-css-tricks-jsx.png "Code sample from CSS Tricks block")

This label text appears using a CSS property I hadn't heard of yet: attr(). The attr() CSS function takes the content of the rel attribute and makes that the content of the pseudo element its applied to.

```css
content: attr(rel);
```

The content CSS property only works with pseudo elements. In this case, the :before pseudo element of any pre element that has a rel attribute:

```css
pre[rel]::before {
  content: attr(rel);
}
```

From here, the additional styling makes the label readable and positions it at the top of the pre element.

However, that's not all. The background color of the header changes for each language on the CSS Tricks blog. Purple is the color for JavaScript, jQuery, and JSX code samples, assigned using an attribute selector:

```css
pre[rel="jQuery"]::before,
pre[rel="JavaScript"]::before,
pre[rel="JSX"]::before {
  background: #9c27b0;
}
```

Now, only those pre elements with the proper rel attribute values will get the purple backgrounds.

While I think this is one of the coolest code sample styles out there, it feels heavy for my site. I could probably do this with a different color scheme. However, since I use WordPress, this would require either a custom plugin or hand-coding each code sample to add the rel attribute.

## Summary

I'm still haven't chosen an option yet. The out-of-the-box approach is just out; there's just not enough "designy-ness" that's worth stealing/borrowing/copying. I like most of the examples on other people's sites, with the exception of Line Numbers. If you need that, it's possible to do with just code, but I prefer to keep it simple.
