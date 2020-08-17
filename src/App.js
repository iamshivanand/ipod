import React from 'react';
import './App.css';
import ZingTouch from 'zingtouch';
import Ipod from './Ipod';
import * as firebase from 'firebase';


class App extends React.Component {
  constructor(){
    super();
    this.state={
    songs:{
      name:"Beliver",
      artist:"Imagine Dragons",
      image:"D:/CodingNinjas/React/MiniProjects/ipodjs/src/static/beliver.jpg",
      source:"ipodjs/src/static/Imagine Dragons - Believer.mp3"
    }
    }
    
    
  }

  componentDidMount(){
    const {songs}=this.state;

    const container= document.getElementById('container');
    console.log('container',container);
    var activeRegion= ZingTouch.Region(container);

    var childElement= document.getElementById('outer-wheel');
      activeRegion.bind(childElement,'rotate',function(event){
      var get=event.detail;
      // console.log('angle',get.angle);
      // console.log('distance from origin',get.distanceFromOrigin);
      // console.log('distance from last',get.distanceFromLast);
      
        if(  get.distanceFromLast>2){
          let ul= document.getElementById("menu-list");
          let items= ul.getElementsByTagName("li");
          var active= document.querySelector(".active");
            console.log(active);
          let nextSibling = active.nextElementSibling;
          console.log(nextSibling);
          active.className="";
          
          if(nextSibling===null){

            items[1].className="active";
            active.className="";
          }else{
            nextSibling.className="active";
          }
        }
        else if(get.distanceFromLast<-2){
          let ul= document.getElementById("menu-list");
          let items= ul.getElementsByTagName("li");
          let active= document.querySelector(".active");
            console.log(active);
          let prevSibling = active.previousElementSibling;
          console.log(prevSibling);
          active.className="";
          
          if(prevSibling===null||prevSibling===items[0]){

            items[4].className="active";
            active.className="";
          }else{
            prevSibling.className="active";
          }
        }      
})
//here we handling the click on inner wheel
    var innerwheel= document.getElementById('inner-wheel');
    activeRegion.bind(innerwheel,'tap',function(event){
      let listContainer=document.getElementById("list-container");
      listContainer.style.display="block";
      let active= document.querySelector(".active");
      if(active.id==1){
          
        let ele=document.getElementById("songs");
        
        ele.style.display="none";
      }
      if(active.id==2){
        
        let ele=document.getElementById("albums");
        
        ele.style.display="none";
      }
      if(active.id==3){
        
        let ele=document.getElementById("artists");
        
        ele.style.display="none";
      }
      if(active.id==4){
      
        let ele=document.getElementById("playlist");
        
        ele.style.display="none";
      }
    })

    //here we are adding the click to the menu button
    var menu= document.getElementById("menu");
    // console.log('menu',menu);
    menu.addEventListener("click",function(){
      let active= document.querySelector(".active");
      console.log("active list items is",active);
      console.log("id is ",active.id);
      let listContainer=document.getElementById("list-container");
      console.log(listContainer);
      listContainer.style.display="none";

      //rendering component according to the menu-list
      //songs menu
        if(active.id==1){
          
          let ele=document.getElementById("songs");
          
          ele.style.display="flex";

          //inside songs menu adding the functionality to the music player

          var playPause=document.querySelector(".pause-play");
          playPause.addEventListener("click",function(event){
           
            let songImage=document.getElementById("song-image");
            console.log(songImage.id);
            songImage.classList.toggle("image-container-animation");
              
            
            var songTittle= document.getElementById("song-tittle");
            var fillBar=document.getElementById("fill");
            playSong(songTittle,fillBar);
            function playSong(){
              console.log("inside playsong");
              
              
              
              var poster=songs.image;
              var name=songs.name;
              var song= new Audio(songs.source);
              // song.src=songs.source;
            console.log(songs.source);
              songTittle.textContent=name;// this will set the tittle of the song
            
              song.play();
            
            }
            
             
           
          });
        }
        //Albums
        if(active.id==2){
          
          let ele=document.getElementById("albums");
          
          ele.style.display="flex";
        }
        //Artists
        if(active.id==3){
          
          let ele=document.getElementById("artists");
          
          ele.style.display="flex";
        }
        //playlist
        if(active.id==4){
        
          let ele=document.getElementById("playlist");
          
          ele.style.display="flex";
        }
    });
    


}









    
  
  render(){

    const {songs} =this.state;
    return (
      <div className="App">
        <Ipod
        songs= {songs}
        
        />
        
       
      </div>
    );
  }
}

export default App;
