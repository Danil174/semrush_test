import useInput from '../../customHooks/useInput';
import InputGroup from '../InputGroup/InputGroup';
import './Form.css';

const Form = () => {
  const cost = useInput(0);
  const initialPayment = useInput(0);
  const period = useInput(0);
  const rate = useInput(0);

  const handleSaveClick = (evt) => {
    evt.preventDefault();
    console.log(cost.bind.value, initialPayment.bind.value, initialPayment.period.value, initialPayment.rate.value);
  };

  const handleClearClick = () => {
    cost.clear();
    initialPayment.clear();
    period.clear();
    rate.clear();
  }

  return (
    <form
      onSubmit={handleSaveClick}
    >
      <div>
        <InputGroup
          name={'cost'}
          isRequired={true}
          type={'number'}
          labelText={'Стоимость недвижимости'}
          data={cost.bind}
        />
        <InputGroup
          name={'initialPayment'}
          isRequired={true}
          type={'number'}
          labelText={'Первоночальный взнос'}
          data={initialPayment.bind}
        />
        <InputGroup
          name={'period'}
          isRequired={true}
          type={'number'}
          labelText={'Срок кредита'}
          data={period.bind}
        />
        <InputGroup
          name={'rate'}
          isRequired={true}
          type={'number'}
          labelText={'Процентная ставка'}
          data={rate.bind}
        />
      </div>
      <button type="submit">Save</button>
      <button
        type="button"
        onClick={handleClearClick}
      >
        Clear
      </button>
    </form>
  );
}

export default Form;
