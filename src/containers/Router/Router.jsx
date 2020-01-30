import React, {useState} from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import LoginPageContainer from '../LoginPageContainer/LoginPageContainer';
import NavBar from '../../components/NavBar/NavBar';
import HomePageContainer from '../HomePageContainer/HomePageContainer';
import SignUpPageContainer from '../SignUpPageContainer/SignUpPageContainer';

export function Router() {


    const [auth, setAuth] = useState(false);
    const [username, setUsername] = useState('');
        return (
            <>
                <NavBar auth={auth} username={username}/>

                <BrowserRouter>
                    <Switch>

                        <Route path="/login">
                            <LoginPageContainer setAuth={setAuth} setUsername={setUsername}/>
                        </Route>
                        
                        <Route path="/home">
                            <HomePageContainer username={username} auth={auth}/>
                        </Route>

                        <Route path="/signup">
                            <SignUpPageContainer auth={auth} />
                        </Route>
                        
                    </Switch>
                </BrowserRouter>
            </>
        )
}

export default Router


