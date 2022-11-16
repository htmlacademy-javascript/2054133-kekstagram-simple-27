const getData = (onSucces, onFail) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data', {
  }).then((response) => response.json())
    .then((data) => {
      onSucces(data);
    })
    .catch(() => onFail('Ошибка загрузки фотографий пользователей'));
};

const sendData = (onSucces, onFail, body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simpl', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSucces();
      }
      else {
        onFail();
      }
    })
    .catch (() => onFail());
};

export {getData, sendData};
