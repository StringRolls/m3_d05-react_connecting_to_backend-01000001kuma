import axios from "axios"

class IronBnbApi {
    app = axios.create({
        baseURL: process.env.IRONBNB_API_URL || "https://ironbnb-m3.herokuapp.com"
    })
       
        getAllApartments = ()=>{
        this.app.get("/apartments")
        .then(response=>response.data)
        .catch(err=>{
            console.log(err)
            return {error: err}
        })
    }

    // getAllApartments = async ()=>{
    //     try{
    //   const response = await this.app.get("/apartments")
    //   return response.data} // I am assuming the response contains a data field
    //   catch(err){
    //     console.log(err)
    //     return {error: err}
    //   }
    // }

    getOneApartment(id){
        return this.app.get('/apartments/${id}')
        .then(response=>response.data)
        
        .catch(err=>{
            console.log(err)
            return {error: err}})
    }

    
    saveApartment = (body)=>{
        return this.app.post("/apartments", body)
        .then(response=>response.data) // I am assuming the response contains a data field
        .catch(err=>{
            console.log(err)
            return {error: err}})
    }
}