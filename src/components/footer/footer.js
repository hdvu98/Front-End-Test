import React, { Component } from 'react';
import { FOOTER_LOGO } from '../../commons/images';
import {Container, Row, Col} from 'react-bootstrap';
import './styles.scss';
class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <Container>
                <Row>
                    <Col md={6} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div className="branch">
                        <div className="logo-wrapper">
                        <img src={FOOTER_LOGO} className="img-fluid" alt="cinnamon ai" />
                        </div>
                    </div>
                    </Col>
                    <Col md={5} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <div className="slogan">Extend human potential with AI</div>
                    <div className="quotes">
                        At Cinnamon we are working to make a world
                        where human creativity can flourish
                        by using our AI technology to replace all the reptitive, mind-numbing
                        tasks that take place today.
                    </div></Col>
                </Row>
                </Container>
            </footer>
        )
    }
}
export default Footer;