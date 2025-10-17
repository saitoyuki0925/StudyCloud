export const Archive = (props) => {
  const { records, onClick } = props;
  return (
    <>
      <h1 className="archive" data-testid="title">
        学習記録一覧
      </h1>
      <ul className="archive-list" data-testid="list">
        {records.map((record) => (
          <li key={record.id} className="archive-item">
            {record.title} | {record.time}時間
            <button
              onClick={() => {
                onClick(record.id);
              }}
              data-testid="delete-button"
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
