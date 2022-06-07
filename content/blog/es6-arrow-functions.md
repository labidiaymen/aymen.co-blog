---
title : "ES6 arrow functions"
author : "Aymen"
date : "2015-10-20"
categories : 
 - log
tags : ""
---

ES6 come with a new syntax to resolve  several common pain points of traditional Function Expression.

ES6  introduce a new shorter syntactical for (`function (x) {}`)  
**ES5**

\[js\]

'use strict'; var numbers = \[8, 5, 4, 0\] ; numbers.map( function(x) { console.log(x); }); \[/js\]

 

**ES6**

\[js\] 'use strict'; var numbers = \[8, 5, 4, 0\] ; numbers.map( (x)=> { console.log(x); }) ; \[/js\]
