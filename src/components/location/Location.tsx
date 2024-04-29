import './Location.css'

function Location() {
  
  const openLocation = () => {
    window.open('https://maps.app.goo.gl/vRHCuqYSHQKfZFSK6', '_blank')
  }

  return (
    <div className="location">
      <img src="4.png" />

      <button className="location__button" onClick={openLocation}>
        Ver ubicación aquí
      </button>
    </div>
  )
}

export { Location }
