import React from 'react';

export default function NewsItem(props) {
    return (
        <div className='my-3'>
            <div className="card" >
                <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                    <span className="badge rounded-pill bg-danger">{props.source}</span>
                </div>
                <img src={props.imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title ? (props.title.length > 20 ? props.title.slice(0, 45) + "..." : props.title) : "Default Title"}</h5>
                    <p className="card-text">{props.description ? (props.description.length > 30 ? props.description.slice(0, 88) + "..." : props.description) : "Default Description"}</p>
                    <p className="card-text"><small className='text-muted'>By {!props.author ? "Unknown" : props.author} on {new Date(props.date).toUTCString()}</small></p>
                    <a href={props.newsURL} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}