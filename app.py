from flask import Flask, jsonify, render_template

from sqlalchemy import create_engine, inspect

from config import user, passw, host, port, name
from etl import extract, transform, load

import itertools

import requests, json

import os

app = Flask(__name__)
engine = create_engine(f"postgresql://{user}:{passw}@{host}:{port}/{name}")

@app.route("/")
def index():
    return render_template("index.html", pages={
        "summary":"active",
        "comparison":"",
        "about":""
    })

@app.route("/comparison/")
def comparison():
    return render_template("comparison.html", pages={
        "summary": "",
        "comparison": "active",
        "about": ""
    })

@app.route("/about/")
def about():
    return render_template("about.html", pages={
        "summary": "",
        "comparison": "",
        "about": "active"
    })

@app.route("api/summary.json")
def summary():
    results = engine.execute("SELECT * FROM project3_db")
    return jsonify([dict(_) for _ in results])







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
    force = False
    if not Force and "data" in inspect(engine).get_table_names():
        print("'data' table not found, skipping ETL")
    else:
        extract()
        df = transform()
        load(df, "data")
    print("Opening web server, please wait...")
    app.run(debug=True)