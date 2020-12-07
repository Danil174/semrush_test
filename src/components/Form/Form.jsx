import {useCallback} from 'react';
import useInput from '../../customHooks/useInput';
import InputGroup from '../InputGroup/InputGroup';
import React from 'react';

import './Form.css';

const Form = () => {
  const cost = useInput(0);
  const initialPayment = useInput(0);
  const period = useInput(0);
  const rate = useInput(0);

  const handleSaveClick = useCallback((evt) =>{
    evt.preventDefault();
    console.log(cost.bind.value, initialPayment.bind.value, period.bind.value, rate.bind.value);
  }, [cost, initialPayment, period, rate])

  const handleClearClick = useCallback(() => {
    cost.clear();
    initialPayment.clear();
    period.clear();
    rate.clear();
  }, [cost, initialPayment, period, rate])

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
