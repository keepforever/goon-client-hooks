import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import lightBlue from '@material-ui/core/colors/lightBlue';
import deepOrange from '@material-ui/core/colors/deepOrange';


export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: deepOrange,
    secondary: lightBlue,
    error: amber,
    contrastThreshold: 15,
    tonalOffset: 0.2,
  },
  typography: { useNextVariants: true },
});
