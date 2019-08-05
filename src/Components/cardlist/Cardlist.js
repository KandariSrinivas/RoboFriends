import React from 'react';
import Card from '../card/Card';

function Cardlist({ data }) {
    // let cards = data.map(user => <Card name= {user.name} website = {user.website} phone = {user.phone} /> );
    return (
        <div style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center',}}> 
            {data.map(user => <Card key = {user.id} name= {user.name} email={user.email} website = {user.website} phone = {user.phone} /> )}
        </div>
    );
}

export default Cardlist;