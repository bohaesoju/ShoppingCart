import * as React from 'react';

interface IStationeryData {
    id: number,
    image: string,
    name: string,
    price: number,
    stock: number
}

interface IOnAddToCart {
    onAddToCart(): void
}

interface IAddInfo {
    // onAddToCart: any,
    StationeryData: IStationeryData
}

export const StationeryBox = ({ StationeryData }: IAddInfo) => {
    return(
        <li className="cardBoxLi">
            <img className="cardBoxImg" src={require('./image/pen.jpg')} alt=""/>
            <div className="titleSet">
                <p className="stationeryName">{StationeryData.name}</p>
                <ul className="categoryUl">
                    <li className="categoryLi">독일산</li>
                    <li className="categoryLi">모나미</li>
                    <li className="categoryLi">검정색</li>
                </ul>
                <p className="stationeryPrice"><span>{StationeryData.price}</span>원</p>
                <p className="stationeryStock">재고 <span>{StationeryData.stock}</span></p>
            </div>
            <button className="addCart">담기</button>
        </li>
    )
};
