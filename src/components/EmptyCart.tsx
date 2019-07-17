import * as React from 'react';
import { Link } from "react-router-dom";

export const EmptyCart:React.FC = () => {
    return(
        <>
            <p className="emptyCartTitle">카트가 비었습니다! <br/>원하는 문구를 목록에서 선택해주세요</p>
            <button className="goToListButton"><Link to="/">목록으로 가기</Link></button>
        </>
    )
};
