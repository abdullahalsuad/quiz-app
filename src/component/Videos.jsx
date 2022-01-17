import React from 'react'
import {  NavLink } from 'react-router-dom'
import { Spinner } from 'react-bootstrap';
import useVideoList from '../hooks/useVideoList'
import classes from '../styles/Videos.module.css'
import Video from './Video'

export default function Videos() {
  const {loading, error, videos,} = useVideoList()
    return (
        <div className={classes.videos}>
             { videos.length > 0 && 
                  videos.map(video => (
                 <NavLink to="/quiz" key={video.youtubeID}>
                   <Video 
                   title={video.title}
                   id={video.youtubeID}
                   noq={video.noq}
                   />
                 </NavLink>
               ))}
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
