---
notes: TODO, update to include how we load into index and WHY, makes sense once we add storybook
tags: design-system mgan
---

# Design System

A design system is being constructed for the work on my personal website and this document will serve as the primary resource for all design related material.

## Technical Overview

### CSS & Theming

We've adopted JS-AS-CSS for our component design system and specifically use [Styled-Components](https://styled-components.com/).

To understand our theme view the [themeConstants.js](https://github.com/mgan59/mgan-personal-site/blob/main/themeConstants.js) file found in root.  

### Component Organization

The website has it's components organized within the `pages/core/componets/` folder using Brad Frost's [atomic design principles](https://bradfrost.com/blog/post/atomic-web-design/).

## Fonts

Currently we are using four fonts for the website which are all on Google-Fonts.

- [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) which is our main body copy on the site.  IBM plex was selected as the body-copy because of its versatile set of font-weights AND it is highly legible on mobile screens versus some traditional fonts.  This is referenced as `theme.fonts.body` in our `theme-provider`.

- [Roboto Sans Slab](https://fonts.google.com/specimen/Roboto+Slab) is used to cast my name _Morgan Craft_ on the site BUT also serves as the majority of the sections headers.  This is referenced as `theme.fonts.primaryHeader` in our `theme-provider`.  

- [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro) is used as an additional variation of section headers to denote/accent additional hierarchical information.  This is referenced as `theme.fonts.secondaryHeader` in our `theme-provider`.

- [Lora](https://fonts.google.com/specimen/Lora) is our last font we use sparingly, and it is meant as a decorative font in instances we want something to standout our emphasize a concept.  This font was selected primarily to be used with `italics` as the decorative nature is more nuanced.  This is referenced as `theme.fonts.accent` in our `theme-provider`.

## Colors

> WIP, this is up next is to consolidate our color-palette