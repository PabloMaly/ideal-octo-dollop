import React from 'react';
import './App.css';

export function App() {

  const MOCK_TRANSACTIONS: any[] = [
    {id: "1", date: "2025-01-01", description: "desc1", amount: 10},
    {id: "2", date: "2025-01-02", description: "desc2", amount: 10},
    {id: "3", date: "2025-01-03", description: "desc3", amount: 10}
  ];

  function fetchTransaction(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const shouldFail = false;
      setTimeout(() => {
        if (shouldFail) reject(new Error("Failed"))
          resolve(MOCK_TRANSACTIONS);
      }, 1000)
    });
  }
  return (
    <div className="app">
    </div>
  );
}

export default App;
