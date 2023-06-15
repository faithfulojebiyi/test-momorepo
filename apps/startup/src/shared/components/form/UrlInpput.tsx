import React from 'react';
import { Input, Label } from '@cuuro/ui';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputProps = {
  id: string;
  label: string;
  placeholder: string;
  formHook: UseFormRegisterReturn;
  errorMessage?: string;
  defaultValue?: string;
  isDisabled?: boolean;
  containerStyles?: string;
};

export const UrlInput = ({
  id,
  label,
  placeholder,
  formHook,
  errorMessage,
  defaultValue,
  isDisabled,
  containerStyles,
}: InputProps) => {
  return (
    <div className={containerStyles}>
      <Label htmlFor={id}>Username</Label>
      <div className="mt-2">
        <div className="flex rounded-md">
          <span className="flex select-none items-center px-3 text-gray-500 sm:text-sm bg-lightgrey  rounded-l-md">
            https://
          </span>
          <Input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            placeholder="janesmith"
            className="rounded-none rounded-r-md"
          />
        </div>{' '}
      </div>
    </div>
  );
};
