import * as React from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <header className="header">
            <p className="title1">문구담기</p>
            <ul className="rightIcon">
                <li className="liIcon"><Link to="/">목록</Link></li>
                <li className="liIcon"><Link to="/cart">카트</Link></li>
                {/*<li className="liIcon">카트{Info.cart}</li>*/}
            </ul>
        </header>
    )
};
