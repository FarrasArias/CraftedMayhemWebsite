import { Box, Grid, Link, Stack, Typography } from '@mui/material'
import { team } from '../data/team'
import { asset } from '../lib/assets'
import { Section, SectionLabel, Tag } from '../components/Section'
import { colors, fonts } from '../brand'

export default function About() {
  return (
    <Section tone="onyx" sx={{ minHeight: '70vh' }}>
      <SectionLabel>Our team</SectionLabel>
      <Typography variant="h1" component="h1" sx={{ mb: { xs: 6, md: 10 }, maxWidth: 720 }}>
        Three co-founders, one shared love of play.
      </Typography>

      <Grid container rowSpacing={8} columnSpacing={5}>
        {team.map((p) => (
          <Grid key={p.name} item xs={12} sm={6} md={4}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Box sx={{ position: 'relative', width: '55%', flexShrink: 0 }}>
                <Box
                  component="img"
                  src={asset(p.avatar ?? 'images/placeholder-1.svg')}
                  alt={p.name}
                  loading="lazy"
                  sx={{
                    display: 'block',
                    width: '100%',
                    aspectRatio: '3 / 4',
                    objectFit: 'cover',
                    filter: 'grayscale(1) contrast(1.05)',
                    bgcolor: colors.grey5,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: 8,
                    height: 8,
                    bgcolor: colors.frozen,
                  }}
                />
              </Box>

              <Box sx={{ minWidth: 0 }}>
                {p.tag && <Tag sx={{ mb: 1.5, color: colors.grey2 }}>{p.tag}</Tag>}
                <Typography
                  component="h2"
                  sx={{ fontFamily: fonts.mono, fontSize: '0.875rem', lineHeight: 1.4 }}
                >
                  {p.name}
                </Typography>
                {p.pronouns && (
                  <Typography sx={{ fontFamily: fonts.mono, fontSize: '0.875rem', color: colors.grey2 }}>
                    ({p.pronouns})
                  </Typography>
                )}
              </Box>
            </Stack>

            {p.focus && (
              <Typography sx={{ fontFamily: fonts.mono, fontSize: '0.875rem', color: colors.frozen, mt: 1.5 }}>
                {p.focus}
              </Typography>
            )}

            {p.bio && (
              <Typography sx={{ color: colors.grey1, fontSize: '0.95rem', mt: 2.5, maxWidth: 380 }}>
                {p.bio}
              </Typography>
            )}

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {p.cvUrl && (
                <Link href={asset(p.cvUrl)} target="_blank" rel="noreferrer" underline="hover"
                  sx={{ fontFamily: fonts.mono, fontSize: '0.875rem', color: colors.flame }}>
                  cv ↗
                </Link>
              )}
              {p.links?.map((l) => (
                <Link key={l.url} href={l.url} target="_blank" rel="noreferrer" underline="hover"
                  sx={{ fontFamily: fonts.mono, fontSize: '0.875rem', color: colors.flame }}>
                  {l.label.toLowerCase()} ↗
                </Link>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}
