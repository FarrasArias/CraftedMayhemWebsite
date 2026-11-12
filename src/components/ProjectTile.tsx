import * as React from 'react'
import {
    Box,
    Button,
    Collapse,
    ImageList,
    ImageListItem,
    Stack,
    Typography,
    CircularProgress,
} from '@mui/material'
import { asset } from '../lib/assets'
import { colors } from '../brand'
import { Tag } from './Section'

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

const mediaSx = (loaded: boolean) => ({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: loaded ? 1 : 0,
    transition: 'opacity 0.3s ease-out',
}) as const

const pillButton = {
    fontSize: 12,
    px: 1.5,
    py: 0.4,
    minWidth: 0,
}

export const ProjectTile: React.FC<ProjectTileProps> = ({
    project,
    isOpen,
    onToggleOpen,
    onLinkClick,
}) => {
    const heroImage = project.image ? asset(project.image) : asset('images/placeholder-1.svg')
    const isVideo = /\.(mp4|webm)(\?|$)/i.test(heroImage)
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
            {/* Square image tile with static bottom strip + hover overlay */}
            <Box
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    bgcolor: colors.snow,
                    border: `1px solid ${colors.onyx}`,
                    transition: 'border-color 0.2s ease-out, box-shadow 0.2s ease-out',
                    '&:hover, &:focus-within': {
                        borderColor: colors.flame,
                        boxShadow: `0 0 0 1px ${colors.flame}`,
                    },
                    '&:hover .project-tile-overlay, &:focus-within .project-tile-overlay': {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                }}
            >
                {/* Keep this 1:1 aspect ratio for square tiles */}
                <Box sx={{ position: 'relative', width: '100%', pt: '100%' }}>
                    {isVideo ? (
                        <Box
                            component="video"
                            src={heroImage}
                            autoPlay
                            muted
                            loop
                            playsInline
                            aria-label={project.title}
                            onLoadedData={() => setHeroLoaded(true)}
                            onError={() => setHeroLoaded(true)}
                            sx={mediaSx(heroLoaded)}
                        />
                    ) : (
                        <Box
                            component="img"
                            src={heroImage}
                            alt={project.title}
                            onLoad={() => setHeroLoaded(true)}
                            onError={() => setHeroLoaded(true)}
                            sx={mediaSx(heroLoaded)}
                        />
                    )}

                    {!heroLoaded && (
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                bgcolor: colors.lavender,
                            }}
                        >
                            <CircularProgress size={28} thickness={5} />
                        </Box>
                    )}

                    {/* Persistent bottom strip with title + tags */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            bgcolor: colors.snow,
                            color: colors.onyx,
                            px: 2,
                            py: 1.5,
                            minHeight: 72,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 0.9,
                            borderTop: `1px solid ${colors.onyx}`,
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 600,
                                letterSpacing: '-0.03em',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                fontSize: 17,
                                lineHeight: 1.2,
                            }}
                        >
                            {project.title}
                        </Typography>

                        {project.tags?.length > 0 && (
                            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.75 }}>
                                {project.tags.slice(0, 3).map((t) => (
                                    <Tag key={t}>{t}</Tag>
                                ))}
                                {project.tags.length > 3 && <Tag>+{project.tags.length - 3}</Tag>}
                            </Stack>
                        )}
                    </Box>

                    {/* Hover overlay with structured info */}
                    <Box
                        className="project-tile-overlay"
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            p: 2.5,
                            bgcolor: colors.snow,
                            color: colors.onyx,
                            opacity: 0,
                            transform: 'translateY(8px)',
                            transition: 'opacity 0.25s ease-out, transform 0.25s ease-out',
                        }}
                    >
                        <Box sx={{ mb: 1.5 }}>
                            <Typography
                                variant="overline"
                                sx={{ color: colors.flame, display: 'block', mb: 1 }}
                            >
                                {project.client || 'Studio project'}
                            </Typography>

                            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                                {project.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    color: colors.grey5,
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
                                <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.75 }}>
                                    {project.tags.map((t) => (
                                        <Tag key={t}>{t}</Tag>
                                    ))}
                                </Stack>
                            )}
                        </Box>

                        <Stack direction="row" alignItems="flex-end" justifyContent="space-between" spacing={1}>
                            <Typography variant="caption" sx={{ color: colors.grey4 }}>
                                {project.year}
                                {project.duration ? ` · ${project.duration}` : ''}
                                {project.role ? ` · ${project.role}` : ''}
                            </Typography>

                            <Stack direction="row" spacing={1} sx={{ flexShrink: 0 }}>
                                {hasDetailsContent && (
                                    <Button
                                        size="small"
                                        color="secondary"
                                        onClick={onToggleOpen}
                                        sx={pillButton}
                                    >
                                        {isOpen ? 'hide' : 'details'}
                                    </Button>
                                )}

                                {primaryLink && (
                                    <Button
                                        size="small"
                                        onClick={() => handleLinkClick(primaryLink)}
                                        sx={pillButton}
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
                    <Box
                        sx={{
                            mt: 1.5,
                            p: 2,
                            bgcolor: colors.lavender,
                            color: colors.onyx,
                            borderLeft: `3px solid ${colors.flame}`,
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

                        {project.links && project.links.length > 1 && (
                            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, mt: 1.5 }}>
                                {project.links.slice(1).map((link, idx) => (
                                    <Button
                                        key={idx}
                                        variant="outlined"
                                        size="small"
                                        onClick={() => handleLinkClick(link)}
                                        sx={{ ...pillButton, color: colors.onyx, borderColor: colors.onyx }}
                                    >
                                        {link.label}
                                    </Button>
                                ))}
                            </Stack>
                        )}
                    </Box>
                </Collapse>
            )}
        </Box>
    )
}
