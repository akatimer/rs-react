import React from 'react';
import { LegacyRef } from 'react';
import { useAppSelector } from '../../../store/hooks';

interface CountryInputProps {
  description: string;
  name: string;
}

const CountryInput = React.forwardRef(
  (
    { description, name }: CountryInputProps,
    ref: LegacyRef<HTMLSelectElement> | undefined
  ) => {
    const countries = useAppSelector((state) => state.countries.countryArr);
    return (
      <label>
        <span>{description}</span>
        <select name={name} ref={ref}>
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
  }
);

export default CountryInput;
