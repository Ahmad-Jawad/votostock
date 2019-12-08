import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            section: [
                {
                    title : 'portrait',
                    imageUrl: 'https://logonoob.com/img/aj01.jpg',
                    id: 1,
                    linkUrl: 'portrait'
                },
                {
                    title : 'nature',
                    imageUrl: 'https://logonoob.com/img/aj01.jpg',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title : 'baby',
                    imageUrl: 'https://logonoob.com/img/aj01.jpg',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title : 'DYI',
                    imageUrl: 'https://logonoob.com/img/aj01.jpg',
                    size : 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title : 'Vides',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    size: 'large',
                    linkUrl: ''
                }
            ]
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {this.state.section.map(({id , ...otherSectionProps})=>{
                    return (<MenuItem key={id} {...otherSectionProps} />);
                })}
            </div>
        )
    }
}

export default Directory;