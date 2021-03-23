function toggleDynamicBasket() {
    const cartButton = document.getElementById('add-to-cart-button');
    const cartButtonPosition = cartButton.getBoundingClientRect(); 
    const dynamicBasket = document.getElementById('dynamic-basket');

    if (cartButtonPosition.top >= 0 && cartButtonPosition.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        dynamicBasket.classList.remove('slide-in');
        dynamicBasket.classList.add('slide-out');
    } else if (dynamicBasket.classList.contains('slide-out')){
        dynamicBasket.classList.remove('slide-out');
        dynamicBasket.classList.add('slide-in');
    }
}

function addDynamicBasket() {
    const wrapper = document.createElement('div');
    wrapper.id = 'dynamic-basket-wrapper';

    const dynamicBasket = document.createElement('div');
    dynamicBasket.id = 'dynamic-basket';

    const quantitySelect = document.createElement('select');
    quantitySelect.id = 'dynamic-basket-select';
    quantitySelect.selectedIndex = 0;
    const option1 = document.createElement('option');
    option1.setAttribute('value', '1');
    const option1Text = document.createTextNode('1');
    option1.appendChild(option1Text);
    const option2 = document.createElement('option');
    option2.setAttribute('value', '2');
    const option2Text = document.createTextNode('2');
    option2.appendChild(option2Text);
    quantitySelect.appendChild(option1);
    quantitySelect.appendChild(option2);

    dynamicBasket.appendChild(quantitySelect);

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('a-button-stack');

    const buttonOuterSpan = document.createElement('span');
    buttonOuterSpan.classList.add('a-declarative');

    const buttonMiddleSpan = document.createElement('span');
    buttonMiddleSpan.classList.add('a-button', 'a-button-primary', 'a-button-icon');

    const buttonInnerSpan = document.createElement('span');
    buttonInnerSpan.classList.add('a-button-inner');

    const buttonIcon = document.createElement('i');
    buttonIcon.classList.add('a-icon', 'a-icon-cart');

    const buttonInput = document.createElement('input');
    buttonInput.classList.add('a-button-input');
    buttonInput.setAttribute('value', 'Add to Basket');
    buttonInput.setAttribute('title', 'Add to Shopping Basket');
    buttonInput.setAttribute('aria-labelledby', 'submit.add-to-cart-announce');

    const buttonSRtext = document.createElement('span');
    buttonSRtext.classList.add('a-button-text');
    buttonSRtext.setAttribute('aria-hidden', 'true');

    const buttonSRtextNode = document.createTextNode('Add to Basket');
    buttonSRtext.appendChild(buttonSRtextNode);

    dynamicBasket.appendChild(buttonWrapper);
    buttonWrapper.appendChild(buttonOuterSpan);
    buttonOuterSpan.appendChild(buttonMiddleSpan);
    buttonMiddleSpan.appendChild(buttonInnerSpan);

    [buttonIcon, buttonInput, buttonSRtext].forEach((element) => buttonInnerSpan.appendChild(element));

    wrapper.appendChild(dynamicBasket);

    const bodyQuery = document.getElementsByTagName('body');
    bodyQuery[0].appendChild(wrapper);

    document.addEventListener('scroll', toggleDynamicBasket);

    quantitySelect.addEventListener('change', updateQuantities);
}

function checkForBodyTag(mutations, observer) {
    const body = document.getElementsByTagName('body');

    if(body.length) {
        addDynamicBasket();
        return observer.disconnect();
    }
}

function updateQuantities({ target: { value } }) { 
    const mainQuantityDropdown = document.getElementById('mobileQuantityDropDown');
    mainQuantityDropdown.selectedIndex = Number(value) -1;
    const quantityInput = document.getElementById('quantity');
    quantityInput.setAttribute('value', value);

    const mainQuantityPrompt = document.querySelector('.a-dropdown-prompt');
    mainQuantityPrompt.innerText = value;
}

const observer = new MutationObserver(checkForBodyTag);
observer.observe(document, { attributes: true, childList: true, subtree: true });