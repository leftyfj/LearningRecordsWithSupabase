import { supabase } from "../lib/supabase";
/**
 * 学習記録をSupabaseに保存する関数
 * @param {string} content - 学習内容
 * @param {string|number} hour - 学習時間
 */
export const saveLearningRecord = async(content, hour) => {
 try {
  const hourNum = Number(hour);
  // 数値が正しくない場合の簡単なチェック
   if (isNaN(hourNum)) {
     throw new Error("学習時間には数値を入力してください。");
   }
 const { data, error } = await supabase
   .from('learning')
   .insert([
    {
     content:content,
     hour:hourNum
    }
   ]);

   if(error){
    throw error;
   }

   return data
 } catch(error) {
     console.error('保存処理中にエラーが発生しました:', error.message);
     throw error; // App.jsx側でもエラーを扱えるように再送出
 }
};
