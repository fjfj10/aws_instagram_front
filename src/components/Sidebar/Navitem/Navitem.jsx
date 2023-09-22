import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'

function Navitem({ onClick, children }) {

    return (
        <div css={S.SLayout} onClick={onClick}>
            {children}
        </div>
    );
}

export default Navitem;