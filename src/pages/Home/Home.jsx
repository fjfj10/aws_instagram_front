import React from 'react';
import { getUser } from '../../apis/api/user';
import jwtDecode from 'jwt-decode';

function Home(props) {
    try {
        const decode = jwtDecode(localStorage.getItem("accessToken").substring(7));
        console.log(decode.username);

        const response = getUser(decode.username);
        console.log(response);
    } catch (error) {
        console.log(error)
    }
    return (
        <div>
            home
        </div>
    );
}

export default Home;