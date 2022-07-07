import { useState, useEffect } from "react";
import axios from "axios";
import { firebaseConfig } from "../firebase-config";
import ProgressBar from "./ProgressBar";


export default function Vote() {

    const [vote, setVote] = useState([]);
    const [totalVote, setTotalVote] = useState([]);

    useEffect(() =>  {
        let datas = [];
        // let votes = []
        const fetchData = async () => {
            await axios.get("https://draw-app-afc54-default-rtdb.europe-west1.firebasedatabase.app/data.json", firebaseConfig)
            .then( res => datas = res.data);
            let arr =[]
            for (const key in datas) {
                const element = datas[key];
                arr.push({...element, id:key})
            }
            // votes=arr
            // for(let i= 0; i<votes.length; i++){
            //     let opt1 = votes[i].option1.count || 0
            //     let opt2 = votes[i].option2.count || 0
            //     let opt3 = votes[i].option3.count || 0
            //     let opt4 = votes[i].option4.count || 0
            //     let opt5 = votes[i].option5.count || 0
                
            //     const array1 = [opt1, opt2, opt3, opt4, opt5];
            //     const initialValue = 0;
            //     const sumWithİnitial = array1.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
            //     setTotalVote([...totalVote,{total:sumWithİnitial}])
            //     console.log([...totalVote,{total:sumWithİnitial}])
            // }
            setVote(arr)
            
            
        }
        fetchData();

        // const setVoteCount = ()=>{
        //     // console.log(votes)
        //     for(let i= 0; i<votes.length; i++){
        //         let opt1 = votes[i].option1.count || 0
        //         let opt2 = votes[i].option2.count || 0
        //         let opt3 = votes[i].option3.count || 0
        //         let opt4 = votes[i].option4.count || 0
        //         let opt5 = votes[i].option5.count || 0
                
        //         const array1 = [opt1, opt2, opt3, opt4, opt5];
        //         const initialValue = 0;
        //         const sumWithİnitial = array1.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
        //         setTotalVote([...totalVote,{total:sumWithİnitial}])
        //     }
        // }
        // setVoteCount()

        // setTimeout(() => {
        //     for(let i= 0; i<vote.length; i++){
        //         let opt1 = vote[i].option1.count || 0
        //         let opt2 = vote[i].option2.count || 0
        //         let opt3 = vote[i].option3.count || 0
        //         let opt4 = vote[i].option4.count || 0
        //         let opt5 = vote[i].option5.count || 0
                
        //         const array1 = [opt1, opt2, opt3, opt4, opt5];
        //         const initialValue = 0;
        //         const sumWithİnitial = array1.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
        //         console.log(initialValue)
        //         console.log(sumWithİnitial)
        //         // setTotalVote(sumWithİnitial)
        //         setTotalVote([...totalVote,{total:sumWithİnitial}])
        //         console.log(totalVote)
        //     }
        // }, 2000)

    }, []);

    return (
        <div className="d-flex justify-content-center mt-5">
            {vote.map((item, index)=> (<div className="w-50 p-4 shadow m-3" key={item.id}>
                <h2 className="text-white bg-primary text-center list-group-item my-3"> {item.title} </h2>
                <ul className="list-group">
                    <li className="list-group-item my-2">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            {item.option1.text}
                            <span className="badge bg-primary rounded-pill">{item.option1.count}</span>
                        </div>
                        <div>
                            <ProgressBar bgcolor="blue" progress={(100/(item.option1.count+item.option2.count+item.option3.count+item.option4.count+item.option5.count))*(item.option1.count)} height={30} />
                        </div>
                    </li>
                    <li className="list-group-item my-2">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            {item.option2.text}
                            <span className="badge bg-primary rounded-pill">{item.option2.count}</span>
                        </div>
                        <div>
                            <ProgressBar bgcolor="blue" progress={(100/(item.option1.count+item.option2.count+item.option3.count+item.option4.count+item.option5.count))*(item.option2.count)} height={30} />
                        </div>
                    </li>
                    <li className="list-group-item my-2">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            {item.option3.text}
                            <span className="badge bg-primary rounded-pill">{item.option3.count}</span>
                        </div>
                        <div>
                            <ProgressBar bgcolor="blue" progress={(100/(item.option1.count+item.option2.count+item.option3.count+item.option4.count+item.option5.count))*(item.option3.count)} height={30} />
                        </div>
                    </li>
                    <li className="list-group-item my-2">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            {item.option4.text}
                            <span className="badge bg-primary rounded-pill">{item.option4.count}</span>
                        </div>
                        <div>
                            <ProgressBar bgcolor="blue" progress={(100/(item.option1.count+item.option2.count+item.option3.count+item.option4.count+item.option5.count))*(item.option4.count)} height={30} />
                        </div>
                    </li>
                    <li className="list-group-item my-2">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            {item.option5.text}
                            <span className="badge bg-primary rounded-pill">{item.option5.count}</span>
                        </div>
                        <div>
                            <ProgressBar bgcolor="blue" progress={(100/(item.option1.count+item.option2.count+item.option3.count+item.option4.count+item.option5.count))*(item.option5.count)} height={30} />
                        </div>
                    </li>
                </ul>
            </div>))}
            
        </div>
    )
}