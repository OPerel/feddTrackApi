import { prisma } from './db';

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

interface CreateFeelArgs {
  score: number;
  createdAt: Date;
}

const resolvers = {
  Query: {
    meals: () => meals,
    feels: async (parent, args) => {
      const { gt, lt } = args;
      try {
        return await prisma.feel.findMany({
          where: {
            AND: [{ createdAt: { gt } }, { createdAt: { lt } }],
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  Mutation: {
    createFeel: async (parent: any, args: CreateFeelArgs) => {
      try {
        return await prisma.feel.create({
          data: {
            score: args.score,
            createdAt: args.createdAt,
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};

export default resolvers;
