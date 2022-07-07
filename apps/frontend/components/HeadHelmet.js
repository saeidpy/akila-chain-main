import React from 'react';
import { Helmet } from 'react-helmet';

export const HeadHelmet = ({ title, description }) => {
  return (
    <Helmet key={Math.random()}>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};
