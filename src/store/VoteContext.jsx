/* eslint-disable react/prop-types */
import { createContext,  useState } from "react";

const VoteContext=createContext({
    addVote:()=>{},
    deleteVote:()=>{},
    votes:[],
    totalVote:()=>{}
})

const VoteContextProvider=(props)=>{
    let [votes,setVotes]=useState({
        1:[],
        2:[],
        3:[]
    })
let [totalVote,setTotalVote]=useState(0)

    const addVote = (id, name) => {
        setTotalVote(Pre=>Pre+1)
        setVotes((prevVotes) => {
            // Create a new copy of the previous state
            const newVotes = { ...prevVotes };
            // Update the specific entry
            newVotes[id] = [...(newVotes[id] || []), name];
            // Return the new state
            return newVotes;
        });
    };

    

    const removeVote = (id, name) => {
        setTotalVote(Pre => Pre - 1)
        setVotes((prevVotes) => {
            const newVotes = { ...prevVotes };
            newVotes[id] = newVotes[id].filter(voteName => voteName !== name);
            
            return newVotes;
        });
    };


    const contextValue={
        addVote,
    removeVote,
        votes,
        totalVote

    }


    return <VoteContext.Provider value={contextValue}>
        {props.children}
    </VoteContext.Provider>

}

export {VoteContext,VoteContextProvider}