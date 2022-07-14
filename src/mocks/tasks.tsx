import { v4 as uuidv4 } from 'uuid';

export const TASKS = [
  {
    id: uuidv4(),
    content: 'Read a book',
    concluded: false,
  },
  {
    id: uuidv4(),
    content: 'Study React',
    concluded: false,
  },
  {
    id: uuidv4(),
    content: 'Prepare for interviews',
    concluded: true,
  },
];
