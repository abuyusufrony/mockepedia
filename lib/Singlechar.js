export default async function SingleChar(id) {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    return data.json()


}