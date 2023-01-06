from flask import Flask, render_template

import requests, json

import os

app = Flask(__name__)

@app.route("/")
def get():

    api_url = 'http://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?format=json&date=2011:2022&per_page=3000'
    response = requests.get(api_url)
    data = response.json()
    # parse = json.parse(data)
    # top10 = parse.sort(function(a, b) {return a.})
    if response.status_code == requests.codes.ok:
        print(response.text)
    else:
        print("Error:", response.status_code, response.text)
    country = []
    # code = []
    year = []
    gdp = []
    print(len(data[1]))
    for i in range(2926):
        c = data[1][i]["country"]["value"]
        country.append(c)
        # if c not in country:
        #     country.append(c)
    
    for i in range(2926):

        year.append(data[1][i]["date"])

    for i in range(2926):

        gdp.append(data[1][i]["value"])

    return (data)



if __name__ == '__main__':
    app.run(debug=True)