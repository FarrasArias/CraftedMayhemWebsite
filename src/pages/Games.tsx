import * as React from 'react'
import {
    Box,
    Grid,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/projects'
import { VideoDialog } from '../components/VideoDialog'
import { ProjectTile, ProjectLink } from '../components/ProjectTile'

export default function Games() {
    const location = useLocation() as any

    const [query, setQuery] = React.useState('')
    const [openIndex, setOpenIndex] = React.useState<number | null>(null)

    const [videoUrl, setVideoUrl] = React.useState<string | null>(null)
    const [videoTitle, setVideoTitle] = React.useState<string | undefined>(undefined)

    const filtered = projects
        .filter((p) =>
            p.tags.map((t) => t.toLowerCase()).includes('game')
        )
        .filter((p) =>
            [p.title, p.client, p.summary, p.tags.join(' ')]
                .join(' ')
                .toLowerCase()
                .includes(query.toLowerCase())
        )

    // When coming from Home hero tiles, auto-open the matching game
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
                Games
            </Typography>

            <Stack sx={{ mb: 3 }}>
                <TextField
                    label="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    size="small"
                />
            </Stack>

            <Grid container spacing={3}>
                {filtered.map((p, i) => {
                    const isOpen = openIndex === i

                    // Override client label so the tile shows "Game project" when no client is set
                    const projectForTile = {
                        ...p,
                        client: p.client || 'Game project',
                    }

                    return (
                        <Grid key={p.title + i} item xs={12} sm={6} md={4}>
                            <ProjectTile
                                project={projectForTile}
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
