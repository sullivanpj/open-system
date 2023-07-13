import {
  ContactApiServerContext,
  DB,
  builder,
} from "@open-system/contact-server-data-access";
import { initContextCache } from "@pothos/core";
import {
  YogaInitialContext,
  YogaServerInstance,
  createYoga,
} from "graphql-yoga";
import { Kysely } from "kysely";
import { D1Dialect } from "kysely-d1";

interface Env {
  DB: any;
}

// Create a Yoga instance with a GraphQL schema.
const yoga: YogaServerInstance<ContactApiServerContext, {}> =
  createYoga<ContactApiServerContext>({
    graphqlEndpoint: "graphql",
    schema: builder.toSchema(),
    context: () => ({
      user: {
        id: 1,
      },

      // Adding this will prevent any issues if you server implementation
      // copies or extends the context object before passing it to your resolvers
      ...initContextCache(),
    }),
  });

const handler = {
  async fetch(request: any, env: Env, ctx: YogaInitialContext) {
    try {
      // Create Kysely instance with kysely-d1
      const context = {
        user: {
          id: 1,
        },
        ...ctx,
        env,
        database: new Kysely<DB>({
          dialect: new D1Dialect({ database: env.DB }),
        }),
      };

      return yoga.fetch(request, context as ContactApiServerContext);
    } catch (e: any) {
      return new Response(e?.message, { status: 500 });
    }
  },
};

export default handler;
