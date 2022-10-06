import React from 'react';
import './App.css'
import Books from './Books';
import { GCBooksProvider } from './graphql/i-graphql-codegen';

function App() {
  return (
    <GCBooksProvider>
      <div className="App">
        <h1 className="Heading">Books Collection</h1>
        <Books/>
      </div>
    </GCBooksProvider>
  );
}

export default App;
