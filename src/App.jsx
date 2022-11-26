import styled from "styled-components";
import { GoogleLogin } from '@react-oauth/google';

function App() {

  return (
    <MainContainer>
      {" "}
      <WelcomeText> LOGIN </WelcomeText> <TEXT> TO THE HALL OF FAME </TEXT>{" "}

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
  width: 40vw;
  background: #ffffff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #030030;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;
const WelcomeText = styled.h1`
  margin: 3rem 3rem 0 3rem;
  align-items: center;
`;
const TEXT = styled.h2`
  margin: 3rem 3rem 0 3rem;
  align-items: center;
  align-items: center;
  justify-content: center;


  @media (max-width: 800px) {
    font-size: 20px;
    font-weight: 500;
    }

    @media (max-width: 675px) {
      font-size: 15px;
      font-weight: 500;
      }

`;
export default App;
