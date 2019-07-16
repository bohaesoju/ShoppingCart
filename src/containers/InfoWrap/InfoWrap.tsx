import * as React from 'react';
import { useSelector } from 'react-redux';
import { Product } from "../";
import './InfoWrap.scss';

export const InfoWrap:React.FC = () => {
        const Info = useSelector((state: any) => state.Info);
        return (
            <div className="Wrap">
                <header className="header">
                    <p className="title1">문구담기</p>
                    <ul className="rightIcon">
                        <li className="liIcon">햄버거</li>
                        <li className="liIcon">카트{Info.cart}</li>
                    </ul>
                </header>
                {/*<PhoneInfoList data={this.state.information} />*/}
                <div className="contentWrap">
                    <ul className="productUl">
                        <li className="productLi">볼펜</li>
                        <li className="productLi">연필</li>
                        <li className="productLi">침대</li>
                        <li className="productLi">잠옷</li>
                        <li className="productLi">부채</li>
                    </ul>
                    <ul className="cardBoxUl">
                        <Product />
                    </ul>
                </div>
            </div>
        );
};
