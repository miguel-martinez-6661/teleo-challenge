export const typeDefs = `
  type UserMedia {
    id: String
    url: String
  }

  type Query {
    userMedia: [UserMedia]
  }
`;
