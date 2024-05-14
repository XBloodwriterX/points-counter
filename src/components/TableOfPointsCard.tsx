import React, { FC } from 'react';
import {Card, CardBody, CardTitle, Table} from "reactstrap";
import { PointsCardProps } from "../types";
import { getGradeByPoints, getPercentsByPoints } from "../utils";

const TableOfPointsCard: FC<PointsCardProps> = ({ maxPoints, points, config }) => {
    let percentsPerPoints: number[] = new Array<number>(maxPoints+1).fill(0);
    percentsPerPoints.forEach((value, i, array) => array[i] = getPercentsByPoints(maxPoints, i))

    return (
        <Card>
            <CardBody>
                <CardTitle tag="h4">
                    Table Of Points
                </CardTitle>
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
            </CardBody>
        </Card>
    );
};

export default TableOfPointsCard;