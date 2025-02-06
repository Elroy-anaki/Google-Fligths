import React from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from "@mui/material"

function Link({path, title}) {
  return (
    <NavLink to={path}>{title}</NavLink>
  )
}

export default Link
