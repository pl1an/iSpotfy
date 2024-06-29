import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Music from '../components/music';
import "../components/playlist.css"

const Playlist = ({ playlistname, localname, img }) => {
    const [participant_artists, setArtists] = useState("");
    const [songnumber, setSongNumber] = useState(0);

    function Loadmix(mixname){
        const rootElement = document.getElementById('songholder');
        const root = ReactDOM.createRoot(rootElement);
        var rendered_songs = [];
        var artists = []
        var indexx=0;
        const load_storage = JSON.parse(localStorage.getItem(mixname));
        console.log(load_storage, typeof(load_storage));
        load_storage.forEach(element => {
          indexx++; 
          rendered_songs.push(<Music index={indexx.toString()} name={element.name} album={element.album} singer={element.singer} playlist={mixname} trashed={element.trashed} favorited={element.fav}></Music>)
          if(!artists.includes(element.singer)) artists.push(element.singer);
        });
        root.render(rendered_songs);
        if(artists.length==1){
            setArtists(artists[0]);
        }
        else if(artists.length==2){
            setArtists(`${artists[0]} e ${artists[1]}`);
        }
        else if(artists.length>2){
            setArtists(`${artists[0]}, ${artists[1]} e mais`)
        }
        return indexx;
    }
    
    useEffect(() => {
      setTimeout(() => {
        if(localStorage.getItem(localname)) {
          setSongNumber(Loadmix(localname));
      }
      }, 150);
    })
    
    return (
        <div className='main-playlist'>
          <div className='main-page-right'>
            <div className='playlist-top'>
              <div className='img-container'>
                <img src={img} alt="capa-album" className='img-playlist' />
              </div>
              <div className='playlist-title'>
                <p>Playlist</p>
                <h1>{playlistname}</h1>
                <p>{participant_artists}</p>
                <div className='playlist-title-bottom'>
                  <p>{songnumber} músicas</p>
                  <h2>1h 7min</h2>
                </div>
              </div>
            </div>
    
            <div className='playlist-middle'>
              <button className='play-btn'>
                <span className="material-icons">play_arrow</span>
              </button>
              <button className='icon-btn'>
                <span className="material-symbols-outlined">favorite</span>
              </button>
              <button className='icon-btn'>
                <span className="material-icons-outlined">download_for_offline</span>
              </button>
              <button className='icon-btn'>
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
    
            <div className='playlist-bottom'>
              <div className='playlist-bottom-title'>
                <h1>#título</h1>
                <h2>álbum</h2>
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div id="songholder">
              </div>
            </div>
    
          </div>
        </div>
    );
};

export default Playlist;