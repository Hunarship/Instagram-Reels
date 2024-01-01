import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './config'; // Import your Firebase configuration
import { useParams } from 'react-router-dom';
import Video from "./components/Video/Video";

const SingleVideo = () => {
  const [singleData, setSingleData] = useState(null);
  const {id} = useParams();
  const documentId = id; // Replace with the actual document ID
  const collectionName = 'videos'; // Replace with the actual collection name

  useEffect(() => {
    const fetchSingleData = async () => {
      try {
        // Get the document by ID
        const docRef = doc(db, collectionName, documentId);

        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          // Document exists, set the data in state
          setSingleData({
            id: docSnapshot.id,
            ...docSnapshot.data(),
          });
        } else {
          // Document does not exist
          console.error('Document does not exist');
        }
      } catch (error) {
        console.error('Error fetching single document:', error);
      }
    };

    fetchSingleData();
  }, [documentId, collectionName]);

  return (
    <div className="video-container" id="video-container">
      {singleData ? (
                <Video
            key={singleData.id}
            // channel={list.channel}
            song={singleData.videoUrl}
            url={singleData.videoUrl}
            likes={singleData.likes.length}
            comment={singleData.commentCount}
            // shares={list.shares}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleVideo;
