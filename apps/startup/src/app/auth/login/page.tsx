'use client';

import { Button } from '@cuuro/ui';
import { TextInput } from '@startup/shared/components';
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
      <div className="w-[290px] ">
        <div className="text-center">
          <img src="/images/logos/logomark.svg" className="mx-auto" />
          <h1 className="mt-[10px] text-[#0F172A] text-2xl">
            Welcome to Cuuro
          </h1>
          <p className="mt-2.5 text-[#64748B]">
            Login to continue to your dashboard
          </p>
        </div>

        <form className="mt-5">
          <TextInput
            id="email"
            placeholder="john@mail.com"
            label="Email"
            formHook={register('email', { required: 'Email is required' })}
            errorMessage={errors.email?.message}
          />
          <TextInput
            id="password"
            placeholder=".........."
            label="Password"
            type="password"
            formHook={register('password', {
              required: 'Password is required',
            })}
            errorMessage={errors.password?.message}
            containerStyles="mt-[10px]"
          />
          <Button className="w-full mt-5">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
