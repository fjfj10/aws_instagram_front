import { useQuery } from 'react-query';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authenticate } from '../apis/api/account';
import Loading from '../components/Loading/Loading';
import { useState } from 'react';

function AuthRoute({ element }) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];
    // useQuery는 get요청만 가능, key값 : ["authenticate"] 꼭 배열안에, {옵션: 에러처리, 요청횟수조정 등등 가능}
    const authenticateState = useQuery(["authenticate"], authenticate, {
        // 재요청 횟수 지정
        retry: 0,
        refetchOnWindowFocus: false
        // onError: (error) => {
        //     console.log("에러");
        //     console.log(error);
        // }
    });

    // console.log(authenticateState)

    if(authenticateState.isLoading) {
        return <Loading />;
    }

    // 인증이 되지 않았을 때 isError = true
    if(authenticateState.isError) {
        for(let path of permitAllPath) {
            // 로그인 안된채로 로그인 또는 회원가입 페이지로 들어가면 element를 그냥 반환 시켜준다
            if (pathname.startsWith(path)) {
                return element;
            }
        }
        return <Navigate to={"/accounts/login"} />;
    }
    
    for(let path of permitAllPath) {
        // 로그인 된채로 로그인 회원가입 페이지로 들어가면 홈으로 보냄
        if (pathname.startsWith(path)) {
            return <Navigate to={"/"} />;
        }
    }

    return element;

}

export default AuthRoute;