import React, { useEffect, useState, useMemo } from 'react';
import './App.css';

  const MOCK_TRANSACTIONS: any[] = [
    {id: "1", date: "2025-01-01", description: "desc1", amount: 10},
    {id: "2", date: "2025-01-02", description: "desc2", amount: 10},
    {id: "3", date: "2025-01-03", description: "desc3", amount: 10}
  ];

  function fetchTransaction(): Promise<[]> {
    return new Promise((resolve, reject) => {
      const shouldFail = false;
      setTimeout(() => {
        if (shouldFail) reject(new Error("Failed"))
          resolve(MOCK_TRANSACTIONS);
      }, 1000)
    });
  }

  const PAGE_SIZE = 5

export function App() {
const[transaction, setTransacions] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
const [sortBY, setSortBy]  = useState("date");
const [sortDir, setSortDir] = useState("desc");

const [page, setPage] = useState(1);

useEffect(() => {
  setLoading(true);
  setError(null);

  fetchTransaction()
  .then(data => setTransacions(data))
  .catch(err => setError(err))
  .finally(()=> setLoading(false))
}, [])

const filteredAndSorted = useMemo(() => {
  let result = [..transactions];
  if (startDate) {
    const from = new Date(startDate);
    result = result.filter(t=> new Date((t.date) >= from))
  }
  if (endDate) {
    const to = new Date(endDate);
    result = result.filter(t=> new Date((t.date) >= to)
  }

  result.sort((a, b) => {
    if (sortBY === "date") {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      return sortDir === 'asc' ? da - db : db;
    } else {
      return sortDir === 'asc' ? a.amount - b.amount

    }
  }
  });

const totalPages = Math.max(1, Math.ceil(filteredAndSorted.length / PAGE_SIZE))


  return (
    <div className="app">
      <section className='filters'>
        <div className='date-filter'>
          Form <input type='date' value={startDate} onChange={e => setStartDate(e.target.value)}/>
          To <input type='date' value={endDate} onChange={e => setEndDate(e.target.value)}/>
        </div>
      </section>
      <div>
        Total trans: {summary.count}
        Total amount: 
      </div>
      {loading && <p>Loading</p>}}
      {error && <p>Error</p>}
      (!loading && !error (
        <>
        <table>
          <tr></tr>
          <td></td>
        </table>
        </>
      )
    </div>
  );
}

export default App;
