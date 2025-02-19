import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [post, setPost] = useState({});

  async function getPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const json = await response.json();
    setPost(json);
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <h1>hi there</h1>
      <pre>{JSON.stringify(post, null, 2)}</pre> {/* This will display the fetched post */}
    </>
  );
}

export default App;
