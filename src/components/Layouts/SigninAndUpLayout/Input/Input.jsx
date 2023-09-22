import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style'

function Input({ placeholder, name, onChange }) {
    const [ isEmpty, setIsEmpty ] = useState(true);
    const [ inputValue, setInputValue ] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        setIsEmpty(!inputValue);
    }, [inputValue])

    return (
        <div css={S.SLayout}>
            <label css={S.SInput(isEmpty)}>
                <span>{placeholder}</span>
                <input type="text" name={name} onChange={handleInputChange} />
            </label>
            <div css={S.SStateBox}>

            </div>
        </div>
    );
}

export default Input;