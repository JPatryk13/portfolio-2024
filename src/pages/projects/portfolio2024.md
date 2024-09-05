# Static Portfolio Website

I'm gonna give you a little bit of introduction here but feel free to skip to any other section. My first approach was to utilise [Webflow](https://webflow.com/) to desging and build this website. Unfortunately, soon after I started I found out couple of options hiding behind a paywall. Not willing to pay $14 per month I decided to go with a bit more time consuming - but rewarding - resources. Hence, my choice to go with [Figma](https://www.figma.com/) - for design - and TypeScript/HTML/CSS for front-end. All of which I already knew to some extent. To add a little bit of excitement I introduced myself to [Tailwind CSS](https://tailwindcss.com/) and [React](https://react.dev/).

## Contents
&emsp;1 [Design](#1-design)
&emsp;2 [Builder.io](#2-builderio)
&emsp;3 [Stramlining Creating Projects](#3-stramlining-creating-projects)
&emsp;4 [Keeping it Static](#4-keeping-it-static)

## 1 Design

I don't want to elaborate too much on my design choices. I tried to keep it simple and unique. Did I manage? Have a look at the pictures and feel free to [share your opinion](mailto:jesionka.patryk13@gmail.com)

<...> // design screenshots
<...> // design file

## 2 Builder.io

To explain simply, [Builder.io](https://www.builder.io/) is an online tool for web app design and transforming designs into code with AI. I stumbled upon its plugin for figma while completing my design. The plugin allows to export your design to the builder's interface. One or two more clicks and generative AI produces ready-to-use React components for TypeScript. Dream come true! The generated components needed a bit of work however. First issue that complicated things was that when exporting some information got lost and my design was altered. Second, the HTML code was not optimised and had bunch of Tailwind classes that were redundant. I also ended up removing couple of nodes and pulling out some of the pieces into sub-components to improve readibility. All that said, Builder.io was an extreme help. If for nothing else, I did not end up staring at a blank `.tsx` file for hours before writing anything.

<...> // raw code from builder vs optimised code

## 3 Stramlining Creating Projects

The question I asked myself was how to design a simple-to-use way of creating posts (project descriptions)? I didn't want to build and design a whole UI that would let me do it. I didn't want to use any database either (see [next section](#4-keeping-it-static)). I wanted to avoid using plain HTML and tailwind classes to create each description for a simple reason: I want to be able to forget how this portfolio was designed, come back after a year and still be able to easily add a project description. The answer was: *abstraction*. Creating self-descriptive components that would accept only the content I want to display. The most basic example is `Section`:

```html
<Section title="This is my Amazing Section">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit non lorem at dictum. Vestibulum sit amet arcu bibendum, semper eros id, bibendum sem. Nunc vel lacus suscipit, condimentum tellus quis, euismod turpis. Nunc non velit libero. Pellentesque consectetur eros et eleifend dapibus. Vivamus magna ligula, ullamcorper blandit blandit sit amet, sagittis pretium felis. Suspendisse ac accumsan neque.
</Section>
```

<...> // screenshot of the section
<...> // here maybe I can list all of those components with their use-cases

## 4 Keeping it Static

I see some potential to use a database. For example, relational database to store information like *title* (of the project description), *stage* (`Completed`, `WIP`, etc.), *dateCompleted*, etc. The table would also have a column with a reference to a HTML file with the actual project description. The file could placed in a document store and retrieved when needed. Why then I decided to not do it? Simplicity is the answer. I'm not going to have 500+ projects (not yet at least) and I am the only creator of those descriptions. Going for a database would introduce unnecessary complexity. The tradeoff is that maintainability and extendability of that portfolio may suffer a little bit.