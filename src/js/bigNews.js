import {news} from './dataBase.js';
document.addEventListener('DOMContentLoaded', function(){
    let container = document.createElement('div'),
        pageBody = document.querySelector('.body'),
        newsWrapper = document.createElement('div'),
        newsTitle = document.createElement('div'),
        newsDescr = document.createElement('div'),
        newsInfo = document.createElement('div'),
        newsAuthor = document.createElement('div'),
        newsDate = document.createElement('div'),
        currentNews;

    container.classList.add('container');
    newsWrapper.classList.add('current__wrapper');
    newsTitle.classList.add('current__title');
    newsDescr.classList.add('current__descr');
    newsInfo.classList.add('current__info');
    newsAuthor.classList.add('current__author');
    newsDate.classList.add('current__date');

    pageBody.appendChild(container);
    container.appendChild(newsWrapper);
    newsWrapper.appendChild(newsTitle);
    newsWrapper.appendChild(newsDescr);
    newsWrapper.appendChild(newsInfo);
    newsInfo.appendChild(newsAuthor);
    newsInfo.appendChild(newsDate);

    currentNews = news.filter((item) => item.id == localStorage.getItem('id'));

    newsDescr.textContent = currentNews[0].descr;
    newsTitle.textContent = currentNews[0].text;
    newsAuthor.textContent = currentNews[0].author;
    newsDate.textContent = currentNews[0].date;


})