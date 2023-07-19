import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  criteria: yup.string().required(),
  employee_id: yup.string().nullable(),
});
