const typeDefinitions = `
type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}
type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}
type Query {
  author(firstName: String, lastName: String): Author
  getFortuneCookie: String
}
type RootMutation {
  createAuthor(
    firstName: String!
    lastName: String!
  ): Author
  createPost(
    tags: [String!]!
    title: String!
    text: String!
    authorId: Int!
  ): Post
}
schema {
  query: Query,
  mutation: RootMutation
}
`;

export default [typeDefinitions];