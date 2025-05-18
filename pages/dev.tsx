import Head from 'next/head';
import React from 'react';

const directories = [
  {
    name: 'VS Code',
    icon: '🖥️',
    desc: 'Editor settings, themes, and extensions',
    url: 'https://github.com/hamzaPixl/dev-tools/tree/master/vs-code',
  },
  {
    name: 'Git',
    icon: '🔀',
    desc: 'Aliases, hooks, and CI/CD workflows',
    url: 'https://github.com/hamzaPixl/dev-tools/tree/master/git',
  },
  {
    name: 'Docker',
    icon: '🐳',
    desc: 'Compose files for databases, apps, and more',
    url: 'https://github.com/hamzaPixl/dev-tools/tree/master/docker',
  },
  {
    name: 'Shell',
    icon: '💻',
    desc: 'Zsh/Bash profiles, aliases, CLI tools',
    url: 'https://github.com/hamzaPixl/dev-tools/tree/master/shell',
  },
  {
    name: 'ESLint Frontend',
    icon: '🎨',
    desc: 'Lint config for Next.js, React, Tailwind',
    url: 'https://github.com/hamzaPixl/dev-tools/tree/master/eslint-frontend',
  },
  {
    name: 'ESLint Backend',
    icon: '🛠️',
    desc: 'Lint config for Node.js, TypeScript backend',
    url: 'https://github.com/hamzaPixl/dev-tools/tree/master/eslint-backend',
  },
  {
    name: 'Prettier Frontend',
    icon: '✨',
    desc: 'Prettier config for frontend projects',
    url: 'https://github.com/hamzaPixl/dev-tools/tree/master/prettier-frontend',
  },
  {
    name: 'Prettier Backend',
    icon: '✨',
    desc: 'Prettier config for backend projects',
    url: 'https://github.com/hamzaPixl/dev-tools/tree/master/prettier-backend',
  },
  {
    name: 'EditorConfig',
    icon: '📝',
    desc: 'Universal code style for all editors',
    url: 'https://github.com/hamzaPixl/dev-tools/tree/master/editorconfig',
  },
  {
    name: 'AI Prompts',
    icon: '🤖',
    desc: 'Prompt library for code, docs, and scaffolding',
    url: 'https://github.com/hamzaPixl/dev-tools/tree/master/ai',
  },
  {
    name: 'DevOps',
    icon: '☸️',
    desc: 'Kubernetes, Terraform, GitOps, scripts, and more',
    url: 'https://github.com/hamzaPixl/dev-tools/tree/master/devops',
  },
];

const DevEasterEgg: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <Head>
        <title>🛠️ Dev Tools Easter Egg | Hamza Mounir</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Hidden dev tools and resources by Hamza Mounir." />
      </Head>
      <h1 className="text-3xl md:text-5xl font-bold mb-8">🛠️ Welcome, Dev!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {directories.map(dir => (
          <button
            key={dir.name}
            onClick={() => window.open(dir.url, '_blank', 'noopener,noreferrer')}
            className="bg-gray-900 hover:bg-primary/80 transition-colors rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer border border-gray-800 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Open ${dir.name} on GitHub`}
          >
            <span className="text-4xl mb-2">{dir.icon}</span>
            <span className="text-xl font-semibold mb-1">{dir.name}</span>
            <span className="text-gray-300 text-center text-sm">{dir.desc}</span>
          </button>
        ))}
      </div>
      <p className="mt-10 text-gray-400 text-center text-sm max-w-xl">
        All resources are open source and ready to use. <br />
        <a
          href="https://github.com/hamzaPixl/dev-tools"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          View the full repository on GitHub
        </a>
      </p>
    </div>
  );
};

export default DevEasterEgg;
