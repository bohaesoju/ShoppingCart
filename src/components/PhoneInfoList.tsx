import * as React from 'react';
import PhoneInfo from './PhoneInfo';

interface InfoList{
    data: any
}

class PhoneInfoList extends React.Component<InfoList> {
    static defaultProps = {
        data: []
    };

    render() {
        const { data } = this.props;
        const list = data.map((info: any) =>
            (<PhoneInfo key={info.id} info={info}/>)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;