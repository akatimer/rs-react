import React from 'react';
import { LegacyRef } from 'react';

interface ImgInputProps {
  description: string;
  name: string;
}

const ImgInput = React.forwardRef(
  (
    { description, name }: ImgInputProps,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <label>
        <span>{description}</span>
        <input
          name={name}
          type="file"
          accept="image/jpeg, image/png"
          ref={ref}
        />
      </label>
    );
  }
);

export default ImgInput;
