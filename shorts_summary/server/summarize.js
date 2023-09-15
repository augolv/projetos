import { pipeline } from "@xenova/transformers";

import { summaryExample } from "./utils/summary.js"

export async function summarize(text){
    try {
        console.log("Realizando o resumo");

        //return summaryExample;

        const generator = await pipeline("summarization", "Xenova/distilbart-cnn-12-6");

        const output = await generator(text);

        console.log("Resumo concluído");

        return output[0].summary_text;
        
    } catch (error) {
        console.log("Não foi possível resumir", error);
        throw new Error(error);
    }
}