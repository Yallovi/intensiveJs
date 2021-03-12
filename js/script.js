document.addEventListener('DOMContentLoaded', () =>{
   'use strict';
   
   const tabs = () =>{

       const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
       const cardImageElem = document.querySelector('.card__image_item');
       const cardDetailsTitleElem = document.querySelector('.card-details__title');
       const priceElem = document.querySelector('.card-details__price');
       const descriprionMemory = document.querySelector('.description__memory');

       const data =[
           {
            name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
            img: 'img/iPhone-graphite.png',
            price: 99990 + '₽',
            memoryROm: 128
           },
           {
            name: 'Смартфон Apple iPhone 12 Pro 256GB Silver',
            img: 'img/iPhone-silver.png',
            price: 120990 + '₽',
            memoryROm: 256
           },
           {
            name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
            img: 'img/iPhone-blue.png',
            price: 95990 + '₽',
            memoryROm: 128
           }
       ];

       const deActive = () =>{
           cardDetailChangeElems.forEach(btn => btn.classList.remove('active'));
       }        

       cardDetailChangeElems.forEach((btn, i) =>{
           btn.addEventListener('click', () =>{
                if(!btn.classList.contains('active')){
                    deActive();
                    btn.classList.add('active');
                    cardDetailsTitleElem.textContent = data[i].name;
                    cardImageElem.src = data[i].img;
                    priceElem.textContent = data[i].price;
                    descriprionMemory.textContent = `>Встроенная память (ROM) ${data[i].memoryROm} ГБ `;
                }
           });
       });
    


   };

   tabs();

});

