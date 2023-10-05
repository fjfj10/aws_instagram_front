import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'
import { useRecoilState } from 'recoil';
import { showModalState } from '../../../store/atoms/ModalState';

function ModalLayout({ children }) {
    const [ showModal, setShowModal ] = useRecoilState(showModalState);

    const handelBackgroundClick = (e) => {
        setShowModal(<></>);
    }
    const handelContainerClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div css={S.SLayout} onClick={handelBackgroundClick}>
            <div css={S.SContainer} onClick={handelContainerClick}>
                {children}
            </div>
        </div>
    );
}

export default ModalLayout;