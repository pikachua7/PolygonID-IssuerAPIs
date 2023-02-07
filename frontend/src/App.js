import logo from './logo.svg';
import './App.css';
import jwt_decode from 'jwt-decode'
import { useState, useEffect } from 'react';
import { Heading, Spinner, Card, Text } from '@chakra-ui/react'
import { pascalStrToSpacedWord } from './helper'
import Form from './Form';

function App() {
  const [token, setToken] = useState(null);
  const [schema, setSchema] = useState(null)
  const [schemaLink, setClaimLink] = useState(null)

  const POLYGON_ID_EMAIL = "app.paliwal@gmail.com";
  const POLYGON_ID_PASSWORD = "A7@atharva";
  const POLYGON_ID_SCHEMA_ID = "506b8826-6321-4afb-afc1-0408f555947d";


  useEffect(() => {
    fetch("https://api-staging.polygonid.com/v1/orgs/sign-in", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'application/json',
      },
      body: JSON.stringify({
        email: POLYGON_ID_EMAIL,
        password: POLYGON_ID_PASSWORD,
      }),
    }).then((res) => res.json()).then(({ token }) => {
      setToken(token)
      const {
        account: { organization: issuerId },
      } = jwt_decode(token)


      //GET SCHEMA
      const tempSchemaLink = `https://api-staging.polygonid.com/v1/issuers/${issuerId}/schemas/${POLYGON_ID_SCHEMA_ID}`
      setClaimLink(`${tempSchemaLink}/offers`)
      return { token, tempSchemaLink }
    }).then(({ token, tempSchemaLink }) => {
      fetch(tempSchemaLink, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Encoding': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setSchema(data))
    })
  }, [])

  //console.log(schema)

  const handleResults = (results) => {
    fetch(schemaLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        attributes: Object.keys(results).map((k) => {

          const removeDashes = results[k].indexOf('-') !== 0
          const val = removeDashes ? results[k].replaceAll('-', '') : results[k]
          return {
            attributeKey: k,
            attributeValue: parseInt(val),
          }
        }),
      }),
    })
      .then((response) => response.json())
      .then(({ id }) => {
        window.open(
          `https://platform-test.polygonid.com/claim-link/${id}`,
          '_newtab'
        )
      })
  }



  return !!schema ? (
    <>
      <Card w="xl" p={10} background="rgba(255,257,255,.90)">
        <Heading mb={5}>Claim {pascalStrToSpacedWord(schema.schema)}</Heading>
        <Form fieldInfo={schema?.attributes} passBackResults={handleResults} />
      </Card>

    </>
  ) : (
    <Spinner size="xl" />
  )
}

export default App;
