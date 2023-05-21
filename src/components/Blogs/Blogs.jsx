import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blog')
    return (
        <div className='mx-auto bg-sky-100 p-10'>
            <h2 className='text-xl font-semibold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <p className='text-lg mb-3'>Ans:Tokens are pieces of data that carry just enough information to facilitate the process of determining a user's identity or authorizing a user to perform an action. All in all, tokens are artifacts that allow application systems to perform the authorization and authentication process.
                <br /> for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to "refresh" the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again. <br />
                We Can store them local storage or httpOnly cookie
            </p>
            <h2 className='text-xl font-semibold'>2. Compare SQL and NoSQL databases?</h2>
            <p className='text-lg mb-3'>Ans: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <h2 className='text-xl font-semibold'>3. What is express js? What is Nest JS?</h2>
            <p className='text-lg mb-3'>Ans:Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI. </p>
            <h2 className='text-xl font-semibold'>4. What is MongoDB aggregate and how does it work?</h2>
            <p className='text-lg mb-3'>Ans:  Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline</p>

        </div>
    );
};

export default Blogs;