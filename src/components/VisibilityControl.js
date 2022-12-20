

export const VisibilityControl = ({isChecked,setShowCompleted, cleanTask})=>{
    // función de borrar 
    const handleDelete= ()=>{
        if (window.confirm('Estas seguro de querer borrar todas las tareas echas?')){
            cleanTask()
        }}
    return(
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
        <div className="form-check form-switch">
            <input 
            className="form-check-input"
            type="checkbox"
            checked= {isChecked}
            onChange={e=>setShowCompleted(e.target.checked)}/> 
            <label>Show task Done</label>
        </div>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>Clear</button>
    </div>

    )
}