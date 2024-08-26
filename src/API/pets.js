import server from "."

async function getAllPets(){
    const res = await server.get("pets/")
    return res.data
}
export {getAllPets}