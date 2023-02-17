import * as Yup from 'yup';

const validateUpdateUser = Yup.object().shape({
    email: Yup.string().required('Email required').email('Invalid email'),
    name: Yup.string().required('Name is required'),
});

export default validateUpdateUser;