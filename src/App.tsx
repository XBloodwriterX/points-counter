import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import TableOfGradesCard from "./components/TableOfGradesCard";
import { Config } from "./types";
import GradeByPointsCard from "./components/GradeByPointsCard";
import TableOfPointsCard from "./components/TableOfPointsCard";

function App() {
    const [maxPoints, setMaxPoints] = useState<number>();
    const [points, setPoints] = useState<number>();

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = parseInt(e.target.value)
        if (inputValue >= 10) {
            e.target.setAttribute("invalid", "true");
        }
        else {
            e.target.name === 'max-points' ? setMaxPoints(inputValue) : setPoints(inputValue);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const maxPointsValue = parseInt(document.querySelector<HTMLInputElement>('input#maxCountOfPoints')!.value);
        const pointsValue = parseInt(document.querySelector<HTMLInputElement>('input#countOfPoints')!.value);
        setMaxPoints(!isNaN(maxPointsValue) && maxPointsValue >= 10 ? maxPointsValue : undefined)
        setPoints(!isNaN(pointsValue) && pointsValue >= 10 ? pointsValue : undefined)
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
                            <Label for="maxCountOfPoints" tag="h6">Max number of points</Label>
                            <Input
                                id="maxCountOfPoints"
                                name="max-points"
                                placeholder="Enter max number of points"
                                type="number"
                                onChange={handleChange}
                            />
                            <FormFeedback>
                                Max number of points must be at least 10
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="countOfPoints" tag="h6">Number of points</Label>
                            <Input
                                id="countOfPoints"
                                name="points"
                                placeholder="Enter number of points"
                                type="number"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <Button color="primary" type="submit">
                            Calculate
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
