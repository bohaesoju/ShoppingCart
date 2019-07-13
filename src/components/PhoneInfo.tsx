import * as React from 'react';

interface Phone {
    info: any
}

class PhoneInfo extends React.Component<Phone> {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    };

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {
            name, phone, id
        } = this.props.info;

        return (
            <div style={style}>
                <div>{id}</div>
                <div><b>{name}</b></div>
                <div>{phone}</div>
            </div>
        );
    }
}

export default PhoneInfo;