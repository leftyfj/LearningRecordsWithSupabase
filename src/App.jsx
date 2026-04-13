

import './App.css'
import { useLearningRecords } from './hooks/useLearningRecords';
import { InputFormArea } from "./components/InputFormArea";
import { LogList } from "./components/LogList";
import { TotalHours } from "./components/TotalHours";


function App() {
  const {
      studyContent,
      records,
      totalHours,
      onChangeContent,
      onChangeHour,
      handleRegister,
      onClickDelete
  } = useLearningRecords();
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
