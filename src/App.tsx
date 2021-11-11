import { useEffect } from 'react';
import api from './services/api';


function App() {

  async function getData() {
    const response = await api.get("/123");

    console.log(response.data);
  }
  useEffect(() => {
    // api.get("/489").then(response => {
    //   console.log(response.data);
    // })

    getData();
  }, [])

  return (
    <div className="App">
      <h1>olá mundo</h1>
    </div>
  );
}

export default App;
