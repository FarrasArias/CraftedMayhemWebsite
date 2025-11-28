import * as React from 'react'
import {
    Box,
    Chip,
    Grid,
    Paper,
    Stack,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
    Button,
    Collapse,
    ImageList,
    ImageListItem,
} from '@mui/material'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/projects'
import { asset } from '../lib/assets'
import { VideoDialog } from '../components/VideoDialog' // <- import the dialog

const primary = '#8714fa'   // purple
const secondary = '#f07d13' // orange

type ProjectLink = {
    label: string
    url: string
}

export default function Projects() {
    const location = useLocation() as any

    const [query, setQuery] = React.useState('')
    const [status, setStatus] = React.useState<'all' | 'current' | 'shipped'>('all')
    const [openIndex, setOpenIndex] = React.useState<number | null>(null)

    const [videoUrl, setVideoUrl] = React.useState<string | null>(null)
    const [videoTitle, setVideoTitle] = React.useState<string | undefined>(undefined)

    const filtered = projects.filter((p) => {
        const isGame = p.tags.some((t) => t.toLowerCase() === 'game')
        if (isGame) return false // don't show Game-tagged items in Projects

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

        const idx = filtered.findIndex((p) => p.title === highlightTitle)
        if (idx !== -1) {
            setOpenIndex(idx)
        }
    }, [filtered, location.state, openIndex])

    const handleLinkClick = (link: ProjectLink) => {
        const isVideo = link.label.toLowerCase().includes('video')

        if (isVideo) {
            setVideoUrl(link.url)
            setVideoTitle(link.label)
        } else {
            window.open(link.url, '_blank', 'noopener,noreferrer')
        }
    }

    const handleCloseVideo = () => {
        setVideoUrl(null)
        setVideoTitle(undefined)
    }

    return (
        <Box>
            <Typography variant="h2" gutterBottom>
                Projects
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: 'wrap', gap: 2 }}>
                <TextField
                    label="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    size="small"
                />
                <ToggleButtonGroup
                    value={status}
                    exclusive
                    onChange={(_, v) => v && setStatus(v)}
                    size="small"
                >
                    <ToggleButton value="all">All</ToggleButton>
                    <ToggleButton value="current">Current</ToggleButton>
                    <ToggleButton value="shipped">Shipped</ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Grid container spacing={3}>
                {filtered.map((p, i) => {
                    const isOpen = openIndex === i
                    const hasDetailsContent = !!p.details || (p.gallery?.length ?? 0) > 0
                    const heroImage = p.image ? asset(p.image) : asset('images/placeholder-1.svg')

                    const primaryLink: ProjectLink | undefined = p.links?.[0]

                    return (
                        <Grid key={p.title + i} item xs={12} sm={6} md={4}>
                            <Box>
                                {/* Square image tile with hover overlay */}
                                <Box
                                    sx={{
                                        position: 'relative',
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        bgcolor: 'grey.50',
                                        border: '1px solid',
                                        borderColor: 'rgba(135,20,250,0.18)',
                                        boxShadow: '0 8px 24px rgba(15,23,42,0.08)',
                                        transition:
                                            'transform 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out',
                                        cursor: 'default',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 18px 40px rgba(15,23,42,0.16)',
                                            borderColor: 'rgba(135,20,250,0.4)',
                                        },
                                        '&:hover .project-overlay': {
                                            opacity: 1,
                                            transform: 'translateY(0)',
                                        },
                                    }}
                                >
                                    {/* Keep this 1:1 aspect ratio for square tiles */}
                                    <Box sx={{ position: 'relative', width: '100%', pt: '100%' }}>
                                        <Box
                                            component="img"
                                            src={heroImage}
                                            alt={p.title}
                                            sx={{
                                                position: 'absolute',
                                                inset: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />

                                        {/* Hover overlay */}
                                        <Box
                                            className="project-overlay"
                                            sx={{
                                                position: 'absolute',
                                                inset: 0,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-end',
                                                p: 2.5,
                                                background:
                                                    'linear-gradient(to top, rgba(10,5,25,0.9), rgba(10,5,25,0.15))',
                                                color: '#ffffff',
                                                opacity: 0,
                                                transform: 'translateY(12px)',
                                                transition: 'opacity 0.25s ease-out, transform 0.25s ease-out',
                                            }}
                                        >
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    letterSpacing: '0.12em',
                                                    textTransform: 'uppercase',
                                                    opacity: 0.9,
                                                }}
                                            >
                                                {p.client || 'Studio project'}
                                            </Typography>

                                            <Typography
                                                variant="h5"
                                                sx={{ fontWeight: 700, lineHeight: 1.2, mb: 0.5 }}
                                            >
                                                {p.title}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    opacity: 0.9,
                                                    mb: 1,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                {p.summary}
                                            </Typography>

                                            <Stack
                                                direction="row"
                                                spacing={0.5}
                                                sx={{ flexWrap: 'wrap', gap: 0.5, mb: 1 }}
                                            >
                                                {p.tags.slice(0, 3).map((t: string) => (
                                                    <Chip
                                                        key={t}
                                                        label={t}
                                                        size="small"
                                                        sx={{
                                                            borderRadius: 999,
                                                            px: 0.5,
                                                            borderColor: 'rgba(255,255,255,0.45)',
                                                            borderWidth: 1,
                                                            borderStyle: 'solid',
                                                            bgcolor: 'rgba(15,23,42,0.6)',
                                                            color: 'rgba(255,255,255,0.95)',
                                                            fontSize: 11,
                                                            height: 22,
                                                        }}
                                                    />
                                                ))}
                                                {p.tags.length > 3 && (
                                                    <Chip
                                                        label={`+${p.tags.length - 3}`}
                                                        size="small"
                                                        sx={{
                                                            borderRadius: 999,
                                                            px: 0.5,
                                                            borderColor: 'rgba(255,255,255,0.3)',
                                                            borderWidth: 1,
                                                            borderStyle: 'dashed',
                                                            bgcolor: 'rgba(15,23,42,0.4)',
                                                            color: 'rgba(255,255,255,0.9)',
                                                            fontSize: 11,
                                                            height: 22,
                                                        }}
                                                    />
                                                )}
                                            </Stack>

                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                                justifyContent="space-between"
                                                spacing={1}
                                            >
                                                <Typography variant="caption" sx={{ opacity: 0.85 }}>
                                                    {p.year}
                                                    {p.duration ? ` · ${p.duration}` : ''}
                                                    {p.role ? ` · ${p.role}` : ''}
                                                </Typography>

                                                <Stack direction="row" spacing={1}>
                                                    {/* Details button – opens the extra information below */}
                                                    {hasDetailsContent && (
                                                        <Button
                                                            size="small"
                                                            variant="contained"
                                                            onClick={() => setOpenIndex(isOpen ? null : i)}
                                                            sx={{
                                                                textTransform: 'none',
                                                                fontSize: 13,
                                                                borderRadius: 999,
                                                                px: 1.6,
                                                                py: 0.3,
                                                                boxShadow: 'none',
                                                                bgcolor: primary,
                                                                '&:hover': {
                                                                    bgcolor: '#6a0fd1',
                                                                    boxShadow: '0 0 0 1px rgba(255,255,255,0.6)',
                                                                },
                                                            }}
                                                        >
                                                            {isOpen ? 'Hide details' : 'Details'}
                                                        </Button>
                                                    )}

                                                    {/* Optional primary external link or video */}
                                                    {primaryLink && (
                                                        <Button
                                                            size="small"
                                                            onClick={() => handleLinkClick(primaryLink)}
                                                            sx={{
                                                                textTransform: 'none',
                                                                fontSize: 13,
                                                                borderRadius: 999,
                                                                px: 1.6,
                                                                py: 0.3,
                                                                border: '1px solid rgba(255,255,255,0.7)',
                                                                bgcolor: 'rgba(10,5,25,0.4)',
                                                                color: '#ffffff',
                                                                '&:hover': {
                                                                    bgcolor: 'rgba(240,125,19,0.9)',
                                                                    borderColor: 'transparent',
                                                                },
                                                            }}
                                                        >
                                                            {primaryLink.label}
                                                        </Button>
                                                    )}
                                                </Stack>
                                            </Stack>
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Extra information area that opens when you click Details */}
                                {hasDetailsContent && (
                                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                                        <Paper
                                            variant="outlined"
                                            sx={{
                                                mt: 1.5,
                                                p: 2,
                                                borderRadius: 3,
                                                borderColor: 'rgba(135,20,250,0.22)',
                                                background:
                                                    'linear-gradient(135deg, rgba(135,20,250,0.03), rgba(240,125,19,0.03))',
                                            }}
                                        >
                                            {p.details && (
                                                <Typography sx={{ mb: p.gallery?.length ? 1.5 : 0 }}>
                                                    {p.details}
                                                </Typography>
                                            )}

                                            {!!p.gallery?.length && (
                                                <ImageList cols={3} gap={8}>
                                                    {p.gallery.map((src: string, idx: number) => (
                                                        <ImageListItem key={idx}>
                                                            <img
                                                                src={asset(src)}
                                                                alt={`${p.title} ${idx + 1}`}
                                                                loading="lazy"
                                                                style={{
                                                                    borderRadius: 8,
                                                                    display: 'block',
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    objectFit: 'cover',
                                                                }}
                                                            />
                                                        </ImageListItem>
                                                    ))}
                                                </ImageList>
                                            )}

                                            {/* Show any additional external links beyond the first */}
                                            {p.links && p.links.length > 1 && (
                                                <Stack
                                                    direction="row"
                                                    spacing={1}
                                                    sx={{ flexWrap: 'wrap', gap: 1, mt: 1.5 }}
                                                >
                                                    {p.links.slice(1).map((link: ProjectLink, idx: number) => (
                                                        <Button
                                                            key={idx}
                                                            onClick={() => handleLinkClick(link)}
                                                            size="small"
                                                            sx={{
                                                                textTransform: 'none',
                                                                borderRadius: 999,
                                                                border: '1px solid rgba(135,20,250,0.5)',
                                                                color: primary,
                                                            }}
                                                        >
                                                            {link.label}
                                                        </Button>
                                                    ))}
                                                </Stack>
                                            )}
                                        </Paper>
                                    </Collapse>
                                )}
                            </Box>
                        </Grid>
                    )
                })}
            </Grid>

            <VideoDialog
                open={Boolean(videoUrl)}
                url={videoUrl}
                title={videoTitle}
                onClose={handleCloseVideo}
            />
        </Box>
    )
}
