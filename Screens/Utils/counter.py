import json
from datetime import datetime, timedelta

# Load data from the provided JSON
with open('../../assets/month_data.json', 'r') as f:
    data = json.load(f)

# Initialize dictionary to store sum of durations for each date
sum_durations_per_date = {}

# Iterate over each date in the data
for date, apps_data in data.items():
    # Convert date string to datetime object
    date_obj = datetime.strptime(date, '%d/%m/%Y')
    # Initialize sum of durations for the date
    sum_duration = timedelta()
    # Iterate over each app data for the date
    for app, app_records in apps_data.items():
        # Iterate over each record for the app
        for record in app_records:
            # Extract duration and convert it to timedelta object
            duration = datetime.strptime(record['duration'], '%H:%M:%S') - datetime(1900, 1, 1)
            # Add duration to the sum
            sum_duration += duration
    # Store sum of durations for the date
    sum_durations_per_date[date_obj] = sum_duration

# Sort the dictionary by date
sorted_data = sorted(sum_durations_per_date.items())

# Extract x and y values for plotting
x_values = [date.strftime('%Y-%m-%d') for date, _ in sorted_data]
y_values = [str(duration) for _, duration in sorted_data]

# Generate file with x values as dates and y values as sum of durations
with open('duration_data.txt', 'w') as f:
    for x, y in zip(x_values, y_values):
        f.write(f"{x},{y}\n")