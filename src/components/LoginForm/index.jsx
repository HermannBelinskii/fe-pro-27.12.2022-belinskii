import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';

const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name is a required field'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is a required field'),
    phone: Yup.string()
        .matches(/^\d+$/, 'Only numbers are allowed')
        .length(12, 'The phone number must contain 12 digits')
        .required('Phone is a required field'),
});

const inputStyles = {
    '& label.Mui-focused': {
        color: 'lightpink', 
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'lightpink', 
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottomColor: 'lightpink', 
    },
    '& .MuiInputBase-input': {
        color: 'lightpink', 
    },
};

const buttonStyles = { 
    marginTop: '50px',
    color: 'lightgrey', 
    borderColor: 'lightpink',
    border: 'white 2px solid',
    '&:hover': {
        color: 'lightpink',     
        backgroundColor: 'rgba(255, 182, 193, 0)',
        border: 'lightpink 2px solid',
        boxSizing: 'border-box'
    },
}

const LoginForm = () => {
    const [formVisible, setFormVisible] = useState(true);
  
    const formik = useFormik({
            initialValues: {
            name: '',
            email: '',
            phone: '',
        },
        validationSchema: validationSchema,
            onSubmit: (values) => {
            setFormVisible(false);
        },
    });
  
    const handleReturnToForm = () => {
        setFormVisible(true);
        formik.resetForm();
    };
  
    return (
        <form onSubmit={formik.handleSubmit}>
            <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginTop: '150px' }}>
            {formVisible ? (
                <>
                <Typography variant="h5" gutterBottom style={{ color: 'lightgrey' }}>
                    Login Form
                </Typography>
                <TextField
                    variant="standard"
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    margin="normal"
                    style={{ width: '40%' }}
                    sx={inputStyles}
                />
                <TextField
                    variant="standard"
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    margin="normal"
                    style={{ width: '40%' }}
                    sx={inputStyles}
                />
                <TextField
                    variant="standard"
                    id="phone"
                    name="phone"
                    label="Phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    margin="normal"
                    style={{ width: '40%' }}
                    sx={inputStyles}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    margin="normal"
                    sx={buttonStyles}
                >
                    LOG IN
                </Button>
                </>
            ) : (
                <>
                <Typography variant="h5" gutterBottom style={{ color: 'lightpink' }}>
                    Привет, {formik.values.name}!
                </Typography>
                <Button
                    variant="outlined"
                    color="primary"
                    margin="normal"
                    onClick={handleReturnToForm}
                    sx={buttonStyles}
                >
                    LOG OUT
                </Button>
                </>
            )}
            </Box>
        </form>
    );
  };
  

  export default LoginForm;