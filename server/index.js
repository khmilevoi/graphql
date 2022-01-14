import express from "express";
import { graphqlHTTP } from "express-graphql";

import { Schema } from "./schema";
import { resolvers } from "./resolvers";

const app = express();

const PORT = 8080;
const graphQlLink = `http://localhost:${PORT}/graphql`;

app.get("/", (req, res) => {
  res.send(`GraphQL started on <a href="${graphQlLink}">${graphQlLink}</a>`);
});

app.use(
  "/graphql",
  graphqlHTTP({ schema: Schema, rootValue: resolvers, graphiql: true })
);

app.listen(PORT, () =>
  console.log(`Server started. GraphQL started on ${graphQlLink}`)
);
