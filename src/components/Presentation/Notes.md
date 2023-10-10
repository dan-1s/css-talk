# CSS Talk

Hi,

My name is Dan. I'm a software developer working for Webstep. I'm passionate about
programming, front- and backend. I've worked a lot with React, Node, Elixir and
currently I work with Svelte.

## Layout

Layout in CSS can be hard, but it doesn't have to be! With some modern techniques you
can get confident with your layouts.

### 1. Grid Template Areas

Say you start your layout from scratch, you have your block elements laid out,
here we have Top, SideA, SideB, content and footer. You want to turn your
blocks element into something like this (`<Click> Layout 1`) or this (`<Click> Layout 2`)
or maybe this. (`<Click> Layout 3`)

These three layouts here are using something called `grid-template-areas`, let's take a
look at the code driving this.

Each element is inside a grid container and assigned a grid area. If we look
at the container css our grid is there in a descriptive way.

In the first layout we have 3x4 grid, in the second 2x4 and the third 2x4. As you can see
the grid-template-areas are just moved around, this is how it works.

We can adjust the grid:

```
Play around - change the values of the grid, some suggestions:
- Make footer take up all horizontal space
- Switch top with footer
- Grid areas need to be connected, this does not work: "footer . footer"
- A grid area can not cross directions (h,v), this does not work:
  "content content sideB"
  "sideA content sideB"
- Use dot to show how it allows the grid space to unoccupied
- In layout one add a new row below top: "sideA . sideB"
```

### 2. Grid repeat

Here we have a bunch of cards and we don't really know how many, they are just laid
out as blocks one above the other. This is going to be hard to read on large screens,
but this can be easily solved with grids. `(<click Grid>)`

This `.repeat` class is the grid container of the cards with some constraints that makes
them wrap.

First the `minmax(40ch, 1fr)` which could be translated to minimum of 40 characters and if
there's some space over just fill it out evenly between the elements.

Then we have the `auto-fit` that wraps the content automatically given minmax constraints,
with a specific number it break boundaries if it won't fit as we can see.
`(<Set a number that show how breaks the boundary>)`

There's also `auto-fill` option, the easiest way to explain the difference is by an
example. `(<Start with a high number of cards and go down to one>)`.

By shrinking the number of grid items of the grid we can see the difference between the
`auto-fit` and `auto-fill` option.

The content is only laid out in one direction and then wraps when it doesn't fit,
so this can also be solved with flexbox as we can see.

### Grid lines

Here we start with a 2x2 grid. We have two boxes in this grid that we have placed out,
let's make it bigger, maybe it could be 8x8.

Now our boxes are up in the left corner, but we can change this. `(<Adjust the boxes>)` Now
what does the numbers say. We can reverse them as well, but let's keep it simple.

grid-column: start-line / end-line
grid-rows: start-line / end-line

If you have grid of 8 rows or columns you will have 9 lines, this is why if we end it at 8
in a 8x8 grid it's off by one.

We can overlap our grid items easily if we want, and sometimes we want this to happen in a
design.

## Custom Properties

Custom Properties aka CSS Variables are really powerful and can simplify
customization of a design. With CSS pre-processors like Sass and Less we
only get build/compile time variables, Custom Properties work at runtime.

To avoid confusion: I might say custom properties, css variables or just variables,
just now it's the same thing.

### 1. Sliders

So what does it mean being runtime? When I change these sliders here, I'm
not targeting any of the elements that's changing or any of the rules that's
specified for the elements, no css is rebuilt or adjusted.

We are changing something though, so let's take a look `(<Open dev tools and show>)`:
it's only this style property (for the html tag).

### 2. Awesome button

Now if we look at the code in the left code box we have some custom properties defined at the
root of the document, in HTML it's the html tag.

On the left side we have a `.awesome-btn` class with some custom properties for the
border-radius and the background. Then we have this "not-so-awesome" button, let's change
that.

Now it has the css applied from the right side, and it's using the variables from the left
side, let's play around. `(<change the values and see them applied>)`

- Here we also can see how we can use custom properties with calc and convert
  numbers to something else using css.

### 2. Scoping

Here we have our button again, we can re-adjust the variables, and they are applied at
the top level like before.

Now if we add a new button it has its own variables applied. This is scoping
, the rules in the style tag are more specific and takes precedence. We can change
them again and add another button.

It's not hard to see how this could be useful, allowing css variables to be configurable,
and the consumer can apply his/her own style configuration at a component level.

### 3. Color Palette

Here we can see how we can leverage custom properties to create a color palette. These
are used in my presentation, but let's change our theme a bit going forward.
`(<pick new colors>)`

## Clip path

With clip path we can create and apply different shapes on elements.

### 1. Shapes

Here we have a pentagon, star, triangle and arrow. In the code they are all
represented as polygon with different percentages. We can adjust these
values how we want, and the shape changes. `(<adjust the value>)`

Now we are applying this to an image, but we can apply it to other things as
well, like this code section. `(<click on Off / On)>`

Now you can draw these by hand but its probably faster and easier to use
tools like [clippy](https://bennettfeely.com/clippy/).

Here we only showcased some simple shapes, it's also possible to use path
attribute from SVGs.

### 2-3 Animate Shapes

I'm going to show some animations, but I need to clarify that it's expensive to
animate these properties, so we keep this in mind. Most performant properties to
animate is `opacity` and `transforms`, but I think if it's done in moderation it's
fine to animate.

Now let's do some animations! We can animate the shape as long as they have the same
number of polygon entries. I can change these values, and the animation changes. `(<tweak values>)`

Here we have a star that's being changed, we have the same number of polygon entries
in each step of keyframe animation. I can drop some entries in the animation, but then
it won't transition properly. `(<Drop some entries in 33% section>)`

### 4. Shape outside

Shapes like the ones used in Clip Path can also be used for layouts, if you look at this
image you'll see the text wraps around it. It's also responsive, if we adjust the screen size the
text adapts.

This is polygon matching the image shape, we can see the shape by expecting the element in the
dev tools. `(<open dev tools and inspect image>)`

Let's look at the code. This is using floats, if I we remove the float it no longer has the
effect we want. The `shape-outisde` property is the one that applies the polygon shape.

Just as before you can use tools like [clippy](https://bennettfeely.com/clippy/) to help in
creating layouts like this.

### 5. Reveal

Here we have another example of a reveal effects that's using clip path. We have two images,
one where the object has been lifted from the background and placed in front the original image.
We use another simple shape `circle` and transition between 0 and 100 percent.

This effect can be really cool when used with full screen images.

## Filter and Mask

### 1. Intro

We have this silhouette of a jumping person here.

- But the image is not actually a silhouette `(<clicking nr 2>)`
- It doesn't have a shadow, but we can add one `(<clicking nr 3>)`
- One more in a different color `(<clicking nr 4>)`

This is filters in action. Let's look at the code. `(<show code and adjust values>)`

### 2. Ground Shadow

Here you can see we have two images one in front of the other. Let's see how we can use filters
again to create another shadow effect.

- `<go through the steps without the code>`
- `<go through the steps with the code>`

### 3. Backdrop filters

In our previous examples we applied filters directly on some images. In this example we are
going to apply filters for the background. `(<click the ? to reveal to code when selecting>)`

You can't see it yet but here in the middle there's a box. We are now going to apply a backdrop
filter to this box, and this should allow you to see it. We can move the box around and see
how the filter is applied behind the box.

We are only moving this box within the image, but we can allow it to escape its boundaries.
`(<change to: calc(var(--x) * 1)>)`

### 4. Mask

Here we have a mask applied an image we can see the image we are applying down in the corner.
We can move the position around to adjust where the mask is going to be placed.

With some css changes we can make the person jump out of the box. This looks pretty cool!
`(<use some css transforms>)`

## Images and layout

### 1. Reserve space for images

What I'm going to show you here is not all CSS, sometimes you need help from the good
old HTML. This is something you may encounter, especially if your on a low bandwidth connection.

Let's say you're on the subway or bus, so we need to crank this up a bit. `(<up delay to 2000ms>)`

You start reading and suddenly everything jumps, and you loose focus, and you know it's
really easy to fix in all modern browsers.

All we need to do is to specify height and width attributes for the images with a correct
width to height relation (aspect-ratio), just use the image dimensions, and you're good to go.

Just make sure your css for the image is responsive, e.g. `width: 100%; height: auto;`

### 2. What about lazy loading

Chrome reserves space even if the image has no `src` attribute, but you get this lines around
the images, and of course we have no have images now, so that's bad.

Let's fix it! Chrome, Firefox and Edge all have native lazy loading for images. So we can keep the
`src` attribute and add `loading=lazy` to our images.

Safari has it behind an experimental flag, but we can do our own lazy load?

### 3. Manual Lazy loading and reserve space

Without a `src` attribute Safari it will not reserve space. Here we use intersection observer
and when it intersects according to threshold it will add the `src` attribute and load the image.
If the threshold is 0.7 it means that it will fire when the image is 70% visible.

This workaround uses SVG with viewBox matching our dimensions.
