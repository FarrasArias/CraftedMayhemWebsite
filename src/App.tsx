
import * as React from 'react'
import {
  AppBar, Box, Container, IconButton, Toolbar, Typography,
  Drawer, List, ListItem, ListItemButton, ListItemText, Tabs, Tab
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link as RouterLink, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import { asset } from './lib/assets'


const nav = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Games', to: '/games' },
  { label: 'Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function NavTabs() {
  const location = useLocation()

  // If you may have nested routes like /projects/123, use startsWith:
  const active = nav.find(n =>
    n.to === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(n.to)
  )

  const value = active?.to ?? false

  return (
    <Tabs
      value={value}
      textColor="inherit"          // keeps using AppBar contrastText
      indicatorColor="secondary"   // fine; matches your orange underline
      sx={{ ml: 2 }}               // spacing only; visual styles in theme
    >
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
    <Box>
      <AppBar position="sticky" color="primary" enableColorOnDark>
        <Toolbar sx={{ display: 'flex', gap: 2 }}>
          <Typography
            component={RouterLink}
            to="/"
            variant="h6"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 900,
            }}
          >
            <img
              src={asset('images/logo.png')}
              alt="Crafted Mayhem"
              height="28"
              style={{ borderRadius: 6 }}
            />
            Crafted Mayhem
          </Typography>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavTabs />
          </Box>

          {/* Mobile menu button */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' } }}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 240 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {nav.map(n => (
              <ListItem key={n.to} disablePadding>
                <ListItemButton component={RouterLink} to={n.to}>
                  <ListItemText primary={n.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Container sx={{ py: 6 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>

      <Box component="footer" sx={{ borderTop: '1px solid rgba(0,0,0,.08)', py: 4, textAlign: 'center', color: 'text.secondary' }}>
        <Typography variant="body2">© {new Date().getFullYear()} Crafted Mayhem Studio. All rights reserved.</Typography>
      </Box>
    </Box>
  )
}
