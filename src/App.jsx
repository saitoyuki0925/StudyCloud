import { useEffect, useState } from 'react';
import './App.css';
import { Archive } from './components/Archive';
import { Inputform } from './components/Inputform';
import { Total } from './components/Total';
import { getAllStudyLog } from '../utils/supabaseFunctions/supabaseFunctions';

export const App = () => {
  const [records, setRecords] = useState([]);
  const [detail, setDetail] = useState('');
  const [time, setTime] = useState(0);
  const [error, setError] = useState('');
  const [isCheckValue, setIsCheckValue] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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
  const getStudyLog = async () => {
    const studyLogs = await getAllStudyLog();
    setRecords(studyLogs);

    const sum = studyLogs.reduce((acc, record) => acc + parseInt(record.time || 0), 0);
    setTotalTime(sum);

    setIsLoading(false);
  };
  useEffect(() => {
    getStudyLog();
  }, []);

  return (
    <>
      <Inputform detail={detail} time={time} onChangeDetailValue={onChangeDetailValue} onChangeTimeValue={onChangeTimeValue} onClickRegistration={onClickRegistration} isCheckValue={isCheckValue} error={error} totalTime={totalTime} />
      {isLoading ? (
        <h1>ロード中</h1>
      ) : (
        <>
          <Archive records={records} />
          <Total totalTime={totalTime} />
        </>
      )}
    </>
  );
};
