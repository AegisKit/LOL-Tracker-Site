import React from 'react';
import { Helmet } from 'react-helmet';

interface HeadProps {
    title: string,
    discription?: string
}

export function Head(props: HeadProps) {
  return (
    <div>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
      </Helmet>
    </div>
  );
};