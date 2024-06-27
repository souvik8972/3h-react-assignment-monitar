/* eslint-disable react/prop-types */

const VoteList = ({ votes, handleDelete }) => (
    <>
        <h3>Votes:</h3>
        <ul>
            {Object.entries(votes).map(([id, names]) => (
                <li key={id}>
                    <div>Monitor {id}: Total Votes: {names.length}</div>
                    <ul>
                        {names.map((name, index) => (
                            <li key={index}>
                                {name}
                                <button onClick={() => handleDelete(id, name)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    </>
);

export default VoteList;
