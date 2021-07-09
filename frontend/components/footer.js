import React from 'react';
import { useRouter } from 'next/router';

const Footer = () => {
  // const router = useRouter();
  // console.log('🚀 -> file: footer.js -> line 6 -> footer -> router', router);

  return (
    <div
      id='Footer'
      style={{
        display: 'flex',
        borderTop: '2px solid black',
      }}
    >
      <div
        className='container'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <ul className='col-4' style={{}}>
          {/* <h5>first</h5> */}
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <ul className='col-4' style={{}}>
          {/* <h5>second</h5> */}
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <ul className='col-4' style={{}}>
          {/* <h5>third</h5> */}
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
