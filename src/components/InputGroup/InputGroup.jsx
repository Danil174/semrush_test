import React, {useState} from 'react';
import {spaceInNum} from '../../utils';
import './InputGoup.css';

const InputGoup = (props) => {
  const {name, isRequired, type, labelText, ico, value, onChange} = props;
  const [focus, setFocus] = useState(false);

  const prettyValue = spaceInNum(value);

  let inputGroupClassName = focus ? `input-group focused` : `input-group`;

  return (
    <label className={inputGroupClassName}>
      <span className="label">{labelText}</span>
      <span className='placeholder'>{prettyValue}</span>
      <span className="ico">{ico}</span>
      <input
        type={type}
        id={name}
        value={value}
        onChange={(evt)=> onChange(+evt.target.value)}
        required={isRequired}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </label>
  );
};

export default React.memo(InputGoup);
