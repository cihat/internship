# How To Create a Web Server in Node.js with the HTTP Module

## Introduction

When you view a webpage in your browser, you are making a request to another computer on the internet, which then provides you the webpage as a response. That computer you are talking to via the internet is a web server. A web server receives HTTP requests from a client, like your browser, and provides an HTTP response, like an HTML page or JSON from an API.

A lot of software is involved for a server to return a webpage. This software generally falls into two categories: frontend and backend. Front-end code is concerned with how the content is presented, such as the color of a navigation bar and the text styling. Back-end code is concerned with how data is exchanged, processed, and stored. Code that handles network requests from your browser or communicates with the database is primarily managed by back-end code.

Node.js allows developers to use JavaScript to write back-end code, even though traditionally it was used in the browser to write front-end code. Having both the frontend and backend together like this reduces the effort it takes to make a web server, which is a major reason why Node.js is a popular choice for writing back-end code.

In this tutorial, you will learn how to build web servers using the http module that’s included in Node.js. You will build web servers that can return JSON data, CSV files, and HTML web pages.

## Step 1 — Creating a Basic HTTP Server

Let’s start by creating a server that returns plain text to the user. This will cover the key concepts required to set up a server, which will provide the foundation necessary to return more complex data formats like JSON.

First, we need to set up an accessible coding environment to do our exercises, as well as the others in the article. In the terminal, create a folder called first-servers:

## Step 2 — Returning Different Types of Content
  
The response we return from a web server can take a variety of formats. JSON and HTML were mentioned before, and we can also return other text formats like XML and CSV. Finally, web servers can return non-text data like PDFs, zipped files, audio, and video.

In this article, in addition to the plain text we just returned, you’ll learn how to return the following types of data:

JSON
CSV
HTML
The three data types are all text-based, and are popular formats for delivering content on the web. Many server-side development languages and tools have support for returning these different data types. In the context of Node.js, we need to do two things:

Set the Content-Type header in our HTTP responses with the appropriate value.
Ensure that res.end() gets the data in the right format.
