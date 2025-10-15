import axios from "axios";

export async function analyzeCode(code) {
  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an expert code reviewer." },
        { role: "user", content: `Review this code for readability, modularity, and potential bugs:\n\n${code}` }
      ]
    },
    {
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
    }
  );

  return response.data.choices[0].message.content;
}
