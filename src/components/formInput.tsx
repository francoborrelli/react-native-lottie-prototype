import React from 'react';
import { useFormikContext } from 'formik';
import { Input, InputElement, InputProps } from '@ui-kitten/components';

interface FormInputProps extends InputProps {
  id: string;
}

export const FormInput = ({ id, ...inputProps }: FormInputProps): InputElement => {
  const formContext = useFormikContext();

  // @ts-ignore
  const { [id]: error } = formContext.errors;

  const fieldProps: Partial<InputProps> = {
    status: error && 'danger',
  };

  return (
    <Input
      {...inputProps}
      {...fieldProps}
      caption={error}
      onChangeText={formContext.handleChange(id)}
    />
  );
};
