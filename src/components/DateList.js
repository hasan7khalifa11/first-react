import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function DateList({ person }) {
    return (
        <div>
            <Row className="justify-content-center">
                <Col sm='8'>
                    <div className="rectangle p-2">
                        {person.length ? (
                            person.map((ele , key) => {
                                return (
                                    <div key={key} className="d-flex border-bottom m-3">
                                        <img className="img-avatar" src="image.jpg" alt="image1" />
                                        <div className="px-3">
                                            <p className="d-inline fs-5">{ele.name}</p>                                                <p className="fs-6">{ele.date}</p>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            <h2 className="text-center py-4">لا يوجد مواعيد اليوم</h2>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    )
}
