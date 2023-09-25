import { css } from '@emotion/react';

export const SSpanContainer = css`
    margin: 0px 40px 10px 40px;
    width: 268px;
    height: 40px;
    text-align: center;
`
export const SSpan = css`
    width: 268px;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    color: rgb(115,115,115);
`

export const SOAuthButtonContainer = css`
    margin: 8px 40px 8px 40px;
    width: 268px;
    height: 34px;
`
export const SOAuthButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 8px;
    padding: 7px 16px;
    width: 268px;
    height: 34px;
    background-color: #F7E600;
    font-size: 14px;
    font-weight: 600;
    color: white;
    cursor: pointer;
`
export const SButtonIcon = css`
    margin-right: 8px;
    font-size: 18px;
`

export const SSignupButtonContainer = css`
    margin: 8px 40px;
    width: 268px;
    height: 32px;
`
export const SSignupButton= (isAccountValuesEmpty) => css`
    border: none;
    border-radius: 8px;
    padding: 7px 16px;
    width: 268px;
    height: 32px;
    background-color: ${isAccountValuesEmpty ? "rgb(115, 199, 255)" : "rgb(0, 149, 246)"};
    font-weight: 600;
    color: white;
    ${isAccountValuesEmpty ? "" : "cursor: pointer"};
`

