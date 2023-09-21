import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './style'


function RootLayout({ children }) {
    return (
        <div css={S.SLayout}>
            {children}
        </div>
    );
}

export default RootLayout;