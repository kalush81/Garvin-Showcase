import React from "react"

import { graphql } from "gatsby"
import { Link } from "@reach/router"
import Layout from "../components/Layout"
import Img from "gatsby-image"

import Grid from "@material-ui/core/Grid"
import { Box } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      justifyContent: "center",
      marginTop: "20px",
    },
    paperContainer: {
      width: "30%",
    },
    paper: {
      margin: "auto",
    },
  })
)

export default function Mywork({ data }) {
  const classes = useStyles()
  console.log("data mywork", data)
  return (
    <Layout>
      <Grid container spacing={4} className={classes.root}>
      {/*
one main picture from bg, big like a banner picture will be above all the paintings
      */}
        {data.allFile.edges.map(({ node }) => {
          return (
            <Grid
              key={node.childImageSharp.fields.slug}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.paperContainer}
            >
              <Link to={`/mywork${node.childImageSharp.fields.slug}`}>
                <Box className={classes.paper}>
                  <Img fluid={node.childImageSharp.fluid} alt={node.childImageSharp.fields.slug}/>
                </Box>
              </Link>
              <Typography variant="h6" style={{ textAlign: "center" }}>
                {node.childImageSharp.fields.slug}
              </Typography>
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { absolutePath: { regex: "/images/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            fields {
              slug
            }
          }
        }
      }
    }
  }
`
