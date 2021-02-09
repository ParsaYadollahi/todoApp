import React, { useState } from 'react';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: '#444444',
    },
    addButton: theme.addButton,
}));

const INITIAL_FORM_DATA = { name: '', description: '' };

function AddTodo({ saveTodo }) {
    const classes = useStyles();
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const handleForm = (e) => {
        setFormData({
            ...formData, // The triple dot is called spread operator and allows an iterable like an array to expand all it's elements
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    const handleOnClick = (e) => {
        saveTodo(e, formData);
        setFormData(INITIAL_FORM_DATA);
    };

    return (
        <>
            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
                style={{ margin: '20px 0' }}
            >
                <Grid item xs={12} sm={4}>
                    <Card className={classes.background}>
                        <Grid
                            container
                            direction='row'
                            justify='center'
                            alignItems='center'
                        >
                            <Grid
                                item
                                sm={8}
                                xs={12}
                                container
                                direction='row'
                                justify='flex-start'
                                alignItems='center'
                            >
                                <CardContent style={{ width: '100%' }}>
                                    <form
                                        noValidate
                                        autoComplete='off'
                                        // onSubmit={(e) => saveTodo(e, formData)}
                                    >
                                        <Grid
                                            container
                                            direction='row'
                                            justify='center'
                                            alignItems='center'
                                            spacing={3}
                                        >
                                            <Grid item sm={6}>
                                                <TextField
                                                    name='body'
                                                    type='text'
                                                    id='name'
                                                    label='Task'
                                                    variant='outlined'
                                                    placeholder='Task'
                                                    value={formData.name}
                                                    className={classes.input}
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    // need it to be onChange or else it won't catch each character
                                                    onChange={handleForm}
                                                    InputLabelProps={{
                                                        style: {
                                                            color: 'white',
                                                        },
                                                    }}
                                                    InputProps={{
                                                        style: {
                                                            color: 'white',
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item sm={6}>
                                                <TextField
                                                    name='body'
                                                    type='text'
                                                    id='description'
                                                    label='Task Description'
                                                    variant='outlined'
                                                    placeholder='Descrpription'
                                                    value={formData.description}
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    onChange={handleForm}
                                                    InputLabelProps={{
                                                        style: {
                                                            color: 'white',
                                                        },
                                                    }}
                                                    InputProps={{
                                                        style: {
                                                            color: 'white',
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </form>
                                </CardContent>
                            </Grid>
                            <Grid
                                item
                                sm={3}
                                container
                                direction='row'
                                justify='flex-end'
                                alignItems='center'
                            >
                                <CardActions>
                                    <Button
                                        className={classes.addButton}
                                        onClick={(e) => handleOnClick(e)}
                                    >
                                        Add Task
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

export default AddTodo;
