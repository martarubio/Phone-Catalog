import React, { Component } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import PhoneService from "../../services/phone.service";
import './PhoneDetail.css'
import { Link } from 'react-router-dom'
import PhoneList from './PhoneList';

class PhoneDetail extends Component {
    constructor() {
        super()

        this.state = {
            id: "",
            name: "",
            manufacturer: "",
            description: "",
            color: "",
            price: "",
            imageFileName: "",
            screen: "",
            procesor: "",
            ram: ""
        } 

        this.service = new PhoneService()
    }

    componentDidMount() {
        const id = this.props.match.params.id

        this.service.getOnePhone(id)
            .then(response => {
                const {id, name, manufacturer, description, color, price, imageFileName, screen, procesor, ram} = response.data

                this.setState({id, name, manufacturer, description, color, price, imageFileName, screen, procesor, ram})
            })
            .catch(err => console.log(err))
    }

    render() {
        const {id, name, manufacturer, description, color, price, imageFileName, screen, procesor, ram} = this.state

        return (
            <Container>
                <center><h1>Details</h1></center>
                <Row className="justify-content-around">
                    <Col md={6} style={{ overflow: "hidden" }}>
                        <article>
                            <h2>{name}</h2>
                            <div>
                                <p>Manufacturer: {manufacturer}</p>
                                <p>Description: {description}</p>
                                <p>Color: {color}</p>
                                <p>Price: {price}</p>
                                <p>Screen: {screen}</p>
                                <p>procesor: {procesor}</p>
                                <p>Ram: {ram}</p>
                            </div>

                        </article>
                    </Col>
                    <Col md={4}>
                        <img className="details_image" src={imageFileName} alt={name} ></img>
                    </Col>
                </Row >
            </Container >
        )
    }
}

export default PhoneDetail