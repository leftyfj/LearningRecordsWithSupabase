
import {useEffect, useState} from "react";

import { saveLearningRecord } from "./services/saveLearningRecord";
import './App.css'
import { fetchLearningRecords } from "./services/fetchLearningRecords";
import { InputFormArea } from "./components/InputFormArea";
import { LogList } from "./components/LogList";
import { TotalHours } from "./components/TotalHours";
import { deleteLearningRecord } from "./services/deleteLearningRecord";

function App() {
  const [studyContent, setStudyContent] = useState({title:"", hour:""})
  const onChangeContent = (e) => {
    setStudyContent({...studyContent, title:e.target.value })
  }
  const onChangeHour = (e) => {
    setStudyContent({...studyContent, hour:Number(e.target.value)});
  }

  const handleRegister = async(formData) => {
    const content = await formData.get('study-content');
    const hour = await formData.get('study-hour');

    try {
        await saveLearningRecord(content, hour);
        alert("学習記録を保存しました!");
        setStudyContent({title:"", hour:""});
        //保存後にデータを再取得して一覧を更新する
        await loadData();
    } catch(error) {
        alert('保存に失敗しました: ' + error.message);
    }

  }

  const onClickDelete = async(id) => {
    if(!window.confirm("本当に削除しますか")) return;

    try {
        await deleteLearningRecord(id);
        await loadData();
    } catch(error) {
        console.error(error.message);
    }
  }
  //データ取得に関する処理
  const [records, setRecords] = useState([]);

  const loadData = async() => {
    try {
        const data = await fetchLearningRecords();
        setRecords(data);
    } catch(e) {
        console.error(e);
    }
  };

  //画面が表示されたときに一度だけ実行
  useEffect(() => {
    loadData();
  },[]);

  const totalHours = records.reduce((sum, record) => sum + Number(record.hour),0);
  return (
      <div className="container mt-5">
          <h1 className="fs-2 text-center">学習記録登録アプリ</h1>
          <InputFormArea
              studyContent={studyContent}
              handleRegister={handleRegister}
              onChangeContent={onChangeContent}
              onChangeHour={onChangeHour}
          />
          <div className="study-log-area mt-5">
              <h2 className="fs-4">学習記録一覧</h2>
              <LogList records={records} onClickDelete={onClickDelete}/>
              <TotalHours totalHours={totalHours} />
          </div>
      </div>
  );
}

export default App
