import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJob {
      nodes {
        data {
          attributes {
            position
            company
            date
            desc {
              id
              name
            }
          }
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)

  const {
    allStrapiJob: { nodes: layers },
  } = data

  const attrs = layers.map(attr => {
    return attr.data.map(singleAttr => {
      return singleAttr.attributes
    })
  })

  const [value, setValue] = React.useState(0)

  const jobs = attrs[0].map(singleLayer => {
    return singleLayer
  })

  const { company, position, date, desc } = jobs[value]

  // console.log("JOBS", jobs)

  // const { company, position, date, desc } = attr[0]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                className={index === value ? "job-btn active-btn" : "job-btn"}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                {item.name}
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
