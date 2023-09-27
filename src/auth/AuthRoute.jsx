import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import { authenticate } from '../apis/api/account';

// 시작 시 로그인 여부에 따라 다른 페이지를 보여주도록
function AuthRoute({ element }) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];
    const [ authenticated, setAuthenticated ] = useState(false);

    useEffect(() => {
        authenticate()
        .then(response => {
            setAuthenticated(response.data);
            for(let path of permitAllPath) {
                if(pathname.startsWith(path)) {
                    //인증이 됐는지 확인
                    if(authenticated) {
                        navigate("/");
                    }
                }
            }
        })
        .catch(error => {
            alert(error.response.data);
            setAuthenticated(false);
            if(!authenticated) {
                navigate("/accounts/login");
            }
        })
        
    }, [authenticated]);

    return element;

}

export default AuthRoute;