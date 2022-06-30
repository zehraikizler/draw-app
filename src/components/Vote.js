export default function Vote() {
    return (
        <div className="d-flex justify-content-center">
            <div className="w-50 mt-5">
                <h2 className="text-white bg-primary text-center list-group-item my-3">Title</h2>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        A list item
                        <span className="badge bg-primary rounded-pill">0</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        A second list item
                        <span className="badge bg-primary rounded-pill">0</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        A third list item
                        <span className="badge bg-primary rounded-pill">0</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        A second list item
                        <span className="badge bg-primary rounded-pill">0</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        A third list item
                        <span className="badge bg-primary rounded-pill">0</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}