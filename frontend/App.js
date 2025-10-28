import React, { useState } from 'react';

function App() {
  const [code, setCode] = useState(`console.log('Hello CipherStudio')`);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Welcome to CipherStudio</h1>
      <p>This is a placeholder React app for your IDE project.</p>
      <textarea
        style={{ width: '100%', height: '200px' }}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <pre style={{ background: '#f4f4f4', padding: '10px' }}>
        {code}
      </pre>
    </div>
  );
}

export default App;
