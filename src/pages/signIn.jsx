import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function LoginForm(){
    const colors = {
        "info": "#4287f5"
    }
    return (
        <Container maxWidth="xs" sx={{ marginTop: 5}}>
            <Paper elevation={5} sx={{padding: 4}} >
                <Box maxWidth="100%" sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}  >
                    <Avatar  sx={{ bgcolor: colors.info, mt:5}}>
                        <LockIcon />
                    </Avatar>
                    <Typography variant="h5" sx={{ mb: 3 }}>
                        Sign in
                    </Typography>
                    <TextField id="email-input" label="Email" variant="outlined" fullWidth/>
                    <TextField id="password-input" label="Password" variant="outlined" type='password' fullWidth  sx={{mt:2}}/>
                    <Button variant="contained" color='info' fullWidth  sx={{mt:5}}>Submit</Button>
                    <Box sx={{mt:1}}>
                        <Link href="#">Forgot password?</Link>
                    </Box>
                </Box>
            </Paper>
           
        </Container>
    )
}