"use client"
import Checkbox from "@/components/ui/Checkbox"

interface UserCheckboxProps extends User {
    onCheckedChange?: (checked: boolean | 'indeterminate', id: number) => void
}
const UserCheckbox = ({ id, name, onCheckedChange }: UserCheckboxProps) => {
    const onSelfCheckedChange = (checked: boolean | 'indeterminate') => {
        if (onCheckedChange) {
            return onCheckedChange(checked, id);
        }
    }

    return (
        <div className="flex items-center space-x-4">
            <Checkbox id={`checkbox-${id}`} onCheckedChange={onSelfCheckedChange} />
            <label htmlFor={`checkbox-${id}`} className="text-sm font-medium leading-none">
                {name}
            </label>
        </div>
    )
}

export default UserCheckbox