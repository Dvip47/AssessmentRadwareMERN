import React, { useEffect,useState } from 'react';
import axios from 'axios'
import {Container, List, ListItem, ListItemText, Typography} from '@mui/material'
import { Link } from 'react-router-dom';

const ItemList=()=>{

    const [items,setItems]=useState([]);

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>setItems(response.data))
        .catch(error=>console.error(error))

    },[])

    return(
        <Container>
            <Typography variant='h4' component='h1' gutterBottom>Item List</Typography>
            <List>
                {items.map(item=>(
                    <ListItem key={item.id}  button component={Link} to={`/item/${item.id}`}>
                        <ListItemText primary={item.name} secondary={item.email} />
                    </ListItem>
                ))}
            </List>
        
        </Container>
    )


}

export default ItemList;