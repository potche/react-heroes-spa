import { useState } from "react";

export const useForm = <T extends Object>(initState: T) => {
  const [formState, setFormState] = useState(initState);

  const onInputChange = ({
    target,
  }: {
    target: EventTarget & HTMLInputElement;
  }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initState);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
