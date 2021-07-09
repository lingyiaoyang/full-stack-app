import React, { useState } from 'react';
import getConfig from 'next/config';
import { getAllUsers } from '../apis/user';
import { userLogin } from '../apis/user';
import withAuth from './auth/AuthRoute';
import { NextSeo } from 'next-seo';

const { publicRuntimeConfig } = getConfig();

const index = ({ articles }) => {
  alert(`Zoom not responding`);
  const SEO = {
    title: 'Zoom',
  };

  return (
    <div id='Container' className='bg-dark Index container border border-5'>
      This is index
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/articles`);
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
}

export default withAuth(index);
