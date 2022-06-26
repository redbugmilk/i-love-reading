import {
  AppBar,
  Container,
  Stack,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function CustomAppBar({ isDark, handleThemeChange }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar disableGutters>
        <Container maxWidth="xl">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" justifyContent="center" alignItems="center">
              <MenuBookIcon sx={{ mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 5,
                }}
              >
                I Love Reading
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Dark</Typography>
              <Switch
                color="secondary"
                checked={isDark}
                onChange={handleThemeChange}
                name="Theme"
              />
              <Typography>Light</Typography>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
