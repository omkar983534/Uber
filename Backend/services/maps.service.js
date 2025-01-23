const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.status === 'OK') {
            const location = data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }

}

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error(' origin and destination are required');
    }
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent}`

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {

            if (response.data.row[0].elements[0].status === 'ZERO_RESULTS') {
                throw new Error('No route found between the given locations');
            }

            return response.data.row[0].elements[0];

        } else {
            throw new Error('Unable to fetch distance and time');
        }

    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getAutoCompleteSuggestions= async (req, res, next) =>{
    if(!input){
        throw new Error('query is required');
    }

    const apiKey=process.env.GOOGLE_MAPS_API;
    const url=`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent}`;


    try{
        const response=await axios.get(url);
        if(response.data.status==='OK'){
            return response.data.predictions;
        }else{
            throw new Error('Unable to fetch autocomplete suggestions');
        }
    }catch(error){
        console.error(error);
        throw error;
    }
}

