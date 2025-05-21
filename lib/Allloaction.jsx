export default async function Allloc() {
    const res = await fetch('https://rickandmortyapi.com/api/location')
    const data = await res.json()
    return data.results

}