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
      <img src="4.png" />

      <Location />

      <img src="6.png" />
      <img src="7.png" />
      <img src="8.png" />
      <img src="9.png" />
      <img src="10.png" />
      <img src="11.png" />

      <Confirm />

      <img src="12.png" />

      <Countdown />

      <Carrousel />
    </section>
  )
}

export { Header }
