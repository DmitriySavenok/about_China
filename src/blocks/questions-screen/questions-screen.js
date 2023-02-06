function unwrapQuestioncard() {
  console.log("Скрипт разворачивания карточки загружен")

  document.querySelectorAll('.question-card__toggle-button').forEach(elements => {
    console.log("найдены элементы")
    elements.addEventListener('click', (event) => {

      if (event.target.id === 'question_1_detailed') {
        questionCard = document.querySelector('#question_1').classList.toggle('question-card__toggle-button--pressed');
      }
    })
  })
}

unwrapQuestioncard();
