# Researching technologies in roadmap

## [Backend Roadmap](https://roadmap.sh/roadmaps/backend.png)

### 1. İnternet

    - How does the internet work ?

    - What is HTTP ?

    - Browsers and how they work ?

    - DNS and how it works ?

    - What is Domain Name ?

    - What is hosting ?

### 2. Basic Frontend Knowledge

    - HTML

    - CSS

    - JavaScript

### 3. OS and General Knowledge

    - Terminal Usage

    - How OSs work in General

    - Process Management

    - Threads and Concurrency

    - Basic Terminal Commands
    grep, awk, sed, lsof, curl, wget, tail head, less, find, ssh, kill

    - Memory Management

    - Interprocess Communication

    - I/O Management

    - POSIX Bascis
    stdin, stdout, stderr, pipes

    - Basic Networking Concepts

### &: 4.Learn a Language

    Make sure to learn it's quirks. Core detail about it's runtime e.g. concurrency, memory model etc.

    - JavaScript

    - Ruby

    - Python

    - Java

    - C#

    - PHP

    - Rust

    - Go

### 5. Version Control Systems

    What are they and why you should use one

### &: 6.Basic Usage of Git

    Git

### &: 7.Repo hosting services

    Create account and Learn to use Github
      - Github
      - Gitlab
      - Bitbucket

### 8. Relational Databases

    - PostgreSQL

    - MySQL

    - MariaDB

    - MS SQL

    - Oracle

### 9. More About Database

    - ORMs

    - ACID

    - Transactions

    - N + 1 Problem

    - Database Normalization

    - Indexes and how they work

    - Data Replication

    - Sharding Strategies

    - CAP Theorem

### &: 10. NoSQL Databases

     - MongoDB

     - RethinkDB

     - CouchDB

     - DynameDB

### 11. Learn about APIs

    - REST
    Read Roy Fielding's Paper

    - JSON APIs

    - SOAP

    - HATEOAS

    - Open API Spec and Swagger

    - Authentication
        - Cookie Based
        - OAuth
        - Basic Authentication
        - Token Authentication
        - JWT
        - OpenID
        - SAML

### 12. Caching

    - CDN

    - Server Side
      - Redis
      - Memcached

    - Client Side

### 13. Web Security Knowledge

    - Hashing Algorithms
      - MD5 and why not to use it
      - SHA Family
      - scrypt
      - bcrypt

    - HTTPS

    - CORS

    - SSL/TLS

    - OWASP Security Risks

    - Content Policy

### 14. Testing

    - Integration Testing

    - Unit Testing

    - Functional Testing

### 15. CI / CD

      CI/CD

### 16. Design and Development Principles

    - SOLID

    - KISS

    - YAGNI

    - DRY

    - GOF Design Patterns

    - Domain Driven Design

    - Test Driven Development

### &:17. Architectural Patterns

    - Monolithis Apps

    - Microservices

    - SOA

    - CQRS and Event Sourcing

    - Serverless

### 18. Search Engines

    - Elasticsearch

    - Solr

### 19. Message Brokers

    - RabbitMQ

    - Kafka

### 20. Containerization vs Virtualization

    - Docker

    - rkt

    - LXC

### 21. GraphQL

    - Apollo

    - Relay Modern

### 22. Graph Databases

    - Neo4j

### 23. WebSockets

    - WebSockets

### 24. Web Servers

    - Nginx

    - Apache

    - Caddy

    - MS IIS

### 25. Building for Scale

    General topics that you should learn and core about for the sustainability of the product.

    - Building with Observability in mind
    Metrics loggin and other observable items that could help you in debugging
     and solving the issue when things go wrong

    - Migration Strategies

    - Horizontal vs Vertical Scaling

    - Mitigation Strategies
      - Graceful
      - Degradation
      - Throttling
      - Backpressure
      - Loadshifting
      - Circuit Breaker

    - Understand the Diff.
      - Instrumentation
      - Monitoring
      - Telemetry

<hr>
<br>

## [Frontend Roadmap](https://roadmap.sh/roadmaps/frontend.png)

### 1. İnternet

    - How does the internet work ?

    - What is HTTP ?

    - Browsers and how they work ?

    - DNS and how it works ?

    - What is Domain Name ?

    - What is hosting ?

### 2. HTML

    - Learn the basics

    - Writing Semantic HTML

    - Forms and Validations

    - Conventions and Best Practices

    - Accessibility

    - SEO Basics

### 3. CSS

    - Learn the basics

    - Making Layouts
      - Floats
      - Positioning
      - Display
      - Box Model
      - CSS Grid
      - Flex Box

    - Responsive design and Media Queries

### 4. JavaScript

    - Syntax and Basic Constructs

    - Learn DOM Manipulation

    - Learn Fetch API / Ajax (XHR)

    - ES6+ and modular JavaScript

    - Understanc the concepts Hoisting, Event, Bubbling, Scope, Prototype, Shadow, DOM, strict

### 5. Version Control Systems

    What are they and why you should use one

### &: 6.Basic Usage of Git

    Git

### &: 7.Repo hosting services

    Create account and Learn to use Github
      - Github

      - Gitlab

      - Bitbucket

### 8. Web Security Knowledge

    Get at least a basic knowledge of all these
    - HTTPS

    - CORS

    - Content Security Policy

    - OWASP Security Risks

### 9. Package Managers

    - npm

    - yarn

### 10. CSS Architecture

    With modern frameworks and CSS-in-JS you don't have to worry about these anymore
     but still it would be a good idea to get familiarized with BEM atleast.

    - BEM

    - OOCSS

    - SMACSS

### 11. CSS Preprocessors

    With how the modern frameworks there has been more push towards CSS-in-JS
    so you may not need these but still a good idea to familiarize yourself.

    - Sass

    - PostCSS

    - Less

### 12. Build Tools

    - Task Runners
      - npm scripts

      - Gulp

    - Linters and Formatters
      - Prettier

      - ESLint

      - StandartJS

    - Module Bundlers
      - Webpack

      - Rollup

      - Parcel

### 13. Pick a Framework

    - Vue.js
      - VueX

    - React.js
      - Redux
      - MobX

    - Angular
      - RxJS
      - NgRx

    - Modern CSS
      - Styled Components

      - CSS Modules

      - Styled JSX

      - Emotion

      - Radium

      - Glamorous

### 14. Web Components

    - HTML Templates

    - Custom Elements

    - Shadow DOM

### 15. CSS Frameworks

    - JS based and better to use with your framework based JavaScript applications.
      - Reactstrap
      - Materail UI
      - Tailwind CSS
      - Chakra UI

    - CSS first frameworks which don't come with JavaScript components by default.
      - Bootsrap
      - Marerial CSS
      - Bulma

    - Testing your Apps
    Learn the difference between Until, Integration and Functional tests
    and learn how to write them with the tools listed on the left.
      - Mocha
      - Chai
      - Ava
      - Jasmine

    - You can fill all your testing needs with just these.
      - Jest
      - react-testing-library
      - Cypress
      - Enzyme

### 16. Type Checkers

    - TypeScript

    - Flow

### 17. Progressive Web Apps

    - Learn different Web APIs used in PWAs
      - Storage

      - Web Sockets

      - Service Workers

      - Location

      - Notifications

      - Device Orientation

      - Payments

      - Credentions

    - Calculating, Measuring and improving performance

### 18. Server Side Rendering(SSR)

    - Vue.js
      - Nuxt.js

    - React.js
      - Next.js
      - After.js

    - Angular
      - Universal

### 19. GraphQL

    - Apollo
    - Relay Modern

### 20. Static Site Generators

    - Next.js
    - GatsbyJS
    - Nuxt.js
    - Vuepress
    - Jekyll
    - Hugo

### 21. Mobile Applications

    - React Native
    - NativeScript
    - Flutter
    - Ionic

### 22. Desktop Applications

    - ElectronJS
    - Carlo
    - Proton Native

### 23. Web Assembly
