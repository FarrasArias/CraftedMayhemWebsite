
export type Person = {
  name: string
  role: string
  bio?: string
  avatar?: string
  cvUrl?: string
  links?: { label: string, url: string }[]
}

export const team: Person[] = [
  {
    name: 'Your Name',
    role: 'Founder / Full‑Stack',
    bio: 'Short bio about background and focus. Replace with your own text.',
    avatar: '/images/placeholder-1.svg',
    cvUrl: 'https://example.com/your-cv.pdf',
    links: [{ label: 'GitHub', url: 'https://github.com/yourhandle' }]
  },
  {
    name: 'Teammate Name',
    role: 'Game Developer',
    bio: 'Unity, gameplay systems and tools.',
    avatar: '/images/placeholder-2.svg',
    links: [{ label: 'LinkedIn', url: 'https://linkedin.com/in/your-handle' }]
  }
]
