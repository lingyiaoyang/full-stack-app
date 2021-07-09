import React, { useState } from 'react';
import Link from 'next/link';
import { scrollToTop, scrollToBottom, scrollToSpecific } from '../utils';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Example = (props) => {
  const scrollToFooter = scrollToSpecific('Footer');
  const scrollToIndex = scrollToSpecific('Container');
  const scrollToActicle = scrollToSpecific('Article');
  return (
    <div style={{ height: '100px' }}>
      <Navbar
        style={{
          position: 'fixed',

          width: '100%',
          borderBottom: '3px solid black',
          // backgroundColor: '#363030',
        }}
        expand='lg'
      >
        <Navbar.Brand style={{ border: '' }}>
          <Link href='/'>
            <h3 style={{ cursor: 'pointer' }}> React-Bootstrap</h3>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
        // id='basic-navbar-nav'
        >
          <Nav className='me-auto text-center'>
            <Link href='/auth/login'>
              <h5
                style={{ margin: '0 15px 0 15px', cursor: 'pointer' }}
                className='  border-dark'
              >
                login
              </h5>
            </Link>
            <Link href='/auth/register'>
              <h5
                style={{ margin: '0 15px 0 15px', cursor: 'pointer' }}
                className=' border-dark'
              >
                register
              </h5>
            </Link>
            {scrollToActicle}
            {scrollToFooter}
            {scrollToIndex}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
