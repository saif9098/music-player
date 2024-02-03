let progress = document.getElementById('progress')
let song = document.getElementById('song')
let ctrl = document.getElementById('ctrlicon')

song.onloadedmetadata =()=>{
    progress.max = song.duration;
    

}

function playpause(){
    if(ctrl.classList.contains('fa-pause')){
        song.pause()
        ctrl.classList.remove("fa-pause")
        ctrl.classList.add("fa-play")
    
    }else{
        song.play()
        ctrl.classList.remove("fa-play")
        ctrl.classList.add("fa-pause")
    }
}

if(song.play()){
    setInterval(()=>{ progress.value = song.currentTime},500)
}
progress.onchange = ()=>{
    if(ctrl.classList.contains('fa-play')){
        song.pause()
        song.currentTime = progress.value;
    }else{
    song.play()
    song.currentTime = progress.value;
    }
    
}