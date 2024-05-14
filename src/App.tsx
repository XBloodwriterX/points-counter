import React, { useState } from 'react';
import {Button, Card, CardBody, CardTitle, Form, FormGroup, Input, Label} from "reactstrap";
import TableOfGradesCard from "./components/TableOfGradesCard";
import { Config } from "./types";
import GradeByPointsCard from "./components/GradeByPointsCard";
import TableOfPointsCard from "./components/TableOfPointsCard";

function App() {
    const [maxPoints, setMaxPoints] = useState<number>();
    const [points, setPoints] = useState<number>();
    const [cards, setCards] = useState<Element>();

    const zajaczekConfig: Config = {
        grades: [
            {
                grade: 1,
                minPercentage: 0,
                maxPercentage: 49
            },
            {
                grade: 2,
                minPercentage: 50,
                maxPercentage: 59
            },
            {
                grade: 3,
                minPercentage: 60,
                maxPercentage: 79
            },
            {
                grade: 4,
                minPercentage: 80,
                maxPercentage: 89
            },
            {
                grade: 5,
                minPercentage: 90,
                maxPercentage: 99
            },
            {
                grade: 6,
                minPercentage: 100,
                maxPercentage: 100
            },
        ]
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const maxPointsValue = parseInt(document.querySelector<HTMLInputElement>('input#maxCountOfPoints')!.value);
        const pointsValue = parseInt(document.querySelector<HTMLInputElement>('input#countOfPoints')!.value);
        console.log(pointsValue)
        setMaxPoints(isNaN(maxPointsValue) ? undefined : maxPointsValue)
        setPoints(isNaN(pointsValue) ? undefined : pointsValue)
    }

    return (
        <div className="page">
            <Card>
                <CardBody>
                    <CardTitle tag="h4">
                        Points Form
                    </CardTitle>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="maxCountOfPoints">Max count of points</Label>
                            <Input
                                id="maxCountOfPoints"
                                name="max-points"
                                placeholder="Enter max count of points"
                                type="number"
                                // onChange={e => setMaxPoints(parseInt(e.target.value))}
                                // className="container-sm"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Count of points</Label>
                            <Input
                                id="countOfPoints"
                                name="points"
                                placeholder="Enter count of points"
                                type="number"
                                // onChange={e => setPoints(parseInt(e.target.value))}
                                // className="container-sm"
                            />
                        </FormGroup>
                        <Button color="primary" type="submit">
                            Inspect
                        </Button>
                    </Form>
                </CardBody>
            </Card>
            {maxPoints !== undefined ? (
                <>
                    {points !== undefined ? <GradeByPointsCard maxPoints={maxPoints!} points={points!} config={zajaczekConfig}/> : <></>}
                    <TableOfGradesCard maxPoints={maxPoints!} points={points!} config={zajaczekConfig}/>
                    <TableOfPointsCard maxPoints={maxPoints!} points={points!} config={zajaczekConfig}/>
                </>
            ) : <></>}
        </div>
    );
}

export default App;
