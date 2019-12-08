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
                    id: 1
                },
                {
                    title : 'nature',
                    imageUrl: 'https://logonoob.com/img/aj01.jpg',
                    id: 2
                },
                {
                    title : 'baby',
                    imageUrl: 'https://logonoob.com/img/aj01.jpg',
                    id: 3
                },
                {
                    title : 'DYI',
                    imageUrl: 'https://logonoob.com/img/aj01.jpg',
                    size : 'large',
                    id: 4
                },
                {
                    title : 'Vides',
                    imageUrl: 'https://logonoob.com/img/aj01.jpg',
                    id: 5,
                    size: 'large'
                }
            ]
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {this.state.section.map(({title, imageUrl, id , size})=>(
                    <MenuItem key={id} title={title} size={size} imageUrl={imageUrl}/>
                ))}
            </div>
        )
    }
}

export default Directory;