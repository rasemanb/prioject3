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
        "about":""
    })

@app.route("/map/")
def map():
    return render_template("map.html", pages={
        "visuals": "",
        "map": "active",
        "about": ""
    })

@app.route("/about/")
def about():
    return render_template("about.html", pages={
        "visuals": "",
        "map": "",
        "about": "active"
    })

@app.route("/api/data.json")
def data():
    results1 = engine.execute('select gdp.country_name, gdp.country_code, gdp."2012" as gdp_2012, gdp."2013" as gdp_2013, gdp."2014" as gdp_2014, gdp."2015" as gdp_2015, gdp."2016" as gdp_2016, gdp."2017" as gdp_2017, gdp."2018" as gdp_2018, gdp."2019" as gdp_2019, gdp."2020" as gdp_2020, gdp."2021" as gdp_2021, gni."2012" as gni_2012, gni."2013" as gni_2013, gni."2014" as gni_2014 , gni."2015" as gni_2015, gni."2016" as gni_2016, gni."2017" as gni_2017, gni."2018" as gni_2018, gni."2019" as gni_2019, gni."2020" as gni_2020, gni."2021" as gni_2021 from gdp join gni on gdp.country_name = gni.country_name;')
    return jsonify([dict(_) for _ in results1])







    # api_url = 'http://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?format=json&date=2011:2022&per_page=3000'
    # response = requests.get(api_url)
    # data = response.json()
    # # parse = json.parse(data)
    # # top10 = parse.sort(function(a, b) {return a.})
    # if response.status_code == requests.codes.ok:
    #     print(response.text)
    # else:
    #     print("Error:", response.status_code, response.text)
    # country = []
    # # code = []
    # year = []
    # gdp = []


    # print(len(data[1]))

    


    # for i in range(len(data[1])):
    #     # c = data[1][i]["country"]["value"]
    #     # country.append(c)
    #     # if c not in country:
    #     #     country.append(c)
    #     dat = {
    #         "country":data[1][i]["country"]["value"],
    #         "gdp":data[1][i]["value"],
    #         "year":data[1][i]["date"]
    #     }
    #     country.append(dat)
    #         # year.append(data[1][i]["date"]

    # return ()



if __name__ == '__main__':
    app.run(debug=True)