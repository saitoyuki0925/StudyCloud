import { memo } from 'react';

export const Inputform = memo((props) => {
  const { detail, time, onChangeDetailValue, onChangeTimeValue, onClickRegistration, isCheckValue, error } = props;
  console.log('Inputformがレンダリングされたよ');

  return (
    <form className="from">
      <p className="from-input">
        <label htmlFor="detail">学習内容</label>
        <input type="text" id="detail" value={detail} onChange={onChangeDetailValue} data-testid="input-text" aria-label="新しい学習を入力" />
      </p>
      <p className="from-input">
        <label htmlFor="time">学習時間</label>
        <input type="number" id="time" value={time} onChange={onChangeTimeValue} data-testid="input-time" aria-label="新しい学習時間を入力" />
      </p>
      {isCheckValue && (
        <p data-testid="error">
          <small style={{ color: 'red' }}>{error}</small>
        </p>
      )}
      <p className="from-detail">
        入力されている内容: <br />
        <span>{detail}</span>
      </p>
      <p className="from-detail">
        入力されている時間: <br />
        <span> {time}時間</span>
      </p>
      <button type="button" onClick={onClickRegistration} data-testid="registration-button">
        登録
      </button>
    </form>
  );
});
