import React from 'react';
import { AppHeader } from '../../components/AppHeader/index';
import { AppFooter } from '../../components/AppFooter/index';
import { HomeInfoComponent } from '../../components/HomeInfoComponent/index';
import { useHistory } from "react-router-dom";



///render top level errors, warning and info as banner or modal

export const Home = () => {
    const history = useHistory();

    const goToAdminHome = () => {
        history.push('/admin');
    }

    const goToApplicantSignup = () => {
        history.push('/applicant');
    }

    return (
        <div className="home w-screen h-screen flex flex-col content-center p-0">
            <AppHeader />
            <div className="px-24">
                <div className="w-full banner flex flex-col content-around" id="banner">
                    |<div className="slogan w-full text-8x1">Find your perfect fit</div>
                    <div className="slogan-subtitle w-full text 4x1">Scouter takes the tedious out of recruitment from start to finish.</div>
            </div>
                <div className="home-cta-container">
                    <HomeInfoComponent
                    title="Find great talent"
                    subtitle="It's time to stop worrying about filtering unqualified and uninterested talent. Join Scouter today!"
                    ctaText="Start Recruiting"
                        ctaAction={goToAdminHome}
                        image={"https://i.ibb.co/2tNPgrt/1.jpg"}
                />
                <HomeInfoComponent
                    title="Find great jobs"
                    subtitle="It's time to stop worrying about filtering through job applications that don't match your skillset.!"
                    ctaText="Start Finding Jobs"
                        ctaAction={goToApplicantSignup}
                        image={"https://i.ibb.co/nwdHqsN/2.jpg"}
                    />
                </div>

            </div>
            <AppFooter />
        </div>
    );
}