import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

const GITHUB_README_URL = 'https://raw.githubusercontent.com/hamzaPixl/dev-tools/master/README.md';

const DevEasterEgg: React.FC = () => {
  const [readme, setReadme] = useState('');
  const [showConfetti, setShowConfetti] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    fetch(GITHUB_README_URL)
      .then(res => res.text())
      .then(setReadme);
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handleResize() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <Head>
        <title>🛠️ Dev Tools Easter Egg | Hamza Mounir</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Hidden dev tools and resources by Hamza Mounir." />
      </Head>
      {showConfetti && dimensions.width > 0 && (
        <Confetti width={dimensions.width} height={dimensions.height} />
      )}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">🛠️ Welcome, Dev!</h1>
      <p className="mb-6 text-lg text-gray-300 text-center max-w-xl">
        You found the hidden dev page! Here’s my{' '}
        <a
          href="https://github.com/hamzaPixl/dev-tools"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          GitHub Dev Tools
        </a>{' '}
        resource. The README is loaded live below:
      </p>
      <div className="w-full max-w-3xl bg-gray-900 rounded-lg shadow-lg p-6 overflow-auto prose prose-invert">
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{readme}</pre>
      </div>
    </div>
  );
};

export default DevEasterEgg;
