export default async function SingleLoc(id) {
    const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
    return res.json()
}