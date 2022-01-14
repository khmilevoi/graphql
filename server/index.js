import express from "express";
import { graphqlHTTP } from "express-graphql";

import { schema } from "./data/schema";

const app = express();

const PORT = 8080;
const graphQlLink = `http://localhost:${PORT}/graphql`;

app.get("/", (req, res) => {
  res.send(`GraphQL started on <a href="${graphQlLink}">${graphQlLink}</a>`);
});

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () =>
  console.log(`Server started. GraphQL started on ${graphQlLink}`)
);
