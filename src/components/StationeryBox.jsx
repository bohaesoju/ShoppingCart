import * as React from 'react';

export const StationeryBox = ({
                                  StationeryData,
                                  count,
                                  onAddToCart,
                                  onDeleteToCart
                              }) => {
    return(
        <li className="cardBoxLi">
            <img className="cardBoxImg" src={require(`./image/${StationeryData.image}`)} alt=""/>
            {/*<img className="cardBoxImg" src={require('./image/pen.jpg')} alt=""/>*/}
            <div className="titleSet">
                <p className="stationeryName">{StationeryData.name}</p>
                <ul className="categoryUl">
                    { StationeryData.tags.map((e, i) => (
                        <li className="categoryLi" key={ i }>{ e.name }</li>
                    ))}
                </ul>
                <p className="stationeryPrice"><span>{StationeryData.price}</span>원</p>
                <p className="stationeryStock">재고 <span>{StationeryData.stock}</span></p>
                {/*<p className="stationeryStock">수량 <span>{StationeryData.count}</span></p>*/}
            </div>
            <button onClick={ (i)=> onAddToCart(i) } className="addCart">담기</button>
            {count > 0 && <button onClick={ onDeleteToCart } className="deleteCart">빼기</button>}
        </li>
    )
};
