console.log("Welcome to spotify");

//initiating the variables
let songIndex=0;
let audioElement= new Audio("song/1.mp3")
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');


let songItems=  Array.from(document.getElementsByClassName("songItem"));

let songs=[
    {songName:"Counting stars", filePath:"./song/1.mp3" ,coverPath:"covers/1.png"},
    {songName:"Out of time", filePath:"./song/2.mp3" ,coverPath:"covers/2.png"},
    {songName:"Perfect", filePath:"./song/3.mp3" ,coverPath:"covers/3.png"},
    {songName:"We don't talk anymore", filePath:"./song/4.mp3" ,coverPath:"covers/4.png"},
    {songName:"After hours", filePath:"./song/5.mp3" ,coverPath:"covers/5.png"},
    {songName:"I wanna be yours", filePath:"./song/6.mp3" ,coverPath:"covers/6.png"},
    {songName:"Payphone", filePath:"./song/7.mp3" ,coverPath:"covers/7.png"},
    {songName:"Stay", filePath:"./song/8.mp3" ,coverPath:"covers/8.png"},
    {songName:"The night we met", filePath:"./song/9.mp3" ,coverPath:"covers/9.png"},
    {songName:"", filePath:"./song/10.mp3" ,coverPath:"covers/10.png"}
]   
songItems.forEach((element,i)=>{
    console.log(element.i)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByTagName("span")[0].innertext=songs[i].songName;
}) 


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
}
else{
    audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
}

})


//listen to events
audioElement.addEventListener('timeupdate',()=>{
console.log('timeupdate');
//update seekbar
progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
console.log(progress)
myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=function(){
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}


Array.from(document.getElementsByClassName('songItemPlay')).forEach(function (element) {
    element.addEventListener('click', (e) => {
        makeAllPlays();
       
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${index+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click',function(){
    if(songIndex>=9){
        songIndex=0

    }
    else{
        songIndex+=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',function(){
    if(songIndex<=0){
        songIndex=0

    }
    else{
        songIndex-=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
