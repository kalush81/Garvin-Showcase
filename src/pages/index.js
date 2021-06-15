import React from "react"
import Layout from "../components/Layout"
import { Container, Hidden } from "@material-ui/core"
import MyCarousel from "../components/carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
const divStyle = {
  width: '90vw',
  height: '90vw',
  backgroundColor: "yellow",
}
export default function Home({ data }) {
  return (
    <Layout>
      <MyCarousel />
      <Container>
        <div
          style={{
            //fontSize: "24px",
            fontWeight: 400,
            fontStyle: "italic",
            textAlign: "center",
          }}
          className='my-quote'
        >
          <quote style={{ display: "block", marginTop: "0px" }}>
            "I believe that through the eyes of my paintings
          </quote>
          <quote style={{ display: "block" }}>
            I will see the reflection of my own growth"
          </quote>
        </div>
        <Hidden mdUp>
          <Container>
            <div className='parrent'style={divStyle}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Container>
        </Hidden>
      </Container>
    </Layout>
  )
}
