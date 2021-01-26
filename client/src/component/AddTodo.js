import React from 'react';

// MUI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// CRUD functions
import { updateTodo, deleteTodo } from './../API';

export default function AddTodo(todo) {
    return (
        <>
            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
            >
                <Grid item xs={8} sm={4}>
                    <Card>
                        <Grid container justify='center'>
                            <CardContent>
                                <Typography component='h1' variant='h5'>
                                    Todo name
                                </Typography>
                                <Typography component='h2' variant='caption'>
                                    Todo description
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => updateTodo(todo._id)}>
                                    Update
                                </Button>
                                <Button onClick={() => deleteTodo(todo._id)}>
                                    Delete
                                </Button>
                            </CardActions>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
