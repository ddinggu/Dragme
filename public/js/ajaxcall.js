const xhr = new XMLHttpRequest();
const container = document.querySelector('#container')
let scrollEnd;

// when page load, request defalut data
window.addEventListener('load', ()=>{
    xhrRequestData(0);
})

container.addEventListener('scroll', ()=>{
    clearInterval(scrollEnd);
    scrollEnd = setTimeout(executeSendRequest, 1000); 
});

function xhrRequestData(index){
    const endPoint = 'http://localhost:4000/list/'+index;

    xhr.open('GET', endPoint, true);
    xhr.responseType = "json";
    xhr.onreadystatechange = importListJson;
    xhr.send();
}

function importListJson(){
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
            console.log(xhr.response);
            xhr.response.forEach( el => {
                let song = el.name; let singer = el.singer;
                let url = el.url; let coverfile = el.cover;

                constructElement(song, singer, url, coverfile);
            });            
        }
        else alert('에러!'); 
    }
}

function executeSendRequest(){
    const index = document.querySelectorAll('.subcontainer').length;
    index >= 13 ? alert('정보가 없습니다.') : xhrRequestData(index)    
}
