import React from "react"
import Layout from "../components/Layout"
import { Typography, Container }from "@material-ui/core"
import Divider from "@material-ui/core/Divider"

export default function Vita() {
  return (
    <Layout>
      <img style={{marginTop: '100px', width:'100%'}} src={require('../../static/temporary_images/Vita-banner-1920x800.jpg')}/>
      {/* <div className="biography"> */}
          {/* one banner picture here from bg */}
        <br />
        <br />
        <Container>

        <Typography variant="h2" style={{textAlign:'center', lineHeight: '10rem'}}>Biography</Typography>
        <br />
        <Typography style={{textAlign: 'justify'}}>
          Garwin Gaari, geboren in 1986 te Curaçao, verhuisde op 4-jarige
          leeftijd naar Nederland. Zijn ouders wilden hem en zijn broers een
          betere toekomst bieden. Van jongs af aan was tekenen zijn steun en
          toeverlaat, in een onbekend land waar de mensen en cultuur anders
          waren dan bij hem thuis. Hij kwam in een omgeving terecht waar hij op
          jonge leeftijd onder veel druk kwam te staan. De druk om een nieuwe
          taal te leren, in een nieuwe schoolomgeving, met als doel een betere
          educatie te krijgen om zo een betere toekomst tegemoet te kunnen gaan.
          Tekenen werd niet gestimuleerd aangezien daar “weinig toekomst in zat”
          zoals men hem op het hart drukte. Zo kende Garwin fasen waarin hij
          meer en minder tekende gedurende zijn jeugd.
        </Typography>
        <br /><br /><br />
        <Typography style={{textAlign: 'justify'}}>
          Het begon met het tekenen van verhalen; over doolhoven met spoken en
          zombies, waarover zijn ouders wel eens in gesprek moesten met school.
          Vervolgens waagde hij zich aan zijn eerste cartoon waarin helden aan
          bod kwamen. Hij fantaseerde hierover en tekende van kinds af aan al
          graag welke held hij wilde worden. Op school werd hem echter verteld
          dat dit niet mogelijk was. En zo besloot hij een toekomst als tekenaar
          aan te gaan. Een toekomst waarin hij al dromend zijn helden kon
          tekenen, als hij ze zelf niet mocht zijn. In het eerste jaar van de
          middelbare school kwam hij meer in aanraking met sport en muziek. Hij
          raakte gefascineerd door sporthelden en muzikanten waar hij in het
          dagelijkse leven mee in contact kwam. Dit zorgde binnen het tekenen
          voor een switch naar realistisch tekenen. Na de middelbare school
          echter, ging hij de opleiding Bouwkunde en Architectuur doen. Hierbij
          zou het tekenen niet volledig van hem afgenomen worden en van thuis
          uit zou deze keuze ook goedgekeurd worden; een architect, dokter of
          accountant werden namelijk gezien als een “goed beroep”. Al snel kwam
          Garwin er achter dat dit niets voor hem was. Het antwoord lag
          eigenlijk al sinds jongs af aan dicht bij hem: tekenen, tekenen en
          tekenen. Daar had hij als kind altijd al zijn passie en liefde in
          gevonden!
        </Typography>
        <br /><br /><br />
        <Typography style={{textAlign: 'justify'}}>
          Op 21-jarige leeftijd ging hij naar de kunstacademie, de eerste van de
          3 die nog zouden volgen. Maar ook in zijn studiejaren op de
          kunstacademie werd hij niet altijd begrepen. Zo werd hem eens verteld
          dat hij eigenlijk 10 jaar eerder naar de kunstacademie had moeten
          komen , toen alles nog vrijer was. Toen hij zijn opleiding aan de
          kunstacademie had afgerond moest Garwin gaan beginnen op de
          arbeidsmarkt. Na een jaar gewerkt te hebben in verschillende sectoren,
          besloot hij ermee te stoppen. Hij zou deze keer zijn hart en passie
          volgen en zich hierin verder ontwikkelen. In zijn huis dat hij
          ombouwde tot werkplaats, startte hij met het tekenen van personages
          waar hij bewondering voor had. Als extra uitdaging besloot hij
          gezichten op een realistische manier te gaan tekenen, in felle
          kleuren. Kleur was iets dat hij al een aantal jaren vermeden had.
          Cartoon, abstract, pop-art en realisme spraken hem altijd al erg aan.
          Met het experimenteren en personaliseren van deze stijlen, eigende
          Garwin zich een eigen identiteit toe. Als ons kort bestaan een grote
          levenszoektocht naar zelfontplooiing is waar we ons geluk uit moeten
          halen, citeert Garwin, zet hij deze zoektocht graag voort in het
          tekenen. Ook al moet hij hiervoor tegen het advies van velen ingaan.
          Garwin zijn huidige collectie bestaat voornamelijk uit zijn helden,
          maar het is nog afwachten hoe zijn eigen ontwikkeling zal evolueren.
          Garwin voelt de inspiratie om in de toekomst zijn eigen held te kunnen
          zijn, een held met een eigen visie over ons bestaan. Spannend
          afwachten op welke manier hij dit zal uiten!
        </Typography>
        </Container>
      {/* </div> */}
    </Layout>
  )
}
