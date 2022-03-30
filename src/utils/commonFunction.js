export const numberValidation = (num) => {
  if (num) {
    return /^(?:[0-9]●?){5,12}[0-9]$/g.test(num);
  }
};

export const emailValidation = (email) => {
  let re =
    /^(?=[^@]*[A-Za-z])([a-zA-Z0-9])(([a-zA-Z0-9])*([\.-_+])?([a-zA-Z0-9]))*@(([a-zA-Z0-9\-])+(\.))+([a-zA-Z]{2,3})+$/i;
  return re.test(String(email).toLowerCase());
};

export const passwordValidation = (password) => {
  return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{8,}/.test(
    password
  );
};

const Validation = () => {
  return console.log("test");
};
export default Validation;

// const isEmail = new RegExp(
//   /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/
// ).test(email);
