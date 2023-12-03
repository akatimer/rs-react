import React from 'react';
import { UseFormRegister } from 'react-hook-form';

type AnyPresentValue = object;

interface ControledGenderRadioProps {
  title: string;
  genderValue: string;
  defaultChecked?: boolean;
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

const ControledGenderRadio: React.FC<ControledGenderRadioProps> = ({
  title,
  genderValue,
  name,
  defaultChecked,
  register,
}) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          {...register(name)}
          value={genderValue}
          defaultChecked={defaultChecked}
        />
        {title}
      </label>
    </div>
  );
};

export default ControledGenderRadio;
