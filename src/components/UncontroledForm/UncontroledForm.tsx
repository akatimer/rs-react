import { FormEvent, useRef } from 'react';
import DefaultInput from '../UncontroledComponents/DefaultInput/DefaultInput';

const UncontroledForm: React.FC = (): JSX.Element => {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const ageInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const confirmInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(nameInputRef.current?.value);
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontroledForm;
