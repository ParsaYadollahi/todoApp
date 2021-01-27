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
                            <Grid item sm={8}>
                                <CardContent>
                                    <form
                                        noValidate
                                        autoComplete='off'
                                        onSubmit={(e) => saveTodo(e, formData)}
                                    >
                                        <TextField
                                            name='body'
                                            type='text'
                                            id='name'
                                            label='Task'
                                            style={{ margin: '0 5px' }}
                                            onChange={handleForm}
                                        />
                                        <TextField
                                            name='body'
                                            type='text'
                                            id='description'
                                            label='Task Description'
                                            onChange={handleForm}
                                        />
                                    </form>
                                </CardContent>
                            </Grid>
                            <Grid item sm={3}>
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
