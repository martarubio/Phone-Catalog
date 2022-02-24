import React, { Component } from "react";
import { Container, Col, Row } from 'react-bootstrap'
import PhoneService from "../../services/phone.service";
import './PhoneList.css'
import PhoneCard from "./PhoneCard";
import PhoneDetail from "./PhoneDetail";

function PhoneList(props) {

    return (
        <div>
            <Row>
                {props.phones.map(elm => {
                    return (
                        <Col key={elm.id}>
                            <PhoneCard  {...elm} />
                        </Col>
                    )
                })
                }
            </Row>
        </div>
    )
}


export default PhoneList