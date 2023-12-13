import { TextField } from '@mui/material'
import { forwardRef } from 'react'
import { outlinedInputClasses } from '@mui/material';
import { createTheme, ThemeProvider} from '@mui/material/styles';

interface InputType {
    name: string,
    placeholder: string
}

declare module '@mui/material/styles' {
    interface Palette {
      green: Palette['primary'];
    }
  
    interface PaletteOptions {
      green?: PaletteOptions['primary'];
    }
  }


const customtheme = () =>
    createTheme({
        palette:{
            green: {
                main:'#22C55E',
                light:'#22C55E',
                dark:'#22C55E',
                contrastText: '#22C55E',
            },
        },
        
        components: {
            MuiTextField: {
                styleOverrides: {
                  root: {
                    '--TextField-brandBorderColor': '#22C55E',
                    '--TextField-brandBorderHoverColor': '#22C55E',
                    '--TextField-brandBorderFocusedColor': '#22C55E',
                    '& label.Mui-focused': {
                      color: '#22C55E',
                    },
                  },
                },
              },
              MuiOutlinedInput: {
                styleOverrides: {
                  notchedOutline: {
                    borderColor: 'var(--TextField-brandBorderColor)',
                  },
                  root: {
                    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                      borderColor: 'var(--TextField-brandBorderHoverColor)',
                    },
                    [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                      borderColor: 'var(--TextField-brandBorderFocusedColor)',
                    },
                    },
                }
            }
        }
    });
const Input = forwardRef(( props: InputType, ref) => {

  return (
    <ThemeProvider theme={customtheme()}>
    <TextField
        variant="outlined"
        margin="normal"
        sx={{

            input: {color: 'green.main'}
        }}
        inputRef={ref}
        fullWidth
        type='text'
        {...props}
    >
    </TextField>
    </ThemeProvider>
  ) 
})

export default Input