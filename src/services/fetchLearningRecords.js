import { supabase } from "../lib/supabase"

export const fetchLearningRecords = async() => {
 try {
   const { data, error } = await supabase
       .from('learning')
       .select('*')
       .order('createdAt', { ascending: false });

   if (error) throw error;

   return data;
 } catch(error) {
  console.log("データ取得失敗:", error.message);
  throw error;

 }

}
