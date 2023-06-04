import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import styles from './styles.module.css'
import { Link } from 'react-router-dom';
import logo from '../../../IMGS/movgiflogo.gif'

const NavBarTv = ({ searchFunTv }) => {

    const onSearch = (word) => {
        searchFunTv(word)
    }

    return (
        <Navbar expand="lg" variant='dark' className='my-0 py-0 ' >
            <Container >
                <Link to='/'>
                    <Navbar.Brand href="#"><img alt='logo' src={logo} style={{ width: '70px', height: '70px' }}></img></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{ color: '#fff' }}>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className={styles.link} to='/'> Home </Link>
                        <Link className={styles.link} to='/MovieList'>All Movies</Link>
                        <Link className={styles.link} to='/TvShows'>TV Shows </Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search Tv Show "
                            className={styles.focusColor}
                            aria-label="Search"
                            onChange={(e) => onSearch(e.target.value)}
                        />
                        <button className={styles.button}>Search</button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}



export default NavBarTv