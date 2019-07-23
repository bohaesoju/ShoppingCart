import * as React from 'react';

interface IStationeryData {
    id: number
    image: string
    name: string
    price: number
    tags: {
        key: string
        name: string
    }[]
    stock: number
}

interface IAddInfo {
    onAddToCart(): void,
    onDeleteToCart(): void,
    StationeryData: IStationeryData,
    count: number
}

interface ITag{
    key: string
    name: string
}

export const StationeryBox = ({
                                  StationeryData,
                                  count,
                                  onAddToCart,
                                  onDeleteToCart
                              }: IAddInfo) => {
    return(
        <li className="cardBoxLi">
            <img className="cardBoxImg" src={require('./image/pen.jpg')} alt=""/>
            <div className="titleSet">
                <p className="stationeryName">{StationeryData.name}</p>
                <ul className="categoryUl">
                    { StationeryData.tags.map((e: ITag, i:number) => (
                        <li className="categoryLi" key={ i }>{ e.name }</li>
                    ))}
                </ul>
                <p className="stationeryPrice"><span>{StationeryData.price}</span>원</p>
                <p className="stationeryStock">재고 <span>{StationeryData.stock}</span></p>
                {/*<p className="stationeryStock">수량 <span>{StationeryData.count}</span></p>*/}
            </div>
            <button onClick={ onAddToCart } className="addCart">담기</button>
            {count > 0 && <button onClick={ onDeleteToCart } className="deleteCart">빼기</button>}
        </li>
    )
};
