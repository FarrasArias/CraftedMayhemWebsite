import { Box, Button, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Section, SectionLabel } from '../components/Section'
import { LogoSymbol } from '../components/Logo'
import { colors } from '../brand'

export default function NotFound() {
    return (
        <Section tone="onyx" sx={{ py: { xs: 10, md: 16 } }}>
            <SectionLabel index="404">page not found</SectionLabel>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 4, md: 8 }, flexWrap: 'wrap' }}>
                <Box
                    sx={{
                        color: colors.flame,
                        display: 'flex',
                        transform: 'rotate(12deg)',
                    }}
                >
                    <LogoSymbol size={120} />
                </Box>
                <Box sx={{ maxWidth: 560 }}>
                    <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
                        A little too much mayhem.
                    </Typography>
                    <Typography sx={{ color: colors.grey2 }}>
                        This page wandered off. It may have moved, or the link has a typo.
                    </Typography>
                    <Stack direction="row" sx={{ mt: 5, flexWrap: 'wrap', gap: 2 }}>
                        <Button size="large" component={RouterLink} to="/">
                            Back home
                        </Button>
                        <Button
                            size="large"
                            variant="text"
                            component={RouterLink}
                            to="/games"
                            sx={{ color: colors.snow, '&:hover': { color: colors.flame, bgcolor: 'transparent' } }}
                        >
                            See our games →
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Section>
    )
}
