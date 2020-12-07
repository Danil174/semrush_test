import {useState, useCallback} from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(evt => setValue(evt.target.value), []);

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
