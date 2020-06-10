module.exports = {
    siteMetadata: {
        title: `John Vences | Front-end Developer`,
        description: `John Vences - Personal Portfolio of a Front End Developer, Web Designer and UX/UI professional`,
        author: `John Vences`,
        siteUrl: "https://johnvences.dev",
        social: {
            linkedin: "johnvences",
            email: "hello@johnvences.dev"
        },
        imageShare: `personal_logo.png`
    },
    plugins: [
        `gatsby-plugin-use-dark-mode`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`
            }
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Montserrat`,
                        variants: [`200`, `400`, `400i`, `600`, `600i`, `700`]
                    }
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                            rel: "noreferrer"
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `John Vences | Front-end Developer`,
                short_name: `John`,
                icon: `src/images/favicon.png`,
                start_url: `/`,
                background_color: `#202b36`,
                theme_color: `#0099e5`,
                display: `minimal-ui`
            }
        },
        `gatsby-plugin-offline`
    ]
}
