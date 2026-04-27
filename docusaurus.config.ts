import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MP/MLA Constituency Management System',
tagline: 'Digital Governance for a Better Tomorrow',
  favicon: 'img/favicon.png',
  

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        
          // Useful options to enforce blogging best practices
          
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  
  themeConfig: {
    
    image: 'img/main.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
      tableOfContents: {
    minHeadingLevel: 2,  // Typically starts at 2
    maxHeadingLevel: 3,
  },
    navbar: {
      title: 'MP/MLA CMS',
      logo: {
        alt: 'mla logo',
        src: 'img/logo.png',
        width: 50,  
        
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar',
          position: 'left',
          label: 'User Manual',
        },
      
      ],
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documents',
          items: [
            {
              label: 'User Manual',
              to: '/docs/projectoverview',
            },
        
          
          ],
        },
        {
          title: 'Contact Information',
          items: [
            {
              label: 'Website',
              href: 'https://vibrantick.in/',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/vibrantick-infotech-solutions/posts/?feedView=all',
            },
           
          ],
        },
       
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vibrantick Infotech Solutions`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
