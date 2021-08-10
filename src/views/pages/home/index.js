import React from 'react';
import { AppHeader } from '../../components/AppHeader/index';
import { AppFooter } from '../../components/AppFooter/index';
import { HomeInfoComponent } from '../../components/HomeInfoComponent/index';
import { useHistory } from "react-router-dom";
import { Typography } from '@material-ui/core';


///render top level errors, warning and info as banner or modal

export const Home = () => {
    const history = useHistory();

    const goToAdminHome = () => {
        history.push('/admin');
    }

    const goToApplicantHome = () => {
        history.push('/applicant');
    }

    return (
        <div className="home w-screen h-screen flex flex-col content-center overflow-y-scroll static my-28">
            <AppHeader />
            <div className="banner relative my-8" id="banner">
                <Typography >Find your perfect fit</Typography>
                <Typography >Scouter takes the tedious out of recruitment from start to finish.</Typography>
            </div>
            <div className="home-cta-container flex">
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
                    ctaAction={goToApplicantHome}
                    image={"https://i.ibb.co/nwdHqsN/2.jpg"}
                />
            </div>
            <AppFooter />
        </div>
    );
}