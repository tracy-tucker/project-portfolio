import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const IndexPage = ({ data }) => {
  console.log(data)
  const {
    allStrapiProject: { nodes: layers },
  } = data

  const attrs = layers.map(attr => {
    return attr.data.map(singleAttr => {
      return singleAttr.attributes
    })
  })

  const projects = attrs[0].map(singleLayer => {
    return singleLayer
  })

  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="featured projects" showLink projects={projects} />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject(
      filter: {
        data: { elemMatch: { attributes: { featured: { eq: true } } } }
      }
    ) {
      nodes {
        data {
          attributes {
            description
            featured
            github
            slug
            title
            url
            stack {
              id
              title
            }
          }
          id
        }
      }
    }
    imageSharp {
      gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
`

export default IndexPage
