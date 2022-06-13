import React, { Component } from "react";
import {Link} from "react-router-dom";

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'E-commerce',
        title: 'Ape Apparel',
        url: 'https://www.apeapparel.xyz'
    },
    {
        image: 'image-2',
        category: 'Music Streaming',
        title: 'Spotify Clone'
    },
    {
        image: 'image-3',
        category: 'Project',
        title: 'Lorem Ipsum Posts'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href="/portfolio-details">{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href="/portfolio-details">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <Link className="link-overlay" to={`/${value.url}`}></Link>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;