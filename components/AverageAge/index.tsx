"use client"
interface AverageAgeProps {
    value?: number
}

const YEAR = new Date().getFullYear();

const AverageAge = ({ value }: AverageAgeProps) => {
    if (!value) {
        return null
    }

    const age = new Intl.NumberFormat("fr-Fr", {
        style: "decimal", unit: "year", unitDisplay: "long", maximumFractionDigits: 0
    }).format(YEAR - value);

    return (
        <span className="text-bold text-large">{age} ans</span>
    )
}

export default AverageAge