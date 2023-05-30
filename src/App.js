import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient,InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Header from './Components/Header';


const client = new ApolloClient({
uri: 'http://localhost:1337/graphql',
cache: new InMemoryCache()
})

export default function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </ApolloProvider>
    </Router>
  );
}
