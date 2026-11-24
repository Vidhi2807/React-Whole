import { useState } from 'react';

export default function Api() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setErr('');
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(r => {
        if (!r.ok) throw new Error('Network error');
        return r.json();
      })
      .then(setData)
      .catch(e => setErr(e.message));
  };

  return (
    <div>
      <button onClick={fetchData}>click</button>
      {err && <div style={{color:'red'}}>{err}</div>}
      {data && Array.isArray(data) && (
        <div>
          {data.map(item => (
            <div key={item.id} style={{ border: '1px solid #ccc', margin: '8px 0', padding: '8px' }}>
              <div><strong>ID:</strong> {item.id}</div>
              <div><strong>User ID:</strong> {item.userId}</div>
              <div><strong>Title:</strong> {item.title}</div>
              <div><strong>Completed:</strong> {item.completed ? 'Yes' : 'No'}</div>
            </div>
          ))}
        </div>
      )}
      {data && !Array.isArray(data) && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}