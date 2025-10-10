import { supabase } from '../supabase';

export const getAllStudyLog = async () => {
  const studyLog = await supabase.from('study-record').select('*');
  return studyLog.data;
};

export const addStudyLog = async (title, time) => {
  const { data, error } = await supabase.from('study-record').insert({ title, time }).select().single();

  return data;
};

export const DeleteStudyLog = async (id) => {
  console.log(id);

  await supabase.from('study-record').delete().eq('id', id);
};
