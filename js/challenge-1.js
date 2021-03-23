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

    const buttonWrapper = document.createElement('div');
    buttonWrapper.id = 'dynamic-basket-button-wrapper';
    buttonWrapper.classList.add('a-button-stack');

    const buttonOuterSpan = document.createElement('span');
    buttonOuterSpan.classList.add('a-declarative');

    const buttonMiddleSpan = document.createElement('span');
    buttonMiddleSpan.id = "dynamic-basket-button-middle-span";
    buttonMiddleSpan.classList.add('a-button', 'a-spacing-small', 'a-button-primary', 'a-button-icon');

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
    bodyQuery[0].appendChild(wrapper)

    document.addEventListener('scroll', toggleDynamicBasket);
}

function checkForBodyTag(mutations, observer) {
    const body = document.getElementsByTagName('body');

    if(body.length) {
        addDynamicBasket();
        return observer.disconnect();
    }
}

const observer = new MutationObserver(checkForBodyTag);
observer.observe(document, { attributes: true, childList: true, subtree: true });