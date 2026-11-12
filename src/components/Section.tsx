import * as React from 'react'
import { Box, BoxProps, Container, Typography } from '@mui/material'
import { colors, fonts } from '../brand'

// Colour bands, mirroring the slide backgrounds in the brand guide.
export const tones = {
    onyx: { bg: colors.onyx, fg: colors.snow, muted: colors.grey2, label: colors.flame, accent: colors.frozen },
    walnut: { bg: colors.walnut, fg: colors.snow, muted: 'rgba(248,243,242,0.72)', label: colors.flame, accent: colors.gold },
    navy: { bg: colors.navy, fg: colors.gold, muted: 'rgba(248,243,242,0.75)', label: colors.flame, accent: colors.gold },
    frozen: { bg: colors.frozen, fg: colors.navy, muted: colors.navy, label: colors.flame, accent: colors.navy },
    lavender: { bg: colors.lavender, fg: colors.onyx, muted: colors.grey4, label: colors.flame, accent: colors.navy },
    snow: { bg: colors.snow, fg: colors.onyx, muted: colors.grey4, label: colors.flame, accent: colors.flame },
    orange: { bg: colors.flame, fg: colors.onyx, muted: colors.onyx, label: colors.onyx, accent: colors.snow },
} as const

export type Tone = keyof typeof tones

const ToneContext = React.createContext<Tone>('snow')
export const useTone = () => tones[React.useContext(ToneContext)]

type SectionProps = {
    tone?: Tone
    /** Vertical padding preset */
    size?: 'md' | 'lg'
    children: React.ReactNode
} & Omit<BoxProps, 'children'>

export function Section({ tone = 'snow', size = 'lg', children, sx, ...rest }: SectionProps) {
    const t = tones[tone]
    return (
        <ToneContext.Provider value={tone}>
            <Box
                component="section"
                sx={{
                    bgcolor: t.bg,
                    color: t.fg,
                    py: size === 'lg' ? { xs: 8, md: 12 } : { xs: 6, md: 8 },
                    ...sx,
                }}
                {...rest}
            >
                <Container>{children}</Container>
            </Box>
        </ToneContext.Provider>
    )
}

/** Small mono label in the top-left of a section, with an optional index on the right. */
export function SectionLabel({ children, index }: { children: React.ReactNode; index?: string | number }) {
    const t = useTone()
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                mb: { xs: 5, md: 8 },
                color: t.label,
            }}
        >
            <Typography variant="overline" component="p">
                {children}
            </Typography>
            {index !== undefined && (
                <Typography variant="overline" component="p">
                    {index}
                </Typography>
            )}
        </Box>
    )
}

/** Mono tag framed by dashed edges with solid corner brackets, e.g. [ co-founder ]. */
export function Tag({
    children,
    sx,
    ...rest
}: { children: React.ReactNode } & Omit<BoxProps, 'children'>) {
    const c = 'currentColor'
    const L = '6px'
    const corner = (x: string, y: string) => [
        { img: `linear-gradient(${c},${c})`, pos: `${x} ${y}`, size: `${L} 1px` },
        { img: `linear-gradient(${c},${c})`, pos: `${x} ${y}`, size: `1px ${L}` },
    ]
    const layers = [
        ...corner('left', 'top'),
        ...corner('right', 'top'),
        ...corner('left', 'bottom'),
        ...corner('right', 'bottom'),
    ]
    return (
        <Box
            component="span"
            sx={{
                display: 'inline-block',
                fontFamily: fonts.mono,
                fontSize: '0.6875rem',
                lineHeight: 1,
                px: 0.9,
                py: 0.6,
                whiteSpace: 'nowrap',
                border: '1px dashed',
                borderColor: 'color-mix(in srgb, currentColor 45%, transparent)',
                backgroundOrigin: 'border-box',
                backgroundRepeat: 'no-repeat',
                backgroundImage: layers.map((l) => l.img).join(','),
                backgroundPosition: layers.map((l) => l.pos).join(','),
                backgroundSize: layers.map((l) => l.size).join(','),
                ...sx,
            }}
            {...rest}
        >
            {children}
        </Box>
    )
}
