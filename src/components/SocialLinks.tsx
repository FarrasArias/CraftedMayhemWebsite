import { Box, Link } from '@mui/material'
import { Tag } from './Section'
import { colors, fonts, social } from '../brand'

/** Tagged social handles, as on the last slide of the brand guide. */
export default function SocialLinks({ color = colors.onyx }: { color?: string }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, auto)', md: 'repeat(4, auto)' },
        justifyContent: 'start',
        columnGap: { sm: 6, md: 8 },
        rowGap: 3,
        color,
      }}
    >
      {social.map(s => (
        <Box key={s.label}>
          <Tag sx={{ mb: 1 }}>{s.label}</Tag>
          <Link
            href={s.url}
            target="_blank"
            rel="noreferrer"
            underline="hover"
            color="inherit"
            sx={{ display: 'block', fontFamily: fonts.mono, fontSize: '0.875rem' }}
          >
            {s.handle}
          </Link>
        </Box>
      ))}
    </Box>
  )
}
