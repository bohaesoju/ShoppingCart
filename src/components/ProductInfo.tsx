import * as React from 'react';

interface ProductProps {
    // id: number;
    // name: string;
    // price: number;
    // stock: number;
    productData: any;
}

export const ProductInfo: React.FC<ProductProps> = props => {
    return(
        <li className="cardBoxLi">
            <img className="cardBoxImg" src={require('./image/pen.jpg')} alt=""/>
            <div className="titleSet">
                <p className="tit1">네임</p>
                {console.log('productData : ', props.productData)}
                <p className="tit1">{props.productData[0].name}</p>
                <ul className="categoryUl">
                    <li className="categoryLi">독일산</li>
                    <li className="categoryLi">모나미</li>
                    <li className="categoryLi">검정색</li>
                </ul>
                <p className="tit2"><span>1000</span>원</p>
                {/*<p className="tit2"><span>{Info[0].price}</span>원</p>*/}
                <p className="tit3">재고 <span>2</span></p>
            </div>
            <button className="addCart">담기</button>
            {/*<button onClick={this.clickTest} className="addCart">담기</button>*/}
        </li>
    )
};