import React, {useState} from 'react';
import {spaceInNum} from '../../utils';
import './InputGoup.css';

const InputGoup = (props) => {
  const {name, isRequired, type, labelText, data} = props;
  const [focus, setFocus] = useState(false);

  const prettyValue = spaceInNum(data.value);

  let inputGroupClassName = focus ? `input-group focused` : `input-group`;

  return (
    <label className={inputGroupClassName}>
      <span className="label">{labelText}</span>
      <span className='placeholder'>{prettyValue}</span>
      <input
        placeholder={'Введите ваш логин'}
        type={type}
        id={name}
        {...data}
        required={isRequired}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </label>
  );
};

export default React.memo(InputGoup);
