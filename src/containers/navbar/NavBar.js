import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import './navbar.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {LogoutMethod} from '../../actionMethods/authActionMethods';
import userImg from '../../images/user-pic.png';


class NavBar extends React.Component {
    render() {
        const {user} = this.props;
        return (
            <div>
                <Navbar style={{backgroundColor: '#3b5898'}} dark>
                    <NavbarBrand className="right-icons nav-bar-link" style={{color: 'white'}}><Link to={'/home'}>Dogit</Link></NavbarBrand>
                    {!user && <div className="right-icons nav-bar-link">
                        <Link to={'/home'}>Home</Link>
                        <Link to={'/login'}>login</Link>
                        <Link to={'/register'}>Register</Link>
                        <Link to={'/home'}>About Us</Link>
                        <Link to={'/home'}>Support</Link>
                    </div>}
                    {user && <React.Fragment>
                        <div className="right-icons">
                            <UncontrolledDropdown inNavbar>
                                <DropdownToggle nav className={'colorMain-background'}>
                                    <img className="profileImage"
                                         src={userImg}
                                         alt={'profile'}
                                    />
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link className='underline' to=''>
                                        <DropdownItem onClick={this.props.LogoutMethod} className=''>Log
                                            Out</DropdownItem>
                                    </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </React.Fragment>
                    }
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
};
const mapDispatchToProps = (dispatch) => bindActionCreators({LogoutMethod}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);