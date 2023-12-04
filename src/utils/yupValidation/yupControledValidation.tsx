import * as yup from 'yup';

export const password = yup
  .string()
  .required('Password is required')
  .matches(/\d+/, { message: { number: 'One Digit ' } })
  .matches(/[a-z]+/, { message: { lowercase: 'One letter ' } })
  .matches(/[A-Z]+/, { message: { uppercase: 'One capital letter ' } })
  .matches(/[!@#$%^&*()-+]+/, {
    message: { special: 'One symbol ' },
  });

const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required('Should not be empty')
      .matches(/^[A-Z][a-zA-Z\s]*$/, 'First letter should be capital'),
    age: yup
      .string()
      .required('Should not be empty')
      .matches(/^\d+$/, 'Only positive values'),
    email: yup
      .string()
      .required('Should not be empty')
      .matches(/^\S+@\S+\.\S+$/i, 'Should be as name@example.com'),
    password: password,
    confirm: yup
      .string()
      .required('Should not be empty')
      .oneOf([yup.ref('password')], 'Must be same as password'),
    gender: yup.string().required('Should not be empty5'),
    terms: yup.boolean().oneOf([true], 'Terms & Conditions must be accepted'),
    image: yup
      .mixed()
      .test('fileSize', 'File size must be less than 1MB', (value) => {
        return value instanceof FileList && value.length > 0
          ? value[0].size <= 1024000
          : false;
      })
      .test('fileType', 'Must be .JPEG or .PNG', (value) =>
        value instanceof FileList && value.length > 0
          ? ['image/jpeg', 'image/png'].includes(value[0].type)
          : false
      ),
    country: yup
      .string()
      .required('Should not be empty')
      .matches(/^[a-zA-Z]+$/, 'Should not be empty'),
  })
  .required();

export const passValidation = (pass: string) =>
  password.validate(pass, { abortEarly: false }).catch(({ errors }) => {
    const validationErrors = errors.reduce(
      (acc: { [x: string]: string }, error: Record<string, string>) => {
        const [key, value] = Object.entries(error)[0];
        acc[key] = value;
        return acc;
      },
      {}
    );
    return Promise.resolve({ errors: validationErrors });
  });

export default schema;
