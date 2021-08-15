function ItemsDisplay({items, deleteItem}){
    return(
        <div>
            <div>
                <h2>Items</h2>
            </div>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>   
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Type</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => {
                    return ( 
                         <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.type}</td>
                            <td>{item.brand}</td>
                            <td><button className="btn btn-danger" onClick={() => {deleteItem(item)}}>Delete</button></td>
                     </tr>   
                    );
                    })}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}
export default ItemsDisplay;