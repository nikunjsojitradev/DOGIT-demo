import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';

import dog1 from '../../images/carousel/dog1.jpg';
import dog2 from '../../images/carousel/dog2.jpg';
import dog3 from '../../images/carousel/dog3.jpg';

export default () => (

        <Container>
            <div className="imageContainer">
            <h1 className={'primaryColor'}>
                Identity for your Dog!
            </h1>
            </div>
            <Row>
                <Col className="imageContainer">
                    <img alt={'dog2'} src={dog2} />
                </Col>
                <Col>
                    <div className="paperHome">
                        <h3 className="primaryColor">1. Registration with Pedigree:</h3>
                        <h4>
                            Owners can submit one or more registration applications at a time with
                            the same owner information applying to all dogs being registered and pays
                            for all of the registrations in one transaction.
                        </h4>
                    </div>
                </Col>
                </Row>
            <Row>
                <Col>
                    <div className="paperHome">
                        <h3 className="primaryColor">A.2. Permanent Registration</h3>
                        <h4>
                            Owners or DOGIT Representatives can request a Permanent Registration
                            issued for a puppy. The sire and dam are retrieved from the DOGIT system
                            by DOGIT Number unless the puppy was previously registered via a litter.
                        </h4>
                    </div>
                </Col>
                <Col className="imageContainer">
                    <img alt={'dog1'} src={dog1} />
                </Col>
            </Row>
            <Row>
                <Col className="imageContainer">
                    <img alt={'dog2'} src={dog3} />
                </Col>
                <Col>
                    <div className="paperHome">
                        <h3 className="primaryColor">3. Litter Registration:</h3>
                        <h4>
                            Litter Registration is a more involved process requiring the input and signatures
                            from multiple invested parties.  After the litter is birthed, the parties will want
                            to register the litter with DOGIT and optionally request Permanent Registration for
                            one or more of the puppies in the litter.
                        </h4>
                    </div>
                </Col>
            </Row>
        </Container>
)
