--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9
-- Dumped by pg_dump version 16.5

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

ALTER TABLE IF EXISTS ONLY public.volunteers DROP CONSTRAINT IF EXISTS volunteers_pkey;
ALTER TABLE IF EXISTS ONLY public.team_members DROP CONSTRAINT IF EXISTS team_members_pkey;
ALTER TABLE IF EXISTS ONLY public.reviews DROP CONSTRAINT IF EXISTS reviews_pkey;
ALTER TABLE IF EXISTS ONLY public.itineraries DROP CONSTRAINT IF EXISTS itineraries_pkey;
ALTER TABLE IF EXISTS ONLY public.inquiries DROP CONSTRAINT IF EXISTS inquiries_pkey;
ALTER TABLE IF EXISTS ONLY public.fleet_vehicles DROP CONSTRAINT IF EXISTS fleet_vehicles_pkey;
ALTER TABLE IF EXISTS ONLY public.donations DROP CONSTRAINT IF EXISTS donations_pkey;
ALTER TABLE IF EXISTS ONLY public.bookings DROP CONSTRAINT IF EXISTS bookings_pkey;
ALTER TABLE IF EXISTS public.volunteers ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.team_members ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.reviews ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.itineraries ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.inquiries ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.fleet_vehicles ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.donations ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.bookings ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE IF EXISTS public.volunteers_id_seq;
DROP TABLE IF EXISTS public.volunteers;
DROP SEQUENCE IF EXISTS public.team_members_id_seq;
DROP TABLE IF EXISTS public.team_members;
DROP SEQUENCE IF EXISTS public.reviews_id_seq;
DROP TABLE IF EXISTS public.reviews;
DROP SEQUENCE IF EXISTS public.itineraries_id_seq;
DROP TABLE IF EXISTS public.itineraries;
DROP SEQUENCE IF EXISTS public.inquiries_id_seq;
DROP TABLE IF EXISTS public.inquiries;
DROP SEQUENCE IF EXISTS public.fleet_vehicles_id_seq;
DROP TABLE IF EXISTS public.fleet_vehicles;
DROP SEQUENCE IF EXISTS public.donations_id_seq;
DROP TABLE IF EXISTS public.donations;
DROP SEQUENCE IF EXISTS public.bookings_id_seq;
DROP TABLE IF EXISTS public.bookings;
SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bookings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.bookings (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    itinerary_id integer NOT NULL,
    preferred_dates text NOT NULL,
    message text,
    phone text,
    country_code text,
    number_of_adults integer DEFAULT 1,
    number_of_kids integer DEFAULT 0,
    number_of_toddlers integer DEFAULT 0,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: bookings_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.bookings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: bookings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.bookings_id_seq OWNED BY public.bookings.id;


--
-- Name: donations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.donations (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    amount numeric(10,2) NOT NULL,
    donation_type text NOT NULL,
    project_id text,
    stripe_payment_id text NOT NULL,
    stripe_customer_id text,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: donations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.donations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: donations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.donations_id_seq OWNED BY public.donations.id;


--
-- Name: fleet_vehicles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fleet_vehicles (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    capacity text NOT NULL,
    features text[] NOT NULL,
    image_url text NOT NULL,
    type text NOT NULL,
    available boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: fleet_vehicles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.fleet_vehicles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: fleet_vehicles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.fleet_vehicles_id_seq OWNED BY public.fleet_vehicles.id;


--
-- Name: inquiries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.inquiries (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    type text NOT NULL,
    message text NOT NULL
);


--
-- Name: inquiries_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.inquiries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: inquiries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.inquiries_id_seq OWNED BY public.inquiries.id;


--
-- Name: itineraries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.itineraries (
    id integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    duration integer NOT NULL,
    location text NOT NULL,
    highlights text[] NOT NULL,
    day_by_day jsonb NOT NULL,
    image_url text,
    price numeric(10,2) NOT NULL,
    category text NOT NULL,
    difficulty_level text NOT NULL,
    tags text[],
    average_rating numeric(3,2),
    total_reviews integer DEFAULT 0,
    country text DEFAULT 'Kenya'::text NOT NULL,
    package_type text DEFAULT 'Budget-Friendly'::text NOT NULL,
    experiences text[],
    featured_experience text,
    is_popular boolean DEFAULT false,
    is_featured boolean DEFAULT false,
    inclusions text[],
    perfect_for text,
    destinations text,
    seasonality text
);


--
-- Name: itineraries_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.itineraries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: itineraries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.itineraries_id_seq OWNED BY public.itineraries.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    itinerary_id integer NOT NULL,
    user_name text NOT NULL,
    rating integer NOT NULL,
    comment text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: team_members; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.team_members (
    id integer NOT NULL,
    name text NOT NULL,
    role text NOT NULL,
    bio text NOT NULL,
    image_url text NOT NULL,
    specialty text,
    years_of_experience integer,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: team_members_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.team_members_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: team_members_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.team_members_id_seq OWNED BY public.team_members.id;


--
-- Name: volunteers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.volunteers (
    id integer NOT NULL,
    name text NOT NULL,
    role text NOT NULL,
    description text NOT NULL,
    image_url text NOT NULL,
    availability text NOT NULL,
    skills text[] NOT NULL,
    status text DEFAULT 'active'::text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: volunteers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.volunteers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: volunteers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.volunteers_id_seq OWNED BY public.volunteers.id;


--
-- Name: bookings id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bookings ALTER COLUMN id SET DEFAULT nextval('public.bookings_id_seq'::regclass);


--
-- Name: donations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.donations ALTER COLUMN id SET DEFAULT nextval('public.donations_id_seq'::regclass);


--
-- Name: fleet_vehicles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fleet_vehicles ALTER COLUMN id SET DEFAULT nextval('public.fleet_vehicles_id_seq'::regclass);


--
-- Name: inquiries id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.inquiries ALTER COLUMN id SET DEFAULT nextval('public.inquiries_id_seq'::regclass);


--
-- Name: itineraries id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itineraries ALTER COLUMN id SET DEFAULT nextval('public.itineraries_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Name: team_members id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_members ALTER COLUMN id SET DEFAULT nextval('public.team_members_id_seq'::regclass);


--
-- Name: volunteers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.volunteers ALTER COLUMN id SET DEFAULT nextval('public.volunteers_id_seq'::regclass);


--
-- Name: bookings bookings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (id);


--
-- Name: donations donations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.donations
    ADD CONSTRAINT donations_pkey PRIMARY KEY (id);


--
-- Name: fleet_vehicles fleet_vehicles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fleet_vehicles
    ADD CONSTRAINT fleet_vehicles_pkey PRIMARY KEY (id);


--
-- Name: inquiries inquiries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.inquiries
    ADD CONSTRAINT inquiries_pkey PRIMARY KEY (id);


--
-- Name: itineraries itineraries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.itineraries
    ADD CONSTRAINT itineraries_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: team_members team_members_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.team_members
    ADD CONSTRAINT team_members_pkey PRIMARY KEY (id);


--
-- Name: volunteers volunteers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.volunteers
    ADD CONSTRAINT volunteers_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9
-- Dumped by pg_dump version 16.5

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

--
-- Data for Name: bookings; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.bookings VALUES (1, 'Epiphany Muriuki', 'muriuki.epiphany@gmail.com', 8, 'May 7, 2025 - Jun 11, 2025', 'Will be travelling', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (2, 'Epiphany Muriuki', 'muriuki.epiphany@gmail.com', 8, 'May 7, 2025 - Jun 11, 2025', 'Test', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (3, 'Epiphany Muriuki', 'muriuki.epiphany@gmail.com', 10, 'May 6, 2025 - Jun 11, 2025', 'I''m allergic', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (4, 'Epiphany Muriuki', 'muriuki.epiphany@gmail.com', 10, 'May 13, 2025 - Jun 16, 2025', 'Text me', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (5, 'New Mac', 'educuai@gmail.com', 7, 'May 13, 2025 - Jun 16, 2025', 'Ufala', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (6, 'Catherine Muthoni ', 'cmuthoni176@gmail.com', 10, 'Jun 25, 2025 - Jul 3, 2025', '', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (7, '', '', 0, '', '', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (8, 'Margaret Wambui', 'maggiechege12@gmail.com', 19, 'Jun 20, 2025 - Jun 25, 2025', '', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (9, 'Margaret Wambui', 'maggiechege12@gmail.com', 10, 'Jun 20, 2025 - Jun 25, 2025', '', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (10, 'Margaret Wambui', 'maggiechege12@gmail.com', 18, 'Jun 1, 2025 - Jun 7, 2025', 'TRIAL & Error', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (11, 'Margaret Wambui', 'maggiechege12@gmail.com', 12, 'Jun 3, 2025 - Jun 10, 2025', '2 adults', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (12, 'Margaret Wambui', 'maggiechege12@gmail.com', 14, 'Jul 2, 2025 - Jul 6, 2025', '', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (13, 'Lawrence Ngumo', 'ngumolawrence809@gmail.com', 18, 'Jun 18, 2025 - Jun 20, 2025', 'wazi', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (14, 'Lawrence Ngumo', 'ngumolawrence809@gmail.com', 8, 'Jun 19, 2025 - Jun 21, 2025', 'no child. just my wife and i. thank you', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (15, 'Lawrence Ngumo', 'ngumolawrence809@gmail.com', 0, 'Jun 18, 2025 - Jun 20, 2025', 'wife and kids. night game drive too', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (16, 'Margaret Wambui', 'maggiechege12@gmail.com', 12, 'Jun 26, 2025 - Jun 30, 2025', 'TRIAL', NULL, NULL, 1, 0, 0, '2025-06-24 14:58:27.51254');
INSERT INTO public.bookings VALUES (17, 'Margaret Wambui', 'maggiechege12@gmail.com', 1, 'Jul 1, 2025 - Jul 10, 2025', 'TRIAL', '748659684', '+254', 3, 2, 1, '2025-06-28 07:10:35.379418');
INSERT INTO public.bookings VALUES (18, 'Margaret Wambui', 'maggiechege12@gmail.com', 2, 'Jul 24, 2025 - Jul 31, 2025', 'TESTING', '748659684', '+254', 3, 1, 0, '2025-07-09 06:50:12.925361');


--
-- Data for Name: donations; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: fleet_vehicles; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.fleet_vehicles VALUES (1, '4×4 Land Cruiser', 'Our premium 4×4 Land Cruisers are perfect for game drives with elevated viewing for optimal wildlife spotting. These comfortable, rugged vehicles navigate all terrains with ease, making them ideal for Kenya''s national parks and reserves.', '7 passengers', '{"Pop-up roof for 360° viewing","4x4 capability for all terrains","Comfortable, spacious seating","Onboard refrigerator","Charging ports for electronics"}', '/images/fleet/_MG_9665 (1).jpg', 'Safari Vehicle', true, '2025-04-18 11:08:44.257419');
INSERT INTO public.fleet_vehicles VALUES (2, 'Coaster Bus', 'Our spacious Coaster Bus is perfect for larger groups and family safaris. With ample legroom, panoramic windows, and comfortable seating, this vehicle ensures everyone can enjoy Kenya''s magnificent landscapes and wildlife in comfort.', '22-25 passengers', '{"Spacious interiors with ample legroom","Air conditioning throughout","Large panoramic windows for viewing","Onboard PA system","Comfortable reclining seats"}', '/images/fleet/WhatsApp Image 2025-04-16 at 13.59.23.jpeg', 'Group Transport', true, '2025-04-18 11:08:44.257419');
INSERT INTO public.fleet_vehicles VALUES (3, 'Safari Van', 'Our custom Safari Vans combine comfort with practicality. Featuring pop-up roofs for unobstructed wildlife viewing and specially designed for Kenya''s diverse landscapes, these vans offer the perfect balance of comfort and adventure for small to medium groups.', '8 passengers', '{"Pop-up roof for enhanced viewing","Comfortable bucket seats","Large windows","Excellent suspension for comfort","Ample storage space for luggage"}', '/images/fleet/_MG_9680 (1).jpg', 'Safari Vehicle', true, '2025-04-18 11:08:44.257419');


--
-- Data for Name: inquiries; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.inquiries VALUES (1, 'Catherine Muthoni ', 'cmuthoni176@gmail.com', 'volunteer', 'i want to be  a volunteer ');
INSERT INTO public.inquiries VALUES (2, 'Lawrence Ngumo', 'ngumolawrence809@gmail.com', 'volunteer', '');


--
-- Data for Name: itineraries; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.itineraries VALUES (4, 'Sagana Water Rafting Adventure', 'Experience the thrill of white water rafting in the heart of Kenya''s adventure capital', 2, 'Sagana', '{"White Water Rafting","Team Building Activities","Riverside Camping","Beautiful Scenery"}', '[{"day": 1, "description": "Morning arrival, safety briefing, and afternoon river rafting session"}, {"day": 2, "description": "Full day of advanced rafting, lunch by the river, and evening departure"}]', '/images/sagana/IMG20240909110343.jpg', 199.99, 'Adventure', 'Moderate', '{rafting,water-sports,adventure}', NULL, 0, 'Kenya', 'Budget-Friendly', NULL, NULL, false, false, '{}', NULL, NULL, NULL);
INSERT INTO public.itineraries VALUES (6, 'Crater Lake Naivasha Retreat', 'Explore the serene beauty of this volcanic crater lake in the Great Rift Valley', 2, 'Naivasha', '{"Crater Lake Walking Safari",Birdwatching,"Boat Rides","Wildlife Viewing"}', '[{"day": 1, "description": "Arrival, boat ride, and evening nature walk"}, {"day": 2, "description": "Morning crater hike, wildlife viewing, and afternoon departure"}]', '/images/itineraries/naivasha/crater-lake-game-sanctuary.jpg', 249.99, 'Nature', 'Easy', '{lake,birds,hiking}', NULL, 0, 'Kenya', 'Budget-Friendly', NULL, NULL, false, false, '{}', NULL, NULL, NULL);
INSERT INTO public.itineraries VALUES (8, 'Amboseli National Park Safari', 'Experience breathtaking views of Mt. Kilimanjaro while observing large elephant herds', 4, 'Amboseli', '{"Mt. Kilimanjaro Views","Large Elephant Herds","Maasai Village Visit","Observation Hill"}', '[{"day": 1, "description": "Arrival and evening game drive"}, {"day": 2, "description": "Full day game viewing focusing on elephants"}, {"day": 3, "description": "Morning game drive and afternoon Maasai cultural visit"}, {"day": 4, "description": "Sunrise game drive with Kilimanjaro backdrop and departure"}]', '/images/itineraries/amboseli/amboseli-4734700_1280.jpg', 599.99, 'Wildlife', 'Moderate', '{elephants,kilimanjaro,wildlife}', NULL, 0, 'Kenya', 'Budget-Friendly', NULL, NULL, false, false, '{}', NULL, NULL, NULL);
INSERT INTO public.itineraries VALUES (7, 'Nakuru National Park Safari', 'Witness the famous flamingo-lined lakes and diverse wildlife of this compact national park', 3, 'Nakuru', '{"Flamingo Viewing","Rhino Sanctuary","Makalia Waterfall","Lion Hill"}', '[{"day": 1, "description": "Arrival and afternoon game drive focusing on lake ecology"}, {"day": 2, "description": "Full day game viewing with picnic lunch"}, {"day": 3, "description": "Morning waterfall hike, final game drive, and departure"}]', '/images/itineraries/nakuru/flamingo-3569881_1280.jpg', 399.99, 'Wildlife', 'Easy', '{flamingos,national-park,wildlife}', NULL, 0, 'Kenya', 'Budget-Friendly', NULL, NULL, false, false, '{}', NULL, NULL, NULL);
INSERT INTO public.itineraries VALUES (13, 'Classic Tanzania Safari', 'Experience Tanzania''s iconic parks with comfortable mid-range lodges & tented camps, private safari vehicle and expert guide.', 7, 'Tarangire, Serengeti, Ngorongoro', '{"Big Five game drives in Serengeti & Ngorongoro Crater","Cultural visit to a Maasai village","Comfortable mid-range lodges & tented camps","Private safari vehicle and expert guide"}', '{"day1": "Arrival in Arusha", "day2": "Tarangire National Park", "day3": "Serengeti", "day4": "Serengeti", "day5": "Ngorongoro", "day6": "Lake Manyara", "day7": "Departure"}', NULL, 2200.00, 'Wildlife', 'Easy', NULL, NULL, 0, 'Tanzania', 'Budget-Friendly', NULL, NULL, false, false, '{"Full board accommodation","All park entry fees","Private 4x4 safari land cruiser","English-speaking driver-guide","Airport transfers","Bottled water, binoculars, and park maps"}', 'First-time safari goers, wildlife enthusiasts, families', 'Arusha – Tarangire – Serengeti – Ngorongoro – Lake Manyara', NULL);
INSERT INTO public.itineraries VALUES (14, 'Roots & Rhythms - Cultural Uganda', 'Immersive cultural exchanges with the Batwa and Bakiga, storytelling, traditional cooking, dance, and drumming with community project support', 8, 'Fort Portal, Bwindi, Lake Bunyonyi', '{"Cultural exchanges with the Batwa and Bakiga","Storytelling, traditional cooking, dance, and drumming","Support SnowyTop''s partner NGOs and schools","Optional gorilla trek"}', '{"day1": "Arrival in Kampala", "day2": "Fort Portal", "day3": "Tooro Kingdom", "day4": "Bwindi", "day5": "Bwindi", "day6": "Lake Bunyonyi", "day7": "Lake Bunyonyi", "day8": "Departure"}', NULL, 1800.00, 'Cultural', 'Easy', NULL, NULL, 0, 'Uganda', 'Community & Cultural', NULL, NULL, false, false, '{"Local homestays + eco-lodges","Donation to community projects","English-speaking cultural guide"}', 'Travelers, students, and volunteers passionate about real connection and giving back', 'Kampala – Fort Portal – Tooro Kingdom – Lake Bunyonyi – Bwindi', NULL);
INSERT INTO public.itineraries VALUES (3, 'Diani Beach Retreat', 'Relax on Kenya''s pristine white sand beaches', 6, 'Diani Beach', '{Snorkeling,"Dolphin Watching","Beach Yoga","Local Cuisine"}', '[{"day": 1, "description": "Arrival and beach welcome"}, {"day": 2, "description": "Snorkeling adventure"}, {"day": 3, "description": "Dolphin watching excursion"}, {"day": 4, "description": "Beach yoga and spa day"}, {"day": 5, "description": "Local cooking class"}, {"day": 6, "description": "Free beach day and departure"}]', '/images/itineraries/diani/africa-4052510_1280.jpg', 1599.99, 'Beach', 'Easy', '{beach,relaxation,water-sports}', NULL, 0, 'Kenya', 'Budget-Friendly', NULL, NULL, false, false, '{}', NULL, NULL, NULL);
INSERT INTO public.itineraries VALUES (1, 'Maasai Mara Safari Adventure', 'Experience the world-famous Maasai Mara National Reserve, home to the Great Migration where millions of wildebeest and zebras cross the Mara River. This premier safari destination offers incredible wildlife viewing with lions, elephants, giraffes, and cheetahs against the backdrop of stunning savannah landscapes. Enjoy authentic cultural interactions with local Maasai communities and breathtaking sunrises over the vast plains.', 4, 'Maasai Mara', '{"Witness the Great Migration (seasonal)","Game drives to spot the Big Five","Hot air balloon safari options available","Cultural visits to traditional Maasai villages","Spectacular sunrise and sunset photography","Guided bush walks with expert naturalists"}', '[{"day": 1, "description": "Arrival and evening game drive"}, {"day": 2, "description": "Full day game viewing"}, {"day": 3, "description": "Cultural visit and afternoon safari"}, {"day": 4, "description": "Morning game drive and departure"}]', '/images/itineraries/masai_mara/safari-2833280_1280.jpg', 2499.99, 'Wildlife', 'Moderate', '{safari,wildlife,culture}', NULL, 0, 'Kenya', 'Budget-Friendly', NULL, NULL, false, false, '{}', NULL, NULL, NULL);
INSERT INTO public.itineraries VALUES (2, 'Mount Kenya Trek', 'Summit Africa''s second-highest peak', 5, 'Mount Kenya', '{"Point Lenana Summit","Alpine Landscapes","Mountain Wildlife"}', '[{"day": 1, "description": "Start trek from Sirimon Gate"}, {"day": 2, "description": "Hike to Shipton''s Camp"}, {"day": 3, "description": "Summit attempt"}, {"day": 4, "description": "Descent to Old Moses Camp"}, {"day": 5, "description": "Final descent and departure"}]', '/images/itineraries/mt_kenya/WhatsApp Image 2025-03-13 at 12.01.00.jpeg', 1899.99, 'Mountain', 'Challenging', '{hiking,adventure,mountain}', NULL, 0, 'Kenya', 'Budget-Friendly', NULL, NULL, false, false, '{}', NULL, NULL, NULL);
INSERT INTO public.itineraries VALUES (5, 'Ol Pejeta Conservancy Safari', 'Visit the world-renowned wildlife sanctuary home to the last two northern white rhinos', 3, 'Ol Pejeta', '{"Northern White Rhino Sanctuary","Chimpanzee Sanctuary","Big Five Game Drives","Conservation Education"}', '[{"day": 1, "description": "Arrival and afternoon game drive"}, {"day": 2, "description": "Full day conservation tour including rhino sanctuary"}, {"day": 3, "description": "Morning game drive, chimpanzee sanctuary visit, and departure"}]', '/images/itineraries/ol_pejeta/_MG_0067.jpg', 499.99, 'Wildlife', 'Easy', '{conservation,rhinos,wildlife}', NULL, 0, 'Kenya', 'Budget-Friendly', NULL, NULL, false, false, '{}', NULL, NULL, NULL);
INSERT INTO public.itineraries VALUES (10, 'Tsavo East National Park Safari', 'Explore the vast wilderness of Tsavo East National Park, known for its large elephant herds and the famous man-eating lions of Tsavo. This adventure offers incredible wildlife viewing in Kenya''s largest national park with its iconic red soil landscapes and the Yatta Plateau, the world''s longest lava flow.', 3, 'Tsavo East, Kenya', '{"Game drives to spot the Big Five","Scenic views of the Yatta Plateau","Bird watching with over 500 bird species","Visit the Aruba Dam to observe elephants","Spectacular sunsets against acacia trees"}', '[{"day": 1, "description": "Morning departure from Nairobi, with a scenic drive to Tsavo East National Park. Afternoon game drive to spot wildlife including elephants, lions, and giraffes. Overnight at a comfortable safari lodge with dinner under the stars."}, {"day": 2, "description": "Full day of game drives in Tsavo East, exploring the vast savannah landscapes. Visit the Aruba Dam, a popular watering hole for elephants and other wildlife. Evening sundowner with spectacular views of the park."}, {"day": 3, "description": "Early morning game drive to catch predators in action. After breakfast, visit the Yatta Plateau, the world''s longest lava flow. Depart for Nairobi in the afternoon, arriving in the evening."}]', '/images/itineraries/tsavo_east/africa-4038504_1280.jpg', 450.00, 'Wildlife Safari', 'Moderate', NULL, NULL, 0, 'Kenya', 'Budget-Friendly', NULL, NULL, false, false, '{}', NULL, NULL, NULL);
INSERT INTO public.itineraries VALUES (12, 'Luxury Tanzania Escape', 'Premium fly-in safari experience with aerial views, intimate luxury lodges, bush camps, and relaxation in Zanzibar', 10, 'Serengeti, Ngorongoro, Zanzibar', '{"Fly-in safari experience with aerial views","Intimate luxury lodges & bush camps","Champagne sundowners and bush dinners","Stone Town & white sand beaches of Zanzibar"}', '{"day1": "Arrival in Arusha", "day2": "Tarangire National Park", "day3": "Serengeti", "day4": "Serengeti", "day5": "Ngorongoro", "day6": "Lake Eyasi", "day7": "Zanzibar", "day8": "Zanzibar", "day9": "Zanzibar", "day10": "Departure"}', NULL, 3500.00, 'Luxury', 'Easy', NULL, NULL, 0, 'Tanzania', 'Luxury', NULL, NULL, false, false, '{"Domestic flights","All-inclusive luxury accommodation","Exclusive-use safari vehicle","Guided Hadzabe tribe experience at Lake Eyasi","Private tours in Zanzibar"}', 'Honeymooners, high-end travelers, photographers', 'Arusha – Tarangire – Serengeti – Ngorongoro – Lake Eyasi – Zanzibar', NULL);
INSERT INTO public.itineraries VALUES (15, 'Great Migration Adventure', 'Witness the spectacular wildebeest river crossing or calving season with expert trackers and optional balloon safari over the Serengeti', 8, 'Serengeti, Ngorongoro', '{"Witness the wildebeest river crossing or calving season","Balloon safari over the Serengeti (optional)","Migration-focused game drives with expert trackers"}', '{"day1": "Arrival in Arusha", "day2": "Transfer to Northern Serengeti", "day3": "Serengeti Migration", "day4": "Serengeti Migration", "day5": "Serengeti Migration", "day6": "Transfer to Ngorongoro", "day7": "Ngorongoro Crater", "day8": "Departure"}', NULL, 3200.00, 'Wildlife', 'Easy', NULL, NULL, 0, 'Tanzania', 'Luxury', NULL, NULL, false, false, '{"Full board tented camps & eco-lodges","Park fees and conservancy charges","Private vehicle with pop-up roof","Specialist migration guide"}', 'Nature photographers, wildlife lovers', 'Arusha – Serengeti North (July–Oct) / Ndutu (Jan–Mar) – Ngorongoro', 'July to October (river crossing) or January to March (calving)');
INSERT INTO public.itineraries VALUES (16, 'Primate Luxury Expedition', 'Premier gorilla and chimpanzee tracking expedition with exclusive forest lodges and game drives in Queen Elizabeth National Park', 8, 'Kibale Forest, Queen Elizabeth, Bwindi, Lake Bunyonyi', '{"Chimpanzee tracking in Kibale & gorilla trekking in Bwindi","Exclusive forest lodges and luxury eco-resorts","Game drives & boat cruise on the Kazinga Channel","Canoe experience at Lake Bunyonyi"}', '{"day1": "Arrival in Entebbe", "day2": "Transfer to Kibale", "day3": "Chimpanzee Tracking", "day4": "Queen Elizabeth NP", "day5": "Transfer to Bwindi", "day6": "Gorilla Trekking", "day7": "Lake Bunyonyi", "day8": "Departure"}', NULL, 4500.00, 'Wildlife', 'Moderate', NULL, NULL, 0, 'Uganda', 'Luxury', NULL, NULL, false, false, '{"All park permits (including gorilla/chimp)","Luxury 4x4 vehicle and personal guide","Full board top-tier accommodation","Domestic flight (Bwindi-Entebbe option available)"}', 'Discerning travelers seeking exclusive experiences with comfort, style, and personal service', 'Entebbe – Kibale Forest – Queen Elizabeth – Bwindi – Lake Bunyonyi', NULL);
INSERT INTO public.itineraries VALUES (17, 'Classic Uganda Highlights', 'Affordable safari featuring tree-climbing lions in Ishasha, budget-friendly gorilla trek, savanna game drives and cultural experiences', 7, 'Queen Elizabeth, Bwindi, Lake Mburo', '{"Tree-climbing lions in Ishasha sector","Budget-friendly gorilla trek","Savanna game drives and boat cruise","Cultural performance evening at Mburo"}', '{"day1": "Arrival in Kampala", "day2": "Transfer to Queen Elizabeth", "day3": "Queen Elizabeth & Ishasha", "day4": "Transfer to Bwindi", "day5": "Gorilla Trekking", "day6": "Lake Mburo", "day7": "Departure"}', NULL, 1950.00, 'Wildlife', 'Moderate', NULL, NULL, 0, 'Uganda', 'Budget-Friendly', NULL, NULL, false, false, '{"Budget/mid-range accommodations","Gorilla permit (standard tier)","Park entry fees and guided activities"}', 'Travelers who want a meaningful safari without the high cost', 'Kampala – Queen Elizabeth – Bwindi – Lake Mburo', NULL);
INSERT INTO public.itineraries VALUES (18, 'Zanzibar Luxury Escape', 'Indulgent beach retreat featuring private dhow sunset cruise, guided Stone Town tour, spa treatments and beachfront dining', 6, 'Stone Town, Nungwi Beach', '{"Private dhow sunset cruise with wine","Guided Stone Town and spice tour","Spa treatments & beachfront candlelit dinners","Stay at 5-star beach resorts or boutique villas"}', '{"day1": "Arrival in Zanzibar", "day2": "Stone Town Heritage Tour", "day3": "Spice Farm & Transfer to Beach", "day4": "Beach Relaxation & Spa", "day5": "Dhow Sunset Cruise", "day6": "Departure"}', NULL, 2800.00, 'Beach', 'Easy', NULL, NULL, 0, 'Tanzania', 'Luxury', NULL, NULL, false, false, '{"Luxury accommodation (half/full board)","Private airport transfers","Stone Town heritage walk & spice farm tour","Optional yacht charter or scuba diving"}', 'Honeymooners, wellness travelers, and guests seeking indulgence and tranquility', 'Stone Town – Nungwi or Kendwa Beach', NULL);
INSERT INTO public.itineraries VALUES (19, 'Cultural & Community-Based Safari', 'Immersive homestays and cultural experiences with Maasai and Hadzabe tribes, community project visits and traditional food experiences', 9, 'Mto wa Mbu, Ngorongoro, Lake Eyasi, Olduvai Gorge', '{"Homestays and cultural immersion with Maasai and Hadzabe","Community projects supported by SnowyTop Safaris","Traditional food experiences & craft workshops","Educational visits to local schools and health centers"}', '{"day1": "Arrival in Arusha", "day2": "Mto wa Mbu Village", "day3": "Ngorongoro", "day4": "Ngorongoro Maasai Homestay", "day5": "Lake Eyasi", "day6": "Hadzabe Experience", "day7": "Olduvai Gorge", "day8": "Community Project", "day9": "Departure"}', NULL, 1900.00, 'Cultural', 'Easy', NULL, NULL, 0, 'Tanzania', 'Community & Cultural', NULL, NULL, false, false, '{"Mix of lodges and community camps","All meals, guides, and entrance fees","Donation to local partner NGO","Cultural liaison officer"}', 'Impact travelers, students, researchers, volunteers', 'Mto wa Mbu – Ngorongoro – Lake Eyasi – Olduvai Gorge – Arusha', NULL);


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: team_members; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.team_members VALUES (2, 'Alex', 'Lead Safari Guide at Snowytop Safaris', 'Jambo! I''m Alex, Lead Guide at Snowytop Safaris, with over 35 years of experience guiding adventurers through East Africa''s most stunning landscapes. From Mount Kenya and Kilimanjaro to the Rwenzoris and Aberdares, I''ve climbed them all—and I''m passionate about sharing these experiences with you. Whether you''re aiming for a summit or enjoying a relaxed safari, I''m here to ensure your journey is safe, enriching, and unforgettable. At Snowytop Safaris, we don''t just lead trips—we create life-changing adventures. Karibu Kenya! Let''s explore the wild together.', '/images/team/alex.jpg', 'Mountain Climbing', 35, '2025-04-22 09:00:35.516925');
INSERT INTO public.team_members VALUES (3, 'Margaret', 'Tour Consultant at Snowytop Safaris', 'Hi! I''m Margaret, your go-to for planning unforgettable experiences with Snowytop Safaris. From your first inquiry to the final itinerary, I''m here to make your dream adventure seamless, personalized, and full of meaning. Let''s create something special together!', '/images/team/margaret.jpg', 'Customized Itineraries', NULL, '2025-04-22 09:00:35.516925');
INSERT INTO public.team_members VALUES (4, 'Catherine', 'Social Media and Marketing Manager at Snowytop Safaris', 'Hi! I''m Catherine. Through every post and story, I share the heart of Snowytop Safaris—adventure, impact, and community. My goal is to inspire meaningful travel and connect people to the beauty and purpose behind every journey.', '/images/team/catherine.jpg', 'Digital Storytelling', NULL, '2025-04-22 09:00:35.516925');
INSERT INTO public.team_members VALUES (5, 'Jacob', 'Hiking Guide at Snowytop Safaris', 'Jambo! I''m Jacob, a certified mountain guide with 13+ years of experience on Mt. Kenya. Born in its foothills, I''m passionate about sharing its beauty safely and memorably. Whether you''re a seasoned climber or a beginner, I''ll be with you every step of the way. Let''s climb Mt. Kenya together with Snowytop Safaris! Karibu sana!', '/images/team/jacob.jpg', 'Mt. Kenya Climbing', 13, '2025-04-22 09:00:35.516925');
INSERT INTO public.team_members VALUES (1, 'Lawrence', 'CEO & Lead Guide of Snowytop Safaris', 'Why Snowytop Safaris Exists –
"Travel with Purpose. Explore with Heart."
Snowytop Safaris was born from a simple but powerful dream: to transform tourism into a force for good.
At our core, we exist to connect travelers with the soul of East Africa—its wild beauty, resilient communities, and untold stories. We''re not just another safari company; we are a movement redefining what it means to explore. From the majestic peaks of Mount Kenya to the quiet strength of rural villages, we design journeys that do more than delight—they empower.

Founded by passionate locals with decades of experience in guiding, hospitality, and community development, Snowytop Safaris is built on three pillars: eco-tourism, community empowerment, and conservation. Every itinerary we create supports local economies, preserves cultural heritage, and protects the landscapes we love.

Our travelers don''t just take pictures—they leave legacies', '/images/team/lawrence.jpg', 'Community-Based Tourism', 20, '2025-04-22 09:00:35.516925');


--
-- Data for Name: volunteers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.volunteers VALUES (1, 'David Njoroge', 'Conservation Assistant', 'Help protect and monitor wildlife in our national parks while educating visitors about conservation efforts.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', 'Weekends, 3-month minimum commitment', '{"Wildlife Knowledge","Physical Fitness",Communication,"Basic First Aid"}', 'active', '2025-03-13 10:32:25.467574');
INSERT INTO public.volunteers VALUES (2, 'Emily Wangari', 'Community Outreach Coordinator', 'Bridge the gap between local communities and tourism initiatives, promoting sustainable development and cultural preservation.', 'https://images.unsplash.com/photo-1580489944761-15a19d654956', 'Flexible, 20 hours per week', '{"Community Relations","Project Management","Local Language","Cultural Awareness"}', 'active', '2025-03-13 10:32:25.467574');
INSERT INTO public.volunteers VALUES (3, 'Thomas Mutua', 'Eco-Guide Trainee', 'Learn to lead educational tours while promoting environmental awareness and sustainable tourism practices.', 'https://images.unsplash.com/photo-1542178243-bc20204b769f', 'Full-time, 6-month program', '{"Environmental Science","Hiking Experience",Teaching,Photography}', 'active', '2025-03-13 10:32:25.467574');
INSERT INTO public.volunteers VALUES (4, 'Lucy Adhiambo', 'Wildlife Rehabilitation Assistant', 'Support our wildlife rehabilitation program, helping injured animals recover and return to their natural habitat.', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2', 'Part-time, flexible schedule', '{"Veterinary Experience","Animal Care","Record Keeping",Patience}', 'active', '2025-03-13 10:32:25.467574');


--
-- Name: bookings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.bookings_id_seq', 18, true);


--
-- Name: donations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.donations_id_seq', 1, false);


--
-- Name: fleet_vehicles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.fleet_vehicles_id_seq', 3, true);


--
-- Name: inquiries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.inquiries_id_seq', 2, true);


--
-- Name: itineraries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.itineraries_id_seq', 19, true);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.reviews_id_seq', 1, false);


--
-- Name: team_members_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.team_members_id_seq', 5, true);


--
-- Name: volunteers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.volunteers_id_seq', 4, true);


--
-- PostgreSQL database dump complete
--

