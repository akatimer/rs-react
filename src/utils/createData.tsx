type createDataType = {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  terms: string;
  pic: string;
  county: string;
};

const createData = (
  name: string,
  age: number,
  email: string,
  password: string,
  gender: string,
  terms: string,
  pic: string,
  county: string
): createDataType => {
  return {
    name: name,
    age: age,
    email: email,
    password: password,
    gender: gender,
    terms: terms,
    pic: pic,
    county: county,
  };
};

export default createData;
