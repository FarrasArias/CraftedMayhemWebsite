import * as React from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Box,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export interface VideoDialogProps {
    open: boolean
    url: string | null
    title?: string
    onClose: () => void
}

function getEmbedUrl(rawUrl: string): string {
    try {
        const url = new URL(rawUrl)

        // Basic YouTube handling: https://www.youtube.com/watch?v=ID
        if (url.hostname.includes('youtube.com')) {
            const v = url.searchParams.get('v')
            if (v) return `https://www.youtube.com/embed/${v}`
        }

        // Short YouTube URLs: https://youtu.be/ID
        if (url.hostname === 'youtu.be') {
            const id = url.pathname.replace('/', '')
            if (id) return `https://www.youtube.com/embed/${id}`
        }

        // You can extend here for Vimeo, etc., if needed
        return rawUrl
    } catch {
        return rawUrl
    }
}

export const VideoDialog: React.FC<VideoDialogProps> = ({ open, url, title, onClose }) => {
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

    if (!url) return null

    const embedUrl = getEmbedUrl(url)

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md"
            fullScreen={fullScreen}
            aria-labelledby="video-dialog-title"
        >
            <DialogTitle
                id="video-dialog-title"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pr: 1,
                }}
            >
                {title || 'Video'}
                <IconButton
                    aria-label="Close video"
                    onClick={onClose}
                    size="small"
                    sx={{ ml: 1 }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ p: 0 }}>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        pt: '56.25%', // 16:9 ratio
                        bgcolor: 'common.black',
                    }}
                >
                    <Box
                        component="iframe"
                        src={embedUrl}
                        title={title || 'Video'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            border: 0,
                        }}
                    />
                </Box>
            </DialogContent>
        </Dialog>
    )
}
