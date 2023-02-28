import { useState } from 'react';

export const useInitialState = (initial) => {
  const [value, setValue] = useState(initial);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};
