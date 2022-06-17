const check = false,
    cats = document.querySelectorAll('.cat'),
    weight = document.querySelectorAll('.weight'),
    links = document.querySelectorAll('.link'),
    bottom = document.querySelectorAll('.bottom'),
    title = document.querySelectorAll('#title'),
    text = document.querySelectorAll('.text'),
    inner = document.querySelectorAll('.innercat');


function selectCat() {
    for (let i = 0; i < cats.length; i++) {
        cats[i].addEventListener('click', () => {
            if (!cats[i].classList.contains('active')
                && !cats[i].classList.contains('disabled')) {
                if (bottom[i].classList.contains('1')) {
                    bottom[0].innerHTML = 'Печень утки разварная с аришоками';
                } else if (bottom[i].classList.contains('2')) {
                    bottom[1].innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка';
                } else if (bottom[i].classList.contains('3')) {
                    bottom[2].innerHTML = 'Филе из цыплят с трюфелями в бульоне';
                }
                cats[i].classList.add('active');
                weight[i].classList.add('active');
            } else if (cats[i].classList.contains('active') && !cats[i].classList.contains('disabled')) {
                bottom[i].innerHTML = 'Чего сидишь? Порадуй котэ, <a class="link" href="#">купи</a>';
                cats[i].classList.remove('active');
                weight[i].classList.remove('active');
                title[i].innerHTML = 'Сказачное заморское явство';
                title[i].style.color = '#666666';
            }
        })


        cats[i].addEventListener('mouseover', () => {
            if (cats[i].classList.contains('active')) {
                title[i].innerHTML = 'Котэ не одобряет?';
                title[i].style.color = '#E52E7A';
            }
        })
        cats[i].addEventListener('mouseout', () => {
            if (cats[i].classList.contains('active')) {
                title[i].innerHTML = 'Сказачное заморское явство';
                title[i].style.color = '#666666';
            }
        })


    }
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', (e) => {
            e.preventDefault();
            if (!links[i].classList.contains('active')) {
                if (bottom[i].classList.contains('1')) {
                    bottom[0].innerHTML = 'Печень утки разварная с аришоками';
                } else if (bottom[i].classList.contains('2')) {
                    bottom[1].innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка';
                } else if (bottom[i].classList.contains('3')) {
                    bottom[2].innerHTML = 'Филе из цыплят с трюфелями в бульоне';
                }
                links[i].classList.add('active');
                cats[i].classList.add('active');
                weight[i].classList.add('active');
            } else {
                links[i].classList.remove('active');
                cats[i].classList.remove('active');
                weight[i].classList.remove('active');
            }
        })
    }
}

function isDisabled() {
    for (var i = 0; i < cats.length; i++) {
        if (cats[i].classList.contains('disabled')) {
            if (bottom[i].classList.contains('1')) {
                bottom[0].innerHTML = 'Печалька, с фуа-гра закончился';
            } else if (bottom[i].classList.contains('2')) {
                bottom[1].innerHTML = 'Печалька, с рыбой закончился';
            } else if (bottom[i].classList.contains('3')) {
                bottom[2].innerHTML = 'Печалька, с курой закончился';
            }
            bottom[i].classList.add('disabled');
            weight[i].classList.add('disabled');
            text[i].classList.add('disabled');
            const makeDis = document.createElement('div');
            makeDis.className = 'cover';
            inner[i].append(makeDis);

        } else if (!cats[i].classList.contains('disabled') && !cats[i].classList.contains('active')) {
            bottom[i].innerHTML = 'Чего сидишь? Порадуй котэ, <a class="link" href="#">купи</a>';
            bottom[i].classList.remove('disabled');
            weight[i].classList.remove('disabled');
        }
    }
}

function init() {
    selectCat();
    isDisabled();

}

init();