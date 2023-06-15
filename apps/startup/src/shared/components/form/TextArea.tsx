import React from 'react';
import { Label, TextArea } from '@cuuro/ui';
// import { cn } from '@/lib/utils';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputProps = {
  id: string;
  label: string;
  placeholder: string;
  formHook: UseFormRegisterReturn;
  errorMessage?: string;
  type?: string;
  defaultValue?: string;
  isDisabled?: boolean;
  containerStyles?: string;
};

export const TextAreaInput = ({
  id,
  label,
  placeholder,
  formHook,
  errorMessage,
  type,
  defaultValue,
  isDisabled,
  containerStyles,
}: InputProps) => {
  return (
    <div className={`w-full ${containerStyles}`}>
      <Label htmlFor={id}>{label}</Label>
      <TextArea
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={isDisabled}
        {...formHook}
      />
      <p>{errorMessage}</p>
    </div>
  );
};
