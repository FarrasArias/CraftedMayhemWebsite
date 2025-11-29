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
                    sx={{ mt: 4, flexWrap: 'wrap', gap: 2 }}
                    >
                    <Button size="large" component={RouterLink} to="/projects">
                        See our projects
                    </Button>
                    <Button size="large" color="secondary" component={RouterLink} to="/contact">
                        Start a project
                    </Button>
                </Stack>

                <Box sx={{ mt: 4 }}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800 }}>
                                We’re a creative studio passionate about building full-stack products, interactive experiences, and machine-learning–powered tools.
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{ mt: 3, flexWrap: 'wrap', gap: 1 }}
                            >
                                <Chip label="Web" />
                                <Chip label="Games" />
                                <Chip label="AI" />
                                <Chip label="Data" />
                                <Chip label="3D" />
                            </Stack>
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
                bgcolor: 'background.default',
            }}
            >
                <Grid
                    container
                    spacing={6}
                    alignItems="flex-start"
                    direction={{ xs: 'column-reverse', md: 'row' }}
                >
                    {/* content (left on desktop, below on mobile) */}
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

                    {/* Title 1 (right on desktop, top on mobile) */}
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                            position: { md: 'sticky' },
                            top: { md: 96 },
                            textAlign: { xs: 'left', md: 'right' },
                            }}
                        >
                            <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                mb: 1.5,
                                gap: 1,
                            }}
                            >
                            <Box
                                sx={{
                                width: 24,
                                height: 2,
                                borderRadius: 999,
                                bgcolor: 'primary.main',
                                }}
                            />
                            <Typography
                                variant="overline"
                                sx={{ letterSpacing: 2, textTransform: 'uppercase' }}
                            >
                                01
                            </Typography>
                            </Box>
                            <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '2.25rem', md: '3rem' },
                                letterSpacing: '-0.04em',
                                lineHeight: 1.1,
                            }}
                            >
                            What we do
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* ROW 2: Title 2 | content */}
            <Box
            component="section"
            sx={{
                py: { xs: 6, md: 10 },
                borderBottom: '1px solid rgba(0,0,0,0.04)',
                bgcolor: 'background.paper',
            }}
            >
                <Grid
                    container
                    spacing={6}
                    alignItems="flex-start"
                    direction={{ xs: 'column', md: 'row' }}
                >
                    {/* Title 2 (left on desktop, top on mobile) */}
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                            position: { md: 'sticky' },
                            top: { md: 96 },
                            }}
                        >
                            <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                mb: 1.5,
                                gap: 1,
                            }}
                            >
                            <Box
                                sx={{
                                width: 24,
                                height: 2,
                                borderRadius: 999,
                                bgcolor: 'secondary.main',
                                }}
                            />
                            <Typography
                                variant="overline"
                                sx={{ letterSpacing: 2, textTransform: 'uppercase' }}
                            >
                                02
                            </Typography>
                            </Box>
                            <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '2.25rem', md: '3rem' },
                                letterSpacing: '-0.04em',
                                lineHeight: 1.1,
                            }}
                            >
                            How we work
                            </Typography>
                        </Box>
                    </Grid>

                    {/* content (right on desktop, below on mobile) */}
                    <Grid item xs={12} md={7}>
                        <Typography color="text.secondary" sx={{ mb: 2 }}>
                            <strong>Small, senior teams.</strong> You work directly with the people
                            designing and building your product. You will receive personalized, direct service.
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 2 }}>
                            <strong>Short, focused cycles.</strong> We slice work into shippable
                            pieces, share progress often, and invite feedback early, so nothing goes
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
                bgcolor: 'background.default',
            }}
            >
                <Grid
                    container
                    spacing={6}
                    alignItems="flex-start"
                    direction={{ xs: 'column-reverse', md: 'row' }}
                >
                    {/* content (left on desktop, below on mobile) */}
                    <Grid item xs={12} md={7}>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            We’re driven by a mix of curiosity and craft.                         </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 720 }}>
                            A balance of “serious” and “playful” is where we
                            do our best work: serious about reliability, quality, and outcomes; playful in how we explore ideas and
                            experiment with interactions.
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 720 }}>
                            We care about the tiny moments most teams skip over because those are the things people
                            actually remember - that one microinteraction, the loading state. We do this because we enjoy
                            building beautiful projects with people who care as much as we do.
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

                    {/* Title 3 (right on desktop, top on mobile) */}
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                            position: { md: 'sticky' },
                            top: { md: 96 },
                            textAlign: { xs: 'left', md: 'right' },
                            }}
                        >
                            <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                mb: 1.5,
                                gap: 1,
                            }}
                            >
                            <Box
                                sx={{
                                width: 24,
                                height: 2,
                                borderRadius: 999,
                                bgcolor: 'text.primary',
                                }}
                            />
                            <Typography
                                variant="overline"
                                sx={{ letterSpacing: 2, textTransform: 'uppercase' }}
                            >
                                03
                            </Typography>
                            </Box>
                            <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '2.25rem', md: '3rem' },
                                letterSpacing: '-0.04em',
                                lineHeight: 1.1,
                            }}
                            >
                            Why we do it
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}
