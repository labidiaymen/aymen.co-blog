---
title : "Get File Extension"
author : "Aymen"
date : "2017-08-24"
categories : 
 - jstips
tags : ""
---

# Ho do you get File Extension in **JavaScript** ?

Using **split()** and **pop()** methods

var fileName = "my-picture.jpeg";
var ext = fileName.split('.').pop();

console.log(ext) // jpeg

How about Regular Expression ?

var fileName = "my-picture.jpeg";
var ext = /\[^.\]+$/.exec(fileName)\[0\];

console.log(ext) // jpeg

If you have any other methods **leave a comment.**

:)
