import { prisma } from './db';

interface CreateFeelArgs {
  score: number;
  createdAt: Date;
}

interface CreateMealArgs {
  ingredients: string[];
  createdAt: Date;
}

const resolvers = {
  Query: {
    meals: async (parent, args) => {
      const { gt, lt } = args;
      try {
        return await prisma.meal.findMany({
          where: {
            AND: [{ createdAt: { gt } }, { createdAt: { lt } }],
          },
        });
      } catch (e) {
        console.log(e);
        throw new Error(e);
      }
    },
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
        throw new Error(e);
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
        throw new Error(e);
      }
    },
    createMeal: async (parent: any, args: CreateMealArgs) => {
      try {
        return await prisma.meal.create({
          data: {
            ingredients: args.ingredients,
            createdAt: args.createdAt,
          },
        });
      } catch (e) {
        console.log(e);
        throw new Error(e);
      }
    },
    deleteMeal: async (parent: any, args: { id: string }) => {
      try {
        const { id } = await prisma.meal.delete({
          where: {
            id: args.id,
          },
        });
        return id;
      } catch (e) {
        console.log(e);
        throw new Error(e);
      }
    },
  },
};

export default resolvers;
