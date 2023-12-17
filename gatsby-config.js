module.exports = {
  siteMetadata: {
    title: "Data Structures and Algorithms",
    subtitle: "Get good or go home",
    author: "Joseph Miocevich",
    authorSubtitle: "Mecahnical Rock",
    authorImage: "author.jpg", // this image should go in /static
    courseImage: "courseImage.png", // this also should go in /static
    twitter: "", // make empty string to omit socials
    linkedin: "https://www.linkedin.com/in/joseph-miocevich-864482125",
    github: "https://github.com/JMiocevich/",
    description:
      "Introduction Data Structures and Algorithms",
    keywords: [
      "this is",
      "a list of keywords and phrase",
      "that search engines",
      "will index your page for",
    ],
  },
  pathPrefix: "/introduction-to-datastructures-workshop-website",
  // pathPrefix: "/my-repo-name", // if you're using GitHub Pages, put the name of the repo here with a leading slash
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
  ],
};
