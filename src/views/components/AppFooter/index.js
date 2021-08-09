import React from 'react';
import logo from '../../../images/Logo.svg';
import './style.css';

import Typography from '@material-ui/core/Typography';


const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            Scouter
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const AppFooter = () => {
    return (
        <footer className="absolute w-screen bottom-0 right-0 left-0 bg-gray-300">
            <div id="footer-promotional" className="flex flex-col flex-wrap content-start">
                <img src={logo} alt="Scouter Logo"></img>
                <div>Find your right fit with Scouter</div>
            </div>
            <div id="footer-documents" className="flex flex-wrap content-around">
                <span>Privacy Policy</span>
                |
                <span>TTerms of Use</span>
            </div>
            <div id="footer-contact" className="flex flex-col flex-wrap content-center">
                <div id="footer-socials" className="flex flex-wrap content-between">
                    <i className="fab fa-instagram-square" />
                    <i className="fab fa-twitter-square" />
                    <i className="fab fa-linkedin" />
                    <i className="fab fa-tiktok" />
                </div>
                <div id="footer-copyright" className="flex flex-start content-around">
                    <i className="far fa-copyright" />
                    <Copyright />
                </div>
            </div>
        </footer>
    );
}