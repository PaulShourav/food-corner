import React from 'react';

const Blog = () => {
    return (
        <div className='my-20 my-container'>
            <p className='text-xl'><span className='font-bold'>Q1:</span> Differences between uncontrolled and controlled components?</p>
            <p className='text-xl'><span className='font-bold'>Answer:</span><br /><span className='font-bold'>Controlled Component:</span><br />
                Unlike the uncontrolled component, the input form element in the controlled component is handled by the component rather than the DOM. It takes its current value through props. The changes are notified through callbacks.<br /><span className='font-bold'>Uncontrolled component:</span><br />Similar to the traditional HTML form inputs, the uncontrolled component can be written using a ref to get form values from the DOM. Thus there is no need to write an event handler for every state update and the HTML elements maintain their own state that will be updated when the input value changes.</p>
            <p className='text-xl mt-7'><span className='font-bold'>Q2:</span>How to validate React props using PropTypes</p>
            <p className='text-xl'><span className='font-bold'>Answer:</span>Since parent components can pass down any data as props to child components, we need to validate the data type to ensure the child gets what it expects. Let’s take a look!
                <br />
                React is a JavaScript library used for creating interactive web frontend applications. It is one of the most popular libraries because of its easy-to-use API.
                <br />
                We combine components into an app by passing data from parent components to child components. To do this, we pass data with props. Props are like HTML attributes, but they can contain dynamic data.
                <br />
                A parent component passes props down to child components. And child components receive them. We can pass any data as props. Therefore, we need a way to validate their data type so that the child component gets what they expect.
                <br />
                In this article, we will look at how to validate prop data types with the prop-types library.

                Installi</p>
            <p className='text-xl mt-7'><span className='font-bold'>Q3:</span>Difference between nodejs and express js.</p>
            <p className='text-xl'><span className='font-bold'>Answer:</span><br /><span className='font-bold'>Node.js:</span><br />Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on.,<br /> <span className='font-bold'>Express.js: </span><br />Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.</p>
            <p className='text-xl  mt-7'><span className='font-bold'>Q4:</span>What is a custom hook, and why will you create a custom hook?</p>
            <p className='text-xl'><span className='font-bold'>Answer:</span>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. But what if there is no such library with hooks that can be used? This problem is solved by using custom React JS hooks.
                <br />
                A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. Let’s take a look at some major differences between a custom React JS hook and React JS components:
                
            </p>
            <ul className='list-disc list-inside'>
                    <li>A custom hook does not require a specific signature.</li>
                    <li>A software developer can choose what argument the custom hook has and what should the argument return.</li>
                    <li>A custom hook always starts with the name ‘use’.</li>
                </ul>
        </div>
    );
};

export default Blog;