import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './PhoneCard.css'



const PhoneCard = ({ id, name, manufacturer, color, price, imageFileName}) => {
    return (
        <Card className="phone-card" style={{ width: '15rem' }}>
            <Card.Img variant="top" src={'img/${imageFileName}'} />

            <Card.Body>
                <Card.Title><center>{name}</center></Card.Title>
                <Card.Text>
                    <center>{manufacturer}</center>
                    <center>{color}</center>
                    <center>{price}$</center>
                </Card.Text>

                <div className="button">

                    <Link to={`/phones/details>/${id}`}>
                        <Button variant="" style={{ background: 'rgb(131, 5, 5)' }} >Details</Button>
                    </Link>

                </div>

            </Card.Body>
        </Card>
    )
}

export default PhoneCard