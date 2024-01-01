import React, { useState,useEffect } from "react";

import Video from "./components/Video/Video";
import { useParams } from 'react-router-dom';

import "./App.css";
import { db } from "./config";
import { collection, getDocs, query } from "firebase/firestore";



export default function MainPage(){

    const [data,setdata] = useState([]);

    const getData = async () => {
  
      const q = query(collection(db, "videos"));
      const querySnapshot = await getDocs(q);
      const usersData = querySnapshot.docs.map((doc) => doc.data());
      setdata(usersData);
    };
  
    useEffect(() => {
      getData();
    }, []);
  


    return <div className="video-container" id="video-container">
    {data.map((data)=>(
     <Video
     key={data.id}
     // channel={list.channel}
     song={data.videoUrl}
     url={data.videoUrl}
     likes={data.likes.length}
     comment={data.commentCount}
     // shares={list.shares}
   />
    ))}
    </div>
}