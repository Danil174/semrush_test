import {useCallback, useEffect} from 'react';
import useInput from '../../customHooks/useInput';
import InputGroup from '../InputGroup/InputGroup';
import {useAppContext} from '../../AppContext';

import './Form.css';

const Form = () => {
  const {
    price,
    setPrice,
    calculateOffer,
    initialPayment, setInitPm,
    period, setPeriod,
    rate, setRate,
  } = useAppContext();

  const apartmentPrice = useInput(price, setPrice);
  const initialPaymentInput = useInput(initialPayment, setInitPm);
  const periodInput = useInput(period, setPeriod);
  const rateInput = useInput(rate, setRate);

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
          labelText={'Первоночальный взнос'}
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

export default Form;
