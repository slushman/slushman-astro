---
layout: layout:Post
title: "Waht is React?"
pubDate: "2022-07-29"
category: ["React Basics"]
heroAccount: "flowforfrank"
heroPhotographer: "Ferenc Almasi"
description: ""
slug: what-is-react
draft: true
---

In my current position, I work with React instead of WordPress. To get this job, I worked hard to learn everything I could about React and the best practices at the time.

In this post, I want to share some things I’ve learned over the past few years of using it daily. But to do that, we have to start with the basics.

## What Is React?

React is a declarative, component-based, JavaScript framework that uses a virtual DOM to reconcile state changes and optionally uses a templating language called JSX. Yeah, that’s a mouthful. Let’s break each of those things down so you can understand each one better.

## Declarative

Declarative development is telling what to do rather than how to do it. It would be like going to a car dealer and telling the salesman you need a vehicle that is:

within your budget
can seat five people
can show movies

They could bring you one of several possible vehicles:

a blue minivan with leather seats and an entertainment system for the back seats in your price range
a three-row SUV with screens built into the rear seats
a stretch limo with an entertainment system and disco ball
a rusty Sherman tank with a built-in DVD player.

Either way, they bring you something that meets the requirements you specified.

Imperative development would be going to that same dealer and stating you want a blue minivan with leather seats and a DVD-based entertainment system. They bring that specific minivan, but it might be more than your budget.

Declarative development makes creating user interfaces simpler. You don't need to specify how and when things change. You state the final result; the framework handles the rest.

## Components

A component is a small, contained, reusable piece of functionality that builds more complex user interfaces. For instance, you use a TextField component as part of a form. The TextField can be used multiple times but contains everything it needs for a text field to work.

Here's a simple component from the [React docs](https://reactjs.org/docs/components-and-props.html):

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

When used multiple times, this simple component creates something more complicated:

```js
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

Building components is a core concept in React. One of the more difficult concepts I may cover later would be when to create a separate component versus a single component.

## JavaScript framework

Javascript, along with HTML and CSS, is one of the core languages used for building websites. It adds interactivity to web pages, allowing manipulation. While Javascript isn't difficult to learn, building web applications with it can be... well, complicated and hard to maintain. React simplifies complex things, allowing you to concentrate on building and innovating, not constantly managing state, handling user interactions, events, etc.

However, when you publish a React app, it boils down to Javascript.

## DOM and Virtual DOM

The [Virtual DOM](https://reactjs.org/docs/faq-internals.html) is one of the more complicated aspects of React. Understanding the browser DOM will help you understand the virtual DOM used by React.

### DOM

DOM stands for document object model. It is an object in memory that represents the web page structure. Having this in memory allows the web page to be manipulated or searched. Every web page has a DOM.

React uses a simulated (or virtual) DOM in memory to manage state changes before inserting them into the real DOM. Why does React do this, you ask? Two reasons:

It makes React declarative
It is much faster

#### Declarative

The virtual DOM allows React to figure out how to get your app into the final state you asked for without needing you to specify how to get it that way. As mentioned above, this allows you to state the final result instead of every step to make the changes. As of React 16, React uses a system called React Fiber to reconcile differences between the virtual DOM and the browser DOM. If you're curious, you can read about React Fiber in this [unofficial documentation post](https://github.com/acdlite/react-fiber-architecture).

#### Faster

Updating the browser DOM is slow because it involves calcuating all the necessary changes in the entire DOM. Web styles done with CSS cascade, which means changes in the upper part of the DOM tree could create different styling for elements lower in the DOM tree. Without advanced knowledge of these differences, the browser could paint items on the screen with the wrong styles and other issues. React uses the virtual DOM to pre-calculate all the changes and then updates the browser DOM.

Every time something changes in a React app a new virtual DOM gets created. React then compares the previous virtual DOM and the new virtual DOM to find the differences, also known as diffing. Then React finds the most efficient way to change the browser DOM so only the updated items are changed. React also puts together several changes at one time, known as batching, to make the performance of DOM changes faster. This entire process is known as reconciliation. In web-based React apps, the ReactDOM library handles reconciling the browser DOM changes.

## JSX

If you have worked HTML, you are familiar with concepts like closing tags and self-closing tags. For example:

Closing tag:

```html
<main></main
```

Self-closing tag:

```html
<br />
```

JSX makes creating React elements very similar to working with HTML elements. For example:

```js
const ExampleComponent = <div>Here is example content</div>;
```

While it is possible to create React elements without JSX, I have yet to meet anyone who prefers this syntax:

```js
class ExampleComponent extends React.Component {
  render() {
    return React.createElement("div", null, `Here is example content`);
  }
}
```

Not using JSX is much more verbose and many shortcuts ultimately end up like JSX.

## Conclusion

React makes writing interactive web-based apps simpler than doing the same in plain JavaScript. In my next post, we'll continue exploring components and JSX.
