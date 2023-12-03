import { FormEvent, useRef } from 'react';
import DefaultInput from '../UncontroledComponents/DefaultInput/DefaultInput';
import createData from '../../utils/createData';
import ImgInput from '../UncontroledComponents/ImgInput/ImgInput';
import GenderRadio from '../UncontroledComponents/GenderRadio/GenderRadio';

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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const currentData = createData(
      nameInputRef.current?.value ?? '',
      Number(ageInputRef.current?.value ?? 0),
      emailInputRef.current?.value ?? '',
      passwordInputRef.current?.value ?? '',
      genderMaleInputRef.current?.checked ? 'male' : 'female',
      termsInputRef.current?.value ?? 'false',
      'pic',
      'USA'
    );
    console.log(currentData);
    console.log(genderMaleInputRef, 111);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DefaultInput
        ref={nameInputRef}
        description={'Enter your name: '}
        type={'text'}
      />
      <DefaultInput
        ref={ageInputRef}
        description={'Enter your age: '}
        type={'number'}
      />
      <DefaultInput
        ref={emailInputRef}
        description={'Enter your email: '}
        type={'text'}
      />
      <DefaultInput
        ref={passwordInputRef}
        description={'Enter your password: '}
        type={'text'}
      />
      <DefaultInput
        ref={confirmInputRef}
        description={'Confirm password: '}
        type={'text'}
      />
      <div>
        <span>Choose Gender: </span>
        <GenderRadio
          ref={genderMaleInputRef}
          title={'male'}
          genderValue={'male'}
          defaultChecked={true}
        />
        <GenderRadio
          title={'female'}
          genderValue={'female'}
          ref={genderFemaleInputRef}
        />
      </div>
      <DefaultInput
        ref={termsInputRef}
        description={'Accept T&C: '}
        type={'checkbox'}
      />
      <ImgInput description="Upload image" ref={imgInputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontroledForm;
