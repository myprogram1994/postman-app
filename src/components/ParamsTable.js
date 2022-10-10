
import "./ParamsTable.css"

const ParamsTable = ({ }) => {
    
    return (
<>
<div className='table-conatiner'>
<div className='checkbox'>
<input style={{width: 22,
    height: 19}}type="checkbox" id="params" name="params" value="params"></input>
</div>
<div className='inputbox'>
<input className='input' placeholder="Key"></input>
</div>
<div className='inputbox-secand'>
<input className='input' placeholder='Value'></input>
</div>
<div className='inputbox-third'>
<input className='input' placeholder='Description'></input>
</div>
</div>
<div className='table-conatiner'>
<div className='checkbox'>
<input style={{width: 22,
    height: 19}}type="checkbox" id="params" name="params" value="params"></input>
</div>
<div className='inputbox'>
<input className='input' placeholder="Key"></input>
</div>
<div className='inputbox-secand' placeholder="value">
<input className='input' placeholder="Value"></input>
</div>
<div className='inputbox-third'>
<input className='input' placeholder="Description"></input>
</div>
</div>
</>
    )
}

export default ParamsTable;