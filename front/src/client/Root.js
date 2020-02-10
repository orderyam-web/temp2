import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from '../shared/App';
import {CookiesProvider} from 'react-cookie';
import Analytics from 'react-router-ga';

const Root = () => (
    <CookiesProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Analytics id="UA-130687447-2" debug>
                <App/>
            </Analytics>
        </BrowserRouter>
    </CookiesProvider>
);

export default Root;