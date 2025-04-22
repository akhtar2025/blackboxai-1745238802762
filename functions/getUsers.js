const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNA_SECRET_KEY
});

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const result = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('users'))),
        q.Lambda(x => q.Get(x))
      )
    );

    return {
      statusCode: 200,
      body: JSON.stringify(result.data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}
