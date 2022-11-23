const POINT_GET = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const POINT_POST = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSucces, onFail) => {
  fetch(POINT_GET, {
  }).then((response) => response.json())
    .then((data) => onSucces(data))
    .catch(() => onFail('Ошибка загрузки фотографий пользователей'));
};

const sendData = (onSucces, onFail, body) => {
  fetch(POINT_POST, {
    method: 'POST',
    body,
  })
    .then((response) => response.ok ? onSucces() : onFail())
    .catch (() => onFail());
};

export {getData, sendData};
