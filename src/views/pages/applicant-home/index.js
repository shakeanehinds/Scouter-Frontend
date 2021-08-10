import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { AppFooter } from '../../components/AppFooter';
import { AppHeader } from '../../components/AppHeader';
import { ApplicantSignup } from '../applicant-signup/index';


export const ApplicantHome = () => {

    return (
        <React.Fragment>
            <div className="w-full
            0 h-full align-middle flex flex-col content-between overflow-y-scroll my-28">
                <CssBaseline />
                {console.log('applicant home')}
                <AppHeader />
                <Paper>
                    <ApplicantSignup />
                </Paper>
                <AppFooter />
            </div>
        </React.Fragment>
    );

}



