import Form from '../Form/Form';
import './App.css';

function App() {
  return (
    <main>
      <div className="column">
        <Form />
      </div>
      <div className="column">
        <section className='info'>
          <p className='info_item'>
            <span className='info_item_title'>Ежемесячный платеж</span>
            <span className='info_item_value'>222 000 р</span>
          </p>
          <p className='info_item'>
            <span className='info_item_title'>Необходимый доход</span>
            <span className='info_item_value'>222 000 р</span>
          </p>
          <p className='info_item'>
            <span className='info_item_title'>Переплата</span>
            <span className='info_item_value'>222 000 р</span>
          </p>
          <p className='info_item'>
            <span className='info_item_title'>Теле кредита</span>
            <span className='info_item_value'>222 000 р</span>
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
