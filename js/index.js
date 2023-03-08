// СЛАЙДЕР

// const sliderImg = document.querySelectorAll('.slider__img');
// const sliderDots = document.querySelectorAll('.slider__dot');
// const sliderLine = document.querySelector('.slider__line');
// const sliderBtnPrev = document.querySelector('.slider__btn-prev');
// const sliderBtnNext = document.querySelector('.slider__btn-next')

// let sliderCount = 0;
// let sliderWidth;

// window.addEventListener('resize', showSlid)
// sliderBtnPrev.addEventListener('click', prevSlid)
// sliderBtnNext.addEventListener('click', nextSlid)


// function showSlid(){
//     sliderWidth = document.querySelector('.slider').offsetWidth;
//     sliderLine.style.width = sliderWidth * sliderImg.length + 'px';
//     sliderImg.forEach(item => item.style.width = sliderWidth + 'px')
//     rollSlider();
// }
// showSlid()

// function nextSlid(){
//     sliderCount++
//     if (sliderCount >= sliderImg.length) sliderCount = 0;
//     rollSlider();
//     thisSlide(sliderCount);
// }

// function prevSlid(){
//     sliderCount--
//     if (sliderCount < 0) sliderCount = sliderImg.length - 1;
//     rollSlider();
//     thisSlide(sliderCount);
// }

// function rollSlider() {
//     sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
// }

// function thisSlide(index) {
//     sliderDots.forEach(item => item.classList.remove('active-dot'));
//     sliderDots[index].classList.add('active-dot')
// }

// sliderDots.forEach((dot, index) => {
//     dot.addEventListener('click', ()=>{
//         sliderCount = index;
//         rollSlider()
//         thisSlide(sliderCount)
//     })
// })

// ТАБЫ
// const tabsItem = document.querySelectorAll('.tab__item');
// const tabsText = document.querySelectorAll('.tab__text');

// function toggleActiveClass(elements, activeClass, index) {
//     elements.forEach((el) => el.classList.remove(activeClass));
//     elements[index].classList.add(activeClass);
// }
    
// tabsItem.forEach((el, index) => {
//     el.addEventListener('click', function (e) {
//         toggleActiveClass(tabsItem, 'active__tab', index);
//         toggleActiveClass(tabsText, 'tab__text-active', index);
//     });
// });


// ПОИСК
// const input = document.querySelector('.input-text');
// const list = document.querySelectorAll('.item-text')

// input.addEventListener('input', (e)=>{
//     const valueInput = e.target.value;
//     list.forEach(el =>{
//         if(el.textContent.toLowerCase().indexOf(valueInput.toLowerCase()) > -1){
//             el.style.display = 'block';
//         } else {
//             el.style.display = 'none ';
//         }
//     })

// })



// БОКОВОЕ МЕНЮ

// const openBtn = document.querySelector('.menu-btn');
// const menuList = document.querySelector('.sidebar');
// const closeBtn = document.querySelector('.close-sidebar');

// openBtn.addEventListener('click', ()=>{
//     menuList.classList.add('show-sidebar')
//     closeBtn.style.display = 'block'
// })

// closeBtn.addEventListener('click', ()=>{
//     menuList.classList.remove('show-sidebar')
//     closeBtn.style.display = 'none'
// })

// ACCORDEON

// const btnAccordion = document.querySelectorAll('.accordion');
// btnAccordion.forEach((el)=>{
//     el.addEventListener('click', ()=>{
//         let content = el.nextElementSibling;
//         if(content.style.maxHeight){
//             document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null);
//         } else {
//             document.querySelectorAll('.content').forEach((el)=> el.style.maxHeight = null);
//             content.style.maxHeight = content.scrollHeight + 'px';;
//         }
//     })
// })


// const qfa = document.querySelectorAll('.fqa')
// qfa.forEach(el => {
//     el.addEventListener('click', () => {
//         el.classList.toggle('active');
//     })
// })


// // const openPopUpById = document.getElementById('open_pop_up');
// const openPopUpByClass = document.querySelector('.open-pop-up');
// // const closePopUpById = document.getElementById('close_pop_up');
// const closePopUpByClass = document.querySelector('.pop-up__close');
// const popUp = document.querySelector('.pop-up')

// openPopUpByClass.addEventListener('click', function(e){
//     e.preventDefault();
//     popUp.classList.add('active');
// })

// closePopUpByClass.addEventListener('click', ()=>{
//     popUp.classList.remove('active');
// })



















































