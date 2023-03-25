exports.handler = async function (event, context) {
  const appPassword = process.env.APP_PASSWORD;

  return {
    statusCode: 200,
    body: JSON.stringify({ appPassword }),
  };
};
