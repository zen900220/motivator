const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.AI_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = async function () {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Praise my girlfriend for her beautiful artwork",
    temperature: 0.5,
    max_tokens: 50,
    stop: ["."],
  });

  return response.data.choices[0].text;
};
