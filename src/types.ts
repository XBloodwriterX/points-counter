export interface Config {
    grades: {
        grade: string | number,
        minPercentage: number,
        maxPercentage: number
    }[]
}

export interface PointsCardProps {
    maxPoints: number,
    points?: number,
    config: Config
}