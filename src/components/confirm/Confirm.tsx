import './Confirm.css'

function Confirm() {
  
  const onClickNovia = () => {
    window.open('https://wa.link/6qvun0', '_blank')
  }

  const onClickNovio = () => {
    window.open('https://wa.link/oy7svl', '_blank')
  }

  return (
    <div className="confirm">
      <button className="confirm__button" onClick={onClickNovia}>
        Confirmar a la Novia
      </button>
      <button className="confirm__button" onClick={onClickNovio}>
        Confirmar al Novio
      </button>
    </div>
  )
}

export { Confirm }
