import logo from './logo.svg';
import styled from './styled.js';
import './App.css';

const StyledLink = styled.a`
  margin-bottom: 20px;
  font-size: ${({ fontSize }) => fontSize}px;
  padding: 16px;
  background-color: transparent;
  border: 2px solid ${({ color }) => color};
  box-shadow: 0 0 10px 3px rgba(97, 218, 251, 0.2);
  text-decoration: none;
  color: ${({ color }) => color};
`;

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <StyledLink fontSize={24} color="#61dafb" href="https://styled-components.com/docs/basics">
                    Learn styled-components
                </StyledLink>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <a
                    className="App-link"
                    href="https://docs.docker.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Docker
                </a>

                <a
                    className="App-link"
                    href="https://github.com/features/actions/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Actions
                </a>
            </header>
        </div>
    );
}

export default App;
