import { Box } from 'reflexbox';
import getConfig from 'next/config';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { userRegisterRequest } from '../../flow/actions';
import { userRegister } from '../../apis/user';

const { publicRuntimeConfig } = getConfig();

const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData);
    // const register = userRegister(formData);
    // console.log(register);
    dispatch(userRegisterRequest(formData));
  };
  return (
    <div
      style={{ width: '' }}
      className='container    d-flex flex-column flex-wrap-reverse justify-content-center '
    >
      <div className=' text-center'>
        <strong>This is for Register</strong>{' '}
      </div>
      <form
        className='container    text-left'
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: '80%' }}
      >
        <div className='form-group'>
          <label>Username</label>
          <input
            type='text'
            className='form-control'
            placeholder='username'
            {...register('username', { required: true })}
          />
        </div>
        <div className='form-group '>
          <label>Email address</label>
          <input
            {...register('email', { required: true })}
            type='email'
            className='form-control'
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

        <button type='submit' className='mt-3 btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
