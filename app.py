from flask import Flask, jsonify, render_template

from sqlalchemy import create_engine, inspect

from config import user, passw, host, port, name

import itertools

import requests, json

import os

app = Flask(__name__)
engine = create_engine(f"postgresql://{user}:{passw}@{host}:{port}/{name}")

@app.route("/")
def index():
    return render_template("index.html", pages={
        "visuals":"active",
        "map":"",
        "pie":""
    })

@app.route("/map/")
def map():
    return render_template("map.html", pages={
        "visuals": "",
        "map": "active",
        "pie": ""
    })

@app.route("/pie/")
def pie():
    return render_template("pie.html", pages={
        "visuals": "",
        "map": "",
        "pie": "active"
    })

@app.route("/api/data.json")
def data():
    results1 = engine.execute('select gdp.country_name, gdp.country_code, gdp."2012" as gdp_2012, gdp."2013" as gdp_2013, gdp."2014" as gdp_2014, gdp."2015" as gdp_2015, gdp."2016" as gdp_2016, gdp."2017" as gdp_2017, gdp."2018" as gdp_2018, gdp."2019" as gdp_2019, gdp."2020" as gdp_2020, gdp."2021" as gdp_2021, gni."2012" as gni_2012, gni."2013" as gni_2013, gni."2014" as gni_2014, gni."2015" as gni_2015, gni."2016" as gni_2016, gni."2017" as gni_2017, gni."2018" as gni_2018, gni."2019" as gni_2019, gni."2020" as gni_2020, gni."2021" as gni_2021, coord.lat, coord.lon, debt.growth_rate, debt.debt_to_gdp_ratio from coord join gdp on coord.country_name = gdp.country_name join gni on coord.country_name = gni.country_name join debt on gdp.country_name = debt.country_name;')
    return jsonify([dict(_) for _ in results1])

@app.route("/api/geo.json")
def geo():
    data = engine.execute('select gdp.country_name, gdp.country_code, gdp."2012" as gdp_2012, gdp."2013" as gdp_2013, gdp."2014" as gdp_2014, gdp."2015" as gdp_2015, gdp."2016" as gdp_2016, gdp."2017" as gdp_2017, gdp."2018" as gdp_2018, gdp."2019" as gdp_2019, gdp."2020" as gdp_2020, gdp."2021" as gdp_2021, gni."2012" as gni_2012, gni."2013" as gni_2013, gni."2014" as gni_2014, gni."2015" as gni_2015, gni."2016" as gni_2016, gni."2017" as gni_2017, gni."2018" as gni_2018, gni."2019" as gni_2019, gni."2020" as gni_2020, gni."2021" as gni_2021, coord.lat, coord.lon, debt.growth_rate, debt.debt_to_gdp_ratio from coord join gdp on coord.country_name = gdp.country_name join gni on coord.country_name = gni.country_name join debt on gdp.country_name = debt.country_name;')
    geojson = {
    "type": "FeatureCollection",
    "features": [
    {
        "type": "Feature",
        "geometry" : {
            "type": "Point",
            "coordinates": [d["lon"], d["lat"]],
            },
        "properties" :{
            "country_code":d["country_code"],
            "country_name":d["country_name"],
            "debt_to_gdp_ratio":d["debt_to_gdp_ratio"],
            "gdp_2012":d["gdp_2012"],
            "gdp_2013":d["gdp_2013"],
            "gdp_2014":d["gdp_2014"],
            "gdp_2015":d["gdp_2015"],
            "gdp_2016":d["gdp_2016"],
            "gdp_2017":d["gdp_2017"],
            "gdp_2018":d["gdp_2018"],
            "gdp_2019":d["gdp_2019"],
            "gdp_2020":d["gdp_2020"],
            "gdp_2021":d["gdp_2021"],
            "growth_rate":d["growth_rate"]
           }
     } for d in data]
    }
    return jsonify(geojson)

if __name__ == '__main__':
    app.run(debug=True, port=7000)
