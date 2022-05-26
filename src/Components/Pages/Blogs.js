import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-blue-100'>
            <div className='container mx-auto py-7 mt-10'>
                    <div tabindex="0" className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"> 
            <div className="collapse-title text-xl font-medium">
            How will you improve the performance of a React Application?
            </div>
            <div className="collapse-content"> 
                <p>Optimizing application performance is key for developers.
                Optimizing performance is an important technique to consider before shipping a React application. 

                Keeping component state local where necessary
                Memoizing React components to prevent unnecessary re-renders.

                Before optimizing a React application, we must understand how React updates its UI and how to measure an apps performance. This makes it easy to solve any React performance problems.

                Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. 

                React builds and maintains an internal representation of the rendered UI (Virtual DOM). When a components props or state changes, React compares the newly returned element with the previously rendered one. </p>
            </div></div>
        </div>

        <div className='container mx-auto py-10'>
          <div tabindex="0" className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"> 
            <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React application?
            </div>
            <div className="collapse-content"> 
                <p>There are four main types of state you need to properly manage in your React apps:
                    1: Local state
                    2: Global state
                    3: Server state
                    4: URL state

                    Local (UI) state – Local state is data we manage in one or another component.
                    The local state is most often managed in React using the useState hook.

                    Global (UI) state – Global state is data we manage across multiple components.

                    A global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                    Server state – Data that comes from an external server must be integrated with our UI state.

                    Server state is a simple concept but can be hard to manage alongside all of our local and global UI state.

                    There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                    URL state – Data that exists on our URLs, including the pathname and query parameters.

                    URL state is often missing as a category of state, but it is an important one. </p>
            </div>
            </div>
        </div>
            <div className='container mx-auto py-10'>
              <div tabindex="0" className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"> 
            <div className="collapse-title text-xl font-medium">
            How does prototypical inheritance work?
            </div>
            <div className="collapse-content"> 
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties to objects. 
                Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. It is a method by which an object can inherit the properties and methods of another object.

                null has no prototype and acts as the final link in this prototype chain.
                Nearly all objects in JavaScript are instances of Object, which has null as its prototype.

                While this confusion is often considered to be one of JavaScript's weaknesses, the prototypal inheritance model itself is, in fact, more powerful than the classic model.

                JavaScript doesn’t use classical inheritance. Instead, it uses prototypal inheritance.

                In prototypal inheritance, an object “inherits” properties from another object via the prototype linkage.</p>
            </div>
            </div>
        </div>

            <div className='container mx-auto py-10'>
             <div tabindex="0" className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"> 
            <div className="collapse-title text-xl font-medium">
            You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
            </div>
            <div className="collapse-content"> 
                <p>I will Destructuring by Props those data. Destructuring is a simple property that is used to make code much clear and readable, mainly when we pass props in React.
                Destructuring is a characteristic of JavaScript, It is used to take out sections of data from an array of objects, We can assign them to our new own variables created by the developer.

                It makes developer’s life easy, by assigning their own variables.
                Nested data is more complex, it takes time to access, but by the use of destructuring, we can access faster of nested data. </p>
            </div>
            </div>
        </div>
                    
    <div className='container mx-auto py-10'>
        <div tabindex="0" className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"> 
            <div className="collapse-title text-xl font-medium">
            What is a unit test? Why should write unit tests?
            </div>
            <div className="collapse-content"> 
                <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                Unit Testing is important because software developers sometimes try to save time doing minimal unit testing and this is a myth because inappropriate unit testing leads to high-cost Defect fixing during System Testing, Integration Testing and even Beta Testing after the application is built. If proper unit testing is done in early development, then it saves time and money in the end.

                Unit testing is an important step in the development process because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                How unit tests work
                A unit test typically comprises three stages: plan, cases, and scripting, and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

                Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Blogs;