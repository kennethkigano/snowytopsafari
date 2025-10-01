-- Add new columns for package information based on the document structure
ALTER TABLE itineraries ADD COLUMN IF NOT EXISTS inclusions TEXT[] DEFAULT '{}';
ALTER TABLE itineraries ADD COLUMN IF NOT EXISTS perfect_for TEXT;
ALTER TABLE itineraries ADD COLUMN IF NOT EXISTS destinations TEXT;
ALTER TABLE itineraries ADD COLUMN IF NOT EXISTS seasonality TEXT;

-- Update package_type values to match the document categories
UPDATE itineraries SET package_type = 'Luxury' WHERE package_type = 'Premium' OR package_type = 'VIP';
UPDATE itineraries SET package_type = 'Budget-Friendly' WHERE package_type = 'Classic' OR package_type = 'Standard';
UPDATE itineraries SET package_type = 'Community & Cultural' WHERE package_type = 'Cultural' OR package_type = 'Community';

-- Add sample package data based on the document
-- Tanzania Luxury
INSERT INTO itineraries (title, description, duration, location, country, highlights, day_by_day, price, category, package_type, difficulty_level, perfect_for, destinations, inclusions)
VALUES (
  'Luxury Tanzania Escape', 
  'Premium fly-in safari experience with aerial views, intimate luxury lodges, bush camps, and relaxation in Zanzibar',
  10,
  'Serengeti, Ngorongoro, Zanzibar',
  'Tanzania',
  ARRAY['Fly-in safari experience with aerial views', 'Intimate luxury lodges & bush camps', 'Champagne sundowners and bush dinners', 'Stone Town & white sand beaches of Zanzibar'],
  '{"day1": "Arrival in Arusha", "day2": "Tarangire National Park", "day3": "Serengeti", "day4": "Serengeti", "day5": "Ngorongoro", "day6": "Lake Eyasi", "day7": "Zanzibar", "day8": "Zanzibar", "day9": "Zanzibar", "day10": "Departure"}',
  3500.00,
  'Luxury',
  'Luxury',
  'Easy',
  'Honeymooners, high-end travelers, photographers',
  'Arusha – Tarangire – Serengeti – Ngorongoro – Lake Eyasi – Zanzibar',
  ARRAY['Domestic flights', 'All-inclusive luxury accommodation', 'Exclusive-use safari vehicle', 'Guided Hadzabe tribe experience at Lake Eyasi', 'Private tours in Zanzibar']
) ON CONFLICT DO NOTHING;

-- Tanzania Budget-Friendly
INSERT INTO itineraries (title, description, duration, location, country, highlights, day_by_day, price, category, package_type, difficulty_level, perfect_for, destinations, inclusions)
VALUES (
  'Classic Tanzania Safari', 
  'Experience Tanzania''s iconic parks with comfortable mid-range lodges & tented camps, private safari vehicle and expert guide.',
  7,
  'Tarangire, Serengeti, Ngorongoro',
  'Tanzania',
  ARRAY['Big Five game drives in Serengeti & Ngorongoro Crater', 'Cultural visit to a Maasai village', 'Comfortable mid-range lodges & tented camps', 'Private safari vehicle and expert guide'],
  '{"day1": "Arrival in Arusha", "day2": "Tarangire National Park", "day3": "Serengeti", "day4": "Serengeti", "day5": "Ngorongoro", "day6": "Lake Manyara", "day7": "Departure"}',
  2200.00,
  'Wildlife',
  'Budget-Friendly',
  'Easy',
  'First-time safari goers, wildlife enthusiasts, families',
  'Arusha – Tarangire – Serengeti – Ngorongoro – Lake Manyara',
  ARRAY['Full board accommodation', 'All park entry fees', 'Private 4x4 safari land cruiser', 'English-speaking driver-guide', 'Airport transfers', 'Bottled water, binoculars, and park maps']
) ON CONFLICT DO NOTHING;

-- Uganda Cultural
INSERT INTO itineraries (title, description, duration, location, country, highlights, day_by_day, price, category, package_type, difficulty_level, perfect_for, destinations, inclusions)
VALUES (
  'Roots & Rhythms - Cultural Uganda', 
  'Immersive cultural exchanges with the Batwa and Bakiga, storytelling, traditional cooking, dance, and drumming with community project support',
  8,
  'Fort Portal, Bwindi, Lake Bunyonyi',
  'Uganda',
  ARRAY['Cultural exchanges with the Batwa and Bakiga', 'Storytelling, traditional cooking, dance, and drumming', 'Support Snowytop''s partner NGOs and schools', 'Optional gorilla trek'],
  '{"day1": "Arrival in Kampala", "day2": "Fort Portal", "day3": "Tooro Kingdom", "day4": "Bwindi", "day5": "Bwindi", "day6": "Lake Bunyonyi", "day7": "Lake Bunyonyi", "day8": "Departure"}',
  1800.00,
  'Cultural',
  'Community & Cultural',
  'Easy',
  'Travelers, students, and volunteers passionate about real connection and giving back',
  'Kampala – Fort Portal – Tooro Kingdom – Lake Bunyonyi – Bwindi',
  ARRAY['Local homestays + eco-lodges', 'Donation to community projects', 'English-speaking cultural guide']
) ON CONFLICT DO NOTHING;