import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Typography, Button, Container, Box, Grid, Link, Avatar } from "@mui/material";
import Copyright from '../components/Copyright';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () =>{
    const [activeUser, setActiveUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    const handleLoginSubmit = (e) =>{
        e.preventDefault();

        const user = {
            email: email,
            password: password
        }

        const userString = JSON.stringify(user);

    
    }

    return (
        <Container component="main" maxWidth = "xs">
            <Box
                sx={{
                    marginTop:8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component ='h1' variant='h5' style={{ margin: 8 }}>Login</Typography>
                <Box component='form'  onSubmit={handleLoginSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo Electrónico"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange = {(e) => setEmail(e.target.value)}
                        />
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <Button variant="contained"
                        color="primary"
                        className="form-input"
                        fullWidth
                        size="large"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleLoginSubmit}>
                        Ingresar
                    </Button>
                    <Grid container sx={{display:'flex', alignItems: 'center'}}>
                        <Grid item>
                            <Link href="/register" variant="body2">
                            {"Da click aquí para registrate"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}

export default Login;