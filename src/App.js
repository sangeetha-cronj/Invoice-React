import React from 'react';
import './App.css';
import InvoicePage from './container/InvoicePage';
import { InvoiceProvider } from './Context/InvoiceContext';

function App() {
  return (
    <InvoiceProvider>
      <div className="App">
        <InvoicePage />
      </div>
    </InvoiceProvider>
  );
}

export default App;
