import { useState } from "react";

export const useForm = <T extends Object>(initState: T) => {
  const [formState, setFormState] = useState(initState);

  const onChange = (target: any) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onReset = () => {
    setFormState(initState);
  };
  return {
    ...formState,
    form: formState,
    onChange,
    onReset,
  };
};
