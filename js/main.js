const tabsButtons = document.querySelectorAll('.tabs__button');
const tabsContent = document.querySelectorAll('.tabs__item');

tabsButtons.forEach((tabButton, index) => {
    const currentButton = tabButton;

    currentButton.addEventListener('click', () => {

        if (!tabButton.classList.contains('active')) {
            tabsButtons.forEach((item) => {
            item.classList.remove('active');
        });
            
            tabsContent.forEach((item) => {
            item.classList.remove('active');
        });
            
            tabsButtons[index].classList.add('active');
            tabsContent[index].classList.add('active');
        }
    });
});

document.querySelector('.tabs__button:nth-child(1)').click()