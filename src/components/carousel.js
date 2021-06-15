import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Carousel from "react-material-ui-carousel"
import { Paper, Button, Typography } from "@material-ui/core"

export default () => {
    const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          absolutePath: { regex: "/bg/" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100, maxHeight: 600) {
                aspectRatio
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ]

  return (
    <Carousel autoPlay={false} >
      {data.allFile.edges.map(({node}, i) => (
        <Item key={i} item={node.childImageSharp.fluid} />
      ))}
    </Carousel>
  )
}
// const style = {
//     height: '10%',
//     position: 'absolute',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     transform: 'translateY(-100%)',
//     width: '100%',
//     textAlign: 'center',
//     background: 'rgba(0, 0, 0, 0.66)',
//     color: 'white'
// }
function Item({item}) {
  return (
    //<Paper style={{maxHeight: '100px', border: '5px solid grey'}}>
      <Img fluid={item}/>
      //{/* <div style={style}><Typography size='larger'>some text about this pic?</Typography></div> */}
    //</Paper>
  )
}

