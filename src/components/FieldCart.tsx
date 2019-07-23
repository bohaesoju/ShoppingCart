import * as React from 'react';

interface IFieldCart{
    count: number
    buyButton(): void
}

export const FieldCart:React.FC<IFieldCart> = (props) => {
    return(
        <>
            <p className="totalCount">총 구매수량 : {props.count} 개</p>
            <button onClick={ props.buyButton } className="buyButton">구매하기</button>
        </>
    )
};
