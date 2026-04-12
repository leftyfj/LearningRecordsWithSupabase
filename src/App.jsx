
import {useState} from "react";
import { InputTextarea } from "./components/InputTextarea";
import { InputHour } from "./components/InputHour";
import './App.css'

function App() {
  const [studyContent, setStudyContent] = useState({title:"", hour:""})
  const onChangeContent = (e) => {
    setStudyContent({...studyContent, title:e.target.value })
  }
  const onChangeHour = (e) => {
    setStudyContent({...studyContent, hour:Number(e.target.value)});
  }
  return (
      <div className="container mt-5">
          <h1 className="fs-2 text-center">学習記録登録アプリ</h1>
          <form action="" method="post">
              <div className="mb-3">
                  <InputTextarea
                      label="学習内容"
                      name="study-content"
                      value={studyContent.title}
                      placeholder="学習内容を入力してください"
                      onChange={onChangeContent}
                  />
              </div>
              <div className="mb-3">
                  <InputHour
                      label="学習内容"
                      type="number"
                      name="study-content"
                      value={studyContent.hour}
                      placeholder="0"
                      onChange={onChangeHour}
                  />
              </div>
              <h2 className="mt-4 fs-4">入力内容</h2>
              <p>
                  <span className="fw-bold">学習内容</span>:
                  <span id="input-content_text">{studyContent.title}</span>
              </p>
              <p>
                  <span className="fw-bold">学習時間</span>:
                  <span id="input-content_hours">{studyContent.hour}</span>
              </p>
              <button type="submit" className="btn btn-primary">
                  登録
              </button>
          </form>
          <div className="study-log-area mt-5">
              <h2 className="fs-4">学習記録一覧</h2>
              <table className="table  table-striped mt-3">
                  <thead>
                      <tr>
                          <th style={{ width: '24px' }} scope="col">
                              #
                          </th>
                          <th style={{ width: '96px' }} scope="col">
                              日時
                          </th>
                          <th style={{ width: 'auto' }} scope="col">
                              内容
                          </th>
                          <th
                              className="text-center"
                              style={{ width: '96px' }}
                              scope="col"
                          >
                              時間
                          </th>
                          <th
                              className="text-center"
                              style={{ width: '96px' }}
                              scope="col"
                          ></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="align-middle">
                          <th scope="row">1</th>
                          <td>2026-4-1</td>
                          <td>React基礎</td>
                          <td className="text-end">1.0</td>
                          <td className="text-center">
                              <button className="btn btn-success">削除</button>
                          </td>
                      </tr>
                      <tr className="align-middle">
                          <th scope="row">2</th>
                          <td>2026-4-2</td>
                          <td>CSSアニメーション</td>
                          <td className="text-end">1.0</td>
                          <td className="text-center">
                              <button className="btn btn-success">削除</button>
                          </td>
                      </tr>
                  </tbody>
              </table>
              <p className="mt-5 text-end fw-bold">
                  <span>累計時間:</span>10.0時間
              </p>
          </div>
      </div>
  );
}

export default App
