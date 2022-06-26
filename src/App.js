import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Stack,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import Books from "./components/Books/Books.js";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import theme from "./themes/theme";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isDark: false };
  }

  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme(this.state.isDark)}>
          <CssBaseline />
          <AppBar position="static" color="primary">
            <Toolbar disableGutters>
              <Container maxWidth="xl">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <MenuBookIcon sx={{ mr: 1 }} />
                    <Typography
                      variant="h5"
                      noWrap
                      sx={{
                        mr: 2,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      I Love Reading
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>Dark</Typography>
                    <Switch
                      color="secondary"
                      checked={this.state.isDark}
                      onChange={() =>
                        this.setState((previousState) => ({
                          isDark: !previousState.isDark,
                        }))
                      }
                      name="Theme"
                    />
                    <Typography>Light</Typography>
                  </Stack>
                </Stack>
              </Container>
            </Toolbar>
          </AppBar>
          <Container>
            <Books />
          </Container>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
export default App;
