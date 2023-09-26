import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import SigninAndUpLayout from '../../components/Layouts/SigninAndUpLayout/SigninAndUpLayout';
import Top from '../../components/Layouts/SigninAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SigninAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SigninAndUpLayout/OrBar/OrBar';
import { signup } from '../../apis/api/account';
import { RiKakaoTalkFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    const navigate = useNavigate();

    const emptyAccount = {
        phoneOrEmail: "",
        name: "",
        username: "",
        password: ""
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
        // Object.values(account) : account의 value가 리스트로 변환
        // 비워진게 있으면 true 없으면 false
        setIsAccountValuesEmpty(Object.values(account).includes(""))
    }, [account]);

    const handleSignupSubmit = async () => {
        try {
            const response = await signup(account);
            navigate("/accounts/login");

        } catch (error) {
            const responseErrorMsg = error.response.data;
            const keys = Object.keys(responseErrorMsg);

            if(keys.includes("username")) {
                setErrorMsg(responseErrorMsg.username);
            }else if(keys.includes("phoneAndEmail")) {
                setErrorMsg(responseErrorMsg.phoneOrEmail);
            }else if(keys.includes("name")) {
                setErrorMsg(responseErrorMsg.name);
            }else if(keys.includes("password")) {
                setErrorMsg(responseErrorMsg.password);
            }

        }

    }

    return (
        <SigninAndUpLayout>
            <Top>
                <div>
                    <div css={S.SSpanContainer}>
                        <span css={S.SSpan}>
                            친구들의 사진과 동영상을 보려면 가입하세요.
                        </span>
                    </div>
                    <div css={S.SOAuthButtonContainer}>
                        <button css={S.SOAuthButton}>
                            <span css={S.SButtonIcon}>
                                <RiKakaoTalkFill />
                            </span>
                            Kakao로 로그인
                        </button>
                    </div>
                    <OrBar />
                    <Input placeholder={"휴대폰 번호 또는 이메일 주소"} name={"phoneOrEmail"} changeAccount={changeAccount} />
                    <Input placeholder={"성명"} name={"name"} changeAccount={changeAccount} />
                    <Input placeholder={"사용자이름"} name={"username"} changeAccount={changeAccount} />
                    <Input type={"password"} placeholder={"비밀번호"} name={"password"} changeAccount={changeAccount} />
                    <div css={S.SSignupButtonContainer}>
                        <button css={S.SSignupButton(isAccountValuesEmpty)} onClick={handleSignupSubmit} disabled={isAccountValuesEmpty}>
                            가입
                        </button>
                    </div>
                    <div>
                        {errorMsg}
                    </div>
                </div>

            </Top>
        </SigninAndUpLayout>
    );
}

export default Signup;