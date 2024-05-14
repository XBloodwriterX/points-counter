import React, { FC } from 'react';
import { Card, CardBody, CardTitle, Table } from "reactstrap";
import { PointsCardProps } from "../types";
import { getRoundedPercentsByPoints } from "../utils";

const TableOfGradesCard: FC<PointsCardProps> = ({ maxPoints, points, config }) => {
    let percentsPerPoints: number[] = new Array<number>(maxPoints+1).fill(0);
    percentsPerPoints.forEach((value, i, array) => array[i] = getRoundedPercentsByPoints(maxPoints, i))

    return (
        <Card>
            <CardBody>
                <CardTitle tag="h4">
                    Table Of Grades
                </CardTitle>
                <Table>
                    <thead>
                    <tr>
                        <th>Grade</th>
                        <th>Percentage</th>
                        <th>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    {config.grades.map((grade, i, grades) => (
                        <tr key={i}>
                            <td>{grade.grade}</td>
                            <td>{grade.minPercentage}% - {grade.maxPercentage}%</td>
                            <td>{percentsPerPoints.indexOf(percentsPerPoints.filter(percent => percent >= grade.minPercentage && percent <= grade.maxPercentage)[0])} - {percentsPerPoints.lastIndexOf(percentsPerPoints.filter(percent => percent >= grade.minPercentage && percent <= grade.maxPercentage).pop()!)}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default TableOfGradesCard;