import { Box } from 'reflexbox';
import getConfig from 'next/config';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userLoginRequest } from '../../flow/actions';

const { publicRuntimeConfig } = getConfig();

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    dispatch(userLoginRequest(formData));
    console.log(formData);
  };

  return (
    <div
      style={{ width: '60%' }}
      className='container d-flex flex-column flex-wrap-reverse justify-content-center '
    >
      <div className=' text-center'>
        <strong>This is for login</strong>{' '}
      </div>
      <form className='container  text-left' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group '>
          <label>Email address</label>
          <input
            {...register('identifier', { required: true })}
            type='email'
            className='form-control'
            style={{}}
            placeholder='Enter email'
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            {...register('password', { required: true, minLength: 6 })}
            type='password'
            className='form-control'
            placeholder='Password'
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
