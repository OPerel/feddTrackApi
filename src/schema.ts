const typeDefs = `#graphql
scalar DateTime

type Meal {
  id: String!
  createdAt: DateTime!,
  ingredients: [String]!
}

type Feel {
  id: String!
  createdAt: DateTime!,
  score: Int!,
  description: String
}

type Query {
  meals(gt: DateTime!, lt: DateTime!): [Meal]
  feels(gt: DateTime!, lt: DateTime!): [Feel]
}

type Mutation {
  createFeel(score: Int, createdAt: DateTime): Feel
  createMeal(ingredients: [String], createdAt: DateTime): Meal
  deleteMeal(id: String!): String
}
`;

export default typeDefs;
