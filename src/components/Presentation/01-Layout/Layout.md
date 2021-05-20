## Layout

Layout in CSS can be hard, but it doesn't have to be! With some modern techniques you
can get confident with your layouts. Let's explore!

### 1. Grid Template Areas

Say you start your layout from scratch, you have your block elements laid out,
here we have Top, SideA, SideB, content and footer. But you want to turn our stack of
blocks element into something like this (`<Click> Layout 1`) or this (`<Click> Layout 2`) 
or maybe this. (`<Click> Layout 3`)

These three layouts here are using something called `grid-template-areas`, let's take a
look at the code driving this.

Each of the elements is inside a grid container and assigned a grid area. If we look
at container around the elements we can see our grid in a descriptive way. 

In the first layout we have 3x4 grid, in the second 2x4 and the third 2x4. As you can see 
the grid-template-areas are just moved around and this is how it works.

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

### 2. GridRepeat

Here we have a bunch of cards and we don't really know how many, they are just laid
out as blocks one above the other. This is going to be hard to read on large screens, 
but this can be easily solved with grids. `(<click Grid>)`

This `.repeat` class is the grid container of the cards with has some constraints that makes
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

### GridLines

Here we start with a 2x2 grid. We have two boxes in this grid that we have placed out,
let's make it bigger, maybe it could be 8x8.

Now our boxes are up in the left corner, but we can change this. `(<Adjust the boxes>)` Now
what does the numbers say. We can reverse them as well, but let's keep it simple.

grid-column: start-line / end-line
grid-rows: start-line / end-line

If you have grid of 8 rows or columns you will have 9 lines, this is why if we end it at 8
in a 8x8 grid it's one off.

We can overlap our grid items easily if we want, and sometimes we want this to happen in a
design.

