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
      .mixed<File>()
      .test('fileSize', 'File size must be less than 1MB', (value) => {
        if (value) {
          const size: number = value.size;
          return size <= 1024000;
        }
      })
      .test('fileType', 'File must be .PNG or .JPEG', (value) => {
        if (value) {
          const type = value.type;
          return type == 'image/png' || type == 'image/jpeg';
        }
      }),
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
        console.log(acc);
        return acc;
      },
      {}
    );
    return Promise.resolve({ errors: validationErrors });
  });

export default schema;
