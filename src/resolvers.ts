import { dateScalar } from './schema';

const meals = [
  {
    eaten_at: new Date(1682276314859),
    ingredients: ['Rice', 'Tofu'],
  },
  {
    eaten_at: new Date(1682376314859),
    ingredients: ['Apple', 'Avocado'],
  },
  {
    eaten_at: new Date(1682476314859),
    ingredients: ['Apple', 'Avocado'],
  },
  {
    eaten_at: new Date(1682576314859),
    ingredients: ['Apple', 'Avocado'],
  },
  {
    eaten_at: new Date(1682676314859),
    ingredients: ['Apple', 'Avocado'],
  },
  {
    eaten_at: new Date(1682876314859),
    ingredients: ['Apple', 'Avocado'],
  },
  {
    eaten_at: new Date(1683056414859),
    ingredients: ['Apple', 'Avocado'],
  },
];

const feels = [
  {
    felt_at: new Date(1682276314859),
    score: 6,
  },
  {
    felt_at: new Date(1682376314859),
    score: 9,
  },
  {
    felt_at: new Date(1682476314859),
    score: 4,
  },
  {
    felt_at: new Date(1682576314859),
    score: 7,
  },
  {
    felt_at: new Date(1682676314859),
    score: 6,
  },
  {
    felt_at: new Date(1682876314859),
    score: 9,
  },
  {
    felt_at: new Date(1683056414859),
    score: 8,
  },
];

const resolvers = {
  Date: dateScalar,
  Query: {
    meals: () => meals,
    feels: () => feels,
  },
};

export default resolvers;
