import { Carrousel } from '../carrousel/Carrousel'
import { Confirm } from '../confirm/Confirm'
import { Countdown } from '../countdown/Countdown'
import { Location } from '../location/Location'
import { Song } from '../song/Song'

import './Header.css'

function Header() {
  return (
    <section className="header">
      <img src="1.png" />

      <Song />

      <img src="3.png" />

      <Location />

      <img src="5.png" />
      <img src="6.png" />
      <img src="7.png" />
      <img src="8.png" />
      <img src="9.png" />

      <Confirm />

      <img src="10.png" />

      <Countdown />

      <Carrousel />
    </section>
  )
}

export { Header }
