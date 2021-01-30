export default {
    palette: {
        primary: {
            light: '#ffffff',
            main: '#b3e5fc',
            dark: '#fafafa',
            contrastText: '#000',
        },
        secondary: {
            light: '#63a4ff',
            main: '#1976d2',
            dark: '#004ba0',
            contrastText: '#fff',
        },
    },
    // To make an immediate switch to typography v2 you can simply pass
    // when calling createMuiTheme
    typography: {
        useNextVariants: true,
    },
    colors: {
        white: '#ffffff',
        grey: '#686c70',
        blue: '#4285F4',
        red: '#DB4437',
        yellow: '#F4B400',
        green: '#0F9D58',
    },
    deleteButton: {
        textTransform: 'none',
        backgroundColor: '#ffffff',
        color: '#DB4437',
        boxShadow: 'none',
        border: '1px solid #DB4437',
        '&:hover': {
            backgroundColor: '#fee8e8',
            boxShadow: 'none',
        },
    },
    completeButton: {
        textTransform: 'none',
        padding: '6px 20px',
        backgroundColor: '#ffffff',
        color: '#0F9D58',
        boxShadow: 'none',
        border: '1px solid #0F9D58',
        '&:hover': {
            backgroundColor: '#dcfcdf',
            boxShadow: 'none',
        },
    },
    addButton: {
        textTransform: 'none',
        padding: '6px 20px',
        color: '#4285F4',
        boxShadow: 'none',
        border: '1px solid #4285F4',
        '&:hover': {
            backgroundColor: '#c8dafa',
            boxShadow: 'none',
        },
    },
};
