import * as yup from 'yup';

export const registerSchema = yup.object().shape({
 username: yup.string()
 .min(3, "more than 3 characters")
 .max(60)
 .required(),
 email: yup.string()
 .max(100)
 .email()
 .required(),
 password: yup.string()
 .min(6)
 .max(26)
 .required(),
 agreeToTerms: yup.mixed().oneOf([true], "You must agree to the terms to continue")
});