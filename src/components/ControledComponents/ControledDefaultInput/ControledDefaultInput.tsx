import React, { ChangeEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';

type AnyPresentValue = object;

interface ControledDefaultInputProps {
  description: string;
  type: string;
  name:
    | 'name'
    | 'image'
    | 'email'
    | 'password'
    | 'terms'
    | 'age'
    | 'confirm'
    | 'gender'
    | 'country';
  register: UseFormRegister<{
    terms?: boolean | undefined;
    image?: AnyPresentValue | undefined;
    age: string;
    email: string;
    password: string;
    confirm: string;
    gender: string;
    country: string;
    name: string;
  }>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const ControledDefaultInput: React.FC<ControledDefaultInputProps> = ({
  description,
  type,
  name,
  register,
  onChange,
}): JSX.Element => {
  return (
    <label>
      <span>{description}</span>
      <input type={type} {...register(name)} onChange={onChange} />
    </label>
  );
};

export default ControledDefaultInput;
