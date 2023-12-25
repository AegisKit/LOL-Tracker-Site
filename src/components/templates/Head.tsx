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
        <title>LTS | {props.title}</title>
        <meta name="description" content={props.discription} />
      </Helmet>
    </div>
  );
};