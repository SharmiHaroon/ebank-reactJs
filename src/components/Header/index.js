import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickRemove = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <nav className="nav-element">
      <Link to="/" className="link-el">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          className="kt"
          alt="website logo"
        />
      </Link>
      <button type="button" className="remove-button" onClick={onClickRemove}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
