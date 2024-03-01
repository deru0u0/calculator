'use strict';
{
    const display = document.querySelector('.display-text');
    const buttons = document.querySelectorAll('button');
    let total = '';

    buttons.forEach(button=> {
        button.addEventListener('click', function() {
            let value = button.textContent;
            update(value);
        })
    })
    function update(value) {
        if ( total === '' && value === '+') {
            return;
        }
        if ( total === '' && value === '-') {
            return;
        }
        if ( total === '' && value === '×') {
            return;
        }
        if ( total === '' && value === '÷') {
            return;
        }
        if ( total === '' && value === '+/-') {
            return;
        }
        if ( total === '' && value === '%') {
            return;
        }
        if ( value === '=' ) {
            display.textContent = eval(total);
        } else if ( value === 'AC' ) {
            total = '';
            display.textContent = total;
        } else {
            total = total + value;
            display.textContent = total;
        }
        
    }
}
