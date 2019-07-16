import * as React from 'react';

interface TInfo {
    id: number,
    name: string,
    price: number,
    stock: number,
    count: number
}

interface IOnAddToCart {
    onAddToCart(): void
}

interface IAddInfo {
    onAddToCart: IOnAddToCart,
    info: TInfo
}

export const ProductInfo = ({ onAddToCart, info }) => {
    console.log(info);
        return(
            <li className="cardBoxLi">
                <img className="cardBoxImg" src={require('./image/pen.jpg')} alt=""/>
                <div className="titleSet">
                    <p className="tit1">{info.name}</p>
                    <ul className="categoryUl">
                        <li className="categoryLi">독일산</li>
                        <li className="categoryLi">모나미</li>
                        <li className="categoryLi">검정색</li>
                    </ul>
                    <p className="tit2"><span>{info.price}</span>원</p>
                    <p className="tit3">재고 <span>{info.stock}</span></p>
                    <p className="tit3">수량 <span>{info.count}</span></p>
                </div>
                <button onClick={()=> onAddToCart} className="btnType1 addCart">담기</button>
            </li>
        )
    };
