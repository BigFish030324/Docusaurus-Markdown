// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Big Fish Site',
  tagline: 'Fish is cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://BigFish030324.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Docusaurus-Markdown/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BigFish030324', // Usually your GitHub org/user name.
  projectName: 'Docusaurus-Markdown', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "my-docusaurus-remote-content", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/BigFish030324/Docusaurus-Markdown/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs", // the base directory to output to.
        documents: ["README.md"], // the file names to download
      },
    ],

    // // Pan-zoom plugin configuration with options
    // [
    //   "@r74tech/docusaurus-plugin-panzoom",
    //   {
    //     // Plugin options (all are optional)
    //     selector: ".markdown img", // CSS selector for images to enable pan-zoom
    //     config: {
    //       // Panzoom configuration options
    //       maxScale: 4, // Maximum zoom scale
    //       minScale: 0.5, // Minimum zoom scale
    //       increment: 0.1, // Zoom increment per scroll
    //       duration: 200, // Animation duration in ms
    //       easing: "ease-in-out", // CSS easing function
    //       disablePan: false, // Disable panning
    //       disableZoom: false, // Disable zooming
    //       startScale: 1, // Initial scale
    //       startX: 0, // Initial X position
    //       startY: 0, // Initial Y position
    //       contain: "outside", // How to contain the element ("inside", "outside")
    //       cursor: "grab", // Cursor style when hovering
    //       disableXAxis: false, // Disable horizontal panning
    //       disableYAxis: false, // Disable vertical panning
    //       relative: false, // Use relative positioning
    //       excludeClass: "panzoom-exclude" // Class to exclude from pan-zoom
    //     },
    //     // Additional plugin-specific options
    //     buttonPosition: "topRight", // Position of zoom controls ("topLeft", "topRight", "bottomLeft", "bottomRight")
    //     showZoomButtons: true, // Show zoom in/out buttons
    //     showResetButton: true, // Show reset button
    //     buttonStyle: {
    //       // Custom button styling
    //       backgroundColor: "#007acc",
    //       color: "white",
    //       border: "none",
    //       borderRadius: "4px",
    //       padding: "8px 12px",
    //       margin: "2px",
    //       cursor: "pointer",
    //       fontSize: "14px"
    //     }
    //   }
    // ]
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BigFish030324/Docusaurus-Markdown/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BigFish030324/Docusaurus-Markdown/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;