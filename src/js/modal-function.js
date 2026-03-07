import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import createOrder from './api';

export function openModalForm() {
  const backdrop = document.getElementById('form-backdrop');
  if (!backdrop) return;

  const form = backdrop.querySelector('form');
  const modalCloseButton = backdrop.querySelector('.modalCloseButton');

  if (!backdrop.dataset.handlersAttached) {
    if (modalCloseButton) {
      modalCloseButton.addEventListener('click', closeFormModal);
    }

    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) closeFormModal();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !backdrop.classList.contains('is-hidden')) {
        closeFormModal();
      }
    });

    if (form) {
      form.addEventListener('submit', async e => {
        e.preventDefault();
        if (!form.reportValidity()) return;

        const formData = {
          name: form.name.value.trim(),
          phone: form.tel.value.trim(),
          animalId: '667ad1b8e4b01a2b3c4d5e55',
          comment: form.comment.value.trim(),
        };

        try {
          await createOrder(formData);

          Swal.fire({
            icon: 'success',
            title: 'Успіх!',
            text: 'Ваша заявка відправлена.',
          });

          closeFormModal();
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Помилка',
            text:
              error.response?.data?.message ||
              'Помилка при відправленні заявки',
          });
        }
      });
    }

    backdrop.dataset.handlersAttached = 'true';
  }

  backdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
}

function closeFormModal() {
  const backdrop = document.getElementById('form-backdrop');
  if (!backdrop) return;
  const form = backdrop.querySelector('form');
  if (form) form.reset();
  backdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
}
