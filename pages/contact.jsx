import { Col, Row } from 'react-bootstrap'

import styles from '../styles/Contact.module.scss'

export default function Contact () {
  return (
    <Row id={styles.root} className='blackbg h-100 px-4'>
      <Col>
        <Row>
          <Col md={12} className='mt-3 flex-grow-1'>
            <h3 className='text-center'>Contact Form in Work in Progress, join our Discord to contact us</h3>
            <a className='d-flex justify-content-center' href='https://discord.gg/x23SFbE'><img alt='' style={{ height: 'auto', maxHeight: '100px', maxWidth: '100%', borderRadius: '10px' }} src='/img/assets/discord.png' /></a>
          </Col>
        </Row>
        <Row>
          <Col md={6} className='my-3 flex-grow-1'>
            <h3 className='ms-0'>Requests</h3>
            <h2>How to Request</h2>
            <ul>
              <li>Join our <a href='https://discord.gg/x23SFbE'>Discord</a></li>
              <li>Go to #request-submission</li>
              <li>Use the command "&gt;request" and then the url or name</li>
            </ul>
          </Col>
          <Col md={6} className='my-3 flex-grow-1'>
            <h3>Rules</h3>
            <ul>
              <li>You can only make one request per time, you will be able to request something else when I fulfill or if I can't find  the request in a few cases.</li>
              <li>Try to search your Request via vgmdb.net or similar pages.</li>
              <li>There is a limit of 20 open requests, when it reaches that #request-submission will close and open again when a new space is available.</li>
              <li>Donators don't have the request limit and don't have to wait for the requests to open.</li>
            </ul>
          </Col>
        </Row>

        <Row className='my-2'>
          <Col md={12} className='d-flex justify-content-center'>
            <h3 className='text-centerm my-auto'>Donation Info:</h3>
            <a target='_blank' rel='noopener noreferrer' href='https://www.paypal.com/donate?hosted_button_id=DRRACDJKG755Y'><img style={{ height: 'auto', maxHeight: '100px', maxWidth: '100%' }} alt='paypal' src='/img/assets/paypal-donate-button.png' /></a>
            <a target='_blank' rel='noopener noreferrer' href='https://ko-fi.com/sittingonclouds'><img style={{ height: 'auto', maxHeight: '100px', maxWidth: '100%' }} alt='ko-fi' src='/img/assets/ko-fi-donate-button.png' /></a>
          </Col>
        </Row>
        <Row className='my-4'>
          <Col md={6} className='mt-3  flex-grow-1'>
            <h3>Donation Benefits</h3>
            <ul>
              <li>Special Role on the Discord server</li>
              <li>Unlimited requests in #request-submission</li>
              <li>Direct links (no shorteners!) on sittingonclouds.net</li>
            </ul>
          </Col>
          <Col md={6}>
            <img alt='example' src='/img/assets/example.jpg' style={{ maxWidth: '100%' }} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
