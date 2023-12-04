import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { UseFormRegister } from 'react-hook-form';

type AnyPresentValue = object;

interface CountryInputProps {
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

const CountryInput: React.FC<CountryInputProps> = ({
  description,
  name,
  register,
}) => {
  const countries = useAppSelector((state) => state.countries.countryArr);
  return (
    <label>
      <span>{description}</span>
      <select {...register(name)}>
        <option value="" disabled>
          Country:
        </option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </label>
  );
};

export default CountryInput;
