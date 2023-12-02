import { FormEvent, useRef } from 'react';
import DefaultInput from '../UncontroledComponents/DefaultInput/DefaultInput';

const UncontroledForm: React.FC = (): JSX.Element => {
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(nameInputRef.current?.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DefaultInput
        ref={nameInputRef}
        title={'Enter your name: '}
        type={'text'}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontroledForm;
