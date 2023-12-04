import React, { ChangeEvent, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../store/hooks';
import { useNavigate } from 'react-router';
import ControledDefaultInput from '../ControledComponents/ControledDefaultInput/ControledDefaultInput';
import ControledGenderRadio from '../ControledComponents/ControledGenderRadio/ControledGenderRadio';
import ControledImgInput from '../ControledComponents/ControledImgInput/ControledImgInput';
import ControledCountryInput from '../ControledComponents/ControledCountryInput/ControledCountryInput';
import schema, {
  passValidation,
} from '../../utils/yupValidation/yupControledValidation';
import {
  setCards,
  setImages,
} from '../../store/slice/formControledDataCardsSlice';

export type CardsType = {
  name: string;
  age: string;
  email: string;
  password: string;
  confirm: string;
  gender: string;
  terms?: boolean | undefined;
  image?: File | undefined | object;
  country: string;
};

const ControledForm: React.FC = (): JSX.Element => {
  const [passErr, setPassErr] = useState<string[]>([]);
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  methods.register;
  const { handleSubmit } = methods;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const valid = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const password = e.target.value;
    const result = await passValidation(password);
    if (typeof result === 'string') {
      setPassErr([]);
    } else {
      setPassErr(Object.values(result.errors));
    }
  };

  const onSubmit: SubmitHandler<CardsType> = async (data) => {
    const { image, ...newData } = data;
    if (image instanceof FileList) {
      const reader = new FileReader();
      reader.onloadend = (event) => {
        const base64String = event.target?.result;
        dispatch(setImages(base64String as string));
      };
      reader.readAsDataURL(image[0]);
    }
    console.log(newData);
    dispatch(setCards(newData));

    navigate('/');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControledDefaultInput
        name={'name'}
        register={methods.register}
        description={'Enter your name: '}
        type={'text'}
      />
      <p>
        {methods.formState.errors.name
          ? methods.formState.errors.name.message
          : null}
      </p>
      <ControledDefaultInput
        name={'age'}
        register={methods.register}
        description={'Enter your age: '}
        type={'number'}
      />
      <p>
        {methods.formState.errors.age
          ? methods.formState.errors.age.message
          : null}
      </p>
      <ControledDefaultInput
        name={'email'}
        register={methods.register}
        description={'Enter your email: '}
        type={'text'}
      />
      <p>
        {methods.formState.errors.email
          ? methods.formState.errors.email.message
          : null}
      </p>
      <label>
        <span>{'Enter your password: '}</span>
        <input
          type={'password'}
          {...methods.register('password')}
          onChange={valid}
        />
      </label>
      <p>
        {passErr
          ? passErr
              .filter((el) => el !== 'P')
              .map((err) => {
                return <span key={err}>{err}</span>;
              })
          : null}
      </p>
      <label>
        <span>{'Confirm password: '}</span>
        <input type={'password'} {...methods.register('confirm')} />
      </label>
      <p>
        {methods.formState.errors.confirm
          ? methods.formState.errors.confirm.message
          : null}
      </p>
      <div>
        <span>Choose Gender: </span>
        <ControledGenderRadio
          name={'gender'}
          register={methods.register}
          title={'male'}
          genderValue={'male'}
          defaultChecked={true}
        />
        <ControledGenderRadio
          name={'gender'}
          title={'female'}
          genderValue={'female'}
          register={methods.register}
        />
      </div>
      <p>
        {methods.formState.errors.gender
          ? methods.formState.errors.gender.message
          : null}
      </p>
      <ControledDefaultInput
        name={'terms'}
        register={methods.register}
        description={'Accept T&C: '}
        type={'checkbox'}
      />
      <p>
        {methods.formState.errors.terms
          ? methods.formState.errors.terms.message
          : null}
      </p>
      <ControledImgInput
        name={'image'}
        description="Upload image"
        register={methods.register}
      />
      <p>
        {methods.formState.errors.image
          ? methods.formState.errors.image.message
          : null}
      </p>
      <ControledCountryInput
        name="country"
        description="Select Country"
        register={methods.register}
      />
      <p>
        {methods.formState.errors.country
          ? methods.formState.errors.country.message
          : null}
      </p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControledForm;
