--
-- SnowyTop Safaris Database Export
-- Complete database schema and data for local installation
-- Generated: $(date)
--

-- PostgreSQL database dump
-- Dumped from database version 16.9

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Drop existing tables and sequences if they exist
ALTER TABLE IF EXISTS ONLY public.volunteers DROP CONSTRAINT IF EXISTS volunteers_pkey;
ALTER TABLE IF EXISTS ONLY public.team_members DROP CONSTRAINT IF EXISTS team_members_pkey;
ALTER TABLE IF EXISTS ONLY public.reviews DROP CONSTRAINT IF EXISTS reviews_pkey;
ALTER TABLE IF EXISTS ONLY public.itineraries DROP CONSTRAINT IF EXISTS itineraries_pkey;
ALTER TABLE IF EXISTS ONLY public.inquiries DROP CONSTRAINT IF EXISTS inquiries_pkey;
ALTER TABLE IF EXISTS ONLY public.fleet_vehicles DROP CONSTRAINT IF EXISTS fleet_vehicles_pkey;
ALTER TABLE IF EXISTS ONLY public.donations DROP CONSTRAINT IF EXISTS donations_pkey;
ALTER TABLE IF EXISTS ONLY public.bookings DROP CONSTRAINT IF EXISTS bookings_pkey;

DROP SEQUENCE IF EXISTS public.volunteers_id_seq CASCADE;
DROP TABLE IF EXISTS public.volunteers CASCADE;
DROP SEQUENCE IF EXISTS public.team_members_id_seq CASCADE;
DROP TABLE IF EXISTS public.team_members CASCADE;
DROP SEQUENCE IF EXISTS public.reviews_id_seq CASCADE;
DROP TABLE IF EXISTS public.reviews CASCADE;
DROP SEQUENCE IF EXISTS public.itineraries_id_seq CASCADE;
DROP TABLE IF EXISTS public.itineraries CASCADE;
DROP SEQUENCE IF EXISTS public.inquiries_id_seq CASCADE;
DROP TABLE IF EXISTS public.inquiries CASCADE;
DROP SEQUENCE IF EXISTS public.fleet_vehicles_id_seq CASCADE;
DROP TABLE IF EXISTS public.fleet_vehicles CASCADE;
DROP SEQUENCE IF EXISTS public.donations_id_seq CASCADE;
DROP TABLE IF EXISTS public.donations CASCADE;
DROP SEQUENCE IF EXISTS public.bookings_id_seq CASCADE;
DROP TABLE IF EXISTS public.bookings CASCADE;

SET default_tablespace = '';
SET default_table_access_method = heap;
