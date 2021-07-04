import React from 'react';
import { useRouter } from 'next/router';

const footer = () => {
  const router = useRouter();
  console.log('🚀 -> file: footer.js -> line 6 -> footer -> router', router);

  return (
    <div style={{ display: 'flex', height: '200px' }}>
      <div style={{ border: '1px solid red', width: '50%' }}>left</div>
      <form
        className='container'
        style={{
          height: '200px',
          width: '50%',
          display: 'flex',
          flexWrap: 'wrap',
          border: '1px solid red',
        }}
      >
        <input
          style={{ marginTop: '20px', border: '1px solid red' }}
          placeholder='text'
          type='text'
        />

        <input
          style={{ marginTop: '20px', border: '1px solid red' }}
          placeholder='text'
          type='text'
        />
      </form>
    </div>
  );
};

export default footer;
