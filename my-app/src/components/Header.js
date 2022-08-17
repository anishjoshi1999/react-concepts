import React from 'react'
import Button from './Button'



const Header = ({title}) => {
  const onClick = () => {
    console.log("Click")
  }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color="green" text="Add" onClick={onClick}></Button>

    </header>
  )
}
// default props
// Header.defaultProps = {
//     title:"Task Tracker"
// }
// Modifying props types
// Header.PropTypes = {
//     title:PropTypes.string
// }

export default Header