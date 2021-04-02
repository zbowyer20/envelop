import { buildSchema } from 'graphql';

describe('useOperationMigration', () => {
  const testSchema = buildSchema(/* GraphQL */ `
    type Query {
      foo: String
    }
  `);
});
