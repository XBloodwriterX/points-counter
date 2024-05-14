import { Config } from "./types";

export function getPercentsByPoints (maxPoints: number, points: number): number {
    return 100 / maxPoints * points;
}

export function getRoundedPercentsByPoints (maxPoints: number, points: number): number {
    return Math.round(100 / maxPoints * points);
}

export function getGradeByPoints (maxPoints: number, points: number, config: Config): number | string {
    return config.grades[config.grades.findIndex(grade => getRoundedPercentsByPoints(maxPoints, points) >= grade.minPercentage && getRoundedPercentsByPoints(maxPoints, points) <= grade.maxPercentage)].grade;
}