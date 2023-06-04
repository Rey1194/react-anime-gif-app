import React from 'react';
import {  Card, CardImg, CardBody, CardTitle, 
          Button, Col, Input
        } from 'reactstrap';

export const GifItem = ({id, url, title}) => {
  // copy to clipboard
  const copyText = url;

  return (
    <>
      <Col sm="4">
        <Card>
          <CardImg alt = { title } src = { url } top width="100%" />
          <CardBody>
            <CardTitle tag="h5">
              {title}
            </CardTitle>
            <Input  placeholder={url} disabled='true' >{url}</Input>
            {/* <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. 
              This content is a little bit longer.
            </CardText> */}
            <Button onClick={ 
              () => {
                navigator.clipboard.writeText(copyText);
              }
            }>
              Copy Link
            </Button>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}
