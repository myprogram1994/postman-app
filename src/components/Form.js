import { useContext } from 'react';


import { DataContext } from '../DataFile/DataProvider';
import "./Form.css"

const Form = ({ onSendClick }) => {
    

    const { data, setData } = useContext(DataContext);

    const onUrlChange = (e) => {
        setData({ ...data, url: e.target.value });
    }

    const handleChange = (e) => {
        
        setData({ ...data, type: e.target.value });
    }

    return (
        <>

        <div className='urlrequest-tab'>

        </div>
        <div className='form'>
            <div className=''>            <select 
                className='select'
                value={data.type} 
                label="GET" 
                onChange={(e) => handleChange(e)}
            >
                
                <option value={'GET'}>GET</option>
                <option value={'POST'}>POST</option>
                <option value={'PUT'}>PUT</option>
                <option value={'DELETE'}>DELETE</option>
            </select>
            </div>
            <div style={{flex:1,backgroundColor:'#f2f2f2',display:'flex'}}>
            <input
                
            className='input-box'
                onChange={(e) => onUrlChange(e)}
            />
            </div>
            <button style={{backgroundColor:"#1976d2",color:"#fff",width:100,border:'none' ,height:40,marginLeft:5}}  onClick={() => onSendClick()}>Send</button>
        </div>
        </>
    )
}

export default Form;