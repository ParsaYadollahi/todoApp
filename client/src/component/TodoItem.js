import React from 'react';

// MUI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function TodoItem(todo, updateTodo, deleteTodo) {
    const check_status = todo.status ? 'line-through' : '';

    const complete_button = todo.status ? (
        <> </>
    ) : (
        <Button onClick={() => deleteTodo(todo._id)}>Delete</Button>
    );

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
                            <Grid item sm={8}>
                                <CardContent>
                                    <Typography
                                        component='h1'
                                        variant='h5'
                                        style={{
                                            textDecoration: check_status,
                                        }}
                                    >
                                        Todo name
                                    </Typography>
                                    <Typography
                                        component='h2'
                                        variant='caption'
                                        style={{
                                            textDecoration: check_status,
                                        }}
                                    >
                                        Todo description
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid container justify='flex-end' item sm={4}>
                                <CardActions>
                                    <Button onClick={() => updateTodo(todo)}>
                                        Complete
                                    </Button>
                                    {complete_button}
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default TodoItem;
