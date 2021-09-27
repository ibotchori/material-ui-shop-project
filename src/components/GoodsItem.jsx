import { Grid } from '@mui/material';
import React from 'react';

const GoodsItem = (props) => {
    const { name, price, setOrder } = props;

    return (
        <Grid item xs={12} md={4}>
            <div className='card'>
                <img
                    src={`https://via.placeholder.com/300x150.png?text=${name.slice(
                        0,
                        12
                    )}`}
                    className='card-img-top'
                    alt={name}
                />
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>Price: {price} USD.</p>
                    <button
                        className='btn btn-primary'
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Buy
                    </button>
                </div>
            </div>
        </Grid>
    );
};

export default GoodsItem;