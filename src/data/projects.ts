
export type Project = {
    client?: string
    title: string
    year: string
    duration?: string
    role?: string
    summary: string
    tags: string[]
    status?: 'current' | 'shipped'
    image?: string
    gallery?: string[]
    details?: string
    links?: { label: string; url: string }[]   
}

export const projects: Project[] = [
    {
        client: 'Crafted Mayhem',
        title: 'Cats Against the Machine',
        year: 'Demo in 2026',
        role: 'Game director',
        summary: '3D vertical tower‑defense game with top‑down tilted camera; 8‑person team.',
        tags: ['Unity', 'Game', '3D'],
        status: 'current',
        image: 'images/cats.png',
    },
    {
        client: 'iVizLab',
        title: 'AI Ops Platform',
        year: 'Current',
        role: 'Full‑Stack & AI',
        summary: 'End‑to‑end platform for management and control of AI models; front‑end and back‑end contributions for a robust user experience and efficient AI operations.',
        tags: ['AI', 'Platform'],
        status: 'current',
        image: 'images/ai4all.png',
        //gallery: ['images/placeholder-3.svg'],
        //details: 'Extended info for the project. Replace with your own copy.'
    },
    {
        client: 'Barely Alive Studio',
        title: 'Party Demon',
        year: '2023–2025',
        duration: '18 months',
        role: 'Game design & Unity dev',
        summary: 'Tower defense with deck‑building mechanics (PC). Uses a card deck to deploy traps and real‑time strategies against waves of enemies; co‑developed with Barely Alive Studio.',
        tags: ['Unity', 'Game', 'PC', 'Deck‑building'],
        status: 'current',
        image: 'images/party_demon.jpg',
        links: [
            { label: 'Steam', url: 'https://store.steampowered.com/app/1659530/Party_Demon/' },
        ],
    },
      {
        client: 'Hyperbeard',
        title: 'HyperCheats',
        year: '2023–2024',
        duration: '8 months',
        role: 'UI/UX design & Full‑Stack',
        summary: 'Internal platform for managing users, devices, games and QA tools; reward codes, game variable state save/restore, and automations to optimize QA workflows.',
        tags: ['Web', 'Admin', 'QA', 'Automation', 'Rewards'],
        status: 'shipped',
        image: 'images/hyperbeard.gif',
        links: [
            { label: 'Video', url: 'https://www.youtube.com/watch?v=jg1zoCG5wBg' },
        ],
      },
  
  {
    client: 'Kambio',
    title: 'ArchVis Configurator',
    year: '2022–2023',
    duration: '5 months',
    role: 'UI/UX design & Full‑Stack',
    summary: 'Real‑time architectural visualization web app; explore, customize and tour future homes in‑browser. Easily adaptable to new models, materials and furniture.',
    tags: ['Web', '3D', 'Configurator'],
    status: 'shipped',
    image: 'images/kambio2.gif',
    links: [
        { label: 'Video', url: 'https://www.youtube.com/watch?v=T402YGcUt_Y' },
    ],
  },
  {
    client: 'Marakana Sports',
    title: 'Combine (now Adojo)',
    year: '2018–2019',
    duration: '12 months',
    role: 'Full‑Stack & ML model training',
    summary: 'Mobile training app for amateur footballers; ML posture detection via phone camera, performance comparison to pros, leaderboard, and metrics like vertical jump and reaction time.',
    tags: ['Mobile', 'ML', 'Computer Vision'],
    status: 'shipped',
      image: 'images/marakana2.gif',
      links: [
          { label: 'Video', url: 'https://www.youtube.com/watch?v=o_8BXjnw_ow' },
      ],  
    
  },
  {
    client: 'Catalyst',
    title: 'Hannover Messe 4.0',
    year: '2018',
    duration: '5 months',
    role: 'Full‑Stack & hardware integration',
    summary: '5‑meter interactive touchscreen table for the Mexican delegation at Hannover Messe; custom hardware + computer vision + Unity app.',
    tags: ['Unity', 'Hardware', 'CV', 'Expo'],
    status: 'shipped',
      image: 'images/hannover.png',
    gallery: ['images/placeholder-1.svg','images/placeholder-2.svg'],
    details: 'Extended info about HyperCheats: architecture, stack, and outcomes. Replace this with your own copy.'
    },
    {

        client: 'AirTM',
        title: 'Fintech Application',
        year: '2018–2019',
        duration: '8 months',
        role: 'Full‑Stack',
        summary: 'Multiple software projects including a secure, efficient financial application; designed robust REST APIs and led full‑stack feature development with cross‑functional teams.',
        tags: ['Fintech', 'REST APIs', 'Web'],
        status: 'shipped',
        image: 'images/airtm.png',
        links: [
            { label: 'Website', url: 'https://app.airtm.com/sign-up' },
        ],
    },
  
  
]
