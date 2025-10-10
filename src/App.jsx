import { useState } from 'react';
import './App.css';
import { Archive } from './components/Archive';
import { Inputform } from './components/Inputform';
import { Total } from './components/Total';
export const App = () => {
  const [records, setRecords] = useState([]);

  const [detail, setDetail] = useState('');
  const [time, setTime] = useState(0);
  const [error, setError] = useState('');
  const [isCheckValue, setIsCheckValue] = useState(false);
  const [totalTime, setTotalTime] = useState(0);

  const onChangeDetailValue = (event) => setDetail(event.target.value);
  const onChangeTimeValue = (event) => setTime(event.target.value);
  const onClickRegistration = () => {
    if (detail === '' || time === '' || time === '0') {
      setError('入力項目が正しくありません');
      setIsCheckValue(true);
      return;
    } else {
      setIsCheckValue(false);
    }
    const newRecord = { title: detail, time };
    const newRecords = [...records, newRecord];
    setRecords(newRecords);
    setDetail('');
    setTime('');
    setTotalTime(parseInt(totalTime) + parseInt(time));
  };

<<<<<<< Updated upstream
  return (
    <>
      <Inputform detail={detail} time={time} onChangeDetailValue={onChangeDetailValue} onChangeTimeValue={onChangeTimeValue} onClickRegistration={onClickRegistration} isCheckValue={isCheckValue} error={error} totalTime={totalTime} />
      <Archive records={records} />
      <Total totalTime={totalTime} />
=======
  const getStudyLog = async () => {
    const studyLogs = await getAllStudyLog();
    setRecords(studyLogs);

    const sum = studyLogs.reduce((acc, record) => acc + parseInt(record.time || 0), 0);
    setTotalTime(sum);

    setIsLoading(false);
  };

  const onClickDeleteRecord = async (recordId) => {
    setRecords((prev) => prev.filter((r) => r.id !== recordId));

    setTotalTime((prev) => {
      const target = records.find((record) => record.id === recordId);
      return target ? prev - Number(target.time || 0) : prev;
    });

    await DeleteStudyLog(recordId);
  };

  useEffect(() => {
    getStudyLog();
  }, []);

  return (
    <>
      <Inputform detail={detail} time={time} onChangeDetailValue={onChangeDetailValue} onChangeTimeValue={onChangeTimeValue} onClickRegistration={onClickRegistration} isCheckValue={isCheckValue} error={error} totalTime={totalTime} />
      {isLoading ? (
        <h1>ロード中です！</h1>
      ) : (
        <>
          <Archive records={records} onClick={onClickDeleteRecord} />
          <Total totalTime={totalTime} />
        </>
      )}
>>>>>>> Stashed changes
    </>
  );
};
