button=document.querySelector('.btn');
searchInput=document.querySelector('.search__input');

button.addEventListener('click',function(){
    searchInput.classList.toggle('hidden');
    searchInput.classList.toggle('visible');
    searchInput.focus();
});
