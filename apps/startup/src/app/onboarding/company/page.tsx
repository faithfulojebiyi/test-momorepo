'use client';

import { Button } from '@cuuro/ui';
import {
  FileInput,
  TextAreaInput,
  TextInput,
  UrlInput,
} from '@startup/shared/components';
import { useForm } from 'react-hook-form';

type LoginInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm<LoginInputs>();

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="w-[515px] ">
        <div className="text-center">
          <img src="/images/logos/logomark.svg" className="mx-auto" />
          <h1 className="mt-[10px] text-[#0F172A] text-2xl">
            Create company profile
          </h1>
          <p className="mt-2.5 text-[#64748B]">
            First things first, Provide your company infomation.
          </p>
        </div>

        <form className="mt-[45px]">
          <div className="flex gap-5">
            <TextInput
              id="email"
              placeholder="john@mail.com"
              type="text"
              label="Company Name"
              formHook={register('email', { required: 'Email is required' })}
              errorMessage={errors.email?.message}
              containerStyles="flex-1"
            />
            <TextInput
              id="password"
              placeholder=".........."
              label="Company Website"
              type="password"
              formHook={register('password', {
                required: 'Password is required',
              })}
              errorMessage={errors.password?.message}
              containerStyles="flex-1"
            />
          </div>
          <div className="flex gap-5 mt-6">
            <TextAreaInput
              id="email"
              placeholder="Company Summary"
              label="Summary"
              formHook={register('email', { required: 'Email is required' })}
              errorMessage={errors.email?.message}
            />
          </div>
          <div className="flex gap-5 mt-6">
            <TextInput
              id="email"
              type="number"
              placeholder="2000"
              label="Year Founded"
              formHook={register('email', { required: 'Email is required' })}
              errorMessage={errors.email?.message}
              containerStyles="flex-1"
            />
            <TextInput
              id="password"
              placeholder=".........."
              label="Company Size"
              type="password"
              formHook={register('password', {
                required: 'Password is required',
              })}
              errorMessage={errors.password?.message}
              containerStyles="flex-1"
            />
          </div>
          {/* <div className="flex gap-5 mt-6">
            <FileInput
              id="email"
              placeholder="linkedIn/cuuro"
              label="Linkedin"
              formHook={register('email', { required: 'Email is required' })}
              errorMessage={errors.email?.message}
              containerStyles="flex-1"
            />
          </div> */}
          <div className="flex gap-5 mt-6">
            <UrlInput
              id="email"
              placeholder="linkedIn/cuuro"
              label="Linkedin"
              formHook={register('email', { required: 'Email is required' })}
              errorMessage={errors.email?.message}
              containerStyles="flex-1"
            />
            <UrlInput
              id="password"
              placeholder="twitter.com/cuuro"
              label="Twitter"
              formHook={register('password', {
                required: 'Password is required',
              })}
              errorMessage={errors.password?.message}
              containerStyles="flex-1"
            />
          </div>
          <div className="w-full flex justify-between mt-14">
            <Button variant="outline">Back</Button>
            <Button>Continue</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
