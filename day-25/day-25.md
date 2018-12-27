# Introduction to Testing

> Test suites are an upfront investment that pay dividends over the lifetime of a system. Today, we'll introduce the topic of testing and discuss the different types of tests we can write.

Okay, close your eyes for a second... wait, don't... it's hard to read with your eyes closed, but imagine for a moment your application is getting close to your first deployment.

It's getting close and it gets tiring to _constantly_ run through the features in your browser... and so inefficient.

There must be a better way...

## Testing

When we talk about testing, we're talking about the process of _automating_ the process of setting up and measuring our assumptions against assertions of functionality about our application.

**The importance of testing in development can’t be stressed enough**. Testing can help reveal bugs before they appear, instill confidence in our web applications, and make it easy to onboard new developers on an existing codebase.

When we talk about front-end testing in the context of Vue, we're referring to the process of making assertions about what our Vue app renders and how it responds to user interaction.

There are two different software testing paradigms that are often done - integration testing, and unit testing.

### Integration testing

Integration testing (often labeled as end-to-end testing) is a top-down approach where tests are written to determine whether an application has been built appropriately from start to finish. We write end-to-end tests as though we are a user’s movement through our application.

Though many integration suites exist, [Nightwatch](http://nightwatchjs.org/) is an end-to-end testing suite that is often used with Vue applications. Nightwatch is Node.js based and allows us to write tests that mimic how a user interacts with an application.

### Unit testing

Unit testing is a confined approach that involves isolating each part of an application and testing it in isolation (i.e. as a unit). Tests are provided a given input and an output is often evaluated to make sure it matches expectations.

Unit tests typically do not require a browser, can run incredibly quickly (no writing to the DOM required), and the assertions themselves are usually simple and terse.

**In the next couple of articles, we’ll be focusing solely on unit testing.**

### Testing Tools

Numerous testing tools/suites exist within the JavaScript ecosystem. Here are some popular tools that you may have come across before:

-   [Mocha](https://mochajs.org/): A JavaScript testing framework that allows us to specify our test suites with `describe` and `it` blocks.
-   [Chai](https://www.chaijs.com/): A testing assertion library that provides interfaces for us to create assertions for our tests (`should`..., `expect`..., `assert`...).
-   [Jest](https://jestjs.io/): A JavaScript testing framework that comes with an assertion library, mocking support, snapshot testing, and more with minimal to no configuration/set-up.

We'll use the Jest testing framework since it comes with its own assertion library that provides a readable testing language and assertions. Finally, we'll use Vue’s official unit testing library, called **Vue Test Utils**, which would provide some really useful testing utility functions that make writing our assertions a breeze.

Tomorrow, we'll get an application set up with the testing in place so that we can start testing the application and be confident it works as we expect. See you tomorrow!
