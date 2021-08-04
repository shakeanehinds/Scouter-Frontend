import React, { useState } from 'react';
//import './style.css';
import bell from '../../../images/bell.svg';
import logo from '../../../images/Logo.svg';
import { formApi, profileApi, applicationApi } from '../../../api/main-api';


export const AppHeader = () => {

    const [currentUser, setCurrentUser] = useState();

    const getLoginModal = () => {
        let state = { email: '', password: '' };

        const handleChange = (name, value) => {
            this.setState({ ...state, [name]: value });
        };

        const loginUser = () => {
            setCurrentUser({
                userName: 'jessicaj',
                firstName: 'Jessica',
                lastName: 'James',
                token: "sdlkdslkklsew90jkljf88432WE$#$%RY^WEWSE#$%$%$%TERGEWDWE@#@$#$#RRG$REFREDF"
            });
        }

        return (
            <div className="authModal" >
                <input type='email' label='Email address' icon='email' value={this.state.email} onChange={handleChange.bind(this, 'email')} />
                <input type='password' label='Password' name='password' icon='password' value={this.state.password} onChange={this.handleChange.bind(this, 'phone')} />
                <button type="submit" onClick={loginUser('recruiter')} >Login</button>
            </div>
        );
    }

    // <nav className="w-screen h-12 bg-white absolute top-0 left-0 flex justify-start">
    //       <img className="px-2 py-2" src={logo} />
    //       <div className="flex font-semibold flex-grow px-2 justify-end items-center">
    //         <img
    //           className="w-5 h-5 cursor-pointer hover:scale-110 transform transition-all duration-500 ease-in-out"
    //           src={bell}
    //         ></img>
    //         <a className="px-1 cursor-pointer hover:text-yellow-500 transition-colors duration-500 ease-in-out">
    //           Create
    //         </a>
    //         <a className="px-1 cursor-pointer hover:text-yellow-500 transition-colors duration-500 ease-in-out">
    //           Profile
    //         </a>
    //       </div>
    //     </nav>

    const getLeftHeader = () => {
        console.log(currentUser);
        const authenticated = true;
        return authenticated ? (
            <div className="flex justify-center w-max">
                <img className="h-6 w-auto" src={bell} alt="Bell Icon"></img>
                <h3 className="px-2">Shericka Jackson</h3>
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