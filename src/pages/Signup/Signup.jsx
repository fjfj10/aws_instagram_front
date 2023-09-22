import React from 'react';
import SigninAndUpLayout from '../../components/Layouts/SigninAndUpLayout/SigninAndUpLayout';
import Top from '../../components/Layouts/SigninAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SigninAndUpLayout/Input/Input';

function Signup(props) {
    return (
        <SigninAndUpLayout>
            <Top>
                <div>
                    <div>
                        친구들의 사진과 동영상을 보려면 가입하세요.
                    </div>
                    <button>
                        Kakao로 로그인
                    </button>
                    <div>또는</div>
                    <Input placeholder={"휴대폰 번호 또는 이메일 주소"} name={"phoneAndEmail"} />
                    <Input placeholder={"성명"} name={"name"} />
                    <Input placeholder={"사용자이름"} name={"username"} />
                    <Input placeholder={"비밀번호"} name={"password"} />
                </div>

            </Top>
        </SigninAndUpLayout>
    );
}

export default Signup;