drop table gdp;
drop table gni;
drop table coordinates; 
drop table debt; 

create table gdp (
Country_Name varchar primary key, 
Series_Name varchar,
"2012" float,
"2013" float, 
"2014" float, 
"2015" float,
"2016" float,
"2017" float,
"2018" float,
"2019" float,
"2020" float,
"2021" float
);

create table gni (
Country_Name varchar primary key,
Series_Name varchar,
"2012" float,
"2013" float, 
"2014" float, 
"2015" float,
"2016" float,
"2017" float,
"2018" float,
"2019" float,
"2020" float,
"2021" float
);

select * from gdp;
select * from gni;
select * from coordinates; 
select * from debt;

select gdp.Country_Name, gdp.Series_Name, gdp."2012", gdp."2013", gdp."2014", gdp."2015", gdp."2016", gdp."2017", gdp."2018", gdp."2019", gdp."2020", gdp."2021",
gni.Country_Name, gni.Series_Name, gni."2012", gni."2013", gni."2014", gni."2015", gni."2016", gni."2017", gni."2018", gni."2019", gni."2020", gni."2021"
from gdp
join gni
on gdp.Country_Name = gni.Country_Name;

create table coordinates (
Country_Name varchar primary key,
Latitude float, 
Longitude float
);

select gdp.Country_Name, gdp.Series_Name, gdp."2012", gdp."2013", gdp."2014", gdp."2015", gdp."2016", gdp."2017", gdp."2018", gdp."2019", gdp."2020", gdp."2021",
coordinates.Country_Name, coordinates.Latitude, coordinates.Longitude
from gdp
join coordinates
on gdp.Country_Name = coordinates.Country_Name;

create table debt (
Country_Name varchar primary key, 
Series_Name varchar,
"2012" float,
"2013" float, 
"2014" float, 
"2015" float,
"2016" float,
"2017" float,
"2018" float,
"2019" float,
"2020" float
);	

select gdp.Country_Name, gdp.Series_Name, gdp."2012", gdp."2013", gdp."2014", gdp."2015", gdp."2016", gdp."2017", gdp."2018", gdp."2019", gdp."2020", gdp."2021",
debt.Country_Name, debt.Series_Name, debt."2012", debt."2013", debt."2014", debt."2015", debt."2016", debt."2017", debt."2018", debt."2019", debt."2020",
from gdp
join debt
on gdp.Country_Name = debt.Country_Name;