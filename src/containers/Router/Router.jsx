import React, {useState} from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Cookies from 'universal-cookie';
import LoginPageContainer from '../LoginPageContainer/LoginPageContainer';
import NavBar from '../../components/NavBar/NavBar';
import HomePageContainer from '../HomePageContainer/HomePageContainer';
import SignUpPageContainer from '../SignUpPageContainer/SignUpPageContainer';

export function Router() {

    const cookies = new Cookies();

    const [auth, setAuth] = useState(false);




    const setAuthCookie = (newAuth) => {
        cookies.set('auth', newAuth, { path: '/'});
        setAuth(newAuth);
    }

    const getAuthCookie = () => {
        console.log(`Getting auth: ${cookies.get('auth')}`);
        setAuth(cookies.get('auth'));
        return cookies.get('auth'); 
    }

    const setUsernameCookie = (newUsername) => {
        cookies.set('username', newUsername, {path: '/'});
    }

    const getUsernameCookie = () => {
        console.log(`Fetching username: ${cookies.get('username')}`);
        return cookies.get('username');
    }


        return (
            <>
                
                <NavBar auth={getAuthCookie} authBool={auth} username={getUsernameCookie} setAuth={setAuthCookie} setUsername={setUsernameCookie}/>
                
                <BrowserRouter>
                    <Switch>

                        <Route path="/login">
                            <LoginPageContainer setAuth={setAuthCookie} setUsername={setUsernameCookie}/>
                        </Route>
                        
                        <Route exact path="/">
                            <HomePageContainer username={getUsernameCookie} auth={getAuthCookie}/>
                        </Route>

                        <Route path="/signup">
                            <SignUpPageContainer auth={getAuthCookie} />
                        </Route>
                        
                    </Switch>
                </BrowserRouter>
            </>
        )
}

export default Router


