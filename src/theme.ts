import { createTheme } from '@mui/material/styles'
import { colors, fonts } from './brand'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: colors.flame, contrastText: colors.onyx },
    secondary: { main: colors.navy, contrastText: colors.snow },
    background: { default: colors.snow, paper: colors.snow },
    text: { primary: colors.onyx, secondary: colors.grey4 },
    divider: 'rgba(17,17,17,0.14)',
    grey: {
      100: colors.grey1,
      300: colors.grey2,
      500: colors.grey3,
      700: colors.grey4,
      900: colors.grey5,
    },
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: fonts.sans,
    h1: { fontSize: '3.5rem', fontWeight: 600, letterSpacing: '-0.045em', lineHeight: 1.02 },
    h2: { fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1.08 },
    h3: { fontSize: '1.9rem', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.15 },
    h4: { fontSize: '1.6rem', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.2 },
    h5: { fontSize: '1.3rem', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.25 },
    h6: { fontSize: '1.1rem', fontWeight: 500, letterSpacing: '-0.015em' },
    body1: { fontSize: '1.05rem', lineHeight: 1.55, letterSpacing: '-0.01em' },
    body2: { lineHeight: 1.5 },
    button: { fontFamily: fonts.mono, textTransform: 'none', letterSpacing: 0 },
    overline: {
      fontFamily: fonts.mono,
      fontSize: '0.75rem',
      textTransform: 'none',
      letterSpacing: 0,
      lineHeight: 1.4,
    },
    caption: { fontFamily: fonts.mono, fontSize: '0.75rem', letterSpacing: 0 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: colors.snow },
        '::selection': { backgroundColor: colors.flame, color: colors.onyx },
      },
    },
    MuiButton: {
      defaultProps: { variant: 'contained', disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 0,
          paddingInline: 18,
          paddingBlock: 9,
          fontSize: '0.875rem',
        },
        containedPrimary: {
          '&:hover': { backgroundColor: colors.onyx, color: colors.snow },
        },
        containedSecondary: {
          '&:hover': { backgroundColor: colors.onyx },
        },
        outlined: { borderWidth: 1 },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: { root: { backgroundImage: 'none' } },
    },
    MuiCard: {
      styleOverrides: { root: { border: `1px solid ${colors.onyx}`, boxShadow: 'none' } },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 0, fontFamily: fonts.mono, fontSize: '0.75rem' },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: { height: 2, backgroundColor: colors.flame },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: fonts.mono,
          textTransform: 'none',
          fontSize: '0.875rem',
          minHeight: 0,
          minWidth: 0,
          paddingInline: 16,
          paddingBlock: 20,
          color: colors.grey2,
          opacity: 1,
          '&.Mui-selected': { color: colors.snow },
          '&:hover': { color: colors.snow },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: '#fff',
          '& .MuiOutlinedInput-notchedOutline': { borderColor: colors.grey3 },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: colors.onyx },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: { root: { fontFamily: fonts.mono, fontSize: '0.875rem' } },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontFamily: fonts.mono,
          textTransform: 'none',
          color: colors.onyx,
          borderColor: colors.grey3,
          paddingInline: 14,
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: colors.onyx,
            color: colors.snow,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: { paper: { borderRadius: 0, backgroundColor: colors.snow } },
    },
    MuiDialogTitle: {
      styleOverrides: { root: { fontFamily: fonts.mono, fontSize: '0.95rem' } },
    },
    MuiCircularProgress: {
      defaultProps: { color: 'primary' },
    },
  },
})

export default theme
