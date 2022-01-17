import { useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import {  NavLink } from 'react-router-dom'
import { Spinner } from 'react-bootstrap';
import useVideoList from '../hooks/useVideoList'
import Video from './Video'

export default function Videos() {
  const [page, setPage] = useState(1);
  const {loading, error, videos, hasMore} = useVideoList(page)

    return (
        <div >
        {videos.length > 0 && (
          <InfiniteScroll
            dataLength={videos.length}
            hasMore={hasMore}
            next={() => setPage(page + 8)}
          >
                    {videos.map((video) =>
                      video.noq > 0 ? (
                        <NavLink to="/quiz" key={video.youtubeID}>
                          <Video
                            title={video.title}
                            id={video.youtubeID}
                            noq={video.noq}
                          />
                        </NavLink>
                      ) : (
                        <Video title={video.title} id={video.youtubeID} noq={video.noq} />
                      )
                    )}
          </InfiniteScroll>
        )}
 
              {!loading && videos.length === 0 && <div>No data found!</div>}
              {error && <div>There was an error!</div>}
              {loading &&
                  <div>
                    <Spinner animation="grow" variant="danger" className="p-2"/>
                    <Spinner animation="grow" variant="info" className="p-2"/>
                    <Spinner animation="grow" variant="danger" className="p-2"/>
                    <Spinner animation="grow" variant="info" className="p-2"/>
                  </div>
              }
        </div>
    )
}
