export type Person = {
  name: string
  pronouns?: string
  /** Short mono tag shown next to the name, e.g. "co-founder" */
  tag?: string
  /** Areas of focus, shown as a mono line under the photo */
  focus?: string
  role: string
  bio?: string
  avatar?: string
  cvUrl?: string
  links?: { label: string, url: string }[]
}

// Names, pronouns and focus areas follow the 2026 brand guide ("Our team").
export const team: Person[] = [
  {
    name: 'Rafael Arias González',
    pronouns: 'he/him',
    tag: 'co-founder',
    focus: 'game dev',
    role: 'Co-founder / Developer',
    bio: 'I have 8+ years of development experience and 10+ years of teaching experience. I have worked and taught on Game Development, Data Science, Artificial Intelligence, Full-stack development, and Audio.',
    avatar: 'images/rafa_headshot.jpg',
    //cvUrl: 'documents/RafaelArias_CV_081125.pdf',
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/rafaelariasgonzalez-848528105/' }]
  },
  {
    name: 'Sarah Grommelt González',
    pronouns: 'she/her',
    tag: 'co-founder',
    focus: 'live ops, full-stack dev',
    role: 'Co-founder / Developer',
    bio: 'I enjoy tackling new challenges in programming that demand ingenious solutions, constantly seeking opportunities to apply my technical and creative skills in innovative environments.',
    avatar: 'images/sarah_headshot.jpg',
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/sarahgrommelt/' }]
  },
  {
    name: 'Ramis Lao',
    pronouns: 'they/them',
    tag: 'co-founder',
    focus: 'design, production',
    role: 'Co-founder / Developer / Designer',
    bio: 'I design and create playful experiences, from digital worlds to in-person workshops. I dive deep into every part of the process, always learning and pushing beyond my comfort zone.',
    avatar: 'images/ramis_headshot.jpg',
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/ramis-lao/' }]
  },
]
