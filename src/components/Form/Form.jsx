import React, {useEffect} from 'react';
import InputGroup from '../InputGroup/InputGroup';
// import ProcentList from '../ProcentList/ProcentList';
import Button from '../Button/Button';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import {useAppContext} from '../../AppContext';

// import {PROCENTS} from '../../const';

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
    // ratio,
  } = useAppContext();

  const handleSaveClick = (evt) =>{
    evt.preventDefault();
    saveData();
  };

  const handleClearClick = () => {
    clearData();
  };

  useEffect(() => {
    calculateOffer();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price, initialPayment, period, rate,]);

  return (
    <form
      onSubmit={handleSaveClick}
    >
      <div>
        <InputGroup
          name={'price'}
          isRequired={true}
          type={'number'}
          labelText={'Стоимость недвижимости'}
          value={price}
          onChange={setPrice}
          ico={'₽'}
        />
        <InputGroup
          name={'initialPayment'}
          isRequired={true}
          type={'number'}
          labelText={'Первоначальный взнос'}
          value={initialPayment}
          onChange={setInitPm}
          ico={'₽'}
        />
        <fieldset className="controls radio-list">
          {/* <ProcentList
            list={PROCENTS}
            onChange={initialPaymentInput.bind.onChange}
          /> */}
        </fieldset>
        <InputGroup
          name={'period'}
          isRequired={true}
          type={'number'}
          labelText={'Срок кредита'}
          value={period}
          onChange={setPeriod}
          ico={'лет'}
        />
        <InputGroup
          name={'rate'}
          isRequired={true}
          type={'number'}
          labelText={'Процентная ставка'}
          value={rate}
          onChange={setRate}
          ico={'%'}
        />
      </div>
      <fieldset className="controls">
        <ButtonSubmit className="button" text={'Save'}/>
        <Button
          className="button"
          text={'Clear'}
          onClick={handleClearClick}
        />
      </fieldset>
    </form>
  );
}

export default React.memo(Form);
