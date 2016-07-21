import React from 'react';
import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import gql from 'graphql-tag';

class Layout extends React.Component {
    constructor(props) {
        super(props)
        const {error, content} = props
        this.client = new ApolloClient()
    }

    render() {
        console.log('rendering now')
        const {error, content} = this.props
        
        //Example Query
        this.client.query({
           query: gql`
			{
			  author {
				firstName
				lastName
				posts {
				  title
				  views
				}
			  }
			  getFortuneCookie
			}
		 `,
           forceFetch: false,
       	}).then((graphQLResult) => {
           const { errors, data } = graphQLResult;

           if (data) {
               console.log('got query data', data);
           }
           if (errors) {
               console.log('got some GraphQL execution errors', errors);
           }
       }).catch((error) => {
           console.log('there was an error sending the query', error);
       });

		//Example Mutation
		this.client.mutate({
		  mutation: gql`
			mutation ($firstName: String!, $lastName: String!) {
			  createAuthor(firstName: $firstName, lastName: $lastName) {
				id
				firstName
				lastName
			  }
			}
		  `,
		  variables: {
			firstName: 'Hunter',
			lastName: 'Thompson',
		  },
		}).then(({ data }) => {
		  console.log('got data', data);
		}).catch((error) => {
		  console.log('there was an error sending the query', error);
		});


		//Here's where we add in the Apollo Client
        return (
            <ApolloProvider client={this.client}>
                <div>
                    <div>
                        {content()}
                    </div>
                </div>
            </ApolloProvider>
        )
    }
}
export default Layout


