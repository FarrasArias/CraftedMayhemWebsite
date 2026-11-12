import * as React from 'react'
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { Section, SectionLabel } from '../components/Section'

export default function Contact() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const mailto = `mailto:rafael.arias.glez@gmail.com?subject=Project inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\n' + email)}`

  return (
    <Section tone="snow" size="md">
      <SectionLabel>Contact</SectionLabel>
      <Grid container spacing={{ xs: 6, md: 10 }}>
        <Grid item xs={12} md={5}>
          <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
            Let’s make something.
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 420 }}>
            Tell us a little about your idea, your team, and your timeline. We read every message.
          </Typography>
        </Grid>

        <Grid item xs={12} md={7}>
          <Stack spacing={2.5}>
            <TextField label="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <TextField label="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <TextField label="message" multiline minRows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
            <Box>
              <Button size="large" href={mailto}>Email us</Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Section>
  )
}
