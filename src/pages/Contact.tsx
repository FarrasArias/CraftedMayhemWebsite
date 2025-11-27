
import * as React from 'react'
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'

export default function Contact() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const mailto = `mailto:rafael.arias.glez@gmail.com?subject=Project inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\n' + email)}`

  return (
    <Box>
      <Typography variant="h2" gutterBottom>Contact</Typography>
      <Paper sx={{ p: 3 }}>
        <Stack spacing={2}>
          <TextField label="Name" value={name} onChange={(e)=>setName(e.target.value)} required />
          <TextField label="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <TextField label="Message" multiline minRows={4} value={message} onChange={(e)=>setMessage(e.target.value)} />
          <Stack direction="row" spacing={2}>
            <Button href={mailto}>Email us</Button>
                      {/*<Button color="secondary" href="https://github.com/new" target="_blank" rel="noreferrer">Start a repo</Button>*/}
          </Stack>
        </Stack>
      </Paper>
    </Box>
  )
}
