//credit for schema, resolvers, connectors:
//https://medium.com/apollo-stack/tutorial-building-a-graphql-server-cddaa023c035#.cdwqadtmc
//credit for mutations:
//http://docs.apollostack.com/apollo-server/guide.html

import { Author, Post, Views, FortuneCookie } from '/imports/api/db-connectors';

const resolvers = {
	Query: {
		author(_, args) {
			return Author.find({ where: args });
		},
		getFortuneCookie(){
			return FortuneCookie.getOne();
		}
	},
	RootMutation: {
    createAuthor: (root, args) => { return Author.create(args); },
    createPost: (root, { authorId, tags, title, text }) => {
      return Author.findOne({ where: { id: authorId } }).then( (author) => {
        return author.createPost( { tags: tags.join(','), title, text });
      });
    },
  },
  Author: {
		posts(author) {
			return author.getPosts();
		},
	},
	Post: {
		author(post) {
			return post.getAuthor();
		},
		views(post) {
			return Views.findOne({ postId: post.id })
				.then((Views) => Views.views);
		},
	},
};

export default resolvers;