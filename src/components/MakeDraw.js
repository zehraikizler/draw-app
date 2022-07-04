import { useState, useEffect } from "react";
import axios from "axios";
import { firebaseConfig } from "../firebase-config";
import { useLocation } from "react-router-dom";
import { async } from "@firebase/util";

export default function MakeDraw() {

    const [draw, setDraw] = useState([]);
    const [selected, setSelected] = useState();
    const [deletedVote, setDeletedVote] = useState();
    let history = useLocation()

    const setSelectedFunc = (item, id, selectedOption)=>{
         setSelected({...item, id, selectedOption})
    }

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

    const sendVote = async () => {
        let opt = selected[selected.selectedOption]
        opt.count++
        let id = selected.id
        delete selected.selectedOption
        delete selected.id
        setSelected({...selected, opt})
        await axios.put(`https://draw-app-afc54-default-rtdb.europe-west1.firebasedatabase.app/data/${id}.json`, selected, firebaseConfig).then(()=>{
        history.push({path:"/vote"})
        })
        
    }

    const deleteVote = async (item, id) => {
        setDeletedVote({...item, id});
        await axios.delete(`https://draw-app-afc54-default-rtdb.europe-west1.firebasedatabase.app/data/${id}.json`, deleteVote, firebaseConfig)
    }

    return(
        <div className="d-flex justify-content-center mt-5">
            {draw.map( item => 
                <div key={item.id} className="list-group w-50 text-start p-4 shadow m-3">
                    <div className="d-flex ms-auto">
                        <button type="button" className="btn btn-danger me-3" onClick={()=>deleteVote(item, item.id)}>X</button>
                    </div>
                    <h2 className="text-white bg-primary text-center list-group-item my-3"> {item.title} </h2>
                    <label className="list-group-item border-top">
                        <input className="form-check-input me-2" type="checkbox" value="" onClick={()=>setSelectedFunc(item, item.id, "option1")} />
                        {item.option1.text}
                    </label>
                    <label className="list-group-item" option2={item.option2}>
                        <input className="form-check-input me-2" type="checkbox" value="" onClick={()=>setSelectedFunc(item, item.id, "option2")} />
                        {item.option2.text}
                    </label>
                    <label className="list-group-item" option3={item.option3}>
                        <input className="form-check-input me-2" type="checkbox" value="" onClick={()=>setSelectedFunc(item, item.id, "option3")} />
                        {item.option3.text}
                    </label>
                    <label className="list-group-item" option4={item.option4}>
                        <input className="form-check-input me-2" type="checkbox" value="" onClick={()=>setSelectedFunc(item, item.id, "option4")} />
                        {item.option4.text}
                    </label>
                    <label className="list-group-item" option5={item.option5}>
                        <input className="form-check-input me-2" type="checkbox" value="" onClick={()=>setSelectedFunc(item, item.id, "option5")} />
                        {item.option5.text}
                    </label>
                    <div className="my-4 d-flex justify-content-center">
                        <button type="button" className="btn btn-success me-3" onClick={()=>sendVote()}>Vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}