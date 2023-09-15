import { server } from "./server";
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const content = document.querySelector('#content')

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    content.classList.add("placeholder")

    const videoUrl = input.value
    if(!videoUrl.includes("shorts")){
        return content.textContent = "Este vídeo não parece ser um shorts."
    }

    const [_, params] = videoUrl.split('/shorts/');
    const [videoId] = params.split("?si")

    content.textContent = "Obtendo o texto do áudio."

    const transcription = await server.get('/summary/' + videoId);

    content.textContent = "Resumindo o vídeo..."

    const summary = await server.post("/summary", {
        text: transcription.data.result
    })

    content.textContent = summary.data.result;
    content.classList.remove("placeholder")
})