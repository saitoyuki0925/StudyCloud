import { supabase } from '../supabase';

export const getAllStudyLog = async () => {
  const studyLog = await supabase.from('study-record').select('*');
  return studyLog.data;
};
