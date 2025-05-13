import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function DateCount( { person }) {
    return (
        <div>
            <Row className="justify-content-center ">
                <Col className="my-2" sm='8'>لديك {person.length} مواعيد اليوم</Col>
            </Row>
        </div>
    )
}
