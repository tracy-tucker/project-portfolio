const React = require("react")
const Layout = require("./src/components/Layout").default

// Gatsby provided function wrapPageElement
// Programmatically wraps each page with the Layout component
// element represents every page in the project
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

// Gatsby Browser API. Allows app to respond to Gatsby-specific events in the browser
