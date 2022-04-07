import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import "./featured.scss";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});
  
  useEffect(()=>{
    const getRandomContent = async () =>{
      try{
          const res = await axios.get(`/movies/random?type=${type}`, {
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTViMDVkNDgyNzQ4ZTAyMGU5MzhmZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzczMDU0NzAsImV4cCI6MTYzOTg5NzQ3MH0.KJOXOhjJoBJtO5KE7ucu-YPDtFP3TNt-nK8rtxmimTw"
            },
          });
          setContent(res.data[0]);
      }catch(err){
        console.log(err);
      }
    };
    getRandomContent();
  },[ type]);
  console.log(content)
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="drama">Drama</option>
            <option value="tinhcam"> Tình Cảm </option>
            <option value="vietnam">Việt Nam</option>
          </select>
        </div>
      )}
      <img
        src={content.img}
        alt=""
      />
      <div className="info">
        <img
          src={content.imgTitle}
          alt=""
        />
        <span className="desc">
        {content.desc}
        </span>
        
      </div>
    </div>
  );
}
