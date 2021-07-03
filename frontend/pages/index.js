import React from 'react';
// import getConfig from 'next-config';

// const { publicRuntimeConfig } = getConfig();

const index = () => {
  return <div>This is index</div>;
};

// export async function getServerSideProps() {
//   // const { API_URL } = process.env;

//   const res = await fetch(`${publicRuntimeConfig.API_URL}/articles`);
//   const data = await res.json();

//   return {
//     props: {
//       articles: data,
//     },
//   };
// }

export default index;
