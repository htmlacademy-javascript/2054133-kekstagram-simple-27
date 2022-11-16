const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  const container = document.querySelector('.img-upload');

  alertContainer.style.marginBottom = '10px';
  alertContainer.style.padding = '10px 5px';
  alertContainer.style.fontSize = '15px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ff4d4d';
  alertContainer.style.borderRadius = '2px';
  alertContainer.style.maxWidth = '500px';
  alertContainer.style.marginLeft = 'auto';
  alertContainer.style.marginRight = 'auto';

  alertContainer.textContent = message;

  container.prepend(alertContainer);
};

export {showAlert};
