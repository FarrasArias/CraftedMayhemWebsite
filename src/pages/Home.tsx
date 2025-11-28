// src/pages/Home.tsx
import * as React from 'react'
import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function Home() {
    return (
        <Box>
            {/* HERO */}
            <Box
                component="section"
                sx={{
                    mb: 8,
                    p: { xs: 4, md: 8 },
                    borderRadius: 4,
                    background:
                        'linear-gradient(135deg, rgba(135,20,250,.08), rgba(240,125,19,.08))',
                }}
            >
                <Typography variant="h1" gutterBottom>
                    We craft delightful <span style={{ color: '#8714fa' }}>apps</span>, bold{' '}
                    <span style={{ color: '#f07d13' }}>games</span>, and humane{' '}
                    <span style={{ color: '#8714fa' }}>AI</span>.
                </Typography>

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
            </Box>

            {/* ROW 1: content | Title 1 */}
            <Box
                component="section"
                sx={{
                    py: { xs: 6, md: 10 },
                    borderBottom: '1px solid rgba(0,0,0,0.04)',
                }}
            >
                <Grid container spacing={6} alignItems="flex-start">
                    {/* content (left) */}
                    <Grid item xs={12} md={7}>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            Products, platforms, and tools that actually ship.
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 2 }}>
                            We partner with teams to design and build full-stack products: web apps,
                            internal tools, data-heavy dashboards, and the glue that keeps everything
                            talking to each other.
                        </Typography>
                        <Typography color="text.secondary">
                            From first whiteboard doodles to production deployments, we cover product
                            thinking, UX, engineering, and polish. We like projects that are a little
                            weird, technically interesting, or where the “feel” really matters.
                        </Typography>
                    </Grid>

                    {/* Title 1 (right) */}
                    <Grid item xs={12} md={5}>
                        
                        <Typography variant="h1">
                            What we do
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* ROW 2: Title 2 | content */}
            <Box
                component="section"
                sx={{
                    py: { xs: 6, md: 10 },
                    borderBottom: '1px solid rgba(0,0,0,0.04)',
                }}
            >
                <Grid container spacing={6} alignItems="flex-start">
                    {/* Title 2 (left on desktop, top on mobile) */}
                    <Grid
                        item
                        xs={12}
                        md={5}
                        sx={{
                            order: { xs: 0, md: 0 },
                        }}
                    >
                        
                        <Typography variant="h1">
                            How we work
                        </Typography>
                    </Grid>

                    {/* content (right on desktop, below on mobile) */}
                    <Grid
                        item
                        xs={12}
                        md={7}
                        sx={{
                            order: { xs: 1, md: 1 },
                        }}
                    >
                        <Typography color="text.secondary" sx={{ mb: 2 }}>
                            <strong>Small, senior teams.</strong> You work directly with the people
                            designing and building your product. No telephone game, no mystery layers.
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 2 }}>
                            <strong>Short, focused cycles.</strong> We slice work into shippable
                            pieces, share progress often, and invite feedback early—so nothing goes
                            off the rails quietly.
                        </Typography>
                        <Typography color="text.secondary">
                            <strong>Real-world constraints.</strong> We design around your stack,
                            your deadlines, and your users’ reality. We care about maintainability,
                            performance, and the stories people tell after launch.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* ROW 3: content | Title 3 */}
            <Box
                component="section"
                sx={{
                    py: { xs: 6, md: 10 },
                }}
            >
                <Grid container spacing={6} alignItems="flex-start">
                    {/* content (left) */}
                    <Grid item xs={12} md={7}>
                        <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 720 }}>
                            We&apos;ve worked on client platforms, internal tools, public games,
                            interactive experiments, and AI interfaces. A mix of “serious” and
                            “playful” is where we’re happiest.
                        </Typography>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                            sx={{ flexWrap: 'wrap', gap: 2 }}
                        >
                            <Button
                                size="large"
                                color="primary"
                                component={RouterLink}
                                to="/projects"
                            >
                                See client projects
                            </Button>
                            <Button
                                size="large"
                                color="secondary"
                                component={RouterLink}
                                to="/games"
                            >
                                See our games
                            </Button>
                            <Button
                                size="large"
                                variant="text"
                                component={RouterLink}
                                to="/about"
                            >
                                Meet the team
                            </Button>
                        </Stack>
                    </Grid>

                    {/* Title 3 (right) */}
                    <Grid item xs={12} md={5}>
                        
                        <Typography variant="h1">
                            Selected work
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
