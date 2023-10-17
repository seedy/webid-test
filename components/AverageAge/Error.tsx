
interface AverageAgeErrorProps {
    error: string
}
const AverageAgeError = ({error}: AverageAgeErrorProps) => (
    <span className="text-bold text-large text-red">{error}</span>
)

export default AverageAgeError