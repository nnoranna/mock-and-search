import React, { useState } from 'react';

function Book({ title, author, year }) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            <h2>{title}</h2>
            {showMore ?
            <>
                <h3>{author}</h3>
                <h4>{year}</h4>
            </> : false
            }
            <button onClick={ () => {setShowMore(!showMore)} }>{showMore ? "Hide" : "Show"}</button>
        </div>
    )
}

export default Book;