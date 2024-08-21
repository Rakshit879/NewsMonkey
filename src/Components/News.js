import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
// import propTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

    constructor(props) {
        super(props);
        document.title = "NewsMonkey/" + this.props.search.charAt(0).toUpperCase() + this.props.search.slice(1).toLowerCase();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        };
    }

    async update() {
        const url = `https://newsapi.org/v2/everything?q=${this.props.search}&from=2024-08-11&to=2024-08-11&sortBy=popularity&apiKey=53dbaa069fec4850932b6cedff57e392&page=${this.state.page}&PageSize=${this.props.PageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);

        let result = await data.json();
        this.setState({
            articles: result.articles,
            totalResults: result.totalResults,
            loading: false,
        });
    }

    async componentDidMount() {
        this.update();
    }

    // handlePrevClick = async () => {
    //     console.log("Previous");
    //     this.setState({
    //         page: this.state.page - 1
    //     })
    //     this.update();
    // };

    // handleNextClick = async () => {
    //     console.log("Next");

    //     this.setState({
    //         page: this.state.page + 1
    //     })
    //     this.update();
    // };
    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1,
            
        })
        console.log(this.state.page);
        const url = `https://newsapi.org/v2/everything?q=${this.props.search}&from=2024-08-11&to=2024-08-11&sortBy=popularity&apiKey=53dbaa069fec4850932b6cedff57e392&page=${this.state.page}&PageSize=${this.props.PageSize}`;
        let data = await fetch(url);

        let result = await data.json();
        this.setState({
            articles: this.state.articles.concat(result.articles),
            totalResults: result.totalResults
        });
    };

    render() {
        return (
            <>
                <h2 className='text-center'>NewsMonkey - Top {this.props.search.charAt(0).toUpperCase() + this.props.search.slice(1).toLowerCase()} Headlines</h2>

                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">

                        <div className="row">
                            {!this.state.loading && this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        );
    }
}
