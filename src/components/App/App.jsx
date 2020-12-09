import Form from '../Form/Form';
import Table from '../Table/Table';

import './App.css';

function App() {
  return (
    <main>
      <div className="column">
        <Form />
      </div>
      <div className="column">
        <Table />
      </div>
    </main>
  );
}

export default App;
