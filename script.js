const items = [ ...document.querySelectorAll('.item')]

items.forEach(item => {
  item.addEventListener('click', (e) => { 
    const clickedItem = e.target.closest('li');
    const answerText = clickedItem.querySelector('.answer-text'); 
    const clickedItemActive = clickedItem.classList.contains('active');
    clickedItem.classList.toggle('active');
    if (clickedItemActive) {
      answerText.style.maxHeight = null;
    }
    else {
      const scrollHeight = answerText.scrollHeight;
      answerText.style.maxHeight = '${scrollHeight}px';
    }
  })
    
})