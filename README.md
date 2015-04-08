# Simple Slide

## Installation

```bash
meteor add andybb:simple-slide

```

## Example usage

See 'example' folder.

## Simple usage

```js
if(Meteor.isClient) {
  SimpleSlide.config({
    numberOfSlides: Integer 
  });
}
```

Simple Slide assumes that you have made templates with name 'slide-1', 'slide-2' etc. The prefix is configurable. See 'Configuration'.

It comes with built-in support for Markdown and code highlighting like this:


```
<template name="slide-1">
  {{#markdown}}

  ## Something

  `` `js (added space)
  var x = function (test) {
    console.log("hello");
  };
  `` `
  Text here.

  {{/markdown}}
</template>
```

## Configuration

*numberOfSlides*: Integer (mandatory, the number of slides in the presentation) 

*prefix*: String (optional, the default value is 'slide-')

*className*: String (optional, the default value is 'slide'. For styling of the slides.)


## License
MIT