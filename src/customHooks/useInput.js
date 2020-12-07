import {useState} from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = evt => setValue(evt.target.value);

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
