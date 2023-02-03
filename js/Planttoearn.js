    var btnClose = document.querySelector('.btn-close')
    var btnMenu = document.querySelector('.header-menu')
    var listMenuElement = document.querySelector('.list-menu')
    var maskElement = document.querySelector('.mask')
    var btnMint = document.querySelector('.btn-mint')
    var popMintTree = document.querySelector('.Popup-MinTree')
    var closePopupMintTree = document.querySelector('.popup-close')
    var input = document.querySelector('#input')
    var fill = document.querySelector('.fill')
    var slider = document.querySelector('#myrange')
    var result1 = document.querySelector('.result1')
    var btnPayment = document.querySelector('.btn-Payment')
    var notice = document.querySelector('.notice')

    btnMenu.onclick = function(){
        listMenuElement.style.display = "unset"
        maskElement.style.display = "unset"
    }
    btnClose.onclick = function() {
        listMenuElement.style.display = 'none'
        maskElement.style.display = 'none'
    }
    btnMint.onclick = function() {
        input.value = 0 
        fill.style.width = 0 + "%"
        slider.value = 0
        btnPayment.setAttribute("disabled", "")
        popMintTree.style.display = "block"
    }
    closePopupMintTree.onclick = function() {
        popMintTree.style.display = "none"
    }

    slider.oninput = function() {
        let valueSlider = slider.value;
        input.textContent = valueSlider
        input.value = valueSlider
        // Check button mint enable or disable
        checkButton(valueSlider)
    }

    input.oninput = () => {
        let inputValue = input.value;
          // Check button mint enable or disable
          checkButton(inputValue)
        slider.value = input.value
        fill.style.width = slider.value * 10 + "%"
            if(input.value == ''){
            fill.style.width = 0 + "%"
            slider.value = 0
        }
    }
    function checkButton(value) {
        if(value <= 0 || value > 10) {
            btnPayment.setAttribute("disabled", "")
            notice.style.display = "block"
        }else {
            btnPayment.removeAttribute("disabled", "")
            notice.style.display = "none"
        }
    }

    
    