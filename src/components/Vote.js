import { useState, useEffect } from "react";
import axios from "axios";
import { firebaseConfig } from "../firebase-config";


export default function Vote() {

    const [vote, setVote] = useState([]);
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
            setVote(arr)
        }
        fetchData();
    }, []);
    
    console.log(vote)
    return (
        <div className="d-flex justify-content-center mt-5">
            {vote.map(item=> (<div className="w-50 p-4 shadow m-3">
                <h2 className="text-white bg-primary text-center list-group-item my-3"> {item.title} </h2>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        {item.option1.text}
                        <span className="badge bg-primary rounded-pill">{item.option1.count}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        {item.option2.text}
                        <span className="badge bg-primary rounded-pill">{item.option2.count}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        {item.option3.text}
                        <span className="badge bg-primary rounded-pill">{item.option3.count}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        {item.option4.text}
                        <span className="badge bg-primary rounded-pill">{item.option4.count}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        {item.option5.text}
                        <span className="badge bg-primary rounded-pill">{item.option5.count}</span>
                    </li>
                </ul>
            </div>))}
            
        </div>
    )
}