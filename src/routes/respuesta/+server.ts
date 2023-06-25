import { json } from "@sveltejs/kit";
import { Configuration, OpenAIApi } from "openai";
    import {OPENAPI_KEY} from "$env/static/private";
    const configuration = new Configuration({
    apiKey: OPENAPI_KEY,
  });
  
const openai = new OpenAIApi(configuration);

export async function POST({request}){
    const {pregunta} = await request.json();
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: pregunta,
        temperature: 0.5,
      });
      console.log('api responde')

      return json(response.data)
}