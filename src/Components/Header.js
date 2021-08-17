import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import StyledButton from './LinkButton'
export default function Header() {
  return (
    <div>
      <Link to="/home">
               <StyledButton>
          <span>Home</span>
        </StyledButton>
      </Link>
      &nbsp;
      <Link to="/about">
        <StyledButton>
          <span>About</span>
        </StyledButton>
      </Link>
      &nbsp;
      <Link to="/">
        <StyledButton>
          <span>Logout</span>
        </StyledButton>
      </Link>
    </div>
  )
}
