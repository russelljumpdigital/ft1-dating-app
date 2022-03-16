import Joi from "joi";

export const religions = [
  "Prefer not to say",
  "African Traditional & Diasporic",
  "Agnostic",
  "Atheist",
  "Buddhism",
  "Chinese traditional religion",
  "Christianity",
  "Hinduism",
  "Islam",
  "Judaism",
  "Sikhism",
  "Spiritism",
  "Other",
];

export const wantKids = [
  "Prefer not to say",
  "Don't want children",
  "Not sure yet",
  "Open to children",
  "Want children",
];

export const smokes = ["Prefer not to say", "No", "Sometimes", "Yes"];

export const genders = [
  "Prefer not to say",
  "Female",
  "Male",
  "Non-binary",
  "Transgender",
  "Intersex",
];

const now = Date.now();
const eigthteenYearsAgo = new Date(now - 1000 * 60 * 60 * 24 * 365 * 18);
export const schema = {
  email: Joi.string().email({ tlds: { allow: false } }),
  firstName: Joi.string().alphanum().max(30).min(2),
  lastName: Joi.string().alphanum().max(30).min(2),
  password: Joi.string().min(4),
  dateOfBirth: Joi.number().max(eigthteenYearsAgo.getTime()),
  height: Joi.number().integer().positive(),
  town: Joi.string().alphanum().max(30).min(2),
  postcode: Joi.string().alphanum().max(7).min(2),
};

//Add required to validation

export function joiDataReorder(details) {
  const errorsMod = {};
  details.forEach((error) => {
    errorsMod[error.context.key] = error.message;
  });

  return errorsMod;
}