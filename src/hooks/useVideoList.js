import { useEffect,useState } from 'react'
import {
    get,
    getDatabase,
    limitToFirst,
    orderByKey,
    query,
    ref,
    startAt,
  } from "firebase/database";
export default function useVideoList(page) {
         const [loading, setLoading] = useState(true)
         const [error, setError] = useState(true)
         const [videos,setVideos] = useState([])
         const [hasMore, setHasMore] = useState(true);


   useEffect(() =>{
        async function fetchVideos(){
            const db = getDatabase();
            const videosRef = ref(db,"videos");
            const videoQuery = query(
                videosRef,
                orderByKey(),
                startAt("" + page),
                limitToFirst(11)
            )
            try{
                setError(false) 
                setLoading(true)

                //requ firebase
               const snapshot =  await get(videoQuery)
               setLoading(false)
               if(snapshot.exists()){
                   setVideos((prevVideos) =>{
                    return [...prevVideos, ...Object.values(snapshot.val())]
                   })
               }else{  
                    setHasMore(false);
               }
                
            } catch(err){
                console.log(err);
                setLoading(false);
                setError(true);
            }   
        }
        setTimeout(()=>{
            fetchVideos()  
        },1000)
   },[page])

   return {
    loading,
    error,
    videos,
    hasMore,
  };
}
