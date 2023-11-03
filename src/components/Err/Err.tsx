import React from 'react';

const Err: React.FC = (): JSX.Element => {
  const errFunc = () => {
    throw new Error('Error!!!');
    return <div></div>;
  };

  return <div>{errFunc()}</div>;
};

export default Err;
