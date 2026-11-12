import { Box, Button, Grid, Link, Stack, Typography } from '@mui/material'
import { Section, SectionLabel, Tag, useTone } from './Section'
import { colors, fonts, steamDeveloperUrl } from '../brand'
import { asset } from '../lib/assets'
import type { Project } from '../data/projects'

/** Full-bleed band that promotes one upcoming game with a Steam wishlist call to action. */
export default function FeaturedGame({ game }: { game: Project }) {
    const steam = game.links?.find((l) => l.label.toLowerCase().includes('steam') || l.url.includes('steampowered'))
    const [name, subtitle] = game.title.split(/:\s*/)

    return (
        <Section tone="lavender">
            <SectionLabel index={game.year.toLowerCase()}>wishlist now</SectionLabel>
            <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
                <Grid item xs={12} md={7}>
                    <Box
                        component={steam ? 'a' : 'div'}
                        href={steam?.url}
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                            display: 'block',
                            border: `1px solid ${colors.onyx}`,
                            bgcolor: colors.snow,
                            aspectRatio: '616 / 353',
                            overflow: 'hidden',
                            transition: 'box-shadow 0.2s ease-out, border-color 0.2s ease-out',
                            '&:hover': { borderColor: colors.flame, boxShadow: `0 0 0 1px ${colors.flame}` },
                        }}
                    >
                        <Box
                            component="img"
                            src={asset(game.keyArt ?? game.image ?? 'images/placeholder-1.svg')}
                            alt={`${game.title} key art`}
                            sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Body name={name} subtitle={subtitle} game={game} steamUrl={steam?.url} />
                </Grid>
            </Grid>
        </Section>
    )
}

function Body({
    name,
    subtitle,
    game,
    steamUrl,
}: {
    name: string
    subtitle?: string
    game: Project
    steamUrl?: string
}) {
    const t = useTone()
    return (
        <Box>
            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
                {game.tags
                    .filter((tag) => tag.toLowerCase() !== 'game')
                    .map((tag) => (
                        <Tag key={tag}>{tag.toLowerCase()}</Tag>
                    ))}
            </Stack>

            <Typography variant="h2" component="h2" sx={{ lineHeight: 1 }}>
                {name}
            </Typography>
            {subtitle && (
                <Typography sx={{ fontFamily: fonts.mono, fontSize: '1rem', color: colors.navy, mt: 1.5 }}>
                    {subtitle.toLowerCase()}
                </Typography>
            )}

            <Typography sx={{ color: t.muted, mt: 3, maxWidth: 440 }}>{game.summary}</Typography>

            {steamUrl && (
                <Stack direction="row" alignItems="center" sx={{ mt: 4, flexWrap: 'wrap', columnGap: 3, rowGap: 2 }}>
                    <Button size="large" href={steamUrl} target="_blank" rel="noreferrer">
                        Wishlist on Steam
                    </Button>
                    <Link
                        href={steamDeveloperUrl}
                        target="_blank"
                        rel="noreferrer"
                        underline="hover"
                        sx={{ fontFamily: fonts.mono, fontSize: '0.8125rem', color: colors.onyx }}
                    >
                        follow the studio ↗
                    </Link>
                </Stack>
            )}
        </Box>
    )
}
