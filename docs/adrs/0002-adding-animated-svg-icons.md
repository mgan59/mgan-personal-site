---
tags: styled-components animated-svg 
---

# 2. adding-animated-svg-icons

Date: 2021-01-10

## Status

Accepted

## Context

Began adding _animated css_ support for `SVG` icons.  This process was had some challenges as each icon needs a wrapper to support the animation hooks.  One challenge though is each icon is unique in how the `<path>` is styled with either a `fill` or `stroke`.  

## Decision

> The change that we're proposing or have agreed to implement.

In constructing the `<AnimatedSvgIcon />` wrapper needed to support an interface to handle marshalling different settings for `fill` and `stroke`.  Also needed to account for the various `svg` sub-children: `<path>` and `rectangle`.  The final approach was to add _props_ for both the base fill/stroke and for the _hover_ effect.  For most icons we could just default, but in cases such as the __Medium__ icon and __Linkedin__ we were able to then send `transparent` into a specific prop to disable.  And in __Linkedin__ case we need to disable `stroke` and over-ride the `fill` with unique colors.

## Consequences

> What becomes easier or more difficult to do and any risks introduced by the change that will need to be mitigated.

Going forward setting hover effect animations on other SVGIcons just became much easier as we now have a wrapper component.
