const typeDefs = `#graphql
scalar DateTime

type Meal {
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
  meals: [Meal]
  feels(gt: DateTime!, lt: DateTime!): [Feel]
}

type Mutation {
  createFeel(score: Int, createdAt: DateTime): Feel
}
`;

export default typeDefs;
