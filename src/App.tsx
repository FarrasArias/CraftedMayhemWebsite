
import * as React from 'react'
import { AppBar, Box, Container, IconButton, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link as RouterLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

const nav = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Games', to: '/games' },
  { label: 'Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function App() {
  const [open, setOpen] = React.useState(false)
  return (
    <Box>
      <AppBar position="sticky" color="primary" enableColorOnDark>
        <Toolbar sx={{ display: 'flex', gap: 2 }}>
          <Typography component={RouterLink} to="/" variant="h6" sx={{ flexGrow: 1, display:'flex', alignItems:'center', gap:1, color: 'inherit', textDecoration: 'none', fontWeight: 900 }}>
            <img src="/images/logo.svg" alt="Crafted Mayhem" height="28" style={{borderRadius:6}} />
            Crafted Mayhem
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {nav.map(n => (
              <Button key={n.to} color="inherit" component={RouterLink} to={n.to}>{n.label}</Button>
            ))}
          </Box>
          <IconButton sx={{ display: { xs: 'flex', md: 'none' }}} color="inherit" onClick={() => setOpen(true)}>
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
