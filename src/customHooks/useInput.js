import {useState} from 'react';

const useInput = (initialValue, action) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (evt) => {
    action(+evt.target.value);
    setValue(+evt.target.value);
  };

  const clear = () => setValue('');

  return {
    bind: {
      value,
      onChange
    },
    clear
  }
}

export default useInput;
