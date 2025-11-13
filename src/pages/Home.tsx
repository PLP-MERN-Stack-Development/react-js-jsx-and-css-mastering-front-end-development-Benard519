import { Link } from 'react-router-dom';
import { CheckSquare, Database, Code } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  const features = [
    {
      icon: <CheckSquare size={40} className="text-blue-600 dark:text-blue-400" />,
      title: 'Task Manager',
      description: 'Create, manage, and organize your tasks with an intuitive interface. Filter by status and persist data locally.',
      link: '/tasks',
    },
    {
      icon: <Database size={40} className="text-green-600 dark:text-green-400" />,
      title: 'API Integration',
      description: 'Fetch and display data from JSONPlaceholder API with loading states, error handling, and pagination.',
      link: '/api-data',
    },
    {
      icon: <Code size={40} className="text-orange-600 dark:text-orange-400" />,
      title: 'Modern Stack',
      description: 'Built with React, TypeScript, Vite, Tailwind CSS, and React Router for optimal developer experience.',
      link: '#',
    },
  ];

  return (
    <div className="space-y-16">
      <section className="text-center space-y-6 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Welcome to React App
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A full-featured React application showcasing modern development practices,
          component architecture, and seamless API integration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/tasks">
            <Button variant="primary" className="w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary" className="w-full sm:w-auto">
              View API Demo
            </Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover>
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
                {feature.link !== '#' && (
                  <Link to={feature.link}>
                    <Button variant="secondary" className="mt-4">
                      Explore
                    </Button>
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Built with Modern Technologies
        </h2>
        <p className="text-lg mb-6 opacity-90">
          React, TypeScript, Vite, Tailwind CSS, React Router, and more
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">React 18</span>
          <span className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">TypeScript</span>
          <span className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">Vite</span>
          <span className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">Tailwind CSS</span>
          <span className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">React Router</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
