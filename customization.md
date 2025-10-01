# Kenya Tourism Website Customization Guide

This guide helps you manage and customize the dynamic content in your Kenya Tourism website, including team members, fleet vehicles, volunteers, and more.

## Database Schema Overview

All dynamic content is stored in PostgreSQL tables. Here's a breakdown of available tables and their purposes:

### Team Members
```sql
-- Add a new team member
INSERT INTO team_members (
    name, 
    role, 
    bio, 
    image_url,
    specialty,
    years_of_experience
) VALUES (
    'John Doe',
    'Safari Guide',
    'Experienced guide with expertise in wildlife photography',
    'https://example.com/john-photo.jpg',
    'Wildlife Photography',
    10
);
```

Fields:
- `name` (Required): Full name of the team member
- `role` (Required): Their position or role
- `bio` (Required): Brief biography or description
- `image_url` (Required): URL to their profile photo
- `specialty` (Optional): Area of expertise
- `years_of_experience` (Optional): Number of years in the field

### Fleet Vehicles
```sql
-- Add a new vehicle to the fleet
INSERT INTO fleet_vehicles (
    name,
    description,
    capacity,
    features,
    image_url,
    type
) VALUES (
    'Land Cruiser Safari',
    'Comfortable 4x4 vehicle perfect for game drives',
    '7 passengers',
    ARRAY['4x4 Capability', 'Pop-up roof', 'Air conditioning'],
    'https://example.com/landcruiser.jpg',
    'Safari Vehicle'
);
```

Fields:
- `name` (Required): Vehicle model/name
- `description` (Required): Detailed description
- `capacity` (Required): Passenger capacity
- `features` (Required): Array of vehicle features
- `image_url` (Required): URL to vehicle photo
- `type` (Required): Vehicle category
- `available` (Auto): Availability status

### Volunteers
```sql
-- Add a new volunteer opportunity
INSERT INTO volunteers (
    name,
    role,
    description,
    image_url,
    availability,
    skills
) VALUES (
    'Conservation Assistant',
    'Wildlife Monitor',
    'Help protect and monitor wildlife in our national parks',
    'https://example.com/volunteer.jpg',
    'Weekends, 3-month commitment',
    ARRAY['Wildlife Knowledge', 'Physical Fitness', 'Communication']
);
```

Fields:
- `name` (Required): Name of the volunteer
- `role` (Required): Volunteer position
- `description` (Required): Detailed role description
- `image_url` (Required): URL to relevant photo
- `availability` (Required): Time commitment requirements
- `skills` (Required): Array of required skills
- `status` (Auto): Current status (active/inactive)

## Best Practices

### Image URLs
- Use high-quality images (recommended: 1200x800px for vehicles, 800x800px for profiles)
- Ensure images are hosted on a reliable CDN or image hosting service
- Use HTTPS URLs for security
- Compress images for optimal loading times

### Content Guidelines
1. **Team Members**
   - Keep bios concise (150-200 words)
   - Include relevant qualifications and expertise
   - Use professional headshots for consistency

2. **Fleet Vehicles**
   - List specific features that matter to tourists
   - Include passenger capacity and luggage space
   - Use high-quality photos showing vehicle from multiple angles

3. **Volunteers**
   - Clearly state time commitments and requirements
   - List specific skills needed
   - Include benefits and learning opportunities

### Maintaining Content

#### Duplicate an Existing Entry
```sql
-- Duplicate a team member (replace [id] with the source ID)
INSERT INTO team_members (
    name, role, bio, image_url, specialty, years_of_experience
)
SELECT 
    name || ' (Copy)',
    role,
    bio,
    image_url,
    specialty,
    years_of_experience
FROM team_members
WHERE id = [id];

-- Duplicate a fleet vehicle
INSERT INTO fleet_vehicles (
    name, description, capacity, features, image_url, type
)
SELECT 
    name || ' (Copy)',
    description,
    capacity,
    features,
    image_url,
    type
FROM fleet_vehicles
WHERE id = [id];

-- Duplicate a volunteer position
INSERT INTO volunteers (
    name, role, description, image_url, availability, skills
)
SELECT 
    name || ' (Copy)',
    role,
    description,
    image_url,
    availability,
    skills
FROM volunteers
WHERE id = [id];
```

#### Update Content
```sql
-- Update team member details
UPDATE team_members
SET 
    bio = 'Updated biography',
    specialty = 'New Specialty',
    years_of_experience = 12
WHERE id = [id];

-- Update vehicle details
UPDATE fleet_vehicles
SET 
    description = 'Updated description',
    features = ARRAY['Updated Feature 1', 'Updated Feature 2']
WHERE id = [id];

-- Update volunteer position
UPDATE volunteers
SET 
    description = 'Updated description',
    availability = 'New availability schedule'
WHERE id = [id];
```

## Content Verification

After adding or updating content:

1. Visit the respective pages on your website:
   - `/teams` for team members
   - `/fleet` for vehicles
   - `/volunteers` for volunteer positions

2. Verify that:
   - All images load correctly
   - Text formatting is consistent
   - Information is accurate and complete
   - Links and interactive elements work as expected

## Troubleshooting

### Common Issues

1. **Images Not Loading**
   - Verify the image URL is accessible
   - Check for HTTPS vs HTTP mismatches
   - Ensure image format is supported (JPG, PNG, WebP)

2. **Content Not Updating**
   - Clear your browser cache
   - Wait a few minutes for CDN propagation
   - Verify the database query completed successfully

3. **Array Data Issues**
   - Ensure arrays are properly formatted
   - Use single quotes for text within arrays
   - Separate array items with commas

### Support

For technical issues or additional customization needs:
1. Check the error logs in your application
2. Consult the development team
3. Review the project documentation

Remember to always backup your database before making significant changes, and test updates in a staging environment when possible.
