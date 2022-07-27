// 校验手机号
const regPhone = /^1[3456789]\d{9}$/;
export const validatePhone = (rule, value, callback) => {
  if (value && regPhone.test(value)) {
    callback();
  } else {
    callback(new Error("请输入正确的手机号"));
  }
};

// 校验密码
const regPass = /^[a-z0-9_-]{6,18}$/;
export const validatePass = (rule, value, callback) => {
  if (value && regPass.test(value)) {
    callback();
  } else {
    callback(new Error("请输入正确的密码"));
  }
};

// 校验邮箱
const regEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
export const validateEmail = (rule, value, callback) => {
  if (value && regEmail.test(value)) {
    callback();
  } else {
    callback(new Error("请输入正确的邮箱"));
  }
};
