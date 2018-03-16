# This is a script to create the insert statements for default categories.

# list of default categories
defaultCategories = ['Announcements', 'Rides', 'Events', 'Sports & Fitness', 'Food', 'Meet People', 'Volunteer', 'Lend & Borrow', 'Classes & Tutoring', 'Mentorship & Support', 'Handy Help', 
              'Homestays & Roommates', 'Child Care', 'Pet Care', 'Elderly Care', 'Help', 'Gigs', 'Other']

# the name of the file to write to
outFilename = "categories.sql"

file = open(outFilename, 'w')

for category in defaultCategories:
    file.write(f'INSERT INTO Category (Name, IsPublicOption) VALUES (\'{category}\', 1);\n')

file.close()