import * as React from 'react'
import {
    Box, Chip, Grid, Paper, Stack,
    TextField, ToggleButton, ToggleButtonGroup,
    Typography, Button, Collapse, ImageList, ImageListItem
} from '@mui/material'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/projects'
import { asset } from '../lib/assets'

export default function Projects() {
    const location = useLocation() as any

    const [query, setQuery] = React.useState('')
    const [status, setStatus] = React.useState<'all' | 'current' | 'shipped'>('all')
    const [openIndex, setOpenIndex] = React.useState<number | null>(null)

    const filtered = projects.filter(p => {
        const isGame = p.tags.some(t => t.toLowerCase() === 'game')
        if (isGame) return false  // don't show Game-tagged items in Projects

        const matchesText = [p.title, p.client, p.summary, p.tags.join(' ')]
            .join(' ')
            .toLowerCase()
            .includes(query.toLowerCase())

        const matchesStatus = status === 'all' || p.status === status

        return matchesText && matchesStatus
    })

    // When coming from Home hero tiles, auto-open the matching project
    React.useEffect(() => {
        const highlightTitle: string | undefined = location.state?.highlightTitle
        if (!highlightTitle) return
        if (openIndex !== null) return

        const idx = filtered.findIndex(p => p.title === highlightTitle)
        if (idx !== -1) {
            setOpenIndex(idx)
        }
    }, [filtered, location.state, openIndex])

    return (
        <Box>
            <Typography variant="h2" gutterBottom>Projects</Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: 'wrap', gap: 2 }}>
                <TextField label="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
                <ToggleButtonGroup value={status} exclusive onChange={(_, v) => v && setStatus(v)}>
                    <ToggleButton value="all">All</ToggleButton>
                    <ToggleButton value="current">Current</ToggleButton>
                    <ToggleButton value="shipped">Shipped</ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Grid container spacing={3}>
                {filtered.map((p, i) => {
                    const isOpen = openIndex === i
                    const hasDetailsContent = !!p.details || (p.gallery?.length ?? 0) > 0

                    return (
                        <Grid key={i} item xs={12} md={6}>
                            <Paper sx={{ p: 3, height: '100%' }}>
                                <Stack spacing={1}>
                                    <img
                                        src={p.image ? asset(p.image) : asset('images/placeholder-1.svg')}
                                        alt={p.title}
                                        style={{
                                            width: '100%',
                                            height: 220,          // fixed height so all cards align visually
                                            objectFit: 'cover',   // crop
                                            objectPosition: 'center',
                                            borderRadius: 12,
                                            display: 'block',
                                        }}
                                    />

                                    <Typography variant="overline" color="secondary">
                                        {p.client || '—'}
                                    </Typography>
                                    <Typography variant="h3">{p.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {p.year}
                                        {p.duration ? ' • ' + p.duration : ''}
                                        {p.role ? ' • ' + p.role : ''}
                                    </Typography>
                                    <Typography>{p.summary}</Typography>

                                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                                        {p.tags.map(t => (
                                            <Chip key={t} label={t} size="small" />
                                        ))}
                                    </Stack>

                                    {/* NEW: external link buttons (Steam, site, etc.) */}
                                    {p.links && p.links.length > 0 && (
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            sx={{ flexWrap: 'wrap', gap: 1, mt: 1 }}
                                        >
                                            {p.links.map((link, idx) => (
                                                <Button
                                                    key={idx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    size="small"
                                                    color="secondary"
                                                >
                                                    {link.label}
                                                </Button>
                                            ))}
                                        </Stack>
                                    )}

                                    {/* Only show button + collapse if there is details OR gallery */}
                                    {hasDetailsContent && (
                                        <>
                                            <Box sx={{ mt: 2 }}>
                                                <Button onClick={() => setOpenIndex(isOpen ? null : i)}>
                                                    {isOpen ? 'Hide details' : 'More details'}
                                                </Button>
                                            </Box>

                                            <Collapse in={isOpen}>
                                                {p.details && (
                                                    <Typography sx={{ mt: 1 }}>
                                                        {p.details}
                                                    </Typography>
                                                )}

                                                {!!p.gallery?.length && (
                                                    <ImageList cols={3} gap={8} sx={{ mt: 1 }}>
                                                        {p.gallery.map((src, idx) => (
                                                            <ImageListItem key={idx}>
                                                                <img
                                                                    src={asset(src)}
                                                                    alt={`${p.title} ${idx + 1}`}
                                                                    loading="lazy"
                                                                    style={{ borderRadius: 8 }}
                                                                />
                                                            </ImageListItem>
                                                        ))}
                                                    </ImageList>
                                                )}
                                            </Collapse>
                                        </>
                                    )}
                                </Stack>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}
