import { useEffect, useState } from 'react';
import { saveLearningRecord } from '../services/saveLearningRecord';
import { fetchLearningRecords } from '../services/fetchLearningRecords';
import { deleteLearningRecord } from '../services/deleteLearningRecord';
import '../App.css';

export const useLearningRecords = () => {
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

   return {
    studyContent,
    records,
    totalHours,
    onChangeContent,
    onChangeHour,
    handleRegister,
    onClickDelete
   };
};
