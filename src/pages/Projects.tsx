import * as React from 'react'
import {
    Box,
    Grid,
    Stack,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/projects'
import { VideoDialog } from '../components/VideoDialog'
import { ProjectTile, ProjectLink } from '../components/ProjectTile'

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
            setVideoTitle(link.title)
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

                    return (
                        <Grid key={p.title + i} item xs={12} sm={6} md={4}>
                            <ProjectTile
                                project={p}
                                isOpen={isOpen}
                                onToggleOpen={() => setOpenIndex(isOpen ? null : i)}
                                onLinkClick={handleLinkClick}
                            />
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
