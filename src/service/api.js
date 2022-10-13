import axios from 'axios';

export const getData = async (data, datajson) => {
    
    const apiType = data.type.toLowerCase(); 
    const apiUrl = data.url;

    try {
        return await axios({
            method: apiType,
            url: apiUrl,
            body: datajson,
          
        })
    } catch (error) {
        console.log('Error while getting the response ', error);
        return 'error';
    }
}