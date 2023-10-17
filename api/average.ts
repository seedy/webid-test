
export const getAverage = async (ids: number[]) => {
    if (ids.length === 0) {
        throw new Error("Pas d'utilisateur sélectionné");
    }
    const res = await fetch(`https://infallible-tereshkova-717266.netlify.app/.netlify/functions/server/average?ids=[${ids.join(',')}]`, { method: 'GET' });
    const result = await (res.json() as Promise<Average>);
    if (!res.ok) {
        throw new Error(result.error);
    }

    return result!.average;
}