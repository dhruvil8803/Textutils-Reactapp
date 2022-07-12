import React from 'react'
import PropType from 'prop-types'
// import {Link} from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.theme}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/" style={{color: (props.theme === 'light') ? 'black' : 'white'}}>{props.title}</Link> */}
        <a className="navbar-brand" href="/" style={{color: (props.theme === 'light') ? 'black' : 'white'}}>{props.title}</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/about" style={{color: (props.theme === 'light') ? 'black' : 'white'}}>{props.about}</Link> */}
              <a className="nav-link active" aria-current="page" href="/" style={{color: (props.theme === 'light') ? 'black' : 'white'}}>{props.about}</a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.changeTheme} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: (props.theme === 'light') ? 'black' : 'white'}}>Change Theme</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.propType = {
  title: PropType.string.isRequired,
  about: PropType.string
}
Navbar.defaultProps = {
  title: "Title goes here",
  about: "About section goes here"
}