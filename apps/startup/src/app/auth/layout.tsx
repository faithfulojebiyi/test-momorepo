'use client';

import { Button } from '@cuuro/ui';
import React, { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen flex flex-col container">
      <div className="flex items-center justify-between h-[70px]">
        <img src="/images/logos/logo.svg" />
        <Button variant="outline">Sign In</Button>
      </div>

      <div className="flex-1">{children}</div>
    </div>
  );
};

export default AuthLayout;
