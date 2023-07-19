import { useState, ChangeEvent, FormEvent } from 'react';
import { styled } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';
import myBackgroundImage from './assets/images/background.png';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const MainContainer = styled('div')({
  position:'absolute',
  top:'0px',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'end',
})

const FormContainer = styled('div')({
  position: 'relative',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const BackgroundImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit:'cover',
  '@media (max-width: 800px)': {
    width: '130%'
  },
  '@media (max-width: 700px)': {
    width:'140%',
  },
  '@media (max-width: 600px)': {
    width:'230%',
  },
  '@media (max-width: 500px)': {
    width:'250%',
  },
});

const InnerContainer1 = styled('div')({
  position: 'absolute',
  color: 'white',
  right: '0',
  height: '100%',
  width: '40%',
  backgroundColor: 'rgb(17 24 39)',
  opacity: '0.5',
  '@media (max-width: 1000px)': {
    width: '60%'
  },
  '@media (max-width: 800px)': {
    width: '70%'
  },
  '@media (max-width: 600px)': {
    width: '100%',
    opacity: '0.8',

  },
})

const InnerContainer2 = styled('div')({
  position: 'absolute',
  top: '10%',
  left: '12%',
  right: '7%',
})
const Title = styled('h1')({
  fontSize: '2rem',
  fontWeight: 'bold',
});

const Subtitle = styled('h1')({
  fontSize: '1rem',
  marginTop: '12px',
});

const SubContainer = styled('div')({
  marginLeft : '5%',
})

const SignInTitle = styled('h1')({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginTop: '2rem',
});

const SignInSubtitle = styled('h1')({
  marginTop: '4%',
});

const InnerDiv1 = styled('div')({
  width: '100%',
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
})

const InnerDiv2 = styled('div')({
  width:'full',
  display:'flex',
  alignItems:'center',
  marginLeft:'2px',
})
const SignUpSubtitle = styled('span')({
  fontSize: '40px',
  fontWeight: 'normal',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  textDecorationLine: 'underline',
  color: 'blue',
})

const SignInButton = styled(Button)({
  width: '100%',
  padding: '1rem',
  marginTop: '2rem',
  borderRadius: '9999px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#2196f3',
  },
});

const ContinueWithIcons = styled('div')({
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'center',
  '& > *': {
    fontSize: '2.5rem',
    margin: '0 0.5rem',
    cursor: 'pointer',
  },
});

function App(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <>
    <MainContainer>
      <FormContainer>
        <BackgroundImage src={myBackgroundImage} alt="Background"/>
        <InnerContainer1>
          <InnerContainer2>
            <Title>Welcome to Lorem</Title>
            <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing</Subtitle>
            <SubContainer>
            <SignInTitle>Sign in</SignInTitle>
            <SignInSubtitle>Don't have an account? <SignUpSubtitle>Sign up </SignUpSubtitle></SignInSubtitle>
            </SubContainer>
            <form onSubmit={handleSubmit}>
              <TextField 
                type="email"
                placeholder="Email *"
                variant='outlined'
                color='primary'
                fullWidth
                value={email}
                style={{width:"100%", color:'red', marginTop:'4px', marginBottom:'4px', marginRight:'4px', backgroundColor:'gray', border:'1px', borderRadius:'3px',borderColor:'gray', outline:'none'}}
                onChange={handleEmailChange}
              />
              <TextField
                type="password"
                color = 'primary'
                placeholder="Password *"
                variant="outlined"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
                style={{width:"100%", color:'red', marginTop:'4px', marginBottom:'4px', marginRight:'4px', backgroundColor:'gray', border:'1px', borderRadius:'3px',borderColor:'gray', outline:'none'}}
              />
              <InnerDiv1>
                <InnerDiv2>
                  <input type="checkbox" style={{width:"15px", height:"15px", marginRight:'2px', color:"blue"}}/>
                  <p style={{fontSize:'15px'}}>Remember Me</p>
                </InnerDiv2>
                <p>Forgot Password ?</p>
              </InnerDiv1>
              <SignInButton type="submit" variant="contained">
                Sign In
              </SignInButton>
            </form>
            <h1>Or continue with</h1>
            <ContinueWithIcons>
              <FacebookTwoToneIcon fontSize="large" style={{ color: "#5c6bc0" }} />
              <TwitterIcon fontSize="large" style={{ color: "#2196f3", borderRadius: "3px" }} />
              <GitHubIcon fontSize="large" style={{ color: "#3d5afe" }} />
            </ContinueWithIcons>
          </InnerContainer2>
        </InnerContainer1>
      </FormContainer>
      </MainContainer>
    </>
  );
}

export default App;
