import React from 'react';
import { LegacyRef } from 'react';

interface ImgInputProps {
  description: string;
}

const ImgInput = React.forwardRef(
  (
    { description }: ImgInputProps,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <label>
        <span>{description}</span>
        <input type="file" accept="image/jpeg, image/png" ref={ref} />
      </label>
    );
  }
);

export default ImgInput;
