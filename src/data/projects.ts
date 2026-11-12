
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
    /** Shown in the "wishlist now" band on Home */
    featured?: boolean
    /** Wide key art with the logo, used by the featured game band on Home */
    keyArt?: string
    gallery?: string[]
    details?: string
    links?: { title: string, label: string; url: string }[]   
}

export const isGame = (p: Project) => p.tags.some((t) => t.toLowerCase() === 'game')

export const projects: Project[] = [
    {
        client: 'Crafted Mayhem',
        title: 'Shutterbug Skies: Idle Camping',
        year: 'Coming 2027',
        summary: 'A cozy corner idler built to be your daily desktop companion. Help Kes search for and photograph 175+ bugs across 7 floating islands while you work, study, or relax, and upgrade your camera gear to complete the collection.',
        tags: ['Game', '2D', 'Cozy', 'Idler'],
        status: 'current',
        featured: true,
        // Gameplay loop and key art, hotlinked from Steam's CDN
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/5523830/extras/0896b0d206ee492312a2ea0a7926e657.mp4',
        keyArt: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/5523830/f524c15a988d51034509913e674a9b3a8f983382/capsule_616x353.jpg',
        links: [
            { title: 'Shutterbug Skies: Idle Camping', label: 'Wishlist', url: 'https://store.steampowered.com/app/5523830/Shutterbug_Skies_Idle_Camping/' },
        ],
    },
    {
        client: 'Yanga Casting',
        title: 'Yanga',
        year: '2025–2026',
        summary: 'A web app built from scratch for a casting agency: one fast, streamlined platform to manage talent, agencies, castings and bookings.',
        tags: ['Casting', 'Web App', 'UI/UX'],
        status: 'current',
        // Screens from the app's public pages; swap for a screen recording (.mp4) once it launches
        image: 'images/yanga.jpg',
        // Not live yet. Add a link here once it launches:
        // links: [{ title: 'Yanga', label: 'Website', url: 'https://yangacasting.mx/' }],
    },
    {
        client: 'iVizLab',
        title: 'AI Ops Platform',
        year: 'Current',
        //role: 'Full‑Stack & AI',
        summary: 'End‑to‑end platform for management and control of AI models; front‑end and back‑end contributions for a robust user experience and efficient AI operations.',
        tags: ['AI', 'Full Stack'],
        status: 'current',
        image: 'images/ai4all.gif',
        //gallery: ['images/placeholder-3.svg'],
        //details: 'Extended info for the project. Replace with your own copy.'
    },
    {
        client: 'Crafted Mayhem',
        title: 'Party Demon',
        year: '2023–2025',
        duration: '18 months',
        //role: 'Game design & Unity dev',
        summary: 'Tower defense with deck‑building mechanics for PC. Uses a card deck to deploy traps and real‑time strategies against waves of enemies; co‑developed with Barely Alive Studio.',
        tags: ['Game', 'Unity', '2D'],
        status: 'current',
        image: 'images/party_demon.gif',
        links: [
            { title: "Party Demon", label: 'Steam', url: 'https://store.steampowered.com/app/1659530/Party_Demon/' },
        ],
    },
    {
        client: 'Hyperbeard',
        title: 'HyperCheats',
        year: '2023–2024',
        duration: '8 months',
        //role: 'UI/UX design & Full‑Stack',
        summary: 'Internal platform for managing users, devices, games, and QA tools; creating reward codes; saving/restoring game variable state; and optimizing QA workflows with automations.',
        tags: ['Unity', 'Web App', 'UI/UX'],
        status: 'shipped',
        image: 'images/hyperbeard.gif',
        links: [
            { title: "HyperCheats", label: 'Video', url: 'https://www.youtube.com/watch?v=jg1zoCG5wBg' },
        ],
      },
  
  {
    client: 'Kambio',
    title: 'ArchVis Configurator',
    year: '2022–2023',
    duration: '5 months',
    //role: 'UI/UX design & Full‑Stack',
    summary: 'Real‑time architectural visualization web app; explore, customize and tour future homes in‑browser. Easily adaptable to new models, materials and furniture.',
    tags: ['Web App', '3D', 'Unreal Engine'],
    status: 'shipped',
    image: 'images/kambio.gif',
    links: [
        { title: "ArchVis Configurator", label: 'Video', url: 'https://www.youtube.com/watch?v=T402YGcUt_Y' },
    ],
  },
  {
    client: 'Marakana Sports',
    title: 'Combine (now Adojo)',
    year: '2018–2019',
    duration: '12 months',
    //role: 'Full‑Stack & ML model training',
    summary: 'Mobile training app for amateur footballers; ML posture detection via phone camera, performance comparison to pros, leaderboard, and metrics like vertical jump and reaction time.',
    tags: ['Mobile', 'ML', 'Computer Vision'],
    status: 'shipped',
      image: 'images/marakana.gif',
      links: [
          { title: "Combine", label: 'Video', url: 'https://www.youtube.com/watch?v=o_8BXjnw_ow' },
      ],  
    
  },
  {
    client: 'Catalyst',
    title: 'Hannover Messe 4.0',
    year: '2018',
    duration: '5 months',
    //role: 'Full‑Stack & hardware integration',
    summary: '5-meter-diameter interactive touchscreen table for the Mexican delegation at Hannover Messe; custom hardware, computer vision, and a Unity app.',
    tags: ['Unity', 'Hardware', 'Computer Vision'],
    status: 'shipped',
      image: 'images/catalyst.gif',
    //gallery: ['images/placeholder-1.svg','images/placeholder-2.svg'],
    //details: 'Extended info about HyperCheats: architecture, stack, and outcomes. Replace this with your own copy.'
    },
    {

        client: 'AirTM',
        title: 'Fintech Application',
        year: '2018–2019',
        duration: '8 months',
        role: 'Full‑Stack',
        summary: 'Multiple software projects including a secure, efficient financial application; designed robust REST APIs and led full‑stack feature development with cross‑functional teams.',
        tags: ['REST APIs', 'Web App', 'Full Stack'],
        status: 'shipped',
        image: 'images/airtm.png',
        links: [
            { title: "Combine", label: 'Website', url: 'https://app.airtm.com/sign-up' },
        ],
    },
  
  
]
