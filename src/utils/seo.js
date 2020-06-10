import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ meta, lang, title }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                        social {
                            linkedin
                        }
                        imageShare
                    }
                }
            }
        `
    )

    const metaDescription = site.siteMetadata.description
    const metaImage = `${site.siteMetadata.siteUrl}/${site.siteMetadata.imageShare}`

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title || site.siteMetadata.title}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: "og:url",
                    content: site.siteMetadata.siteUrl
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: `linkedin:card`,
                    content: `summary`
                },
                {
                    name: `linkedin:creator`,
                    content: `@${site.siteMetadata.social.linkedin}`
                },
                {
                    name: `linkedin:title`,
                    content: title
                },
                {
                    name: `linkedin:description`,
                    content: metaDescription
                }
            ]
                .concat([
                    {
                        property: "og:image",
                        content: metaImage
                    },
                    {
                        name: "linkedin:image",
                        content: metaImage
                    }
                ])
                .concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
}

export default SEO
