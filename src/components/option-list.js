
const OptionList = (props) => {


    return (
        <div>
            <label>Options : </label>
            <select onChange={e => props.optionChangeMethod(e.target.value)} >
                <option value={"select"} >-</option>
            {props.optionList.map((opt) => (
                <option value={opt}>{opt}</option>
                
            ))}
            </select>
        </div>
        )
};

export default OptionList