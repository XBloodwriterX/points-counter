import React, { FC } from 'react';
import {Card, CardBody, CardTitle, Table} from "reactstrap";
import { PointsCardProps } from "../types";
import { getGradeByPoints, getPercentsByPoints } from "../utils";

const GradeByPointsCard: FC<PointsCardProps> = ({ maxPoints, points, config }) => {
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h4">
                    Grade By Points
                </CardTitle>
                <Table>
                    <thead>
                    <tr>
                        <th>Points</th>
                        <th>Percents</th>
                        <th>Grade</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{points}</td>
                        <td>{getPercentsByPoints(maxPoints, points!)}%</td>
                        <td>{getGradeByPoints(maxPoints, points!, config)}</td>
                    </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default GradeByPointsCard;