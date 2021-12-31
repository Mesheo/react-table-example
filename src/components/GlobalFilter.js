import React from 'react'

export default function GlobalFilter({ filter, setFilter }) {
    return (
        <div>
            Pesquisa: {" "}
            <input value={filter || " "} onChange={e => setFilter(e.target.value)}/>
        </div>
    )
};
