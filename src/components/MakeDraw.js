import { useState, useEffect } from "react";
import axios from "axios";
import { firebaseConfig } from "../firebase-config";
import { Link } from "react-router-dom";

export default function MakeDraw() {

    const [draw, setDraw] = useState([]);

    useEffect(() =>  {
        
        let datas = [];
        const fetchData = async () => {
            await axios.get("https://draw-app-afc54-default-rtdb.europe-west1.firebasedatabase.app/data.json", firebaseConfig)
            .then( res => datas = res.data);

            
            let arr =[]
            for (const key in datas) {
                const element = datas[key];
                arr.push({...element, id:key})
            }
            setDraw(arr)

        }

        fetchData();
    }, []);

    return(
        <div className="d-flex justify-content-center mt-5">
            {draw.map( item => 
                <div key={item.id} className="list-group w-50 text-start">
                    <h2 className="text-white bg-primary text-center list-group-item my-3"> {item.title} </h2>
                    <label className="list-group-item border-top">
                        <input className="form-check-input me-2" type="checkbox" value="" />
                        {item.option1}
                    </label>
                    <label className="list-group-item">
                        <input className="form-check-input me-2" type="checkbox" value="" />
                        {item.option2}
                    </label>
                    <label className="list-group-item">
                        <input className="form-check-input me-2" type="checkbox" value="" />
                        {item.option3}
                    </label>
                    <label className="list-group-item">
                        <input className="form-check-input me-2" type="checkbox" value="" />
                        {item.option4}
                    </label>
                    <label className="list-group-item">
                        <input className="form-check-input me-2" type="checkbox" value="" />
                        {item.option5}
                    </label>
                    <div className="my-4 d-flex justify-content-center">
                        <Link to="/vote" className="btn btn-success me-3">Vote</Link>
                        <Link to="/" className="btn btn-danger">Delete</Link>
                    </div>
                </div>
            )}
        </div>
    )
}