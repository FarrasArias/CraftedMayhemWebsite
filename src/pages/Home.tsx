// src/pages/Home.tsx
import * as React from 'react'
import { Box, Button, Chip, Grid, Paper, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function Home() {
    return (
        <Box>
            <Paper
                elevation={0}
                sx={{
                    p: { xs: 4, md: 8 },
                    mb: 6,
                    borderRadius: 4,
                    background:
                        'linear-gradient(135deg, rgba(135,20,250,.08), rgba(240,125,19,.08))',
                }}
            >
                {/* Headline */}
                <Typography variant="h1" gutterBottom>
                    We craft delightful <span style={{ color: '#8714fa' }}>apps</span>, bold{' '}
                    <span style={{ color: '#f07d13' }}>games</span>, and humane{' '}
                    <span style={{ color: '#8714fa' }}>AI</span>.
                </Typography>

                {/* Buttons now come BEFORE the “we build full-stack products” text */}
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{ mt: 4, flexWrap: 'wrap', gap: 2 }}
                >
                    <Button size="large" component={RouterLink} to="/projects">
                        See our projects
                    </Button>
                    <Button size="large" color="secondary" component={RouterLink} to="/contact">
                        Start a project
                    </Button>
                </Stack>

                {/* Tags */}
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mt: 3, flexWrap: 'wrap', gap: 1 }}
                >
                    <Chip label="Web" />
                    <Chip label="Unity" />
                    <Chip label="AI" />
                    <Chip label="Data" />
                </Stack>

                {/* New row: text on the left, logo on the right */}
                <Box sx={{ mt: 4 }}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800 }}>
                                We build full-stack products, interactive experiences and
                                machine-learning powered tools.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: { xs: 'flex-start', md: 'flex-end' },
                                    mt: { xs: 2, md: 0 },
                                }}
                            >
                                <Box
                                    component="img"
                                    src="images/logo_no_bg.png"
                                    alt="Crafted Mayhem logo"
                                    sx={{
                                        maxWidth: { xs: 160, md: 220 },
                                        height: 'auto',
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>

            {/* Lower feature cards unchanged */}
            <Grid container spacing={3}>
                {[
                    {
                        title: 'Values',
                        text: 'Clarity, craft, and curiosity. Ship what matters.',
                    },
                    {
                        title: 'What we do',
                        text: 'UI/UX, full-stack development, Unity, ML/AI, data solutions, 3D',
                    },
                    {
                        title: 'How we work',
                        text: 'Small senior teams, rapid iterations, measurable outcomes.',
                    },
                ].map(b => (
                    <Grid key={b.title} item xs={12} md={4}>
                        <Paper sx={{ p: 3 }}>
                            <Typography variant="h3" gutterBottom>
                                {b.title}
                            </Typography>
                            <Typography color="text.secondary">{b.text}</Typography>

                            {/*<Box sx={{ mt: 3 }}>
                                <img
                                    src="/images/placeholder-4.svg"
                                    alt="Hero placeholder"
                                    style={{ width: '100%', borderRadius: 12 }}
                                />
                            </Box>*/}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
