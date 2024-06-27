import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, CardContent, Card, Container, Typography, Grid, Divider } from '@mui/material';
import DataIssue from '../Utility/DataIssue';

const ItemPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/users/${id}`)
            .then(response => {
                setItem(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading item:', error);
                setError(error);
                setLoading(false);
            });
    }, [id]);

    // if (loading) return <Typography>Loading...</Typography>;
    // if (error) return <Typography>Error loading item.</Typography>;

    return (
        <Box className='container'>
            <Container maxWidth='md'>
                <p>
                    <Link to={'/'}>
                        Back
                    </Link>
                </p>
                <Typography variant='h4' component='h1' className="manage-item-heading">
                    User Details
                </Typography>

                <Card variant='outlined'>
                    <CardContent>
                        <Typography variant='h5' component='h2' gutterBottom>
                            {item?.name}
                        </Typography>
                        <Typography color='textSecondary' gutterBottom>
                            {item?.email}
                        </Typography>
                        <Divider />
                        <Grid container spacing={2} style={{ marginTop: '20px' }}>
                            <Grid item xs={12} sm={6}>
                                {item ==null?
                                    <DataIssue error={error} loading={loading} />
                                    :
                                    <>
                                        <Typography variant='body1'>
                                            Phone: {item?.phone}
                                        </Typography>
                                        <Typography variant='body1'>
                                            Website: {item?.website}
                                        </Typography>
                                    </>
                                }
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
}

export default ItemPage;
