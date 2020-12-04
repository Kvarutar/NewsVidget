import {news} from './dataBase.js';
document.addEventListener('DOMContentLoaded', function(){
    //создание виджета
    let newsBlock = document.createElement('div'),
        newsCounter = 0,
        newsTitle = document.createElement('div'),
        newsWrapper = document.createElement('div');

    newsBlock.classList.add('news__vidget', 'news__hide');

    document.querySelector('.body').appendChild(newsBlock);
    
    newsWrapper.classList.add('news__wrapper');
    newsTitle.classList.add('news__title');
    newsTitle.textContent = 'Новости';
    newsBlock.appendChild(newsTitle);
    newsBlock.appendChild(newsWrapper);

    //наполнение новостей
    news.forEach((item) => {
        let {text, author, date, id} = item,
            newElem = document.createElement('div'),
            newsText = document.createElement('div'),
            dateText = document.createElement('div'),
            authorText = document.createElement('div'),
            newsDescr = document.createElement('div'),
            nonRead = document.createElement('div'),
            more = document.createElement('a');

        more.id = id;
        newElem.classList.add('news-elem');
        more.classList.add('news__link');
        newsText.classList.add('news__text');
        dateText.classList.add('news__date');
        authorText.classList.add('news__author');
        newsDescr.classList.add('news__descr');
        nonRead.classList.add('news__nonread');

        newsText.textContent = text;
        dateText.textContent = date;
        authorText.textContent = author;
        more.textContent = 'Подробнее';
        more.href = '../bigNews.html';

        newsWrapper.appendChild(newElem);

        newElem.appendChild(newsText);
        newElem.appendChild(newsDescr);
        newsDescr.appendChild(authorText);
        newsDescr.appendChild(dateText);
        newsDescr.appendChild(more);
        newsDescr.appendChild(nonRead);

        newsCounter++;
    })
    //переадрессация
    let newsLinks = document.querySelectorAll('.news__link'),
        currentId;
    newsLinks.forEach((link) => {
        link.addEventListener('click', function(e){
            localStorage.id = link.id;
        })
    })


    //счетчик непрочитанных
    console.log(newsCounter);
    let newsIcon = document.createElement('img'),
        newsIcon__wrapper = document.createElement('div'),
        newsCounterBlock = document.createElement('div');

    newsIcon__wrapper.classList.add('news_icon__wrapper');
    newsCounterBlock.classList.add('news__counter');
    newsCounterBlock.textContent = newsCounter;
    newsIcon.src = '../img/newsIcon.svg';
    newsIcon.classList.add('news__icon');
    document.querySelector('.body').appendChild(newsIcon__wrapper);
    newsIcon__wrapper.appendChild(newsCounterBlock);
    newsIcon__wrapper.appendChild(newsIcon);

    newsIcon__wrapper.addEventListener('click', function(){
        if(newsBlock.classList.contains('news__hide')){
            newsBlock.classList.remove('news__hide');
        }else{
            newsBlock.classList.add('news__hide');
        }
    })

    //прочитано
    let nonRead = document.querySelectorAll('.news__nonread');
    nonRead.forEach((point) => {
        point.addEventListener('click', function(){
            if (!point.classList.contains('news__read')){
                newsCounter--;
                point.classList.add('news__read');
                newsCounterBlock.textContent = newsCounter;
            }else{
                newsCounter++;
                point.classList.remove('news__read');
                newsCounterBlock.textContent = newsCounter;
            }
        })
    });


})