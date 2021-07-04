import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData);
  };
  return (
    <div
      style={{ width: '700px' }}
      className='container    d-flex flex-column flex-wrap-reverse justify-content-center '
    >
      <div className=' text-center'>
        <strong>This is for Register</strong>{' '}
      </div>
      <form
        className='container    text-left'
        onSubmit={handleSubmit(onSubmit)}
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

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
