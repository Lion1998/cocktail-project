import './BookTable.css';



export default function BookTable(){
    
    return(
        
        <div className="bookTable">
            <form>
                <h1>Reservation</h1>
                <div  className="auth_form_table_order">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Data</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Time</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Area</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <button type ="submit" >Order</button>
                </div>
            </form>
            
        </div>
    )
}