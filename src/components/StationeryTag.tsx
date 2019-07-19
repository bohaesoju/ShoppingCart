import * as React from 'react';

interface ICategoryTag {
    data: {
        key: string,
        name: string,
    }
};

interface ICategoryTagWrap{
    categoryTag: ICategoryTag
}

const StationeryTag:React.FC = () => {
    return(
        <li className="categoryLi">zz</li>
        // <li className="categoryLi">{TagData.name}</li>
    )
};

// const StationeryTag:React.FC = ({ TagData }: IAddInfo) => {
//     return(
//         <li className="categoryLi">{TagData.name}</li>
//     )
// };

export default StationeryTag;
