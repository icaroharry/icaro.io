export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  link?: string;
  linkText?: string;
  image?: string;
  video?: string; // YouTube embed URL
};

export type Role = {
  title: string;
  date: string;
  description: string;
};

export type TimelineEntry = {
  date: string;
  sortDate: string;
  title: string;
  subtitle: string; // Company name
  description?: string; // Optional if using roles
  tags?: string[];
  projects?: Project[];
  roles?: Role[]; // Multiple roles at same company
  logo?: string; // Company logo
  website?: string; // Company website
};

export const timelineEntries: TimelineEntry[] = [
  // minka_
  {
    date: "Apr 2025 - Present",
    sortDate: "2025-04",
    title: "Frontend Tech Lead",
    subtitle: "minka_",
    logo: "/images/minka.webp",
    website: "https://minka.io",
    description:
      "Leading frontend development on Studio, a web interface for financial institutions to build payment infrastructure. Delivering features end-to-end, implementing observability with PostHog and Sentry, and strengthening the testing stack with React Testing Library and Playwright.",
    tags: ["React", "TypeScript", "Playwright", "Tailwind", "shadcn/ui"],
  },

  // Codante
  {
    date: "Mar 2023 - Apr 2025",
    sortDate: "2023-03",
    title: "Co-Founder",
    subtitle: "Codante",
    logo: "/images/codante-logo.webp",
    website: "https://codante.io",
    description:
      "Co-founded an open-source learning platform for Portuguese-speaking developers. Built the platform from scratch, scaled to R$5k MRR and 4000+ users. Created dozens of courses on React, Next.js, TypeScript, and Tailwind.",
    tags: ["Remix", "React", "Laravel", "MySQL", "Tailwind"],
    projects: [
      {
        title: "Codante.io",
        subtitle: "Remix • Laravel • MySQL • Tailwind",
        description:
          "Open-source learning platform empowering thousands of Portuguese-speaking developers to master frontend development through hands-on challenges and courses.",
        link: "https://codante.io",
        linkText: "Visit Codante",
        image: "/images/codante.webp",
      },
      {
        title: "Build a Habit Tracker with Next.js 13",
        subtitle: "YouTube Tutorial • 11k+ views",
        description:
          "Hands-on tutorial building a mobile-first Habit Tracker application using Next.js 13. Part of Codante's mini-project challenges.",
        link: "https://www.youtube.com/watch?v=KydJoet1uwQ",
        linkText: "Watch on YouTube",
        video: "https://www.youtube.com/embed/KydJoet1uwQ",
      },
    ],
  },

  // Toptal
  {
    date: "Jun 2022 - Feb 2023",
    sortDate: "2022-06",
    title: "Frontend Engineer / Coach",
    subtitle: "Toptal",
    logo: "/images/toptal.webp",
    website: "https://toptal.com",
    description:
      "Developed internal tools using React and Next.js. Created learning materials and mentored 10+ interns and junior developers through lectures, code reviews, and performance evaluations.",
    tags: ["React", "Next.js", "Mentoring"],
  },

  // Trybe - Merged
  {
    date: "Jul 2020 - Jun 2022",
    sortDate: "2020-07",
    title: "",
    subtitle: "Trybe",
    logo: "/images/trybe.webp",
    website: "https://betrybe.com",
    tags: ["React", "JavaScript", "CI/CD", "Leadership"],
    roles: [
      {
        title: "Engineering Manager",
        date: "Nov 2021 - Jun 2022",
        description:
          "Managed a team of 12 developers/teachers teaching frontend development to 400+ students. Responsible for career development, performance reviews, and hiring.",
      },
      {
        title: "Frontend Engineer / Instructor",
        date: "Jul 2020 - Nov 2021",
        description:
          "Taught frontend development to 600+ students. Improved learning materials and contributed to the automated evaluation system using CI/CD pipelines.",
      },
    ],
    projects: [
      {
        title: "How to Create a Bootable USB Drive",
        subtitle: "YouTube Tutorial • 130k+ views",
        description:
          "Step-by-step tutorial teaching how to create a bootable Linux USB drive. One of Trybe's most popular educational videos.",
        link: "https://www.youtube.com/watch?v=obnR0mnts9E",
        linkText: "Watch on YouTube",
        video: "https://www.youtube.com/embed/obnR0mnts9E",
      },
    ],
  },

  // Raro Labs
  {
    date: "Feb 2019 - Feb 2020",
    sortDate: "2019-02",
    title: "Full Stack Engineer",
    subtitle: "Raro Labs",
    logo: "/images/raro.webp",
    website: "https://rarolabs.com.br",
    description:
      "Delivered 5 projects for clients including Banco BMG, AeC, and Robbyson. Built web and mobile products using React, React Native, Node.js, Vue.js, and Firebase.",
    tags: ["React", "React Native", "Node.js", "Vue.js"],
  },

  // Utopian.io
  {
    date: "May 2018 - Feb 2019",
    sortDate: "2018-05",
    title: "Full Stack Engineer",
    subtitle: "Utopian.io",
    logo: "/images/utopian.webp",
    description:
      "Developed the Utopian v2 platform integrating with Steem blockchain and IPFS. Built the OAuth authentication service and decentralized file storage infrastructure. The platform generated over $1.5M benefiting thousands of open-source contributors worldwide.",
    tags: ["Vue.js", "Node.js", "MongoDB", "Blockchain", "IPFS"],
  },

  // Swapy Network
  {
    date: "Sep 2017 - May 2018",
    sortDate: "2017-09",
    title: "Frontend Engineer",
    subtitle: "Swapy Network",
    logo: "/images/swapy.webp",
    description:
      "Built frontend and desktop applications connected to the Ethereum blockchain. Led mobile app development with React Native and contributed to web3.js, the most important JS library in the blockchain space.",
    tags: ["React", "Angular", "Ethereum", "React Native", "Electron"],
    projects: [
      {
        title: "Electron MetaMask Boilerplate",
        subtitle: "Electron • MetaMask • Ethereum",
        description:
          "First open-source desktop integration for MetaMask, used by dozens of companies to distribute their dApps natively.",
        link: "https://github.com/AugustoResende/electron-metamask-boilerplate",
        linkText: "View on GitHub",
      },
      {
        title: "Integrating MetaMask with Electron",
        subtitle: "Medium Article • 236 likes",
        description:
          "A simple, secure, and non-intrusive approach to integrating MetaMask with Electron desktop applications.",
        link: "https://medium.com/swapynetwork/integrating-metamask-with-electron-a-simple-secure-and-non-intrusive-approach-517a04da1656",
        linkText: "Read on Medium",
        image: "/images/metamask-electron.webp",
      },
    ],
  },

  // Nebulab
  {
    date: "Aug 2015 - Sep 2017",
    sortDate: "2015-08",
    title: "Full Stack Engineer",
    subtitle: "Nebulab Technologies",
    logo: "/images/nebulab.webp",
    description:
      "Developed a tool to help health researchers with data management. Built an open-source library for Dropbox API integration. Worked with Angular, Node.js, MongoDB, and AWS.",
    tags: ["Angular", "Node.js", "MongoDB", "AWS"],
    projects: [
      {
        title: "Dropbox V2 JS Library",
        subtitle: "JavaScript • Dropbox API",
        description:
          "Open-source library to integrate with the Dropbox API v2, simplifying file operations for JavaScript applications.",
        link: "https://github.com/nebulab-io/dropbox-v2-js",
        linkText: "View on GitHub",
      },
    ],
  },

  // Teknisa
  {
    date: "Mar 2014 - Mar 2015",
    sortDate: "2014-03",
    title: "Full Stack Engineer",
    subtitle: "Teknisa Software",
    logo: "/images/teknisa.webp",
    website: "https://teknisa.com",
    description:
      "Led development of Developer Studio, an internal visual tool to build cross-platform applications using Angular JS, PHP, MySQL, and Node.js.",
    tags: ["Angular", "PHP", "MySQL", "Node.js"],
  },
];

// Profile info
export const profile = {
  name: "Ícaro Harry",
  title: "Senior Frontend Engineer",
  bio: "Over 12 years crafting web experiences. Co-founder of Codante.io. Passionate about open-source, teaching, and building products that empower developers.",
  location: "Belo Horizonte, Brazil",
  email: "me@icaro.io",
  socials: {
    github: "https://github.com/icaroharry",
    linkedin: "https://linkedin.com/in/ícaro",
    twitter: "",
  },
};
