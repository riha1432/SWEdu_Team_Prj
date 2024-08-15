const MAXINDEX = 5

var plant_name_select = $('#plant_name');
var growth_select = $('#growth');
var tlist = $('#Tlist');
var numpage = $('#numpage')
var before = $('#before')
var after = $('#after')
var vd = document.getElementsByClassName('VideoData');
var img = document.getElementById('img');
var body = document.getElementsByTagName('body')

var socket = io.connect('http://' + window.location.host);

var total = 0
var maxpg  = 0
var nowpg = 0

var plant = ''
var grawth = ''
var file_list = new Array();

console.dir(window.location)

function tbody_append(data, start, end){
    for(let i = start; i >= end; i--){
        let tr = tableappend(Object.keys(data)[i], data[Object.keys(data)[i]])
        tlist.append(tr)
    }
}
function tableappend(index, addr){
    let $tr = $("<tr>",{class : "table-success"});
	let $td1 = $("<td>",{text:index});
	let $td2 = $("<td>",{text:addr, click:function(e){
        img.attributes.src.textContent = 'img/' + e.target.innerText;
    }});
    $tr.append($td1);
    $tr.append($td2);
    return $tr
}

function selectappend(value){
    let $option = $("<option>",{text:value});
    return $option
}

function change_plant(e){
    tlist.empty()
    let event = e.target
    for(let i = 0; i< event.length; i++){
        if(event[i].selected){
            plant = event[i].innerText;
            if(plant == '<식물 이름>'){
                plant = ''
            }
            socket.emit('save_object_list', {plant, grawth})
            break;
        }
    }
}

function change_growth(e){
    tlist.empty()
    let event = e.target
    for(let i = 0; i< event.length; i++){
        if(event[i].selected){
            grawth = event[i].innerText;
            if(grawth == '<성장 단계>'){
                grawth = ''
            }
            socket.emit('save_object_list', {plant, grawth})
            break;
        }
    }
}

$(document).ready(function(){
    
    console.log(window.location.host)

    socket.emit('save_page', 'ready')
    socket.on('save_page', function(data){
        for(let i = 0; i<Object.keys(data).length; i++){
            let select = selectappend(data[i])
            plant_name_select.append(select)
        }
    });

    socket.on('save_object_list', function(data){
        // console.log(Object.keys(data).length)
        file_list = data
        total = Object.keys(data).length
        maxpg = parseInt(total / MAXINDEX) - ((total % MAXINDEX) == 0 ? 1 : 0)
        nowpg = 0

        let ind = 0;
        if(total - MAXINDEX < 0){
            ind = 0
        }
        else{
            ind = total - MAXINDEX
        }

        tbody_append(file_list, total - 1, ind)
    })

    after.click(function(){
        nowpg += 1
        if(nowpg > maxpg) nowpg = maxpg
        if(maxpg > nowpg){
            tlist.empty()
            let index = (MAXINDEX * nowpg)
            tbody_append(file_list, ((total - 1) - index), ((total) - (index + MAXINDEX)))
        }
        else if(maxpg == nowpg){
            tlist.empty()
            let index = (MAXINDEX * nowpg)
            tbody_append(file_list, ((total - 1) - index), 0)
        }
    })

    before.click(function(){
        nowpg -= 1
        if(0 <= nowpg){
            tlist.empty()
            let index = (MAXINDEX * nowpg)
            tbody_append(file_list, ((total - 1) - index), ((total) - (index + MAXINDEX)))
        }
        if(nowpg < 0) nowpg = 0
    })
});



