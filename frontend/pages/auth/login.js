import { Box } from 'reflexbox';
import getConfig from 'next/config';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userLoginRequest } from '../../flow/actions';
import { useRouter } from 'next/router';

const { publicRuntimeConfig } = getConfig();

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    dispatch(userLoginRequest(formData));
    router.push('/');
  };

  return (
    <div
      style={{ width: '' }}
      className='container d-flex flex-column flex-wrap-reverse justify-content-center '
    >
      <div className=' text-center'>
        <strong>This is for login</strong>
      </div>
      <form
        className='container  text-left'
        style={{ maxWidth: '80%' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='form-group '>
          <label>Email address</label>
          <input
            {...register('identifier', { required: true })}
            type='email'
            className='form-control container'
            style={{ maxWidth: '' }}
            placeholder='Enter email'
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            {...register('password', { required: true, minLength: 6 })}
            type='password'
            className='form-control container'
            style={{ maxWidth: '' }}
            placeholder='Password'
          />
        </div>

        <button type='submit' className='mt-3 btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
