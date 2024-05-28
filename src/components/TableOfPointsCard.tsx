import React, {FC, useState} from 'react';
import {Button, Card, CardBody, CardTitle, Collapse, Table} from "reactstrap";
import { PointsCardProps } from "../types";
import { getGradeByPoints, getPercentsByPoints } from "../utils";

const TableOfPointsCard: FC<PointsCardProps> = ({ maxPoints, points, config }) => {
    const [isOpen, setIsOpen] = useState(maxPoints >= 10)
    let percentsPerPoints: number[] = new Array<number>(maxPoints+1).fill(0);
    percentsPerPoints.forEach((value, i, array) => array[i] = getPercentsByPoints(maxPoints, i))

    return (
        <Card>
            <CardBody>
                <CardTitle tag="h4">
                    Table Of Points
                    <button className="collapse-button"><i className="fa-solid fa-angle-down" onClick={() => setIsOpen(!isOpen)}></i></button>
                    {/*<Button className="collapse-button" onClick={() => setIsOpen(!isOpen)}></Button>*/}
                </CardTitle>
                <Collapse isOpen={isOpen}>
                    <Table>
                        <thead>
                        <tr>
                            <th>Points</th>
                            <th>Percents</th>
                            <th>Grades</th>
                        </tr>
                        </thead>
                        <tbody>
                        {percentsPerPoints.map((percent, i) => (
                            <tr>
                                <td>{i}</td>
                                <td>{String(percent).split(".").map((value, i) => (i != 0 ? ("."+value.slice(0, 2)) : value))} %</td>
                                <td>{getGradeByPoints(maxPoints, i, config)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Collapse>
            </CardBody>
        </Card>
    );
};

export default TableOfPointsCard;