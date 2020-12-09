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
            //`http://hn.algolia.com/api/v1/search?query=${search}`,
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
                        {/* <div className="show-details-container">
                            <div className="show-img"><img alt="showimg" src="http://static.tvmaze.com/uploads/images/medium_portrait/238/596840.jpg"
                                className="show-Img-disp" /></div>
                            <div className="show-description-container">
                                <div className="show-title">Fear the Walking Dead</div>
                                <div className="show-description"><p>Living in the same universe as <i>The Walking Dead</i>, <b>Fear the Walking Dead </b>is a gritty drama that explores the onset of the undead apocalypse through the lens of a fractured family. Set in a city where people come to escape, shield secrets, and bury their pasts, a mysterious outbreak threatens to disrupt what little stability high school guidance counselor Madison Clark and English teacher Travis Manawa have managed to assemble. The everyday pressure of blending two families while dealing with resentful, escapist, and strung out children takes a back seat when society begins to break down. A forced evolution, a necessary survival of the fittest takes hold, and our dysfunctional family must either reinvent themselves or embrace their darker histories.</p>
                                </div>
                                <div className="btn-show-episode">Show Episodes</div>
                            </div>
                        </div> */}
                      {/* <ul>
        {data.map(item => (
          <li key={item.score}>
            <a href={item.score}>{item.score}</a>
          </li>
        ))}
      </ul> */}

      {data.map(item => (
          <div className="show-details-container">
          {/* <div className="show-img"><img alt="showimg" src="http://static.tvmaze.com/uploads/images/medium_portrait/238/596840.jpg"
              className="show-Img-disp" /></div> */}
              
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