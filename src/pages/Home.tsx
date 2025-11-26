
import * as React from 'react'
import { Box, Button, Chip, Grid, Paper, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function Home() {
  return (
    <Box>
      <Paper elevation={0} sx={{
        p: { xs: 4, md: 8 }, mb: 6, borderRadius: 4,
        background: 'linear-gradient(135deg, rgba(135,20,250,.08), rgba(240,125,19,.08))'
      }}>
        <Typography variant="h1" gutterBottom>We craft delightful <span style={{color:'#8714fa'}}>apps</span>, bold <span style={{color:'#f07d13'}}>games</span>, and humane <span style={{color:'#8714fa'}}>AI</span>.</Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800 }}>
          We build full-stack products, interactive experiences and machine-learning powered tools.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: 'wrap', gap: 2 }}>
          <Button size="large" component={RouterLink} to="/projects">See our projects</Button>
          <Button size="large" color="secondary" component={RouterLink} to="/contact">Start a project</Button>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ mt: 3, flexWrap: 'wrap', gap: 1 }}>
          <Chip label="Web" /><Chip label="Unity" /><Chip label="AI" /><Chip label="Data" />
        </Stack>
      
<Box sx={{ mt: 3 }}>
  <img src="/images/placeholder-4.svg" alt="Hero placeholder" style={{width:'100%', borderRadius:12}} />
</Box>
</Paper>


      <Grid container spacing={3}>
        {[
          { title: 'Full‑Stack Delivery', text: 'From concept to deployment — we design, build, and ship.' },
          { title: 'Material Design 3', text: 'Modern, accessible and mobile‑first UI powered by MUI.' },
          { title: 'GitHub Pages Ready', text: 'One command deploys a blazing‑fast static site.' }
        ].map(b => (
          <Grid key={b.title} item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h3" gutterBottom>{b.title}</Typography>
              <Typography color="text.secondary">{b.text}</Typography>
            
<Box sx={{ mt: 3 }}>
  <img src="/images/placeholder-4.svg" alt="Hero placeholder" style={{width:'100%', borderRadius:12}} />
</Box>
</Paper>

          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
