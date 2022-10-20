import axios from 'axios';

export const getData = async (data, datajson,headerData) => {
    
    const apiType = data.type.toLowerCase(); 
    const apiUrl = data.url;
    let obj = {};
    
    headerData.forEach(data => {
        
            obj =  data;
        
        }
    )

    try {
        return await axios({
            method: apiType,
            url: apiUrl,
            body: datajson  ,
            headers:obj           
        
        
        
          
        })
    } catch (error) {
        console.log('Error while getting the response ', error);
        return 'error';
    }
}