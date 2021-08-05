import React, { useState } from 'react';
import bell from '../../../images/bell.svg';
import logo from '../../../images/Logo.svg';
import { formApi, profileApi, applicationApi } from '../../../api/main-api';
import { Typography } from '@material-ui/core';


export const AppHeader = (user = '') => {

    const getNav = (user) => {
        return user && user !== '' ?
            (
                <div className="flex font-semibold flex-grow px-2 justify-end items-center">
                    <Typography>{user.firstName}</Typography>
                    <img
                        className="w-5 h-5 cursor-pointer hover:scale-110 transform transition-all duration-500 ease-in-out"
                        src={bell}
                    ></img>
                    <a className="px-1 cursor-pointer hover:text-yellow-500 transition-colors duration-500 ease-in-out">
                        Dashboard
                    </a>
                    <a className="px-1 cursor-pointer hover:text-yellow-500 transition-colors duration-500 ease-in-out">
                        Profile
                    </a>
            </div>
        )
            : (
                <div></div>
            );
    }

    return (
        <div>
            <nav className="w-screen h-12 bg-white absolute top-0 left-0 flex justify-start">
                <img className="px-2 py-2" src={logo} />
                {getNav()}
            </nav>
        </div>
    );
}