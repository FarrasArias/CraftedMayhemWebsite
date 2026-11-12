// src/pages/Home.tsx
import * as React from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import EditOutlined from '@mui/icons-material/EditOutlined'
import ShareOutlined from '@mui/icons-material/ShareOutlined'
import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined'
import BuildOutlined from '@mui/icons-material/BuildOutlined'
import SentimentSatisfiedAltOutlined from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import MusicNoteOutlined from '@mui/icons-material/MusicNoteOutlined'
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline'
import { Section, SectionLabel, useTone } from '../components/Section'
import { LogoSymbol } from '../components/Logo'
import { colors, fonts } from '../brand'
import { projects, isGame } from '../data/projects'
import { ProjectTile } from '../components/ProjectTile'
import FeaturedGame from '../components/FeaturedGame'

const games = projects.filter(isGame)
const featured = projects.find((p) => p.featured)

const values = [
    { label: 'design-driven', Icon: EditOutlined },
    { label: 'systems thinking', Icon: ShareOutlined },
    { label: 'creativity', Icon: LightbulbOutlined },
    { label: 'ethical tech', Icon: BuildOutlined },
    { label: 'human-centered', Icon: SentimentSatisfiedAltOutlined },
    { label: 'interactive arts', Icon: MusicNoteOutlined },
]

const services = [
    'Video games and immersive 3D experiences',
    'UX/UI, creative direction, and rapid prototyping',
    'Web and mobile products, full-stack builds',
    'Creative computing and procedural generation',
    'Dashboards and internal tools',
]

const workingStyle = [
    {
        title: 'Small, senior teams.',
        body: 'You work directly with the people designing and building your product. You will receive personalized, direct service.',
    },
    {
        title: 'Short, focused cycles.',
        body: 'We slice work into shippable pieces, share progress often, and invite feedback early, so nothing goes off the rails quietly.',
    },
    {
        title: 'Real-world constraints.',
        body: 'We design around your stack, your deadlines, and your users’ reality. We care about maintainability, performance, and the stories people tell after launch.',
    },
]

const voice = [
    {
        label: 'playful',
        body: 'Our voice leans into curiosity, color, and a sense of joy, inviting people to explore complex ideas in a light, accessible way that still feels smart and intentional.',
    },
    {
        label: 'inspiring',
        body: 'Our words spark imagination and courage, encouraging others to experiment, break molds, and see what’s possible when creativity and engineering collide.',
    },
    {
        label: 'authentic',
        body: 'We speak honestly, grounding even our wildest ideas in real human stories, lived experience, and a genuine respect for the people we’re creating with and for.',
    },
]

/** Large statement paragraph used on the walnut bands. */
function Statement({ children }: { children: React.ReactNode }) {
    return (
        <Typography
            sx={{
                fontSize: { xs: '1.35rem', md: '1.75rem' },
                lineHeight: 1.3,
                letterSpacing: '-0.025em',
                maxWidth: 820,
                '& + &': { mt: 3 },
            }}
        >
            {children}
        </Typography>
    )
}

function Muted({ children, sx }: { children: React.ReactNode; sx?: object }) {
    const t = useTone()
    return <Typography sx={{ color: t.muted, ...sx }}>{children}</Typography>
}

export default function Home() {
    const [openGame, setOpenGame] = React.useState<number | null>(null)

    return (
        <Box>
            {/* HERO: mirrors the guide's cover slide */}
            <Section tone="onyx" sx={{ py: { xs: 10, md: 16 } }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={8}>
                        <Typography variant="overline" component="p" sx={{ color: colors.grey2, mb: 2 }}>
                            A human-first studio
                        </Typography>
                        <Typography
                            component="h1"
                            sx={{
                                fontWeight: 600,
                                fontSize: { xs: '3.25rem', sm: '4.5rem', md: '6rem' },
                                letterSpacing: '-0.055em',
                                lineHeight: 0.95,
                            }}
                        >
                            Crafted Mayhem
                        </Typography>
                        <Typography
                            variant="overline"
                            component="p"
                            sx={{ color: colors.flame, mt: 3, ml: { md: '45%' }, maxWidth: 360 }}
                        >
                            games, interactive experiences &amp; web products
                        </Typography>

                        <Stack direction="row" sx={{ mt: 6, flexWrap: 'wrap', gap: 2 }}>
                            <Button size="large" component={RouterLink} to="/games">
                                See our games
                            </Button>
                            <Button
                                size="large"
                                variant="outlined"
                                component={RouterLink}
                                to="/contact"
                                sx={{
                                    color: colors.snow,
                                    borderColor: colors.snow,
                                    '&:hover': { borderColor: colors.flame, color: colors.flame, bgcolor: 'transparent' },
                                }}
                            >
                                Start a project
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        <Box sx={{ color: colors.snow }}>
                            <LogoSymbol size={200} />
                        </Box>
                    </Grid>
                </Grid>
            </Section>

            {/* FEATURED: the next release, with a Steam wishlist call to action */}
            {featured && <FeaturedGame game={featured} />}

            {/* GAMES: we're a game studio first, so they come straight after the hero */}
            <Section tone="snow">
                <SectionLabel index="01">Our games</SectionLabel>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        gap: 2,
                        mb: { xs: 4, md: 6 },
                    }}
                >
                    <Typography variant="h2" component="h2" sx={{ maxWidth: 640 }}>
                        A game studio first.
                    </Typography>
                    <Button variant="text" component={RouterLink} to="/games" sx={{ color: colors.onyx, '&:hover': { color: colors.flame, bgcolor: 'transparent' } }}>
                        All games →
                    </Button>
                </Box>
                <Grid container spacing={3}>
                    {games.map((g, i) => (
                        <Grid key={g.title} item xs={12} sm={6} md={4}>
                            <ProjectTile
                                project={{ ...g, client: g.client || 'Game project' }}
                                isOpen={openGame === i}
                                onToggleOpen={() => setOpenGame(openGame === i ? null : i)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Section>

            {/* INTRODUCTION */}
            <Section tone="walnut">
                <SectionLabel index="02">Introduction</SectionLabel>
                <Statement>
                    We are a creative studio dedicated to solving thoughtful, unconventional problems by
                    pairing strong technical craft with a deep appreciation for aesthetics and emotion.
                </Statement>
                <Statement>
                    Human experience sits at the core of everything we design, guiding our decisions and
                    shaping the stories we tell. We take risks, challenge ourselves, and intentionally step
                    beyond what feels safe to create work that feels both original and deeply resonant.
                </Statement>
            </Section>

            {/* VALUES */}
            <Section tone="navy">
                <SectionLabel index="03">Brand values</SectionLabel>
                <Grid container rowSpacing={6} columnSpacing={4}>
                    {values.map(({ label, Icon }) => (
                        <Grid key={label} item xs={6} md={4}>
                            <Icon sx={{ fontSize: 20, color: colors.flame, mb: 1, display: 'block' }} />
                            <Typography
                                sx={{
                                    fontFamily: fonts.mono,
                                    fontSize: { xs: '1rem', md: '1.375rem' },
                                    color: colors.gold,
                                }}
                            >
                                {label}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Section>

            {/* SERVICES */}
            <Section tone="frozen">
                <SectionLabel index="04">Key services</SectionLabel>
                <Grid container rowSpacing={5} columnSpacing={6}>
                    {services.map((s) => (
                        <Grid key={s} item xs={12} sm={6}>
                            <CheckCircleOutline sx={{ fontSize: 18, mb: 1, display: 'block', opacity: 0.8 }} />
                            <Typography variant="h4" component="h3" sx={{ maxWidth: 420 }}>
                                {s}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Section>

            {/* MISSION & VISION */}
            <Section tone="walnut">
                <SectionLabel index="05">Mission &amp; vision</SectionLabel>
                <Statement>
                    Crafted Mayhem honors the human experience and imagination through play, crafting
                    joyful, mold-breaking experiences that spark emotion and inspire others.
                </Statement>
                <Statement>
                    We believe in making bold choices, experimentation, exploration, playfulness, and
                    collaboration.
                </Statement>
                <Statement>
                    Think of us as a colorful Escher painting: we approach complex problems with systematic
                    thinking fused with divergent creativity.
                </Statement>
            </Section>

            {/* HOW WE WORK */}
            <Section tone="snow">
                <SectionLabel index="06">How we work</SectionLabel>
                <Grid container spacing={6}>
                    {workingStyle.map((w) => (
                        <Grid key={w.title} item xs={12} md={4}>
                            <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
                                {w.title}
                            </Typography>
                            <Muted>{w.body}</Muted>
                        </Grid>
                    ))}
                </Grid>
            </Section>

            {/* VOICE + CTA */}
            <Section tone="onyx">
                <SectionLabel index="07">How we show up</SectionLabel>
                <Grid container spacing={6}>
                    {voice.map((v) => (
                        <Grid key={v.label} item xs={12} md={4}>
                            <Typography
                                sx={{ fontFamily: fonts.mono, fontSize: '1.375rem', color: colors.frozen, mb: 2 }}
                            >
                                {v.label}
                            </Typography>
                            <Muted sx={{ fontSize: '0.95rem', maxWidth: 340 }}>{v.body}</Muted>
                        </Grid>
                    ))}
                </Grid>

                <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ mt: { xs: 8, md: 12 }, gap: 2 }}>
                    <Button size="large" component={RouterLink} to="/games">
                        See our games
                    </Button>
                    <Button
                        size="large"
                        component={RouterLink}
                        to="/projects"
                        sx={{ bgcolor: colors.frozen, color: colors.navy, '&:hover': { bgcolor: colors.snow } }}
                    >
                        See client projects
                    </Button>
                    <Button
                        size="large"
                        variant="text"
                        component={RouterLink}
                        to="/about"
                        sx={{ color: colors.snow, '&:hover': { color: colors.flame, bgcolor: 'transparent' } }}
                    >
                        Meet the team →
                    </Button>
                </Stack>
            </Section>
        </Box>
    )
}
