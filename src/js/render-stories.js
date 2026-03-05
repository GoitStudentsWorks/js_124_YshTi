import { getFeedback } from './comments_service';
const textElement = document.querySelector('.textFedbacks');

export function render(page = 2) {
  getFeedback(page)
    .then(data => {
      const markup = data.feedbacks
        .map(({ author, rate, description }) => {
          return `<li class="feedbacks-content">
              <div class="feedback-rate">${rate}</div>
              <div class="feedback-description">${description}</div>
              <div class="feedback-author">${author}</div>
          </li>`;
        })
        .join('');
      textElement.insertAdjacentHTML('beforeend', markup);
    })
    .catch(err => {
      console.log(err);
    });
}
