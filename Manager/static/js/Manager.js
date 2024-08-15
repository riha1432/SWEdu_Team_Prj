// 버튼
var reset = $('#reset');
var select = $('#select');
var check = $('#check');
var cancel = $('#cancel');
// 영상
var video = document.getElementById('video');
var vd = document.getElementById('VideoData');
// 값
var val = $('.val');
// 단계
var list_box = $('.list_box');
// 탐지 객체 추가
var select_object = $('#select_object>ul');

function ul_append(data){
    let $li = $('<li>', {text:data})
    return $li
}

$(document).ready(function(){
    var socket = io.connect('http://' + window.location.host);
    
    console.log(window.location.host)
    
    socket.emit('Manager_page','ready')
    window.addEventListener("resize", function() {
        if(video.clientHeight > vd.clientHeight){
            console.log(true)
            video.attributes[2].value = vd.clientHeight
            console.log(video.clientHeight)
        }
    })
    
    reset.click(function() {
        console.log('reset')
        select_object.empty();
        socket.emit('reset', 'reset')
    });

    select.click(function() {
        console.log('select')
        socket.emit('select', 'select')
    });

    socket.on('select_list', function(data){
        console.log(data)
        select_object.empty();
        for( let i = 0; i< data.length; i++){
            select_object.append(ul_append(data[i]));
        }
        console.dir(select_object)
    })

    socket.on('suggestion', function(data){
        console.log(data[0])
        val[4].textContent = data[0][5]
        val[5].textContent = data[0][2]
        val[6].textContent = data[0][3]
        val[7].textContent = data[0][4]
        // for(let i = val.length/2; i < val.lenght; i++){}
    })
})



// video.attributes.src.textContent = 'video/test.mp4'

// clientHeight
// clientWidth
// 서버 송수신
