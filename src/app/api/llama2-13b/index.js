import createApiHandler from "../api-handler";

const handler = createApiHandler(
  "df7690f1994d94e96ad9d568eac121aecf50684a0b0963b25a41cc40061269e5",
  (body) => {
    return {
      prompt: body.prompt
    };
  }
);

export default handler;
