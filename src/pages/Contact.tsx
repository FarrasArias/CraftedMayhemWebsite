import * as React from 'react'
import { Box, Button, CircularProgress, Grid, Stack, TextField, Typography } from '@mui/material'
import { Section, SectionLabel } from '../components/Section'
import { colors, fonts } from '../brand'

// Formspree form ID (the part after /f/ in the form's endpoint, e.g. "xyzabcd").
// While it is empty the form falls back to opening the visitor's email app.
const FORMSPREE_ID = ''

const CONTACT_EMAIL = 'rafael.arias.glez@gmail.com'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [status, setStatus] = React.useState<Status>('idle')

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Project inquiry from ${name}`)}&body=${encodeURIComponent(message + '\n\n' + email)}`

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!FORMSPREE_ID) {
      window.location.href = mailto
      return
    }

    setStatus('sending')
    try {
      const data = new FormData(e.currentTarget)
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

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
          {status === 'sent' ? (
            <Box sx={{ bgcolor: colors.lavender, borderLeft: `3px solid ${colors.flame}`, p: { xs: 3, md: 4 } }}>
              <Typography sx={{ fontFamily: fonts.mono, color: colors.flame, mb: 1 }}>message sent</Typography>
              <Typography variant="h4" component="p" sx={{ mb: 2 }}>
                Thanks! We’ll get back to you soon.
              </Typography>
              <Button variant="text" onClick={() => setStatus('idle')} sx={{ px: 0, color: colors.onyx }}>
                Send another →
              </Button>
            </Box>
          ) : (
            <Stack component="form" spacing={2.5} onSubmit={handleSubmit}>
              <TextField label="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
              <TextField
                label="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="message"
                name="message"
                multiline
                minRows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <input type="hidden" name="_subject" value={`Project inquiry from ${name}`} />
              {/* Spam trap: real visitors never see or fill this */}
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

              <Stack direction="row" alignItems="center" spacing={3} sx={{ flexWrap: 'wrap' }}>
                <Button
                  type="submit"
                  size="large"
                  disabled={status === 'sending'}
                  startIcon={status === 'sending' ? <CircularProgress size={16} color="inherit" /> : undefined}
                >
                  {status === 'sending' ? 'Sending' : 'Send message'}
                </Button>
                {status === 'error' && (
                  <Typography variant="caption" sx={{ color: colors.flame }}>
                    Something went wrong. Try again, or email us at {CONTACT_EMAIL}.
                  </Typography>
                )}
              </Stack>
            </Stack>
          )}
        </Grid>
      </Grid>
    </Section>
  )
}
