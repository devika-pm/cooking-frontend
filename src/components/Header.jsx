import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div> 
      <Navbar className="bg-primary">
    <Container>
      <Navbar.Brand >
     <Link to={'/'} className='fs-4' style={{textDecoration:'none',color:'white'}}>
     <i className="fa-solid fa-utensils fa-fade"></i>
          {' '}
          Cooking Stories
     </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header