export const Archive = (props) => {
  const { records } = props;
  return (
    <>
      <h1 className="archive">学習記録一覧</h1>
      <ul className="archive-list">
        {records.map((record) => (
          <li key={record.title} className="archive-item">
            {record.title} | {record.time}時間
          </li>
        ))}
      </ul>
    </>
  );
};
