'use client';

import { Button } from '@cuuro/ui';
import React, { ReactNode } from 'react';

const OnboardingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen flex flex-col container">
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default OnboardingLayout;
