import server from "."

async function getAllPets(){
    const res = await server.get("pets/")
    return res.data
}
async function getPetById(id){
    const res = await server.get(`pets/${id}`)
    return res.data
}
async function addPet(name, type, image, adopted = false){
    const res = await server.post("pets/", {
        name,
        type,
        image,
        adopted,
    })
    return res
}
async function deletePet(){
    const res = await server.delete(`pets/179`)
    return res
}
export {getAllPets, getPetById, addPet, deletePet}