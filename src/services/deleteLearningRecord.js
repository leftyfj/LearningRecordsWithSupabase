import { supabase } from "../lib/supabase"

export const deleteLearningRecord = async(id) => {
 const { error } = await supabase
  .from('learning')
  .delete()
  .eq('id',id);

 if(error) throw error;
};
