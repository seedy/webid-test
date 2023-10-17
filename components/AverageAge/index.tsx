interface AverageAgeProps {
    value?: number
}

const YEAR = new Date().getFullYear();

const AverageAge = ({ value }: AverageAgeProps) => {
    if (!value) {
        return null
    }

    const age = YEAR - value;

    return (
        <span className="text-bold text-large">{age} ans</span>
    )
}

export default AverageAge