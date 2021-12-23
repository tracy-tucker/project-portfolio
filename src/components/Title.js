import React from "react"

const Title = ({ title }) => {
  return (
    <section className="section-title">
      <h2>{title || "default tile"}</h2>
      <div className="underline"></div>
    </section>
  )
}

export default Title
