import { Link } from "react-router-dom";

export default function MakeDraw() {
    return(
        <div className="d-flex justify-content-center mt-5">
            <div class="list-group w-50 text-start">
                <h2 className="text-white bg-primary text-center list-group-item my-3">Title</h2>
                <label class="list-group-item border-top">
                    <input class="form-check-input me-2" type="checkbox" value="" />
                    First checkbox
                </label>
                <label class="list-group-item">
                    <input class="form-check-input me-2" type="checkbox" value="" />
                    Second checkbox
                </label>
                <label class="list-group-item">
                    <input class="form-check-input me-2" type="checkbox" value="" />
                    Third checkbox
                </label>
                <label class="list-group-item">
                    <input class="form-check-input me-2" type="checkbox" value="" />
                    Fourth checkbox
                </label>
                <label class="list-group-item">
                    <input class="form-check-input me-2" type="checkbox" value="" />
                    Fifth checkbox
                </label>
                <div className="my-4 d-flex justify-content-center">
                    <Link to="/vote" className="btn btn-danger">Vote</Link>
                </div>
            </div>
        </div>
    )
}