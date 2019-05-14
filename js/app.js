
import {openDB} from '../node_modules/idb/esm/index.js';
import AppCard from '../js/components/card/card.js';

(async function(){
    //return first element
    const app = document.querySelector("#app");
    const listPage = app.querySelector('[page=list]');

    listPage.setAttribute("active","");


    try{
        const data = await fetch('/data/data.json');
        const json = await data.json();

        const database = await openDB('app-store', 1, {
            upgrade(db){
                db.createObjectStore('articles');
            }
        });

        if(navigator.onLine){
            await database.put('articles', json, 'articles')
        }

        const articles = await database.get('articles', 'articles');

        const cards = articles.map(item => {
            const cardElement = new AppCard();
      
            cardElement.initCard(item.done,
              item.content,
              item.title);
            listPage.appendChild(cardElement);
      
           /* if (!'IntersectionObserver' in window) {
              cardElement.swapImage();
            }*/
            return cardElement;
        })
    }catch(error) {
        console.error(error);
    }

});