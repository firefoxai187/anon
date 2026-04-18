export type ProjectLink = {
  label: string;
  url: string;
};

export type Achievement = {
  title: string;
  description: string[];
  metric?: string;
};

export type FeaturedProject = {
  title: string;
  url?: string;
  description: string;
  metrics?: string[];
  images?: string[];
};

export type ExternalLink = {
  label: string;
  url: string;
};

export type Experience = {
  slug: string;
  company: string;
  headline: string;
  date: string;
  tags: string[];
  images?: string[];
  
  overview: string[];
  roleDescription: string[];
  achievements: Achievement[];
  featuredProjects: FeaturedProject[];
  systemMetrics?: string[];
  externalLinks?: ExternalLink[];
};

export const experienceData: Experience[] = [
  {
    slug: "lisk",
    company: "LISK",
    headline: "SEA Ambassador / Ecosystem Growth",
    date: "APR 2025 - MAY 2026",
    tags: ["Ecosystem Growth", "BD", "Event Execution"],
    images: [
      "/images/Lisk/Main headers/1.png",
      "/images/Lisk/Main headers/2.png",
      "/images/Lisk/Main headers/3.png"
    ],
    
    overview: [
      "Lisk is an Ethereum Layer 2 blockchain built on the OP Stack and an original member of the Optimism Superchain alongside Base, Mode, and Worldchain. Operating in the blockchain sector since 2016, Lisk has a long history of working with founders, incubators, and ecosystem partners across Southeast Asia, Africa, and Latin America.",
      "Lisk provides builders with startup programs, seed liquidity, tooling, and knowledge resources from inception to scale. In 2025, Lisk launched the $15M EMpower Fund—offering up to $250K per startup - to back practical, real-world Web3 founders in emerging markets.",
      "Lisk Ventures is the venture investment arm of Lisk. Unlike traditional venture capital funds that often prioritize speculative projects, Lisk Ventures focuses on usability and the practical, real-world application of Web3 technologies."
    ],
    roleDescription: [
      "Orchestrate Lisk's presence across Vietnam and Southeast Asia as an Ecosystem Growth.",
      "Drive community management across Lisk Vietnam and Lisk SEA channels and partner networks.",
      "Lead strategic partnership development - sourcing, negotiating, and closing deals with media and ecosystem partners.",
      "Produce and execute builder events, incubation programs, hackathons, and bootcamps.",
      "Manage early-stage founder pipeline into the Lisk EMpower Fund and Lisk Ventures."
    ],
    
    systemMetrics: [
      "30+ Grassroots & Developer Meetups Hosted",
      "4 High-Impact Builder Programs Executed",
      "15 Media & Strategic Deals Closed"
    ],

    achievements: [
      {
        title: "Content & Channel Management",
        description: [
          "Managed social channels and partner networks across Lisk Vietnam and Lisk SEA, covering ecosystem projects and strategic media partners.",
          "Kept community ecosystems active and growing across multiple platforms and partner channels."
        ]
      },
      {
        title: "Ecosystem Growth & Partnerships",
        description: [
          "Sourced and negotiated new media and strategic partnerships.",
          "Closed project deals through structured pipeline and due diligence.",
          "Funneled early-stage founders into the Lisk EMpower Fund / Lisk Ventures.",
          "Maintained warm relationships across VCs, builders, community partners, and co-marketing collaborators."
        ]
      }
    ],
    
    featuredProjects: [
      {
        title: "Local Meetups",
        description: "Hosted community meetups with local partners across Vietnam to drive grassroots builder acquisition.",
        metrics: ["30+ local meetups"],
        images: [
          "/images/Lisk/Local meetups/1.jpeg",
          "/images/Lisk/Local meetups/2.jpeg",
          "/images/Lisk/Local meetups/3.jpeg",
          "/images/Lisk/Local meetups/4.jpeg",
          "/images/Lisk/Local meetups/5.jpeg"
        ]
      },
      {
        title: "Lisk × SUCI Incubation Program",
        url: "https://www.suci.io/lisk-incubation-hub",
        description: "Ran an incubation program designed to bridge early-stage builders to the Lisk ecosystem and prepare them for mainnet deployment.",
        metrics: ["4 builder meetups", "12 graduate projects"],
        images: [
          "/images/Lisk/Lisk x SUCI Incubation Program/1.jpg",
          "/images/Lisk/Lisk x SUCI Incubation Program/2.jpeg",
          "/images/Lisk/Lisk x SUCI Incubation Program/3.jpeg",
          "/images/Lisk/Lisk x SUCI Incubation Program/4.jpeg"
        ]
      },
      {
        title: "Lisk Vietnam BUIDL-athon",
        url: "https://buidl.sqrdao.com/#lisk-section",
        description: "Executed Lisk's premier regional hackathon to drive rapid on-chain deployment and developer acquisition.",
        metrics: ["50+ registered projects"],
        images: [
          "/images/Lisk/Lisk Vietnam BUIDL-athon/1.png",
          "/images/Lisk/Lisk Vietnam BUIDL-athon/2.jpeg",
          "/images/Lisk/Lisk Vietnam BUIDL-athon/3.jpeg"
        ]
      },
      {
        title: "Lisk Vietnam Bootcamp",
        url: "https://vbiacademy.edu.vn/vi/courses/lisk-protocol-layer-zero-camp-88230",
        description: "Executed Lisk Builder Challenge and EMpower Founders Residency campaigns targeting student engineers.",
        metrics: ["200+ student builders"],
        images: [
          "/images/Lisk/Lisk Vietnam Bootcamp/Bootcamp 1.png",
          "/images/Lisk/Lisk Vietnam Bootcamp/Bootcamp 2.jpeg",
          "/images/Lisk/Lisk Vietnam Bootcamp/Bootcamp 3.jpeg",
          "/images/Lisk/Lisk Vietnam Bootcamp/Bootcamp 4.jpeg"
        ]
      }
    ],

    externalLinks: [
      { label: "Lisk Website", url: "https://lisk.com/" },
      { label: "Lisk X", url: "https://x.com/LiskHQ" },
      { label: "Lisk SEA X", url: "https://x.com/LiskSEA" },
      { label: "Lisk Vietnam X", url: "https://x.com/LiskVietnam" }
    ]
  },
  {
    slug: "aura-network",
    company: "AURA NETWORK",
    headline: "Growth Specialist",
    date: "AUG 2023 - JAN 2025",
    tags: ["Content Strategy", "Growth Ops", "Crypto Marketing"],
    images: [
      "/images/Aura Network/Main cover/1.jpeg",
      "/images/Aura Network/Main cover/2.jpeg",
      "/images/Aura Network/Main cover/3.jpeg",
      "/images/Aura Network/Main cover/4.jpeg"
    ],
    
    overview: [
      "Aura Network is a Layer 1 blockchain founded in 2021, originally built on Cosmos SDK with CosmWasm smart contracts for NFT use cases in emerging markets. The blockchain has since evolved - adding full EVM compatibility via evmOS, pivoting its positioning to become a dedicated RWA chain for Enterprise, Entertainment, and Government, and securing backing from FPT Corporation alongside government and enterprise partnerships globally."
    ],
    roleDescription: [
      "Led end-to-end content strategy across Aura Network's social and community channels.",
      "Executed major growth campaigns targeting wallet onboarding, follower acquisition, and brand impressions.",
      "Managed validator and affiliate partner relationships to maintain network health and co-marketing alignment.",
      "Drove community engagement and moderation tailored to ecosystem interests and project milestones."
    ],
    
    systemMetrics: [
      "2M+ Growth Campaign Impressions",
      "60,000+ Active Wallets Onboarded",
      "55,000+ Core Community Following Built",
      "End-to-End Content Engine Scaled"
    ],

    achievements: [
      {
        title: "Content Leadership",
        description: [
          "Ran end-to-end content strategy — from ideation and production to community moderation — tailored to ecosystem audiences and community interests.",
          "Maintained consistent content output aligned with project milestones, campaigns, and community pulse."
        ]
      },
      {
        title: "Ecosystem Growth — Validator & Affiliate Partners",
        description: [
          "Managed validator and affiliate partner relationships across the Aura Network ecosystem.",
          "Coordinated co-marketing activities with partners to drive mutual community growth and visibility.",
          "Kept the validator and affiliate network healthy, engaged, and aligned with project objectives."
        ]
      }
    ],
    
    featuredProjects: [
      {
        title: "The Year of Dragon's Li Xi",
        url: "https://x.com/AuraNetworkHQ/status/1755998723153523045",
        description: "Executed a flagship growth campaign targeting massive retail adoption and liquidity entry.",
        images: [
          "/images/Aura Network/Li Xi/Li xi 1.jpeg",
          "/images/Aura Network/Li Xi/Li xi 2.jpeg",
          "/images/Aura Network/Li Xi/Li xi 3.jpeg"
        ]
      },
      {
        title: "Monsterra Integration",
        url: "https://x.com/Monsterra_P2E",
        description: "Orchestrated the Monsterra game integration to debut the first interchain gaming NFTs in the Aura Network ecosystem. Executed a comprehensive go-to-market strategy featuring AMAs, KOL pipeline management, and targeted trading competitions to jumpstart player acquisition.",
        images: [
          "/images/Aura Network/Monsterra/1.jpeg",
          "/images/Aura Network/Monsterra/2.jpeg",
          "/images/Aura Network/Monsterra/3.jpeg",
          "/images/Aura Network/Monsterra/4.jpeg",
          "/images/Aura Network/Monsterra/5.jpeg",
          "/images/Aura Network/Monsterra/6.jpeg"
        ]
      }
    ],

    externalLinks: [
      { label: "Aura Network Website", url: "https://aura.network/" },
      { label: "Aura Network X", url: "https://x.com/AuraNetworkHQ" }
    ]
  },
  {
    slug: "punkgame",
    company: "PUNKGAME",
    headline: "Growth Associate",
    date: "MAY 2024 - FEB 2025",
    tags: ["Strategic Partnerships", "BD Pipeline"],
    images: [
      "/images/Punkgame/1.png",
      "/images/Punkgame/2.jpeg"
    ],
    
    overview: [
      "PunkGame is the world's first on-chain Manga UGC multiverse and programmable IP. As a winner of the Soneium Spark Incubation program, PunkGame is driving the mass adoption of Programmable IP via Story Protocol."
    ],
    roleDescription: [
      "Identified and pursued strategic partnership opportunities to expand the project's community footprint.",
      "Managed BD pipeline from outreach through negotiation and deal closure.",
      "Grew project visibility and credibility within the broader Web3 gaming ecosystem."
    ],
    
    systemMetrics: [
      "Strategic Partnership Network Scaled",
      "Multi-tiered BD Pipeline Executed",
      "Cross-Ecosystem Adoptive Integration"
    ],
    
    achievements: [
      {
        title: "Business Development & Partnerships",
        description: [
          "Identified and closed strategic partnerships to grow the project's community footprint and overall project visibility.",
          "Executed BD outreach, pipeline management, and partnership negotiations to secure deals aligned with the game's growth strategy.",
          "Contributed to expanding the project's reach and credibility within the Web3 gaming ecosystem."
        ]
      }
    ],
    
    featuredProjects: [],
    
    externalLinks: [
      { label: "Punkgame Website", url: "https://punkga.me/" },
      { label: "Punkgame X", url: "https://x.com/PunkgaMeManga" }
    ]
  }
];

export const socialLinks = [
  { label: "TWITTER/X", url: "https://x.com/0xJustinnn" },
  { label: "SUBSTACK", url: "https://0xjustin.substack.com/" }
];
