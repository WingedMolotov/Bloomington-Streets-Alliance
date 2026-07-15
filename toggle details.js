function toggleDetails(toggleButton, hiddenWrapper, beginOpen) {
    let open = beginOpen;

    hiddenWrapper.style.overflow = 'hidden';
    hiddenWrapper.style.transition = 'height 0.6s ease';

    toggleButton.style.cursor = 'pointer';
    toggleButton.style.transition = 'transform 0.6s ease';

    hiddenWrapper.style.height = open ? 'auto' : '0px';

    toggleButton.style.transform = open ? 'rotate(0deg)' : 'rotate(-90deg)';

    toggleButton.addEventListener('click', function () {
        if (!open) {
            // open
            hiddenWrapper.style.height = '0px';

            requestAnimationFrame(() => {
                hiddenWrapper.style.height = hiddenWrapper.scrollHeight + 'px';
            });
            requestAnimationFrame(() => {
                toggleButton.style.transform = 'rotate(0deg)';
            });

            open = true;
        } else {
            // close
            hiddenWrapper.style.height = hiddenWrapper.scrollHeight + 'px';

            void hiddenWrapper.offsetHeight;

            requestAnimationFrame(() => {
                hiddenWrapper.style.height = '0px';
            });
            requestAnimationFrame(() => {
                toggleButton.style.transform = 'rotate(-90deg)';
            });

            open = false;
        }
    });
}