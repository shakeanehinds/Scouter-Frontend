import React from 'react';
import './style.css';
import logo from '../../../images/Logo.svg';
import Link from 'react-toolbox/lib/link';


export const AppFooter = () => {
    return (
        <footer className="footer flex flex-wrap content-between w-screen bg-gray-300">
            <div id="footer-promotional" className="flex flex-col flex-wrap content-start">
                <img src={logo} alt="Scouter Logo"></img>
                <div>Find your right fit with Scouter</div>
            </div>
            <div id="footer-documents" className="flex flex-wrap content-around">
                <Link href="/#" label="Privacy Policy" className="underline" />
                |
                <Link href="/#" label="Terms of Use" className="underline" />
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
                    <span>2020 Scouter Ltd. All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
}