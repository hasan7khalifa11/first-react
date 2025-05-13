import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

export default function DateAction({ dataDelete , dataUpdate}) {
    return (
        <div>
            <Row className="justify-content-center">
                <Col sm='8' className="d-flex justify-content-between py-2">
                    <Button onClick={dataDelete} className="btn-style">مسح الكل</Button>
                    <Button onClick={dataUpdate} className="btn-style">عرض الكل</Button>
                </Col>
            </Row>
        </div>
    )
}
