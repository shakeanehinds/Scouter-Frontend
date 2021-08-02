import React, { useState } from 'react';
//import './style.css';
import bell from '../../../images/bell.svg';
import logo from '../../../images/Logo.svg';
import { loginAsRecruiter, isAuthenticated } from '../../../api/home-api';


export const AppHeader = () => {

    const [currentUser, setCurrentUser] = useState();

    const getLoginModal = () => {
        let state = { email: '', password: '' };

        const handleChange = (name, value) => {
            this.setState({ ...state, [name]: value });
        };

        const loginUser = () => {
            setCurrentUser(loginAsRecruiter())
        }
        return (
            <div class="authModal" >
                <input type='email' label='Email address' icon='email' value={this.state.email} onChange={handleChange.bind(this, 'email')} />
                <input type='password' label='Password' name='password' icon='password' value={this.state.password} onChange={this.handleChange.bind(this, 'phone')} />
                <button type="submit" onClick={loginUser('recruiter')} >Login</button>
            </div>
        );
    }

    const getLeftHeader = () => {
        return isAuthenticated() ? (
            <div className="flex justify-center w-max">
                <img className="h-6 w-auto" src={bell} alt="Bell Icon"></img>
                <h3 className="px-2">{currentUser.firstName + " " + currentUser.lastName}</h3>
            </div>
        )
            :
            (
                <div className="flex justify-center w-max">
                    <img className="h-6 w-auto" src={bell} alt="Bell Icon"></img>
                    <button className="px-2" >Signup</button>
                    <button className="px-2" onClick={getLoginModal()} >Login</button>
                </div>
            );
    }

    return (
        <div>
            <nav className="flex w-full bg-white justify-between items-center p-4">
                <img src={logo} alt="Scouter Logo"></img>
                {getLeftHeader()}
            </nav>
        </div>
    );
}