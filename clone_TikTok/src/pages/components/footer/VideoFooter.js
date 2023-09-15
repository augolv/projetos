import React from 'react'
import './videoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
    return (
        <div className='videoFooter'>
            <div className='videoFooter-texto'>
                <h3>@{name}</h3>
                <p>{description}</p>
                <div className='videoFooter-musica'>
                    <MusicNoteIcon className='videoFooter-icone' />
                    <div className='videoFooter-musica-texto'>
                        <p>{music}</p>
                    </div>
                </div>
            </div>
            <img
                className='videoFooter-disco'
                alt='Imagem de disco de vinil girando'
                src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'
            />
        </div>
    )
}

export default VideoFooter