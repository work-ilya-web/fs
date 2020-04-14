const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, clickCloseOverlay = true, scrollContent = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calc_scroll(scrollContent);

        trigger.forEach((i) => {
            i.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach((item) => {
                    item.classList.remove('active');
                });

                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                modal.classList.add('active');
            });
        });

        close.addEventListener('click', () => {
            windows.forEach((item) => {
                item.classList.remove('active');
            });

            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal && clickCloseOverlay) {
                windows.forEach((item) => {
                    item.classList.remove('active');
                });

                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                modal.classList.remove('active');
            }
        });
    }

    function calc_scroll(scrollContent) {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth; // сама прокрутка
        div.remove();
        if (scrollContent) {
            return scrollWidth - scrollWidth;
        } else {
            return scrollWidth;
        }
    }

    bindModal('.subscribe-btn', '.popup-subscribe', '.popup-subscribe .popup__close', false, true);
    bindModal('.popup-search__button', '.popup-search', '.popup-search .popup__close', false, true);
};

export default modals;
