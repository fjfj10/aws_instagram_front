import React, { useState } from 'react';
import { Navigate, useLocation} from 'react-router-dom';

// 시작 시 로그인 여부에 따라 다른 페이지를 보여주도록
function AuthRoute({ element }) {
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];
    const [ authenticated, setAuthenticated ] = useState(false);

    for(let path of permitAllPath) {
        if(pathname.startsWith(path)) {
            //인증이 됐는지 확인
            if(authenticated) {
                return <Navigate to={"/"} />;
            }
            return element;
        }
    }

    if(!authenticated) {
        return <Navigate to={"/accounts/login"} />;
    }

    return element;

}

export default AuthRoute;