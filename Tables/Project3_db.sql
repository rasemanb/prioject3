drop table gdp;
drop table gni;
drop table coordinates; 
drop table debt; 
drop table population;

create table gdp (
"Country Name" varchar primary key, 
"Series Name" varchar,
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
"Country Name" varchar primary key,
"Series Name" varchar,
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
select * from population;

select coordinates."Country Name", coordinates.Latitude, coordinates.Longitude, gdp."Series Name", gdp."2012", gdp."2013", gdp."2014", gdp."2015", gdp."2016", gdp."2017", gdp."2018", gdp."2019", gdp."2020", gdp."2021"
from coordinates
join gdp
on coordinates."Country Name" = gdp."Country Name";

create table coordinates (
"Country Name" varchar primary key,
Latitude float, 
Longitude float
);

select coordinates."Country Name", coordinates.Latitude, coordinates.Longitude, gni."Series Name", gni."2012", gni."2013", gni."2014", gni."2015", gni."2016", gni."2017", gni."2018", gni."2019", gni."2020", gni."2021"
from coordinates
join gni
on coordinates."Country Name" = gni."Country Name";

create table debt (
"Country Name" varchar primary key, 
debt_rank int,
debt_to_gdp_ratio float 
);	

select coordinates."Country Name", coordinates.Latitude, coordinates.Longitude, debt.debt_rank, debt.debt_to_gdp_ratio
from coordinates
join debt
on coordinates."Country Name" = debt."Country Name";

create table population (
"Country Name" varchar primary key,
"2012" int,
"2013" int, 
"2014" int, 
"2015" int,
"2016" int,
"2017" int,
"2018" int,
"2019" int,
"2020" int,
"2021" int,
"2022" int
);

select gdp."Country Name", gdp."Series Name", gdp."2012", gdp."2013", gdp."2014", gdp."2015", gdp."2016", gdp."2017", gdp."2018", gdp."2019", gdp."2020", gdp."2021", gni."Series Name", gni."2012", gni."2013", gni."2014", gni."2015", gni."2016", gni."2017", gni."2018", gni."2019", gni."2020", gni."2021", debt.debt_to_gdp_ratio
from gdp
join gni
on gdp."Country Name" = gni."Country Name"
join debt
on gdp."Country Name" = debt."Country Name";

select gdp."Country Name", gdp."Series Name", gdp."2012", gdp."2013", gdp."2014", gdp."2015", gdp."2016", gdp."2017", gdp."2018", gdp."2019", gdp."2020", gdp."2021", debt.debt_to_gdp_ratio
from gdp
join debt
on gdp."Country Name" = debt."Country Name";

select coordinates."Country Name", coordinates.Latitude, coordinates.Longitude, population."2012", population."2013", population."2014", population."2015", population."2016", population."2017", population."2018", population."2019", population."2020", population."2021", population."2022", gdp."Series Name", gdp."2012", gdp."2013", gdp."2014", gdp."2015", gdp."2016", gdp."2017", gdp."2018", gdp."2019", gdp."2020", gdp."2021", gni."Series Name", gni."2012", gni."2013", gni."2014", gni."2015", gni."2016", gni."2017", gni."2018", gni."2019", gni."2020", gni."2021", debt.debt_to_gdp_ratio 
from coordinates
join population
on coordinates."Country Name" = population."Country Name"
join gdp
on coordinates."Country Name" = gdp."Country Name"
join gni
on coordinates."Country Name" = gni."Country Name"
join debt
on gdp."Country Name" = debt."Country Name";