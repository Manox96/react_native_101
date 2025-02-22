import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ukqgfzjcpmnuhodzwcht.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrcWdmempjcG1udWhvZHp3Y2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4ODQ2NTgsImV4cCI6MjA1NTQ2MDY1OH0.H_pOmAoZM02I4UINwwNR_yNOjZQGC0H2lil3W-mnEVU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 