import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

export default function FoodsRestaurants() {
    const classes = useStyles();

    return (
        <div style={{ marginTop: '80px' }}>
            <div style={{ width: '40%', float: 'left', marginLeft:'60px' }}>
                <Typography variant="h2" gutterBottom align='left' style={{ fontWeight: 'bold' }}>
                    <Link to="/foodsandrestaurants" style={{ color: 'inherit', textDecoration: 'none' }}>Foods and Restaurants</Link>
                </Typography>
                <Typography variant="subtitle1" gutterBottom align='left' >
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
            </div>

            <div className={classes.root} style={{ width: '50%', float: 'left' }}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
    )
}