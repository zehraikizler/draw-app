import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div className="d-flex justify-content-center">
            <form className="w-50">
                <div className="my-5">
                    <input type="text" className="form-control border-danger" placeholder="Title..." />
                </div>
                <div className="my-5">
                    <input type="text" className="form-control my-2" placeholder="Add an option..." />
                    <input type="text" className="form-control my-2" placeholder="Add an option..." />
                    <input type="text" className="form-control my-2" placeholder="Add an option..." />
                    <input type="text" className="form-control my-2" placeholder="Add an option..." />
                    <input type="text" className="form-control my-2" placeholder="Add an option..." />
                </div>
                <Link to="/makedraw" type="submit" className="btn btn-primary">Make Draw</Link>
            </form>
        </div>
    )
}