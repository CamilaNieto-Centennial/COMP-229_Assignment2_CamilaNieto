var imagesList;
var current=0;
var defaultMultiplied=1000;
var interval;

function sendHttpRequest(method, url, data){
    const promise = new Promise(function(resolve, reject){
        const xhr=new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType='json';

        if(data){
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.onload=function(){
            if(xhr.status >=400){
                reject(xhr.response);
            }else{
                resolve(xhr.response);
            }
        };
            xhr.onerror=function(){
                reject('Something went wrong!');
            };
            xhr.send(JSON.stringify(data));
    });
    return promise;
}

function loadNext(){
    let prev, next;

    if(current==imagesList.length -1){
        current=0;
        prev=imagesList.length-1;
        next=current+1;
    }else{
        current++;
        prev=current-1;
        next=current+1 > imagesList.length-1 ? 0 : current+1;
    }

//    console.log(`Prev ${prev}`);
//    console.log(`Current ${current}`);
//    console.log(`Next ${next}`);

    photoLoad(current,prev,next);
}

function loadPrev(){
    let prev, next;
    if(current==0){
        current=imagesList.length-1;
        prev=imagesList.length-2;
        next=0;
    }else{
        current--;
        prev=current==0 ? imagesList.length -1 : current-1;
        next=current+1;
    }
//    console.log(`Prev ${prev}`);
//    console.log(`Current ${current}`);
//    console.log(`Next ${next}`);

    photoLoad(current,prev,next);
}

function photoLoad(current,prev,next){
clearInterval(interval);

    let imageUrlPrev= imagesList[prev].source;
    let imageUrlCurrent= imagesList[current].source;
    let imageUrlNext= imagesList[next].source;

    let loopTime=imagesList[current].loop;
    console.log(`LoopTime: ${loopTime}`);

    $("#prev")
    .hide()
    .attr('src',imageUrlPrev)
    .show('slide', {direction: 'right'}, 1000);

    $("#current")
    .hide()
    .attr('src',imageUrlCurrent)
    .show('slide', {direction: 'right'}, 1000);
    
    $("#next")
    .hide()
    .attr('src',imageUrlNext)
    .show('slide', {direction: 'right'}, 1000);


    interval=setInterval(()=>loadNext(),loopTime * defaultMultiplied);
}

async function loadJSON(){
    imagesList=await sendHttpRequest('GET', 'photos.txt');
    console.log(imagesList);
    loadNext();
}

$("#updateButton").click(loadJSON);
$("#greaterButton").click(loadNext);
$("#ltButton").click(loadPrev);