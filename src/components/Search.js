import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./Search.css";
import noImage from "../images/no-image.jpg";

function Search() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');
    const [dispResult, setDispResult] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `https://api.tvmaze.com/search/shows?q=${search}`
          );
          if(result.data == null){
              alert("No result to display")
              return false
          }
     console.log(result.data)
          setData(result.data);
          setDispResult(true)
        };
     
        if(search != ''){
            fetchData();
        }
        
      }, [search]);
    

    return (
        <div>
            <div className="header"><div className="title">Show Finder</div></div>
            <div>
                <div className="container">
                    <input type="text" value={query} placeholder="Search show titles"
        onChange={event => setQuery(event.target.value)} />
                    <div className="btn-search" onClick={() => setSearch(query)}>Search</div>
                    <div>
                       
                 

      {data.map(item => (
          <div className="show-details-container">
          
              
              {item.show.image != null ? <img alt="showimg" src={item.show.image.medium} className="show-Img-disp" /> : <img alt="noImage" src={noImage} className="show-Img-disp" />}
          <div className="show-description-container">
              <div className="show-title">{item.show.name}</div>
              <div className="show-description">{item.show.summary}
              </div>
              <div className="btn-show-episode">Show Episodes</div>
          </div>
      </div>
        ))}
      
      
      
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search