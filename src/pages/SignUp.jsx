import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function LoginForm(){
 
    const navigate = useNavigate();
    const colors = {
        "info": "#4287f5"
    }
    const onSubmit = ()=>{
        axios.post(`http://127.0.0.1/back_end/back_end/register.php`,
            {
            'userName': "hajarTest",
            'email': "hajar@gmail.com",
            'pswd': "12345678"
           }).then((res)=>{
            console.log(res?.data)
           }).catch((err)=>console.log(err))
    }
    return (
        <Container maxWidth="xs" sx={{ mt: 5}}>
            <Paper elevation={3} sx={{padding: 4}} >
                <Box maxWidth="100%" sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}  >
                 
                    <Avatar  sx={{ bgcolor: colors.info, mt:5}}>
                        <LockIcon />
                    </Avatar>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        Sign Up
                    </Typography>
                    <TextField id="username-input" label="Username" autoComplete="username" variant="outlined" fullWidth  type='text'/>
                    <TextField id="email-input" label="Email" autoComplete="email" variant="outlined" fullWidth type='email' sx={{mt:2}}/>
                    <TextField id="password-input" label="Password" autoComplete="new-password" variant="outlined" type='password' fullWidth  sx={{mt:2}}/>
                    <Button variant="contained" color='info' fullWidth  sx={{mt:5}} onClick={()=> onSubmit()}>Submit</Button>
                    <Box sx={{mt:1}}>
                    <span style={{textDecoration: "none", color:"black"}}>Already have an account?</span> <Link href="#" onClick={() => navigate('/login')}>Sign In</Link>
                    </Box>
                </Box>
            </Paper>
           
        </Container>
    )
}