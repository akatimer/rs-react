type createDataType = {
  name: string;
  age: string;
  email: string;
  password: string;
  confirm: string;
  gender: string;
  terms: boolean;
  image: string | null | File;
  country: string;
};

const createData = (
  name: string,
  age: string,
  email: string,
  password: string,
  confirm: string,
  gender: string,
  terms: boolean,
  image: File | null,
  country: string
): createDataType => {
  return {
    name: name,
    age: age,
    email: email,
    password: password,
    confirm: confirm,
    gender: gender,
    terms: terms,
    image: image,
    country: country,
  };
};

export default createData;
