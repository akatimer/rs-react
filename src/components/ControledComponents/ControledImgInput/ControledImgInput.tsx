import React from 'react';
import { UseFormRegister } from 'react-hook-form';

type AnyPresentValue = object;

interface ImgInputProps {
  description: string;
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
}

const ImgInput: React.FC<ImgInputProps> = ({
  description,
  name,
  register,
}: ImgInputProps) => {
  return (
    <label>
      <span>{description}</span>
      <input type="file" accept="image/jpeg, image/png" {...register(name)} />
    </label>
  );
};

export default ImgInput;
