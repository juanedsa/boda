import './Song.css'

function Song() {
  return (
    <div className="song">
      <img src="2.png" />
      <p className="song__label">Dale play a nuestra canción ❤️</p>
      <audio className="song__audio" controls={true} autoPlay={false}>
        <source src="song.ogg" type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
    </div>
  )
}

export { Song }
