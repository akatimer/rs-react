import { FormEvent, useRef, useState } from 'react';
import DefaultInput from '../UncontroledComponents/DefaultInput/DefaultInput';
import createData from '../../utils/createData';
import ImgInput from '../UncontroledComponents/ImgInput/ImgInput';
import GenderRadio from '../UncontroledComponents/GenderRadio/GenderRadio';
import CountryInput from '../UncontroledComponents/CountryInput/CountryInput';
import schema, {
  passValidation,
} from '../../utils/yupValidation/yupValidation';
import * as yup from 'yup';
import { useAppDispatch } from '../../store/hooks';
import { setCards, setImages } from '../../store/slice/formDataCardsSlice';
import { useNavigate } from 'react-router';

interface ErrorsInterface {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  confirm?: string;
  gender?: string;
  terms?: string;
  image?: string;
  country?: string;
}

const UncontroledForm: React.FC = (): JSX.Element => {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const ageInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const confirmInputRef = useRef<HTMLInputElement | null>(null);
  const genderMaleInputRef = useRef<HTMLInputElement | null>(null);
  const genderFemaleInputRef = useRef<HTMLInputElement | null>(null);
  const termsInputRef = useRef<HTMLInputElement | null>(null);
  const imgInputRef = useRef<HTMLInputElement | null>(null);
  const countryInputRef = useRef<HTMLSelectElement | null>(null);
  const [errors, setErrors] = useState<ErrorsInterface>({});
  const [passErr, setPassErr] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const valid = async (pass: string): Promise<void> => {
    const password = pass;
    const result = await passValidation(password);
    if (typeof result === 'string') {
      setPassErr([]);
    } else {
      setPassErr(Object.values(result.errors));
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const currentData = createData(
      nameInputRef.current?.value ?? '',
      ageInputRef.current?.value ?? '',
      emailInputRef.current?.value ?? '',
      passwordInputRef.current?.value ?? '',
      confirmInputRef.current?.value ?? '',
      genderMaleInputRef.current?.checked ? 'male' : 'female',
      termsInputRef.current?.checked ?? false,
      imgInputRef.current?.files![0] || null,
      countryInputRef.current?.value ?? ''
    );
    valid(currentData.password);
    schema
      .validate(currentData, { abortEarly: false })
      .then((data) => {
        const { image, ...newData } = data;
        if (image) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const base64String = event.target?.result;
            dispatch(setImages(base64String as string));
          };
          reader.readAsDataURL(image);
        }
        dispatch(setCards(newData));
        navigate('/');
      })
      .catch((err) => {
        setErrors(
          err.inner.reduce(
            (errors: object, error: yup.ValidationError) => ({
              ...errors,
              [error.path!]: error.message,
            }),
            {}
          )
        );
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <DefaultInput
        name={'name'}
        ref={nameInputRef}
        description={'Enter your name: '}
        type={'text'}
      />
      <p>{errors.name ? errors.name : null}</p>
      <DefaultInput
        name={'age'}
        ref={ageInputRef}
        description={'Enter your age: '}
        type={'number'}
      />
      <p>{errors.age ? errors.age : null}</p>
      <DefaultInput
        name={'email'}
        ref={emailInputRef}
        description={'Enter your email: '}
        type={'text'}
      />
      <p>{errors.email ? errors.email : null}</p>
      <DefaultInput
        name={'password'}
        ref={passwordInputRef}
        description={'Enter your password: '}
        type={'password'}
      />
      <p>
        {passErr
          ? passErr
              .filter((el) => el !== 'P')
              .map((err) => {
                return <span key={err}>{err}</span>;
              })
          : null}
      </p>
      <DefaultInput
        name={'confirm'}
        ref={confirmInputRef}
        description={'Confirm password: '}
        type={'password'}
      />
      <p>{errors.confirm ? errors.confirm : null}</p>
      <div>
        <span>Choose Gender: </span>
        <GenderRadio
          name={'gender'}
          ref={genderMaleInputRef}
          title={'male'}
          genderValue={'male'}
          defaultChecked={true}
        />
        <GenderRadio
          name={'gender'}
          title={'female'}
          genderValue={'female'}
          ref={genderFemaleInputRef}
        />
      </div>
      <p>{errors.gender ? errors.gender : null}</p>
      <DefaultInput
        name={'terms'}
        ref={termsInputRef}
        description={'Accept T&C: '}
        type={'checkbox'}
      />
      <p>{errors.terms ? errors.terms : null}</p>
      <ImgInput name={'image'} description="Upload image" ref={imgInputRef} />
      <CountryInput
        name="country"
        description="Select Country"
        ref={countryInputRef}
      />
      <p>{errors.country ? errors.country : null}</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontroledForm;
