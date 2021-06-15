import { createMuiTheme } from '@material-ui/core/styles';
import { purple, grey, green } from '@material-ui/core/colors';



export const theme = createMuiTheme({
    
  palette: { 
    type: 'light',  
    primary: {
      main: grey[100],
    },
    // secondary: {
    //   main: [900],
    // },
    status: {
        danger: 'orange'
    }
  },
  typography: {
      body1: {
          fontSize: '22px'
      }
  }
});