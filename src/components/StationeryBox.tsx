import * as React from 'react';
import StationeryTag from './StationeryTag';
import { TagList } from "./TagList";

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
    count: number
}

interface IAddInfo {
    onAddToCart(): void,
    StationeryData: IStationeryData
}

export const StationeryBox = ({ StationeryData, onAddToCart }: IAddInfo) => {
    return(
        <li className="cardBoxLi">
            <img className="cardBoxImg" src={require('./image/pen.jpg')} alt=""/>
            <div className="titleSet">
                <p className="stationeryName">{StationeryData.name}</p>
                <ul className="categoryUl">
                    { StationeryData.tags.map((e: any, i:number) => (
                        <StationeryTag key={i} />)
                    )}
                </ul>
                <p className="stationeryPrice"><span>{StationeryData.price}</span>원</p>
                <p className="stationeryStock">재고 <span>{StationeryData.stock}</span></p>
                <p className="stationeryStock">수량 <span>{StationeryData.count}</span></p>
            </div>
            <button onClick={ onAddToCart } className="addCart">담기</button>
        </li>
    )
};
