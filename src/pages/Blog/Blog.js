import React from "react";

const Blog = () => {
  return (
    <div className='min-h-screen'>
      <h3 className='capitalize md:text-3xl text-lg font-semibold text-center my-5'>
        Here is all question answer
      </h3>
      <div className='md:w-2/3 w-full px-2 mx-auto'>
        <div className='collapse collapse-arrow border border-base-300 bg-base-300 rounded-box mb-5'>
          <input type='checkbox' className='peer' />
          <div className='collapse-title md:text-lg text-base font-semibold    peer-checked:text-indigo-300'>
            what is cors?
          </div>
          <div className='collapse-content'>
            <p>
              Cross-Origin Resource Sharing CORS is an HTTP-based security
              mechanism controlled and enforced by the client web browser. It
              allows a service API to indicate any origin other than its own
              from which the client can request resources. It has been designed
              in response to the same-origin policy SOP that restricts how a
              website HTML document or JS script loaded by one origin can
              interact with a resource from another origin. CORS is used to
              explicitly allow some cross-origin requests while rejecting
              others.
            </p>
          </div>
        </div>
        <div className='collapse collapse-arrow border border-base-300 bg-base-300 rounded-box mb-5'>
          <input type='checkbox' className='peer' />
          <div className='collapse-title md:text-lg text-base font-semibold    peer-checked:text-indigo-300'>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </div>
          <div className='collapse-content'>
            <p>
              <span>Why are you using firebase?</span>
              <br />
              Firebase can be seen as a server-less backend for mobile apps, web
              apps, etc. It is a service provided by Google. It has many
              features like Realtime database, Cloud functions, Analytics,
              Crashlytics, Cloud Firestore, etc. Firebase is, essentially, a
              key-value store that can use to quickly prototype and run a simple
              application, either native mobile or in-browser javascript.
              <br />
              <br />
              <span>Firebase authentication alternative</span>
              <li>Amazon Cognito</li>
              <li>Backendless</li>
              <li>Auth0 </li>
              <li>Okta</li>
            </p>
          </div>
        </div>
        <div className='collapse collapse-arrow border border-base-300 bg-base-300 rounded-box mb-5'>
          <input type='checkbox' className='peer' />
          <div className='collapse-title md:text-lg text-base font-semibold    peer-checked:text-indigo-300'>
            How does the private route work?
          </div>
          <div className='collapse-content'>
            <p>
              The react private route component renders child components (
              children ) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property.
            </p>
          </div>
        </div>
        <div className='collapse collapse-arrow border border-base-300 bg-base-300 rounded-box mb-5'>
          <input type='checkbox' className='peer' />
          <div className='collapse-title md:text-lg text-base font-semibold    peer-checked:text-indigo-300'>
            What is Node? How does Node work?
          </div>
          <div className='collapse-content'>
            <p>
              Node.js is a server-side platform built on Google Chrome's
              JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl
              in 2009. Node.js is an open source, cross-platform runtime
              environment for developing server-side and networking
              applications.
              <br />
              <br />
              Node.js is the JavaScript runtime environment which is based on
              Google’s V8 Engine i.e. with the help of Node.js we can run the
              JavaScript outside of the browser. Other things that you may or
              may not have read about Node.js is that it is single-threaded,
              based on event-driven architecture, and non-blocking based on the
              I/O model.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
