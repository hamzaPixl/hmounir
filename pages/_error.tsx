import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import SEO from '../components/SEO';

interface ErrorProps {
  statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <SEO
        title={`Error ${statusCode || 'Unknown'} | Hamza Mounir`}
        description="An error occurred while loading the page."
      />

      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-dark mb-4">{statusCode || 'Error'}</h1>
        <p className="text-xl mb-8">
          {statusCode === 404
            ? "The page you're looking for doesn't exist."
            : 'An error occurred while loading the page.'}
        </p>
        <Link href="/" legacyBehavior>
          <a className="btn bg-primary text-white hover:bg-dark transition-colors">
            Return to Homepage
          </a>
        </Link>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
