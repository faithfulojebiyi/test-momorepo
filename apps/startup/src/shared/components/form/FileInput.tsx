import React from 'react';
import { Input, Label } from '@cuuro/ui';
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

export const FileInput = ({
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
    <div className={containerStyles}>
      <Label htmlFor={id}>{label}</Label>
      <div>
        <Input
          id={id}
          placeholder={placeholder}
          type="file"
          defaultValue={defaultValue}
          disabled={isDisabled}
          {...formHook}
        />
        <div className="bg-lightgrey">Choose file</div>
      </div>
      <p>{errorMessage}</p>
    </div>
  );
};
