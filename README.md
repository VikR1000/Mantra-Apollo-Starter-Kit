


> Written with [StackEdit](https://stackedit.io/).
# MANTRA APOLLO STARTER KIT
A fast way to start with Apollo in a Mantra application.

# INSTALL THE STARTER KIT

    meteor npm install

The npm package "pg" may need Python installed on your system. In case you get npm install errors referring to Python, here are links for installing Python on your system:

* [Install Python on Mac](http://blog.manbolo.com/2014/09/27/use-python-effectively-on-os-x)
* [Install Python on Ubuntu](http://askubuntu.com/questions/449555/how-to-install-python-3-4-on-ubuntu)
* [Install Python on Windows](http://www.howtogeek.com/197947/how-to-install-python-on-windows/)

You may need to set up the path to Python. In the terminal:

    $ which python

The system will respond with the path to Python. Then, still in the terminal, enter:

    $ npm config set python [PATH TO PYTHON]

##### You must install a postgres database prior to running this app. See the next section for instructions.

# INSTALL POSTGRES
* [Install PostGres on Mac](http://exponential.io/blog/2015/02/21/install-postgresql-on-mac-os-x-via-brew/)
* [Install PostGres on Ubuntu](http://tecadmin.net/install-postgresql-server-on-ubuntu/)
* [Install PostGres on Windows](http://www.postgresqltutorial.com/install-postgresql/)

Next, [Create a postgres database and user](http://www.sakana.fr/blog/2007/06/06/postgresql-create-a-user-a-database-and-grant-accesses/) on your development machine.

* [Create a postgres database and user](http://www.sakana.fr/blog/2007/06/06/postgresql-create-a-user-a-database-and-grant-accesses/)

Open the file in the starter kit, Mantra-Apollo-Starter-Kit/imports/api/db-connectors.js, and find the line beginning:

    export const db = new Sequelize('database', 'username', 'password', [.....]

Replace 'database', 'username', 'password' with the info for the database you just set up.

Want to install an SQL management app on your development machine? It can be helpful to have an app like this to inspect what's in your database.

* One possibility: [Valentina Studio Free](http://www.valentina-db.com/en/get-free-valentina-studio)

# Accessing GraphIQL
Apollo includes [GraphIQL](https://github.com/graphql/graphiql), a fast way of building and testing queries. Access it at localhost:3000/graphql

# LEARNING GRAPHQL
GraphQL expects connectors, schema, queries and resolvers to work together. 

* **Connectors.** In this project, connectors are in the file /imports/api/db-connectors. You will find examples of how to connect to MongoDB, Rest, and SQL databases.
* **Schema.** In this project, schema is in the file /imports/api/schema.js. You will find examples of how to set up a relational database of Authors and Posts.
* **Queries.** Sample queries are in the component, /client/modules/core/components/main_layout.jsx. You will find an example query that pulls up relational data for an author and for the posts of that author. You will also find an example Mutation that adds an author. Check your browser console to see the resulting data for these two queries. 
* **Resolvers.** In this project, resolvers are in the file /imports/api/resolvers.js. You will find an example of how to resolve queries for relational data, as well as for a mutatation that adds data.

# APOLLO RESOURCES
* [GraphQL Tutorial by Jonas Helfer](https://medium.com/apollo-stack/tutorial-building-a-graphql-server-cddaa023c035#.mp7ucf8mz)
* [Apollo Guide](http://docs.apollostack.com/apollo-server/guide.html) 
 
# YOUR CONTRIBUTIONS ARE WELCOME!
