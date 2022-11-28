import styled from "styled-components";
import { GoogleLogin } from '@react-oauth/google';

function App() {

  return (
    <MainContainer>
      {" "}
      <WelcomeText> Login </WelcomeText> <TEXT> TO THE HALL OF FAME </TEXT>{" "}

      <GoogleLogin 
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            
            onError={() => {
                console.log('Login Failed');
            }} />
            
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  width: 67vw;
  background: #ffffff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #030030;
  text-transform: uppercase;
  letter-spacing: 0.1rem;


  @media (min-width:0px) and (max-width: 700px ){
    height: 45vh;
  }

  @media (min-width:700px) and (max-width: 1000px ){
    height: 50vh;
  }

  @media (min-width:1000px) and (max-width: 2000px ){
    height: 55vh;
  }

  @media (min-width:2000px) and (max-width: 3000px ){
    height: 60vh;
  }

`;
const WelcomeText = styled.h1`
  margin: 3rem 3rem 0 3rem;
  align-items: center;
  font-weight: 700;

  @media (min-width:0px) and (max-width: 350px ) {
    font-size: 2rem;
    font-weight: 700;
    margin: 1.5rem 1rem 0 1rem;
    }

    @media (min-width:350px) and (max-width: 700px ) {
      font-size: 2rem;
      font-weight: 700;
      margin: 2rem 1rem 0 1rem;
      }

    @media (min-width:1000px) and (max-width: 2000px ){
      font-size: 4rem;
      // margin: 1.5rem 1rem 0 1rem;
    }

    @media (min-width:2000px) and (max-width: 3000px ){
      font-size: 6rem;
      font-weight: 900;
      // margin: 3rem 1rem 0 1rem;
    }
`;
const TEXT = styled.h2`
  margin: 3rem 3rem 4rem 3rem;
  align-items: center;
  align-items: center;
  justify-content: center;


  @media (min-width:0px) and (max-width: 350px ) {
    font-size: 1rem;
    font-weight: 900;
    margin: 1.1rem 1rem 2rem 1rem;
    }


    @media (min-width:350px) and (max-width: 500px ) {
      font-size: 1.2rem;
      font-weight: 900;
      margin: 0.5rem 1rem 4rem 1rem;
    }

    @media (min-width:500px) and (max-width: 700px ) {
      font-size: 2rem;
      font-weight: 900;
      margin: 1.5rem 1rem 4rem 1rem;
    }

    @media (min-width:1000px) and (max-width: 2000px ){
      font-size: 3rem;
      font-weight: 900;
      margin: 1.5rem 1rem 2rem 1rem;
    }

    @media (min-width:2000px) and (max-width: 3000px ){
      font-size: 4rem;
      font-weight: 900;
      margin: 3rem 1rem 3rem 1rem;
    }

`;
export default App;
