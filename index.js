const select = document.querySelector('select');
const allLang = [ 'ru', 'tj', 'en'];

select.addEventListener('change', changeURLLanguage);

//перекнаправить на url с указанием языка
function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();

}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)){
        location.href = window.location.pathname + '#tj';
        location.reload();
    }
    select.value = hash;
    // document.querySelector('.lng-unit').innerHTML = langArr['unit'][hash];
    for (let key in langArr){
        let elem = document.querySelector('.lng-'+key);
        if(elem) {
            elem.innerHTML = langArr[key][hash];    
        }
        
    }
}

changeLanguage();
