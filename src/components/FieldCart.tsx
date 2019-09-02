import * as React from 'react';

interface IFieldCart{
    cartList: []
    buyButton(): void
    cancelButton(): void
}

interface ITag{
    key: string
    name: string
}

interface ICartList{
    id: number
    image: string
    name: string
    price: number
    stock: number
    tags: []
}

export const FieldCart:React.FC<IFieldCart> = (props) => {
    return(
            <>
                <ul className="cardBoxUl">
                    {/*{console.log(props)}*/}
                    { props.cartList.map((e: ICartList, i:number) => (
                        <li key={i} className="cardBoxLi">
                            <img className="cardBoxImg" src={require(`./image/${e.image}`)} alt=""/>
                            <div className="titleSet">
                                <p className="stationeryName">{e.name}</p>
                                <ul className="categoryUl">
                                    {e.tags && e.tags.map((e: ITag, i:number) => (
                                        <li className="categoryLi" key={ i }>{ e.name }</li>
                                    ))}
                                </ul>
                                <p className="stationeryPrice"><span>{e.price}</span>원</p>
                                {/*<p className="stationeryStock">재고 <span>{e.stock}</span></p>*/}
                                <p className="stationeryStock">수량 <span>1</span></p>
                            </div>
                            <button onClick={ props.cancelButton } className="cancel">취소</button>
                        </li>
                    ))}


                </ul>
                <div className="totalCountWrap">
                    <p className="totalCount">총 구매수량 : {props.cartList.length} 개</p>
                    <p className="totalCount">총 결재금액 : {props.cartList.reduce((acc: number, cur: any,) => {
                        return acc + cur.price;
                    }, 0)} 원</p>
                </div>
            <button onClick={ props.buyButton } className="buyButton">구매하기</button>
        </>
    )
};
