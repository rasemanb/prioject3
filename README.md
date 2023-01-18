# project3

# Background 
For this project, we were asked to create and interactive dashboard that utilizes a flask powered api call and returns the data in
a json format ready for manipulation and analysis. We were also required to use HTML/CSS, JavaScript, and at least one databse (SQL).
Our code was to include one JS library that the class has not gone over or used yet. Our dataset was to have at least 100 records in it.
The dashboard was to have some form of user-driven interaction whether it be menus, dropdowns, or textboxes. Our final dashboard was to 
include at least 3 views.

# Process
1. Extract - API Calls and CSV files
  - Downloaded data from World Bank on GDP and GNI from 2012 to 2021.
2. Transform - Jupyter
  - Read in data files and cleaned data frames to have a uniform format as well as at least one shared column  for postgres load.
3. Load - Postgres
  - Set up a connection to our Postgres database and loaded the newly cleaned and formatted data in.
4. Dashboard
  - Used Bootstrap to create an interactive dashboard for users to easily view data.
5. Visualizations
  - Line Chart
    - Our first line chart displayed each countries GDP over the last 10 years plotted on top of each other.
    - Our second line chart displayed each countries GNI over the last 10 years plotted on top of each other.
  - Pie chart
    - We used Chart.js to create and display a pie chart of each countries Debt-to-GDP Ratio.
  - Maps
    - For our map, we intended to create a webpage that would allow a user to utilize a drop down menu of years, and based on that
      selection, the map would rebuild itself and display the countries GDP for the selected year.

