import * as React from 'react';

export interface Phone {
    onCreate: any
}

class PhoneForm extends React.Component<Phone> {
    state = {
        name: '',
        phone:''
    };
    handleChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input
                    type="text"
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default PhoneForm;