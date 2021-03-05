import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav>
          <ul>

                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Login">Login</Link>
                </li>
                <li>
                  <Link to="/SignUp">SignUp</Link>
                </li>
                <li>
                  <Link to="/Datatable">Datatable</Link>
                </li>

                <li>
                  <Link to="/PureComp">PureComp</Link>
                </li>
          </ul>
        </nav>

    )
}

export default Header
