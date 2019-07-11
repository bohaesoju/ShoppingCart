import * as React from 'react';
import './MainPage.scss';

class MainPage extends React.PureComponent {
    render() {
        return (
            <div className="Wrap">
                <header className="header">
                    <p className="title1">문구담기</p>
                    <ul className="rightIcon">
                        <li className="liIcon">햄버거</li>
                        <li className="liIcon">카트</li>
                    </ul>
                </header>
                <div className="contentWrap">
                    <ul className="productUl">
                        <li className="productLi">볼펜</li>
                        <li className="productLi">연필</li>
                        <li className="productLi">침대</li>
                        <li className="productLi">잠옷</li>
                        <li className="productLi">부채</li>
                    </ul>
                    <ul className="cardBoxUl">
                        <li className="cardBoxLi">
                            <img className="cardBoxImg" src={require('./image/pen.jpg')} alt=""/>
                            <div className="titleSet">
                                <p className="tit1">볼펜</p>
                                <ul className="categoryUl">
                                    <li className="categoryLi">독일산</li>
                                    <li className="categoryLi">모나미</li>
                                    <li className="categoryLi">검정색</li>
                                </ul>
                                <p className="tit2"><span>10,000</span>원</p>
                                <p className="tit3">재고 <span>6</span></p>
                            </div>
                            <button className="addCart">담기</button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default MainPage;
