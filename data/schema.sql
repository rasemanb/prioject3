drop table gdp;
drop table gni;

create table gdp (
country_name varchar primary key, 
country_code varchar,
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
country_name varchar primary key,
country_code varchar,
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

select gdp.country_name, gdp.country_code, gdp."2012" as gdp_2012, gdp."2013" as gdp_2013, gdp."2014" as gdp_2014, gdp."2015" as gdp_2015, gdp."2016" as gdp_2016, gdp."2017" as gdp_2017, gdp."2018" as gdp_2018, gdp."2019" as gdp_2019, gdp."2020" as gdp_2020, gdp."2021" as gdp_2021,
gni."2012" as gni_2012, gni."2013" as gni_2013, gni."2014" as gni_2014, gni."2015" as gni_2015, gni."2016" as gni_2016, gni."2017" as gni_2017, gni."2018" as gni_2018, gni."2019" as gni_2019, gni."2020" as gni_2020, gni."2021" as gni_2021
from gdp
join gni
on gdp.country_name = gni.country_name;