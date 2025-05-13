import { Container } from "react-bootstrap";
import { person } from "./data";
import DateCount from "./components/DateCount";
import DateList from "./components/DateList";
import DateAction from "./components/DateAction";
import { useState } from "react";


export default function App () {

    const [personDate, setPersonDate] = useState(person)

    function dataDelete() {
        setPersonDate([])
    }
    function dataUpdate() {
        setPersonDate(person)
    }

    return (
        <div>
            <Container className="py-5">
                <DateCount person={personDate} />
                <DateList person={personDate} />
                <DateAction dataDelete={dataDelete} dataUpdate={dataUpdate}/>
            </Container>
        </div>
    )
}