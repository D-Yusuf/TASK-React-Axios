import server from "."

async function getAllPets(){
    console.log({...server})
    const res = await server.get("/")
    console.log("aaa")
    
    return res.data
}
async function getPetById(id){
    const res = await server.get(`/${id}`)
    
    return res.data
}
async function addPet(name, type, image, adopted = false){
    const res = await server.post("/", {
        name,
        type,
        adopted,
        image,
    })
    return res
}
async function deletePet(id){
    const res = await server.delete(`/${id}`)
    return res
}
export {getAllPets, getPetById, addPet, deletePet}