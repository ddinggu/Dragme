function constructElement(song, singer, url, coverfile){
    const container = document.querySelector('#container');

    const subcontainer = document.createElement('div');
    subcontainer.classList.add('subcontainer');
    container.appendChild(subcontainer);

    // cover element
    const cover = document.createElement('div');
    subcontainer.appendChild(cover);
    appendingCoverElement(cover, coverfile);

    
    // song details element
    const details = document.createElement('div');
    details.classList.add('details');
    appendingDetailsElement(details, song, singer);
    subcontainer.appendChild(details);
    
    // url information element
    const showUrl = document.createElement('div');
    showUrl.classList.add('showUrl');
    appendingUrlElement(showUrl, url);
    subcontainer.appendChild(showUrl);
}

// excute cover Element append nodes
function appendingCoverElement(parent, coverfile){
    parent.classList.add('cover');
    const coverimg = document.createElement('img');
    coverimg.setAttribute('src', coverfile);
    parent.appendChild(coverimg);
}

// excute details Element append nodes
function appendingDetailsElement(parent, song, singer){
    let titleText = document.createTextNode(song);
    let singerText = document.createTextNode(singer);

    const titleColumn = document.createElement('p');
    titleColumn.classList.add('discript');
    titleColumn.appendChild(titleText);
    parent.appendChild(titleColumn); 

    const singerColumn = document.createElement('p');
    singerColumn.classList.add('discript');
    singerColumn.appendChild(singerText);
    parent.appendChild(singerColumn); 
}

// excute url Element append nodes
function appendingUrlElement(parent, url){
    const urlElement = document.createElement('a');
    const urlText = document.createTextNode('링크');

    urlElement.classList.add('discript');
    urlElement.setAttribute('href', url)
    urlElement.appendChild(urlText);
    parent.appendChild(urlElement);
}

// excute insert values in details nodes 
function insertMusicInfo(song, singer){
    const discript = document.querySelectorAll(".discript");
    console.log(discript);
    
    discript[0].innerText = `가수 : ${singer}`;
    discript[1].innerText = `제목 : ${song}`;
}

// excute insert values in url nodes 
function insertUrlInfo(url){
    const urlQuery = document.querySelector('.showUrl');

    urlQuery.innerText = `Music On : ${url}`;
}


