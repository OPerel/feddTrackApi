const typeDefs = `#graphql
scalar DateTime

type Meal {
  id: String!,
  createdAt: DateTime!,
  ingredients: [String]!
}

type Feel {
  id: String!,
  createdAt: DateTime!,
  score: Int!,
  description: String
}

type TotalItems {
  totalMeals: Int!,
  totalFeels: Int!
}

type Query {
  meals(gt: DateTime!, lt: DateTime!): [Meal]
  feels(gt: DateTime!, lt: DateTime!): [Feel]
  totalItems: TotalItems
}

type Mutation {
  createFeel(score: Int, createdAt: DateTime): Feel
  createMeal(ingredients: [String], createdAt: DateTime): Meal
  deleteMeal(id: String!): String
  deleteFeel(id: String!): String
}
`;

export default typeDefs;
