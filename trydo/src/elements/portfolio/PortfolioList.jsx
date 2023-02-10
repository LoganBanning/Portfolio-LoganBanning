import React, { Component } from "react";
import {Link} from "react-router-dom";

const PortfolioListContent = [
    // {
    //     image: 'image-1',
    //     category: 'E-Commerce',
    //     title: 'Ape Apparel',
    //     url: 'http://www.apeapparel.xyz'
    // },
    {
        image: 'image-1',
        category: 'Project',
        title: 'Monster Rolodex',
        url: 'https://delightful-palmier-b62036.netlify.app/'
    },
    {
        image: 'image-2',
        category: 'Project',
        title: 'Student info page',
        url: 'https://cerulean-chimera-c6adbf.netlify.app/'
    },
    {
        image: 'image-3',
        category: 'Project',
        title: 'Spotify Clone',
        url: 'https://starfish-app-bv92g.ondigitalocean.app/'
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
                                        <a className="rn-btn" href={value.url} target='_blank' >View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;