"use client"
import { getAverage } from "@/api/average";
import AverageAgeError from "components/AverageAge/Error";
import AverageAge from "components/AverageAge";
import AverageAgeLoading from "components/AverageAge/Loading";
import UserCheckbox from "components/ui/UserCheckbox";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import BirthdayCake from "public/birthday-cake-cake-svgrepo-com.svg";
import { useState } from "react";


const JECKO_THOMPSON_USER_ID = 100;

interface UsersAndAverageProps {
    users: User[]
}
const UsersAndAverage = ({ users }: UsersAndAverageProps) => {
    const [checkedUserIds, setCheckedUserIds] = useState([] as number[]);


    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['average', checkedUserIds],
        queryFn: () => getAverage(checkedUserIds),
        enabled: checkedUserIds.length > 0,
        retry: checkedUserIds.includes(JECKO_THOMPSON_USER_ID) ? false : 3
    })

    const onUserCheckedChange = (checked: boolean | 'indeterminate', id: number) => {
        if (checked === "indeterminate") {
            return;
        }
        setCheckedUserIds((prevIds) => checked ? [...prevIds, id] : prevIds.filter((prevId) => prevId !== id));
    }

    return (
        <div className="flex">
            <div className='w-half h-80 flex flex-col items-start overflow-auto gap-y-4'>
                {users.map((user) => <UserCheckbox key={user.id} onCheckedChange={onUserCheckedChange} {...user} />)}
            </div>
            <div className="w-half flex flex-col items-center gap-y-8">
                <Image className="h-40" src={BirthdayCake} alt="" aria-hidden />
                <h2>Âge moyen des personnes sélectionnées</h2>
                {isError ? (
                    <AverageAgeError error={error.message} />
                ) : (
                    <>
                        {isLoading ? <AverageAgeLoading /> : <AverageAge value={data} />}
                    </>
                )}
            </div>
        </div>
    )
}

export default UsersAndAverage