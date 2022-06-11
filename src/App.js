import styled from 'styled-components';
import GoogleLogo from './images/GoogleLogo.png';
import { NavigationBar } from './components/NavigationBar';
import { SearchBar } from './components/SearchBar';
import { Footer as CFooter } from './components/Footer';

const HomeDiv = styled.div``;
const MainLogo = styled.img`
  transform: scale(0.9);
`;

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  margin-top: 170px;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const SubSearchButton = styled.button`
  color: white;
  background-color: #303134;
  border: none;
  padding: 11px;
  border-radius: 5px;
`;

function App() {
  return (
    <HomeDiv>
      <NavigationBar></NavigationBar>
      <CenterDiv>
        <MainLogo src={GoogleLogo} />
        <SearchBar />
        <ButtonGroup>
          <SubSearchButton>Google Search</SubSearchButton>
          <SubSearchButton>I'm Feeling Lucky</SubSearchButton>
        </ButtonGroup>
      </CenterDiv>
      <CFooter />
    </HomeDiv>
  );
}

export default App;
