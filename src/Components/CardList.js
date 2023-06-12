import React from 'react';
import Card from './Card';

const CardList =(props)=> {
    const {robots} = props;
    const cardsArray = robots.map((user, index) =>{
        return ( 
            <Card
                key={robots[index].id} 
                id={robots[index].id} 
                name={robots[index].name} 
                email={robots[index].email} 
            />
        );
    });
    return (
        <div>
            {cardsArray};
            {/* Putting something in curly bracket means javascript */}
        </div>
    );
}

export default CardList;