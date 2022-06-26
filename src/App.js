import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import React, { Component } from "react";
import Books from "./components/Books/Books.js";
import CustomAppBar from "./components/commons/CustomAppBar.js";
import theme from "./themes/theme";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isDark: false };
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  handleThemeChange() {
    this.setState((previousState) => ({
      isDark: !previousState.isDark,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme(this.state.isDark)}>
          <CssBaseline />
          <CustomAppBar
            isDark={this.state.isDark}
            handleThemeChange={this.handleThemeChange}
          />
          <Container>
            <Books />
          </Container>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
export default App;
