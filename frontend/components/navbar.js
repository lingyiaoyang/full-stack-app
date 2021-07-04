import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className='border mb-3 px-4 bg-dark'
        style={{ width: '100%' }}
        color='light'
        light
        expand='md'
      >
        <NavbarBrand className=' fw-bold bg-dark text-light' href='/'>
          Movie-app
        </NavbarBrand>
        <NavbarToggler
          onClick={toggle}
          style={{ maxWidth: '300px', border: '2px solid red' }}
        />
        <Collapse className='bg-dark' isOpen={isOpen} navbar>
          <Nav className=' mr-auto' navbar>
            <NavItem>
              <NavLink className='text-light bg-dark'>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className='bg-dark text-light'
                href='https://github.com/reactstrap/reactstrap'
              >
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown className='bg-dark text-light' nav inNavbar>
              <DropdownToggle nav caret className='bg-dark text-light'>
                Auth
              </DropdownToggle>
              <DropdownMenu right className='text-light'>
                <Link href='/auth/login'>
                  <DropdownItem>Login</DropdownItem>
                </Link>
                <Link href='/auth/register'>
                  <DropdownItem>Register</DropdownItem>
                </Link>
                <DropdownItem divider />
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
