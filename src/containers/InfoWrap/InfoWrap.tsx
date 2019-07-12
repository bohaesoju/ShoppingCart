import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { requestInfo } from "../../reducers/Info";
import ProductInfoList from "../../components/ProductInfoList";
import './InfoWrap.scss';

export interface info {
    Info: any
}

interface ItemState {
    id: number,
    name: string,
    price: number,
    stock: number
}

class InfoWrap extends React.PureComponent<info> {
    state = {
        cart: 0
    };
    clickTest = () => {
        this.setState({
            cart: this.state.cart + 1
        })
    };
    render() {
        const { Info } = this.props;
        const { cart } = this.state;
        // const list = Array.from(Info).map((
        //     contact: any) => (
        //         <ProductInfo
        //         id={contact.id}
        //         name={contact.name}
        //         price={contact.price}
        //         stock={contact.stock}
        //     />)
        // );
        // let list2 = for(let i = 0; i <= Info.length; i++){
        //     <ProductInfo
        //         id={Info[i].id}
        //         name={Info[i].name}
        //         price={Info[i].price}
        //         stock={Info[i].stock}
        //     />;
        // }

        return (
            <div className="Wrap">
                <header className="header">
                    <p className="title1">문구담기</p>
                    <ul className="rightIcon">
                        <li className="liIcon">햄버거</li>
                        <li className="liIcon">카트{cart}</li>
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
                        {/*{*/}
                            {/*Info.map((contact: any) => {*/}
                                {/*return(<ProductInfo*/}
                                    {/*id={contact.id}*/}
                                    {/*name={contact.name}*/}
                                    {/*price={contact.price}*/}
                                    {/*stock={contact.stock}*/}
                                {/*/>);*/}
                            {/*})*/}
                        {/*}*/}
                        <ProductInfoList productData={ Info } />
                    </ul>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state: any) => {
    console.log('mapSateProps: ', state, Array.isArray(state.Info));
    return {
        Info: state.Info
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onRequestInfo: bindActionCreators(requestInfo, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (InfoWrap);
