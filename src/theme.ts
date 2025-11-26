
import { createTheme } from '@mui/material/styles'

const primary = '#8714fa' // purple
const secondary = '#f07d13' // orange

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: primary },
    secondary: { main: secondary },
    background: { default: '#ffffff', paper: '#ffffff' }
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: `'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, 'Noto Sans', 'Apple Color Emoji','Segoe UI Emoji'`,
    h1: { fontSize: '2.6rem', fontWeight: 800 },
    h2: { fontSize: '2.0rem', fontWeight: 800 },
    h3: { fontSize: '1.6rem', fontWeight: 700 }
  },
  components: {
    MuiAppBar: {
      styleOverrides: { root: { borderBottomLeftRadius: 16, borderBottomRightRadius: 16 } }
    },
    MuiButton: {
      defaultProps: { variant: 'contained' },
      styleOverrides: { root: { textTransform: 'none', borderRadius: 14, paddingInline: 18, paddingBlock: 10 } }
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 18, boxShadow: '0 10px 24px rgba(0,0,0,.06)' } }
    }
  }
})

export default theme
