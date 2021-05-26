import { useState } from 'react'
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Content from './components/Content';

import './App.css';

function App() {
  const [word, setWord] = useState('')
  const [data, setData] = useState(null)

  return (
    <Layout className="App">
      <Navbar word={word} changeWord={setWord} setData={setData} />
      {
        data && (
          <Content word={word} data={data} />
        )
      }
    </Layout>
  );
}

export default App;
