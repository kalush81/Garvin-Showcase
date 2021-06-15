import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography, Button, Container } from "@material-ui/core"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      justifyContent: "center",
    },
    paperContainer: {
      width: "100%",
    },
  })
)

export default function ImagePage({ data }) {
  const classes = useStyles()
  return (
    <Layout>
      <Container>
        <Grid item xs={12} sm={6}>
          <Img fluid={data.imageSharp.fluid} />
        </Grid>
        <Grid sm={1}></Grid>
        <Grid
          item
          xs={12}
          sm={5}
          container
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <Typography variant="h3" style={{ textAlign: "center" }}>
            What is Lorem Ipsum?
          </Typography>
          <Typography variant="h6">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
          <br></br>
          <Typography variant="h6">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
          <Button variant="contained" size="large" color="secondary">
            Buy
          </Button>
        </Grid>
      </Container>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    imageSharp(fields: { slug: { eq: $slug } }) {
      fluid(maxWidth: 600, maxHeight: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
