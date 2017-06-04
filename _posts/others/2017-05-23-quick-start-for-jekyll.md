---
layout: post
category: jekyll
title:  "如何用 github pages 创建博客"
date:   2017-05-23 09:49:14 +0800
tagline: by Snail
tags: [jekyll]
author: 吴锋
comments: true
---
Create a new Jekyll site deploy on github pages.

<!--more-->

## Create a new Jekyll site by doing the following:
  ```sh
  # Install Jekyll and Bundler gems through RubyGems
  ~ $ gem install jekyll bundler
  ~ $ bundler install

  # Create a new Jekyll site at ./myblog
  ~ $ jekyll new myblog

  # Change into your new directory
  ~ $ cd myblog

  # Build the site on the preview server
  ~/myblog $ bundle exec jekyll serve

  # Now browse to http://localhost:4000
  ```

### [Quick-start guide doc](http://jekyllrb.com/docs/quickstart/)

#### JS code style
```js
/**
 * Does a thing
 */
function helloWorld(param1, param2) {
  var something = 0;

  // Do something
  if (2.0 % 2 == something) {
    console.log('Hello, world!');
  } else {
    return null;
  }

  // @TODO comment
}
```
