import React, { Component } from 'react';

export default class NewsItem extends Component {
    constructor() {
        super();
    }
    render() {
        let { title, description, newsURL, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:"90%"}}>{source}</span>
                    <img src={this.props.imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title ? (title.length > 20 ? title.slice(0, 45) + "..." : title) : "Default Title"}</h5>
                        <p className="card-text">{description ? (description.length > 30 ? description.slice(0, 88) + "..." : description) : "Default Description"}</p>
                        <p className="card-text"><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
                        <a href={newsURL} target='_blank' rel="noreferrer"className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}