import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './style'

function Navitem({ onClick, children }) {

    return (
        <div css={S.SLayout} onClick={onClick}>
            {children}
        </div>
    );
}

export default Navitem;