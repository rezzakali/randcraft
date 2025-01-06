'use client';

import Base64 from '@/app/base64/Base64';
import React from 'react';
import HashGenerator from './HashGenerator';
import RandomIdGenerator from './Random-id-generator';

const Index = () => {
  return (
    <React.Fragment>
      <Base64 />
      <RandomIdGenerator />
      <HashGenerator />
    </React.Fragment>
  );
};

export default Index;
