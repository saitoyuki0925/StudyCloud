import { memo } from 'react';

export const Total = memo((porps) => {
  console.log('Totalがレンダリングされた');

  const { totalTime } = porps;

  return <p className="total">合計時間 {totalTime}/1000h</p>;
});
