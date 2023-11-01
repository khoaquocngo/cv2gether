import { createTheme } from '@mui/material/styles';

import { CONFIG_THEME } from './constant';

export const theme = createTheme({
  typography: {
    fontSize: 14,
  },
  palette: {
    primary: {
      main: CONFIG_THEME.color.blue900,
      contrastText: CONFIG_THEME.color.white,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {},
      },
    },
  },
});
