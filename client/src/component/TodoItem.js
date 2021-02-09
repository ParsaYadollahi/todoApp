import React from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import theme from '../util/theme';

const useStyles = makeStyles((theme) => ({
    deleteButton: theme.deleteButton,
    completeButton: theme.completeButton,

    // Now lets show how we can use theme variables
    taskColor: {
        backgroundColor: '#444444',
    },
    title: {
        color: theme.colors.blue,
    },
    decsription: {
        color: theme.colors.white,
    },
}));

function TodoItem({ todo, updateTodo, deleteTodo }) {
    const classes = useStyles();
    const check_status = todo.status ? 'line-through' : '';
    const complete_button = todo.status ? (
        <> </>
    ) : (
        <Button
            onClick={() => updateTodo(todo)}
            className={classes.completeButton}
        >
            Complete
        </Button>
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
                    <Card className={classes.taskColor}>
                        <Grid container justify='center'>
                            <Grid item sm={8}>
                                <CardContent>
                                    <Typography
                                        component='h1'
                                        variant='h5'
                                        style={{
                                            textDecoration: check_status,
                                        }}
                                        className={classes.title}
                                    >
                                        {todo.name}
                                    </Typography>
                                    <Typography
                                        component='h2'
                                        variant='caption'
                                        style={{
                                            textDecoration: check_status,
                                        }}
                                        className={classes.decsription}
                                    >
                                        {todo.decsription}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid container justify='flex-end' item sm={4}>
                                <CardActions>
                                    {complete_button}
                                    <Button
                                        onClick={() => deleteTodo(todo._id)}
                                        variant='outlined'
                                        className={classes.deleteButton}
                                        color={theme.colors.red}
                                    >
                                        Delete
                                    </Button>
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
