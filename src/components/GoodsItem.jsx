import { Card, CardContent, CardMedia, Grid, Typography, CardActions, Button } from '@mui/material';
import { height } from '@mui/system';
import React from 'react';

const GoodsItem = (props) => {
    const { name, price, setOrder, poster } = props;

    return (
        <Grid item xs={12} md={4}>
            <Card 
            sx={{  height: "100%"}}>
                <CardMedia
                    image={poster}
                    component="img"
                    alt={name}
                    title={name}
                    sx={{height: 140}}
                />
                <CardContent className='card-body'>
                    <Typography variant="h6" component="h3">{name}</Typography>
                    <Typography variant="body1" >Price: {price} USD.</Typography>
                    </CardContent>
                    <CardActions>
                    <Button
                        
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Buy
                    </Button>
                    </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;