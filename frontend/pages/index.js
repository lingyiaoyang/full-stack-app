import React from 'react';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const index = ({ articles }) => {
  console.log('🚀 -> file: index.js -> line 7 -> index -> articles', articles);
  return <div className='container border border-5'>This is index</div>;
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

export default index;
