// Brand tokens from the Crafted Mayhem Branding Guidelines (2026).
// Single source of truth for colours and font stacks. Import from here
// instead of hard-coding hex values in components.

export const colors = {
    snow: '#F8F3F2',
    gold: '#FFD600',
    flame: '#FF4D00',
    walnut: '#3B270C',
    lavender: '#CAD8F1',
    frozen: '#90D7FF',
    cornflower: '#6290D0',
    navy: '#003366',
    onyx: '#111111',
    grey1: '#D4D5D6',
    grey2: '#A7ADB0',
    grey3: '#838A90',
    grey4: '#585E62',
    grey5: '#2A2C2E',
} as const

export type BrandColor = keyof typeof colors

// Primary typeface in the guide is Die Grotesk (commercial). Inter Tight is a
// free stand-in; swap the first family here once licensed web fonts are added.
export const fonts = {
    sans: `'Inter Tight', 'Helvetica Neue', Arial, system-ui, sans-serif`,
    mono: `'Departure Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace`,
} as const

/** Our Steam developer (curator) page, where players can follow the studio. */
export const steamDeveloperUrl = 'https://store.steampowered.com/curator/45798588'

export const social = [
    { label: 'steam', handle: 'Crafted Mayhem', url: steamDeveloperUrl },
    { label: 'bluesky', handle: '@craftedmayhem.bsky.social', url: 'https://bsky.app/profile/craftedmayhem.bsky.social' },
    { label: 'instagram', handle: '@crafted.mayhem', url: 'https://www.instagram.com/crafted.mayhem' },
    { label: 'linkedin', handle: '@crafted-mayhem', url: 'https://www.linkedin.com/company/crafted-mayhem' },
] as const
