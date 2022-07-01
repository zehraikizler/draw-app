import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { firebaseConfig } from "../firebase-config";

export default function Home() {

    const [title, setTitle] = useState();
    const [option1, setOption1] = useState();
    const [option2, setOption2] = useState();
    const [option3, setOption3] = useState();
    const [option4, setOption4] = useState();
    const [option5, setOption5] = useState();

    const makeDrawButton = async () => {
        try {

            const data = {
                title,
                option1,
                option2,
                option3,
                option4,
                option5
            };

            await axios.post(
                "https://draw-app-afc54-default-rtdb.europe-west1.firebasedatabase.app/data.json",
                data,
                firebaseConfig
            );

        } catch(e) {
            console.error("Error adding document: ", e);
        }
    }

    return(
        <div className="d-flex justify-content-center">
            <form className="w-50">
                <div className="my-5">
                    <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control border-danger" placeholder="Title..." />
                </div>
                <div className="my-5">
                    <input type="text" onChange={(e) => setOption1(e.target.value)} className="form-control my-2" placeholder="Add an option..." />
                    <input type="text" onChange={(e) => setOption2(e.target.value)} className="form-control my-2" placeholder="Add an option..." />
                    <input type="text" onChange={(e) => setOption3(e.target.value)} className="form-control my-2" placeholder="Add an option..." />
                    <input type="text" onChange={(e) => setOption4(e.target.value)} className="form-control my-2" placeholder="Add an option..." />
                    <input type="text" onChange={(e) => setOption5(e.target.value)} className="form-control my-2" placeholder="Add an option..." />
                </div>
                <Link to="/makedraw" onClick={makeDrawButton} type="submit" className="btn btn-primary">Make Draw</Link>
            </form>
        </div>
    )
}