import { ArrowBackOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import Comments from "../../components/comments/Comments";
// import Comment from "../../components/comment/comments";
import "./watch.scss";


export default function Watch() {
    const location = useLocation();
    const movie = location.movie;

      const [comments, setComments] = useState([]);
    useEffect(() =>{
      const getComments = async () => {
        try{
          const res = await axios.get("/comment", {
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTViMDVkNDgyNzQ4ZTAyMGU5MzhmZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzczMDU0NzAsImV4cCI6MTYzOTg5NzQ3MH0.KJOXOhjJoBJtO5KE7ucu-YPDtFP3TNt-nK8rtxmimTw"
            }
          });
          setComments(res.data);
        }catch(err){
            console.log(err);
        }
      };
      getComments();
    },[]);  
    console.log(comments);               
  return (
    <div className="watchVideo">
      <div className="watch">
        <Link to ="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
        </Link>
        <div className="item-left">
          <video
            className="video"
            autoPlay
            progress
            controls
            src={movie.video}
          />
          <div className="title">
            {movie.title}
          </div>
        </div>
      
      <div className="item-right">
          <img className="img"
              src={movie.img}
              />
            <div className="desc">
              {movie.desc}
            </div>

      </div>   
      </div>
      <div className="comment">
        <Comments className="comments"  commentsUrl="http://localhost:3004/comments"
        currentUserId="1"/>
      </div>
    </div>
    
  )
}
