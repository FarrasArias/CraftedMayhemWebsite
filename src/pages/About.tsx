
import * as React from 'react'
import { Avatar, Box, Grid, Paper, Stack, Typography, Button } from '@mui/material'
import { team } from '../data/team'
import { asset } from '../lib/assets'

export default function About() {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>Us</Typography>
          {/*<Paper sx={{ p: 3, mb: 3 }}>*/}
          <Typography sx={{ p: 3, mb: 3 }}>
          We are a studio focused on high-impact software: from full-stack web platforms and data systems to
          interactive 3D experiences and AI-powered products. We partner with startups and research labs to ship
          well-crafted solutions.
        </Typography>
          {/*</Paper>*/}

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { title: 'Values', text: 'Clarity, craft, and curiosity. Ship what matters.' },
          { title: 'What we do', text: 'Product discovery, UI/UX, full-stack development, Unity, ML/AI and data engineering.' },
          { title: 'How we work', text: 'Small senior teams, rapid iterations, measurable outcomes.' },
        ].map((b) => (
          <Grid key={b.title} item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Stack spacing={1}>
                <Typography variant="h3">{b.title}</Typography>
                <Typography color="text.secondary">{b.text}</Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h3" sx={{ mb: 2 }}>Team</Typography>
      <Grid container spacing={3}>
        {team.map((p, idx) => (
          <Grid key={idx} item xs={12} md={6}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                        <Avatar src={p.avatar ? asset(p.avatar) : asset('images/placeholder-1.svg')} alt={p.name} sx={{ width: 64, height: 64 }} />
                <Box>
                  <Typography variant="h5">{p.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{p.role}</Typography>
                </Box>
              </Stack>
              <Typography sx={{ mb: 2 }}>{p.bio}</Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                {p.cvUrl && <Button href={p.cvUrl} target="_blank" rel="noreferrer">CV</Button>}
                {p.links?.map((l, i) => (
                  <Button key={i} href={l.url} target="_blank" rel="noreferrer" color="secondary">{l.label}</Button>
                ))}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
