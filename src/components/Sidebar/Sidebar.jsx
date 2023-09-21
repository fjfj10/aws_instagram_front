import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './style'
import { GoHomeFill, GoHome } from 'react-icons/go'
import { FiSearch, FiInstagram } from 'react-icons/fi'
import { AiFillPlusSquare, AiOutlinePlusSquare } from 'react-icons/ai'
import Navitem from './Navitem/Navitem';
import { useNavigate } from 'react-router-dom';

function Sidebar(props) {
    const navigate = useNavigate();
    const [ isSeletedList, setIsSelectedList ] = useState([true, false, false, false]);

    const handleHomeClick = () => {
        setIsSelectedList([true, false, false, false])
    }
    const handleSearchClick = () => {
        setIsSelectedList([false, true, false, false])
    }
    const handleAddContentClick = () => {
        setIsSelectedList([false, false, true, false])
    }
    const handleProfileClick = () => {
        setIsSelectedList([false, false, false, true])
    }

    return (
        <div css={S.SLayout}>
            <Navitem onClick={handleHomeClick}>
                <FiInstagram />
            </Navitem>
            <Navitem onClick={handleHomeClick}>
                {isSeletedList[0] ? <GoHomeFill /> : <GoHome />}
            </Navitem>
            <Navitem onClick={handleSearchClick}>
                <FiSearch />
            </Navitem>
            <Navitem onClick={handleAddContentClick}>
                {isSeletedList[2] ? <AiFillPlusSquare /> : <AiOutlinePlusSquare />}
            </Navitem>
            <Navitem onClick={handleProfileClick}>
                <FiInstagram />
            </Navitem>
        </div>
    );
}

export default Sidebar;