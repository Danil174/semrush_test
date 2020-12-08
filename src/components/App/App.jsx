import Form from '../Form/Form';
import {useAppContext} from '../../AppContext';

import './App.css';

function App() {
  const {monthlyPayment, income, overpayment, loanBody} = useAppContext();
  return (
    <main>
      <div className="column">
        <Form />
      </div>
      <div className="column">
        <section className='info'>
          <p className='info_item'>
            <span className='info_item_title'>Ежемесячный платеж</span>
            <span className='info_item_value'>{monthlyPayment} р</span>
          </p>
          <p className='info_item'>
            <span className='info_item_title'>Необходимый доход</span>
            <span className='info_item_value'>{income} р</span>
          </p>
          <p className='info_item'>
            <span className='info_item_title'>Переплата</span>
            <span className='info_item_value'>{overpayment} р</span>
          </p>
          <p className='info_item'>
            <span className='info_item_title'>Тело кредита</span>
            <span className='info_item_value'>{loanBody} р</span>
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
