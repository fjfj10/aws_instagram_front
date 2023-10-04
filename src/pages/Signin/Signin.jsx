import React, { useEffect, useState } from 'react';
import SigninAndUpLayout from '../../components/Layouts/SigninAndUpLayout/SigninAndUpLayout';
import Top from '../../components/Layouts/SigninAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SigninAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SigninAndUpLayout/OrBar/OrBar';
import { signin } from '../../apis/api/account';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

function Signin(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const emptyAccount = {
        phoneOrEmailOrUsername: "",
        loginPassword: ""
    }
    const [ account, setAccount ] = useState(emptyAccount);
    const [ isAccountValuesEmpty, setIsAccountValuesEmpty ] = useState(true);
    const [ errorMsg, setErrorMsg ] = useState("");
    
    const changeAccount = (name, value) => {
        setAccount({
            ...account,
            [name]: value
        });
    }

    useEffect(() => {
        setIsAccountValuesEmpty(Object.values(account).includes(""))
    }, [account]);

    const handleSigninSubmit = async () => {
        try {
            const response = await signin(account);
            // JWT토큰은 Bearer를 앞에 붙여준다(공식임)
            localStorage.setItem("accessToken", "Bearer " + response.data);
            // 토큰을 넣은 후 reload하여 instance의 Authorization을 변경
            window.location.reload();
        } catch (error) {
            setErrorMsg(error.response.data.errorMessage);
        }
        
    }

    return (
        <SigninAndUpLayout>
            <Top>
                <div>
                    <Input placeholder={"전화번호, 사용자이름 또는 이메일 주소"} name={"phoneOrEmailOrUsername"} changeAccount={changeAccount} />
                    <Input placeholder={"비밀번호"} type={"password"} name={"loginPassword"} changeAccount={changeAccount} />
                    <div>
                        <button onClick={handleSigninSubmit} disabled={isAccountValuesEmpty}>
                            로그인
                        </button>
                    </div>
                    <OrBar />
                    <div>
                        kakao로 로그인
                    </div>
                    <div>
                        {errorMsg}
                    </div>
                </div>
                
            </Top>
        </SigninAndUpLayout>
    );
}

export default Signin;