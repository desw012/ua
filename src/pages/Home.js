import {Accordion, Button, ListGroup, ListGroupItem} from "react-bootstrap";

function Home(){

    const clickHandler = () => {
        window.ga("ec:addProduct", {
            "id": "9bdd2",
            "name": "Compton T-Shirt",
            "price": "44.00",
            "brand": "Compton",
            "category": "T-Shirts",
            "position": "1"
        });
        window.ga("ec:setAction", "click", {
            "list": "homepage"
        });
        window.ga("send", "event", "homepage", "click", "");
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>UA EVENT TEST</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <ListGroupItem onClick={console.log} as={Button}>Event TEST</ListGroupItem>
                                    <ListGroupItem onClick={clickHandler} as={Button}>Event TEST</ListGroupItem>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>GA4/GTM E-COMMERCE TEST</Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Home;