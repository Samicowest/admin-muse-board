-- Fix RLS policies to allow the trigger function to insert data
-- Allow inserts to profiles table for new users
CREATE POLICY "Allow profile creation during signup" 
ON public.profiles 
FOR INSERT 
WITH CHECK (true);

-- Allow inserts to user_roles table for new users  
CREATE POLICY "Allow user role assignment during signup"
ON public.user_roles 
FOR INSERT 
WITH CHECK (true);