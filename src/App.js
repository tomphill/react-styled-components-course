import React, {Component} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import LightTheme from './theme/light';
import DarkTheme from './theme/dark';
import Button from './components/common/Button';
import {Button as ReactstrapButton} from 'reactstrap';
import PasswordInput from './components/common/PasswordInput';
import Spinner from './components/common/Spinner';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`   
  body{     
    font-family: ${props => (props.theme.id === 'light' ? 'Arial' : 'Times New Roman')} !important;   
  }      
  
  h1{     
    color: blue !important;   
  }
`;

const AppWrapper = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
  background: ${props => props.theme.backgroundColor}
  color: ${props => props.theme.primaryColor}
`;

const ButtonWrapper = styled.div`
  padding: 16px 0;
`;

// adding .btn for higher specificity to override the default bootstrap styling (better alternative than !important)
const ReactstrapRoundedButton = styled(ReactstrapButton)`
  &.btn{
    border-radius:50%;
  }
`;

const FacebookButton = styled(Button)`
  border: none;
  background:#3B5998;
  color:white;
`;

class App extends Component {

    state = {
        theme: LightTheme,
        showPassword: false
    };

    handleToggleShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        });
    };

    handleToggleTheme = () => {
        this.setState({
            theme: this.state.theme.id === 'light' ? DarkTheme : LightTheme
        })
    };

    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <AppWrapper>
                    <h1>
                        React Styled Components Course
                    </h1>
                    <h3>
                        <a href="https://www.udemy.com/react-styled-components/" target="_blank" rel="noopener noreferrer">
                            https://www.udemy.com/react-styled-components/
                        </a>
                    </h3>
                    <hr />
                    <h2>
                        Theme
                    </h2>
                    <section>
                        <Button onClick={this.handleToggleTheme}>
                            Change theme to {this.state.theme.id === 'light' ? 'Dark' : 'Light'}
                        </Button>
                    </section>
                    <hr />
                    <h2>
                        Password Input
                    </h2>
                    <PasswordInput show={this.state.showPassword} /> <Button onClick={this.handleToggleShowPassword}>{this.state.showPassword ? 'Hide' : 'Show'}</Button>
                    <hr />
                    <h2>
                        Spinner
                    </h2>
                    <Spinner />
                    <hr />
                    <h2>
                        Buttons
                    </h2>
                    <ButtonWrapper>
                        <Button>
                            Button
                        </Button>
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <Button primary>
                            Button Primary
                        </Button>
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <ReactstrapButton color="primary">
                            Primary Reactstrap Button
                        </ReactstrapButton>
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <ReactstrapRoundedButton color="primary">
                            Style existing components example
                        </ReactstrapRoundedButton>
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <FacebookButton>
                            Login with facebook (extending styles example)
                        </FacebookButton>
                    </ButtonWrapper>
                    <GlobalStyle />
                </AppWrapper>
            </ThemeProvider>
        );
    }
}

export default App;
