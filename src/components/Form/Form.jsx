import React, {useCallback, useEffect} from 'react';
import useInput from '../../customHooks/useInput';
import InputGroup from '../InputGroup/InputGroup';
import {useAppContext} from '../../AppContext';

import './Form.css';

const Form = () => {
  const {
    setPrice,
    calculateOffer,
    setInitPm,
    setPeriod,
    setRate,
  } = useAppContext();

  const apartmentPrice = useInput(0, setPrice);
  const initialPaymentInput = useInput(0, setInitPm);
  const periodInput = useInput(0, setPeriod);
  const rateInput = useInput(0, setRate);

  const handleSaveClick = useCallback((evt) =>{
    evt.preventDefault();
    console.log(apartmentPrice.bind.value, initialPaymentInput.bind.value, periodInput.bind.value, rateInput.bind.value);
  }, [apartmentPrice, initialPaymentInput, periodInput, rateInput])

  const handleClearClick = useCallback(() => {
    apartmentPrice.clear();
    initialPaymentInput.clear();
    periodInput.clear();
    rateInput.clear();
  }, [apartmentPrice, initialPaymentInput, periodInput, rateInput])

  useEffect(() => {
    calculateOffer();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apartmentPrice.bind.value, initialPaymentInput.bind.value, periodInput.bind.value, rateInput.bind.value]);

  return (
    <form
      onSubmit={handleSaveClick}
    >
      <div>
        <InputGroup
          name={'apartmentPriceInput'}
          isRequired={true}
          type={'number'}
          labelText={'Стоимость недвижимости'}
          data={apartmentPrice.bind}
        />
        <InputGroup
          name={'initialPayment'}
          isRequired={true}
          type={'number'}
          labelText={'Первоначальный взнос'}
          data={initialPaymentInput.bind}
        />
        <InputGroup
          name={'period'}
          isRequired={true}
          type={'number'}
          labelText={'Срок кредита'}
          data={periodInput.bind}
        />
        <InputGroup
          name={'rate'}
          isRequired={true}
          type={'number'}
          labelText={'Процентная ставка'}
          data={rateInput.bind}
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

export default React.memo(Form);
