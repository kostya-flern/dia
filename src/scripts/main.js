'use strict';

/* конфигурация */
const width = 900; // ширина картинки
const count = 1; // видимое количество изображений
let position = 0; // положение ленты прокрутки

const list = document.querySelector('.carousel__container');
let listElemsCount = list.childElementCount;
const listElems = document.querySelectorAll('li');
const leftMove = document.querySelector('.carousel__btn_prev');
const rightMove = document.querySelector('.carousel__btn_next');

leftMove.addEventListener('click', function () {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
});

rightMove.addEventListener('click', function () {
  if (position > -width * (listElemsCount - 1)) {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
  } else {
    list.style.marginLeft = position + 'px';
  }
});
