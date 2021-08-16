import { message } from 'antd';
const messageStyle = {
  position: 'fixed',
  bottom: '10px',
  left: '0',
  right: '0',
};
const popupMessage = (type, param) => {
  //ディフォルト値のノーマライズ
  let content = '';
  switch (type) {
    case 'loading':
      content = param['content'] ? param.content : 'Loading...';
      break;
    case 'success':
      content = param['content'] ? param.content : 'success!';
      break;
    case 'error':
      content = param['content'] ? param.content : 'error';
      break;
    default:
      content = param['content'] ? param.content : 'error';
      break;
  }
  param.content = content;
  param.style = param['style'] ? param.style : messageStyle;
  if (!param['duration']) {
    param.duration = type === 'loading' ? 30 : 2;
  }
  if (type) {
    message[type](param);
  }
};

export default popupMessage;
