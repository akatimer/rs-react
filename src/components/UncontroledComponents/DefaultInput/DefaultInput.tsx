import React from 'react';
import { LegacyRef } from 'react';

interface BasicInputProps {
  title: string;
  type: string;
}

const DefaultInput = React.forwardRef(
  (
    { title, type }: BasicInputProps,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <label>
        <span>{title}</span>
        <input type={type} ref={ref} title={title} />
      </label>
    );
  }
);

export default DefaultInput;
