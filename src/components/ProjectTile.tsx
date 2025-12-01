import * as React from 'react'
import {
    Box,
    Button,
    Chip,
    Collapse,
    ImageList,
    ImageListItem,
    Paper,
    Stack,
    Typography,
    CircularProgress,  
} from '@mui/material'
import { asset } from '../lib/assets'

const primary = '#8714fa'   // purple
const secondary = '#f07d13' // orange (not used yet, but kept for consistency)

export type ProjectLink = {
    label: string
    title: string
    url: string
}

export type ProjectLike = {
    title: string
    client?: string
    summary: string
    tags: string[]
    year?: string | number
    duration?: string
    role?: string
    status?: string
    image?: string
    details?: string
    gallery?: string[]
    links?: ProjectLink[]
}

export interface ProjectTileProps {
    project: ProjectLike
    isOpen: boolean
    onToggleOpen: () => void
    onLinkClick?: (link: ProjectLink) => void
}

export const ProjectTile: React.FC<ProjectTileProps> = ({
    project,
    isOpen,
    onToggleOpen,
    onLinkClick,
}) => {
    const heroImage = project.image ? asset(project.image) : asset('images/placeholder-1.svg')
    const hasDetailsContent = !!project.details || (project.gallery?.length ?? 0) > 0
    const primaryLink: ProjectLink | undefined = project.links?.[0]

    const [heroLoaded, setHeroLoaded] = React.useState(false) 

    const handleLinkClick = (link: ProjectLink) => {
        if (onLinkClick) {
            onLinkClick(link)
        } else {
            window.open(link.url, '_blank', 'noopener,noreferrer')
        }
    }

    return (
        <Box>
            {/* Square image tile with static bottom stripe + hover overlay */}
            <Box
                sx={{
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    bgcolor: '#ffffff',
                    border: '6px solid',
                    borderColor: 'rgba(242, 240, 235,1)',
                    boxShadow: '0 8px 24px rgba(15,23,42,0.08)',
                    transition:
                        'transform 0.2s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out',
                    cursor: 'default',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 18px 40px rgba(15,23,42,0.16)',
                        borderColor: 'rgba(135,20,250,0.4)',
                    },
                    '&:hover .project-tile-overlay': {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                }}
            >
                {/* Keep this 1:1 aspect ratio for square tiles */}
                <Box sx={{ position: 'relative', width: '100%', pt: '100%' }}>
                    {/* Background image with fade-in once loaded */}
                    <Box
                        component="img"
                        src={heroImage}
                        alt={project.title}
                        onLoad={() => setHeroLoaded(true)}
                        onError={() => setHeroLoaded(true)} // in case of error, hide loader too
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: heroLoaded ? 1 : 0,
                            transition: 'opacity 0.3s ease-out',
                        }}
                    />

                    {/* Loading overlay */}
                    {!heroLoaded && (
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                bgcolor: 'rgba(248,250,252,0.8)', // soft wash so the loading state feels intentional
                            }}
                        >
                            <CircularProgress size={32} />
                        </Box>
                    )}

                    {/* Gradient mask so the bottom of the image is always white
              (prevents tiny halo between image and stripe at rounded corners) */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: -5,
                            inset: 0,
                            pointerEvents: 'none',
                            background:
                                'linear-gradient(to top, #ffffff 0px, #ffffff 60px, transparent 1px)',
                        }}
                    />

                    {/* Persistent bottom white stripe with title + tags */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            bgcolor: 'rgba(255,255,255,0.98)',
                            px: 2,
                            py: 1.8, // bigger stripe
                            minHeight: 72,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 0.75,
                            borderTop: '1px solid rgba(15,23,42,0.18)', // clearer separation line
                            boxShadow: '0 -1px 0 rgba(15,23,42,0.08)',
                            backdropFilter: 'blur(4px)',
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                fontSize: 15, // slightly larger title
                                lineHeight: 1.25,
                            }}
                        >
                            {project.title}
                        </Typography>

                        {project.tags?.length > 0 && (
                            <Stack
                                direction="row"
                                spacing={0.5}
                                sx={{ flexWrap: 'wrap', gap: 0.5 }}
                            >
                                {project.tags.slice(0, 3).map((t) => (
                                    <Chip
                                        key={t}
                                        label={t}
                                        size="small"
                                        sx={{
                                            borderRadius: 999,
                                            px: 0.5,
                                            bgcolor: 'rgba(135,20,250,0.06)',
                                            color: 'rgba(17,24,39,0.9)',
                                            fontSize: 11,
                                            height: 22,
                                        }}
                                    />
                                ))}
                                {project.tags.length > 3 && (
                                    <Chip
                                        label={`+${project.tags.length - 3}`}
                                        size="small"
                                        sx={{
                                            borderRadius: 999,
                                            px: 0.5,
                                            borderColor: 'rgba(15,23,42,0.16)',
                                            borderWidth: 1,
                                            borderStyle: 'dashed',
                                            bgcolor: 'rgba(255,255,255,0.9)',
                                            color: 'rgba(31,41,55,0.8)',
                                            fontSize: 11,
                                            height: 22,
                                        }}
                                    />
                                )}
                            </Stack>
                        )}
                    </Box>

                    {/* Hover overlay: full fade to white with structured info */}
                    <Box
                        className="project-tile-overlay"
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            p: 2.5,
                            bgcolor: 'rgba(255,255,255,0.98)',
                            color: 'text.primary',
                            opacity: 0,
                            transform: 'translateY(8px)',
                            transition: 'opacity 0.25s ease-out, transform 0.25s ease-out',
                        }}
                    >
                        <Box sx={{ mb: 1.5 }}>
                            <Typography
                                variant="overline"
                                sx={{
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    opacity: 0.7,
                                    display: 'block',
                                    mb: 0.5,
                                }}
                            >
                                {project.client || 'Studio project'}
                            </Typography>

                            <Typography
                                variant="h5"
                                sx={{ fontWeight: 700, lineHeight: 1.2, mb: 1 }}
                            >
                                {project.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    opacity: 0.85,
                                    mb: 1.5,
                                    display: '-webkit-box',
                                    WebkitLineClamp: 5,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                }}
                            >
                                {project.summary}
                            </Typography>

                            {project.tags?.length > 0 && (
                                <Stack
                                    direction="row"
                                    spacing={0.5}
                                    sx={{ flexWrap: 'wrap', gap: 0.5 }}
                                >
                                    {project.tags.map((t) => (
                                        <Chip
                                            key={t}
                                            label={t}
                                            size="small"
                                            sx={{
                                                borderRadius: 999,
                                                px: 0.5,
                                                bgcolor: 'rgba(135,20,250,0.06)',
                                                color: 'rgba(17,24,39,0.9)',
                                                fontSize: 11,
                                                height: 22,
                                            }}
                                        />
                                    ))}
                                </Stack>
                            )}
                        </Box>

                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            spacing={1}
                        >
                            <Typography variant="caption" sx={{ opacity: 0.75 }}>
                                {project.year}
                                {project.duration ? ` · ${project.duration}` : ''}
                                {project.role ? ` · ${project.role}` : ''}
                            </Typography>

                            <Stack direction="row" spacing={1}>
                                {/* Details button – opens the extra information below */}
                                {hasDetailsContent && (
                                    <Button
                                        size="small"
                                        variant="contained"
                                        onClick={onToggleOpen}
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
                                            },
                                        }}
                                    >
                                        {isOpen ? 'Hide' : 'Details'}
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
                                            boxShadow: 'none',
                                            bgcolor: primary,
                                            '&:hover': {
                                                bgcolor: '#6a0fd1',
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
                        {project.details && (
                            <Typography sx={{ mb: project.gallery?.length ? 1.5 : 0 }}>
                                {project.details}
                            </Typography>
                        )}

                        {!!project.gallery?.length && (
                            <ImageList cols={3} gap={8}>
                                {project.gallery.map((src, idx) => (
                                    <ImageListItem key={idx}>
                                        <img
                                            src={asset(src)}
                                            alt={`${project.title} ${idx + 1}`}
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
                        {project.links && project.links.length > 1 && (
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{ flexWrap: 'wrap', gap: 1, mt: 1.5 }}
                            >
                                {project.links.slice(1).map((link, idx) => (
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
    )
}
