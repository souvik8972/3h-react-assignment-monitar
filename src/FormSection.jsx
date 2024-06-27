import { useContext, useState } from "react";
import "./FormSection.css";
import { VoteContext } from "./store/VoteContext";
import VoteList from "./VoteList";

const FormSection = () => {
    const { addVote, removeVote, votes, totalVote } = useContext(VoteContext);
    const [visibleForm, setVisibleForm] = useState(false);
    const [name, setName] = useState("");
    const [monitorId, setMonitorId] = useState("1");

    const submitHandler = (e) => {
        e.preventDefault();
        if (name.trim() === "") return;

        addVote(monitorId, name);
        setName("");
        setMonitorId("1");
    };

    const handleDelete = (id, name) => {
        removeVote(id, name);
    };

    return (
        <div>
            <h2>Vote for Monitor</h2>
            <p> Total Vote :{totalVote}</p>
            <button onClick={() => setVisibleForm(true)}>Vote</button>
            {visibleForm && (
                <div className="form-container">
                    <form onSubmit={submitHandler}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <select
                            value={monitorId}
                            onChange={(e) => setMonitorId(e.target.value)}
                        >
                            <option value="1">Monitor 1</option>
                            <option value="2">Monitor 2</option>
                            <option value="3">Monitor 3</option>
                        </select>
                        <button type="submit">Give Vote</button>
                        <button type="button" onClick={() => setVisibleForm(false)}>
                            X
                        </button>
                    </form>
                </div>
            )}
            <VoteList votes={votes} handleDelete={handleDelete} />
        </div>
    );
};



export default FormSection;
