import React, {useEffect} from 'react';
import useInput from '../../customHooks/useInput';
import InputGroup from '../InputGroup/InputGroup';
import Button from '../Button/Button';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import {useAppContext} from '../../AppContext';

import './Form.css';

const Form = () => {
  const {
    price,
    initialPayment,
    period,
    rate,
    setPrice,
    calculateOffer,
    setInitPm,
    setPeriod,
    setRate,
    saveData,
    clearData,
  } = useAppContext();

  const apartmentPrice = useInput(price, setPrice);
  const initialPaymentInput = useInput(initialPayment, setInitPm);
  const periodInput = useInput(period, setPeriod);
  const rateInput = useInput(rate, setRate);

  const handleSaveClick = (evt) =>{
    evt.preventDefault();
    saveData();
  };

  const handleClearClick = () => {
    apartmentPrice.clear();
    initialPaymentInput.clear();
    periodInput.clear();
    rateInput.clear();
    clearData();
  };

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
          ico={'₽'}
        />
        <InputGroup
          name={'initialPayment'}
          isRequired={true}
          type={'number'}
          labelText={'Первоначальный взнос'}
          data={initialPaymentInput.bind}
          ico={'₽'}
        />
        <InputGroup
          name={'period'}
          isRequired={true}
          type={'number'}
          labelText={'Срок кредита'}
          data={periodInput.bind}
          ico={'лет'}
        />
        <InputGroup
          name={'rate'}
          isRequired={true}
          type={'number'}
          labelText={'Процентная ставка'}
          data={rateInput.bind}
          ico={'%'}
        />
      </div>
      <ButtonSubmit className="button" text={'Save'}/>
      <Button
        className="button"
        text={'Clear'}
        onClick={handleClearClick}
      />
    </form>
  );
}

export default React.memo(Form);
