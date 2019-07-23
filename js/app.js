
import {openDB} from '/node_modules/idb/build/esm/index.js';
import AppCard from '/js/component/card/card.js';
import checkConnectivity from '/js/connection.js';


(async function(document) {

    //return first element
    const app = document.querySelector("#app");
    const listPage = app.querySelector('[page=todo]');

    listPage.setAttribute("active","");



    checkConnectivity();
  document.addEventListener('connection-changed', ({ detail }) => {
    console.log(detail);
  });
    try{
        const data = await fetch('http://localhost:3000/todo');
        const json = await data.json();
        const database = await openDB('app-store', 1, {
            upgrade(db){
                db.createObjectStore('articles');
            }
        });


        if(navigator.onLine){

            await database.put('articles', json, 'articles');
        }
        let button = document.getElementById("add");
        button.addEventListener("click", function(event){
            const cardElement = new AppCard();
      
            cardElement.initCard(false,
                document.querySelector("#item").value);
            listPage.appendChild(cardElement);
            json.push({content:document.querySelector("#item").value, done:false});
            database.put('articles', json, 'articles');
            fetch('http://localhost:3000/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({content:document.querySelector("#item").value, done:false})
            })
        });






       /* let buttonDel = document.getElementById("delete");
        buttonDel.addEventListener("click", function(event){
                fetch(`http://localhost:3000/todo/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(json => {
                    todoList = todoList.filter(item => item.id !== id);
                    render(todoList);
        })})*/

        
        const articles = await database.get('articles', 'articles');
        const cards = articles.map(item => {
            const cardElement = new AppCard();
      
            cardElement.initCard(item.done,
              item.content);
            listPage.appendChild(cardElement);
            return cardElement;
        })
    }catch(error) {
        console.error(error);
    }

})(document);


function addToDo(value)
{
    fetch('http://localhost:3000/todolist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            })
            .then(res => res.json())
            .then(json => {
                todoList.push(json);
                render(todoList);
    })
}


