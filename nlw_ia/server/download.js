import ytdl from 'ytdl-core'
import fs from 'fs'

export const download = (videoId) => {
    const videoURL = 'https://www.youtube.com/shorts/' + videoId;
    console.log("Realizando download do vídeo: " + videoId);

    ytdl(videoURL, {quality: "lowestaudio", filter: "audioonly"})
    .on("info", (info) => {
        const seconds = info.formats[0].approxDurationMs / 1000
        
        if(seconds > 60){
            throw new Error("Duração do vídeo maior que 60 segundos.")
        }
    })
    .on("end", () => {
        console.log("Download finalizado");
    })
    .on("error", (error) => {
        console.log("Falha ao fazer o download. Detalhes do erro:", error);
    })
    .pipe(fs.createWriteStream('./tmp/audio.mp4'))
}