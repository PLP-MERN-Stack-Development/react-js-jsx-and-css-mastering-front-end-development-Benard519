import { useState, useMemo } from 'react';
import { Plus, Trash2, Check, Circle } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Card from '../components/Card';
import Button from '../components/Button';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

type FilterType = 'all' | 'active' | 'completed';

const Tasks = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');

  const addTask = () => {
    if (newTaskText.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        text: newTaskText.trim(),
        completed: false,
        createdAt: Date.now(),
      };
      setTasks([newTask, ...tasks]);
      setNewTaskText('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const active = total - completed;
    return { total, completed, active };
  }, [tasks]);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Task Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Organize your tasks efficiently with persistent local storage
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.total}</p>
            <p className="text-gray-600 dark:text-gray-400">Total Tasks</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">{stats.completed}</p>
            <p className="text-gray-600 dark:text-gray-400">Completed</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">{stats.active}</p>
            <p className="text-gray-600 dark:text-gray-400">Active</p>
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <Button variant="primary" onClick={addTask} className="sm:w-auto">
            <Plus size={20} className="inline mr-2" />
            Add Task
          </Button>
        </div>
      </Card>

      <div className="flex flex-wrap gap-2 justify-center">
        {(['all', 'active', 'completed'] as FilterType[]).map((filterType) => (
          <Button
            key={filterType}
            variant={filter === filterType ? 'primary' : 'secondary'}
            onClick={() => setFilter(filterType)}
            className="capitalize"
          >
            {filterType}
          </Button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <Card>
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              {filter === 'all' ? 'No tasks yet. Add one above!' : `No ${filter} tasks.`}
            </p>
          </Card>
        ) : (
          filteredTasks.map((task) => (
            <Card key={task.id} hover>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="flex-shrink-0 transition-colors"
                  aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
                >
                  {task.completed ? (
                    <Check size={24} className="text-green-600 dark:text-green-400" />
                  ) : (
                    <Circle size={24} className="text-gray-400 dark:text-gray-600" />
                  )}
                </button>
                <p className={`flex-1 text-lg ${task.completed ? 'line-through text-gray-500 dark:text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                  {task.text}
                </p>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="flex-shrink-0 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-500 transition-colors"
                  aria-label="Delete task"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Tasks;
