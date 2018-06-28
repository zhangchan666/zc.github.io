const toggleList = document.querySelector('#an');
const listDiv = document.querySelector('.nei');





toggleList.addEventListener('click', () => {
    if (listDiv.style.display === "none") {
        listDiv.style.display = 'block';
        toggleList.textContent = '隐藏列表';
    } else {
        listDiv.style.display = 'none';
        toggleList.textContent = '显示列表';
    }
});

