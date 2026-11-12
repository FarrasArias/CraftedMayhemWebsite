import { Box, BoxProps } from '@mui/material'
import { fonts } from '../brand'

// Diamond with a circular cut-out, recreated from the brand guide.
// Coloured with currentColor so it inherits text colour.
export function LogoSymbol({ size = 28, title }: { size?: number; title?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            role={title ? 'img' : undefined}
            aria-hidden={title ? undefined : true}
            aria-label={title}
            style={{ display: 'block', flexShrink: 0 }}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M50 4 L96 50 L50 96 L4 50 Z M50 33.7 A16.3 16.3 0 1 0 50 66.3 A16.3 16.3 0 1 0 50 33.7 Z"
            />
        </svg>
    )
}

type LogoProps = {
    variant?: 'symbol' | 'lockup' | 'stacked'
    size?: number
} & Omit<BoxProps, 'children'>

export default function Logo({ variant = 'lockup', size = 28, sx, ...rest }: LogoProps) {
    if (variant === 'symbol') {
        return (
            <Box sx={{ display: 'inline-flex', ...sx }} {...rest}>
                <LogoSymbol size={size} title="Crafted Mayhem" />
            </Box>
        )
    }

    const stacked = variant === 'stacked'
    return (
        <Box
            role="img"
            aria-label="Crafted Mayhem"
            sx={{
                display: 'inline-flex',
                flexDirection: stacked ? 'column' : 'row',
                alignItems: 'center',
                gap: `${size * 0.35}px`,
                ...sx,
            }}
            {...rest}
        >
            <LogoSymbol size={size} />
            <Box
                component="span"
                aria-hidden
                sx={{
                    fontFamily: fonts.sans,
                    fontWeight: 600,
                    letterSpacing: '-0.045em',
                    lineHeight: 1,
                    whiteSpace: 'nowrap',
                    fontSize: stacked ? size * 0.9 : size * 0.78,
                }}
            >
                Crafted Mayhem
            </Box>
        </Box>
    )
}
