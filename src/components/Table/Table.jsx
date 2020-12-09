import {useAppContext} from '../../AppContext';
import {spaceInNum} from '../../utils';

const Table = () => {
  const {monthlyPayment, income, overpayment, loanBody} = useAppContext();

  return (
    <section className='info'>
      <p className='info_item'>
        <span className='info_item_title'>Ежемесячный платеж</span>
        <span className='info_item_value'>{spaceInNum(monthlyPayment)} р</span>
      </p>
      <p className='info_item'>
        <span className='info_item_title'>Необходимый доход</span>
        <span className='info_item_value'>{spaceInNum(income)} р</span>
      </p>
      <p className='info_item'>
        <span className='info_item_title'>Переплата</span>
        <span className='info_item_value'>{spaceInNum(overpayment)} р</span>
      </p>
      <p className='info_item'>
        <span className='info_item_title'>Тело кредита</span>
        <span className='info_item_value'>{spaceInNum(loanBody)} р</span>
      </p>
    </section>
  );
};

export default Table;
