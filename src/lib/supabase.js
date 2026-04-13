import { createClient } from '@supabase/supabase-js';

// Supabaseダッシュボードの「Settings > API」にある値を貼り付けます
const supabaseUrl = 'https://sfpofatjojxcindvtcdo.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmcG9mYXRqb2p4Y2luZHZ0Y2RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5OTA1NjEsImV4cCI6MjA5MTU2NjU2MX0.dDC2ZAffMcYxozcodbZ162dYDMQWUnQmqGtvTgGNECQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
