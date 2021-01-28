import React, { useState } from 'react';

// MUI
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { addToDo } from './../API';

function AddTodo(saveTodo) {
    const [formData, setFormData] = useState();

    const handleForm = (e) => {
        setFormData({
            ...formData, // The triple dot is called spread operator and allows an iterable like an array to expand all it's elements
            [e.currentTarget.id]: e.currentTarget.value,
        });
        console.log(formData);
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
                    <Card>
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
                                        onSubmit={(e) => saveTodo(e, formData)}
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
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    onChange={handleForm}
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
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    onChange={handleForm}
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
                                    <Button>Add Task</Button>
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
