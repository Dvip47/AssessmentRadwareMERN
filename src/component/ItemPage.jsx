import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { CardContent,Card, Container, Typography } from '@mui/material';

const ItemPage = () => {

    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                setItem(response.data);
            })
            .catch(error => {
                console.log('++++error',error)
                setError(error);
            })
        setLoading(false);

    }, [id])

    if (loading) return <Typography>Loading ..... </Typography>

    if (error) return <Typography> Error loading item. </Typography>

    console.log('++++',item)

    return (
        <Container>
            <Typography variant='h4' component='h1' gutterBottom>
                Item Details
            </Typography>
            <Card>
                <CardContent>
                    <Typography variant='h5' component='h2'> {item?.name} </Typography>
                    <Typography color='textSecondary'>{item?.email}</Typography>
                    <Typography>{item?.phone}</Typography>
                    <Typography>{item?.website}</Typography>
                </CardContent>
            </Card>
        </Container>
    )

}

export default ItemPage;