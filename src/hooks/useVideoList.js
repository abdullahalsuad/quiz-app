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
export default function useVideoList() {
         const [loading, setLoading] = useState(true)
         const [error, setError] = useState(true)
         const [videos,setVideos] = useState([])


   useEffect(() =>{
        async function fetchVideos(){
            const db = getDatabase();
            const videosRef = ref(db,"videos");
            const videoQuery = query(
                videosRef,
                orderByKey()
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

               }
                
            } catch(err){
                console.log(err);
                setLoading(false);
                setError(true);
            }   
        }

        fetchVideos()  

   },[])

   return {
    loading,
    error,
    videos,
  };
}
