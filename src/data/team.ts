
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
    name: 'Ramis Lao',
    role: 'Founder / Developer / Designer',
        bio: 'I design and create playful experiences, from digital worlds to in-person workshops. I dive deep into every part of the process, always learning and pushing beyond my comfort zone.',
    avatar: 'images/ramis_headshot.jpg',
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/ramis-lao/' }]
  },
  {
    name: 'Rafael Arias',
    role: 'Founder / Developer / Designer',
      bio: 'I have 8+ years of development experience and 10+ years of teaching experience. I have worked and taught on Game Development, Data Science, Artificial Intelligence, Full-stack development, and Audio.',
    avatar: 'images/rafa_headshot.jpg',
      cvUrl: 'documents/RafaelArias_CV_081125.pdf',
      links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/rafaelariasgonzalez-848528105/' }]
    },
    {
        name: 'Sarah Grommelt',
        role: 'Founder / Developer',
        bio: 'I enjoy tackling new challenges in programming that demand ingenious solutions, constantly seeking opportunities to apply my technical and creative skills in innovative environments.',
        avatar: 'images/sarah_headshot.jpg',
        //cvUrl: 'documents/RafaelArias_CV_081125.pdf',
        links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/sarahgrommelt/' }]
    }
]
