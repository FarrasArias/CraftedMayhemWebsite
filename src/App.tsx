import * as React from 'react'
import {
  AppBar, Box, Container, IconButton, Toolbar, Typography,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  Tabs, Tab, Stack, Link
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Link as RouterLink, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'
import Logo, { LogoSymbol } from './components/Logo'
import SocialLinks from './components/SocialLinks'
import { colors, fonts } from './brand'

const nav = [
  { label: 'home', to: '/' },
  { label: 'games', to: '/games' },
  { label: 'projects', to: '/projects' },
  { label: 'about', to: '/about' },
  { label: 'contact', to: '/contact' },
]

function NavTabs() {
  const location = useLocation()

  const active = nav.find(n =>
    n.to === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(n.to)
  )

  return (
    <Tabs value={active?.to ?? false} textColor="inherit">
      {nav.map(n => (
        <Tab
          key={n.to}
          label={n.label}
          value={n.to}
          component={RouterLink}
          to={n.to}
        />
      ))}
    </Tabs>
  )
}

export default function App() {
  const [open, setOpen] = React.useState(false)

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />

      <AppBar
        position="sticky"
        elevation={0}
        sx={{ bgcolor: colors.onyx, color: colors.snow, borderBottom: `1px solid ${colors.grey5}` }}
      >
        <Container>
          <Toolbar disableGutters sx={{ display: 'flex', gap: 2, minHeight: { xs: 60 } }}>
            <Box
              component={RouterLink}
              to="/"
              sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none', display: 'flex' }}
            >
              <Logo size={22} />
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <NavTabs />
            </Box>

            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' } }}
              color="inherit"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { bgcolor: colors.onyx, color: colors.snow, width: 260 } }}
      >
        <Box role="presentation" onClick={() => setOpen(false)}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, py: 1.5 }}>
            <LogoSymbol size={22} />
            <IconButton color="inherit" aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {nav.map(n => (
              <ListItem key={n.to} disablePadding>
                <ListItemButton component={RouterLink} to={n.to}>
                  <ListItemText
                    primary={n.label}
                    primaryTypographyProps={{ fontFamily: fonts.mono }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>

      <Box component="footer" sx={{ bgcolor: colors.flame, color: colors.onyx, pt: { xs: 6, md: 8 }, pb: 4 }}>
        <Container>
          <SocialLinks />

          <Stack
            direction="row"
            spacing={3}
            sx={{ mt: { xs: 6, md: 10 }, flexWrap: 'wrap', fontFamily: fonts.mono }}
          >
            {nav.slice(1).map(n => (
              <Link
                key={n.to}
                component={RouterLink}
                to={n.to}
                underline="hover"
                color="inherit"
                sx={{ fontFamily: fonts.mono, fontSize: '0.875rem' }}
              >
                {n.label}
              </Link>
            ))}
          </Stack>

          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'flex-end' },
              justifyContent: 'space-between',
              gap: 3,
            }}
          >
            <Box sx={{ color: colors.snow }}>
              <LogoSymbol size={44} title="Crafted Mayhem" />
            </Box>
            <Typography variant="caption">
              Copyright © {new Date().getFullYear()} Crafted Mayhem Studio. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
