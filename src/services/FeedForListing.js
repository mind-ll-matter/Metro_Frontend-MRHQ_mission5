import axios from 'axios'

class ListingService{
    getListing(id){
        return axios.get(`http://localhost:5000/listing/${id}`).then(res=> {
            return res.data.singleListingId
        })
        
    }
}

export default new ListingService()