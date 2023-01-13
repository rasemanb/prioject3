    // Create the map object the options

// Adding the tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);
// var url = "http://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?format=json&date=2011:2022&per_page=3000"

//Create a function to determine the marker size based on the population
function markerSize(gdp) {
    return Math.sqrt(gdp) * .5;
};

//An array that contains all of the top 10 country's GDP & GNI information for the past 10 years
var locations = [
    { 
        coordinates: [37.09024	, -95.712891],
        country: {
            name: "United States"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 16254000000000,
                gni: 52790000,
                gdpNum: "$16,254,000,000,000",
                population: "316,651,321",
                debtRatio: "93.83%"
            },
            thirteen: {
                year: 2013,
                gdp: 16843200000000,
                gni: 53990000,
                gdpNum: "$16,843,200,000,000",
                population: "319,375,166",
                debtRatio: "95.74%"
            },
            fourteen: {
                year: 2014,
                gdp: 17550700000000,
                gni: 55800000,
                gdpNum: "$17,550,700,000,000",
                population: "322,033,964",
                debtRatio: "96.21%"
            },
            fifteen: {
                year: 2015,
                gdp: 18206000000000,
                gni: 56620000,
                gdpNum: "$18,206,000,000,000",
                population: "324,607,776",
                debtRatio: "96.92%"
            },
            sixteen: {
                year: 2016,
                gdp: 18695100000000,
                gni: 57140000,
                gdpNum: "$18,695,100,000,000",
                population: "327,210,198",
                debtRatio: "99.08%"
            },
            seventeen: {
                year: 2017,
                gdp: 19477300000000,
                gni: 59220000,
                gdpNum: "$19,477,300,000,000",
                population: "329,791,231",
                debtRatio: "106.2%"
            },
            eighteen: {
                year: 2018,
                gdp: 20533100000000,
                gni: 63460000,
                gdpNum: "$20,533,100,000,000",
                population: "332,140,037",
                debtRatio: "107.48%"
            },
            nine: {
                year: 2019,
                gdp: 21381000000000,
                gni: 66130000,
                gdpNum: "$21,381,000,000,000",
                population: "334,319,671",
                debtRatio: "108.8%"
            },
            twenty: {
                year: 2020,
                gdp: 21060500000000,
                gni: 64650000,
                gdpNum: "$21,060,500,000,000",
                population: "335,942,003",
                debtRatio: "134.24%"
            },
            twentyone: {
                year: 2021,
                gdp: 23315100000000,
                gni: "70,930,000",
                gdpNum: "$23,315,100,000,000",
                population: "336,997,624",
                debtRatio: "132.63%"

            }
        }
    },
    { 
        coordinates: [35.86166,104.195397],
        country: {
            name: "China"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 8532230000000,
                gni: 5910000,
                gdpNum: "$8,532,230,000,000",
                population: "1,366,560,818",
                debtRatio: "34.39%"
            },
            thirteen: {
                year: 2013, 
                gdp: 9570410000000,
                gni: 6740000,
                gdpNum: "$9,570,410,000,000",
                population: "1,376,100,308",
                debtRatio: "37.04%"
            },
            fourteen: {
                year: 2014,
                gdp: 10475700000000,
                gni: 7470000,
                gdpNum: "$10,475,700,000,000",
                population: "1,385,189,668",
                debtRatio: "39.97%"
            },
            fifteen: {
                year: 2015,
                gdp: 11061600000000,
                gni: 7890000,
                gdpNum: "$11,061,600,000,000",
                population: "1,393,715,448",
                debtRatio: "41.49%"
            },
            sixteen: {
                year: 2016,
                gdp: 11233300000000,
                gni: 8210000,
                gdpNum: "$11,233,300,000,000",
                population: "1,401,889,681",
                debtRatio: "48.24%"
            },
            seventeen: {
                year: 2017,
                gdp: 12310400000000,
                gni: 8670000,
                gdpNum: "$12,310,400,000,000",
                population: "1,410,275,957",
                debtRatio: "51.73%"
            },
            eighteen: {
                year: 2018,
                gdp: 13894800000000,
                gni: 9540000,
                gdpNum: "$13,894,800,000,000",
                population: "1,417,069,468",
                debtRatio: "53.85%"
            },
            nine: {
                year: 2019,
                gdp: 14279900000000,
                gni: 10310000,
                gdpNum: "$14,279,900,000,000",
                population: "1,421,864,031",
                debtRatio: "57.24%"
            },
            twenty: {
                year: 2020,
                gdp: 14687700000000,
                gni: 10520000,
                gdpNum: "$14,687,700,000,000",
                population: "1,424,929,781",
                debtRatio: "68.06%"
            },
            twentyone: {
                year: 2021,
                gdp: 17734100000000,
                gni: 11880000,
                gdpNum: "$17,734,100,000,000",
                population: "1,425,893,465",
                debtRatio: "71.48%"
            }
        }
    },
    { 
        coordinates: [36.204824,	138.252924],
        country: {
            name: "Japan"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 6272360000000,
                gni: 50060000,
                gdpNum: "$6,272,360,000,000",
                population: "127,853,688",
                debtRatio: "183.97%"
            },
            thirteen: {
                year: 2013,
                gdp: 5212330000000,
                gni: 48850000,
                gdpNum: "$5,212,330,000,000",
                population: "127,678,924",
                debtRatio: "186.83%"
            },
            fourteen: {
                year: 2014, 
                gdp: 4896990000000,	
                gni: 44440000,
                gdpNum: "$4,896,990,000,000",
                population: "127,476,735",
                debtRatio: "192.57%"
            },
            fifteen: {
                year: 2015,
                gdp: 4444930000000,
                gni: 39380000,
                gdpNum: "$4,444,930,000,000",
                population: "127,250,933",
                debtRatio: "194.82%"
            },
            sixteen: {
                year: 2016,
                gdp: 5003680000000,
                gni: 38460000,
                gdpNum: "$5,003,680,000,000",
                population: "126,993,857",
                debtRatio: "193.39%"
            },
            seventeen: {
                year: 2017,
                gdp: 4930840000000,
                gni: 38930000,
                gdpNum: "$4,930,840,000,000",
                population: "126,662,472",
                debtRatio: "231.42%"
            },
            eighteen: {
                year: 2018,
                gdp: 5037840000000,	
                gni: 41770000,
                gdpNum: "$5,037,840,000,000",
                population: "126,255,866",
                debtRatio: "232.47%"
            },
            nine: {
                year: 2019,
                gdp: 5123320000000,	
                gni: 42010000,
                gdpNum: "$5,123,320,000,000",
                population: "125,791,677",
                debtRatio: "236.14%"
            },
            twenty: {
                year: 2020,
                gdp: 5040110000000,
                gni: 40810000,
                gdpNum: "$5,040,110,000,000",
                population: "125,244,761",
                debtRatio: "259%"
            },
            twentyone: {
                year: 2021,
                gdp: 4940880000000,
                gni: 42650000,                
                gdpNum: "$4,940,880,000,000",
                population: "124,612,530",
                debtRatio: "263.14%"
            }
        }
    },
    { 
        coordinates: [51.165691,	10.451526],
        country: {
            name: "Germany"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 3527143188785,
                gni: 46560000,
                gdpNum: "$3,527,140,000,000",
                population: "81,545,565",
                debtRatio: 0
            },
            thirteen: {
                year: 2013,
                gdp: 3733804649549,
                gni: 47220000,
                gdpNum: "$3,733,800,000,000",
                population: "81,680,591",
                debtRatio: "78.32%"
            },
            fourteen: {
                year: 2014,
                gdp: 3889093051024,
                gni: 47640000,
                gdpNum: "$3,889,090,000,000",
                population: "81,858,825",
                debtRatio: "75.28%"
            },
            fifteen: {
                year: 2015,
                gdp: 3357585719352,
                gni: 45780000,
                gdpNum: "$3,357,590,000,000",
                population: "82,073,226",
                debtRatio: "71.95%"
            },
            sixteen: {
                year: 2016,
                gdp: 3469853463946,
                gni: 44280000,
                gdpNum: "$3,469,850,000,000",
                population: "82,331,423",
                debtRatio: "68.95%"
            },
            seventeen: {
                year: 2017,
                gdp: 3690849152518,
                gni: 43760000,
                gdpNum: "$3,690,850,000,000",
                population: "82,624,374",
                debtRatio: "64.62%"
            },
            eighteen: {
                year: 2018,
                gdp: 3974443355020,
                gni: 47490000,
                gdpNum: "$3,974,440,000,000",
                population: "82,896,696",
                debtRatio: "61.29%"
            },
            nine: {
                year: 2019,
                gdp: 3888226035922,
                gni: 49220000,
                gdpNum: "$3,888,230,000,000",
                population: "83,148,141",
                debtRatio: "58.9%"
            },
            twenty: {
                year: 2020,
                gdp: 3889668895300,
                gni: 48050000,
                gdpNum: "$3,889,670,000,000",
                population: "83,328,988",
                debtRatio: "67.95%"
            },
            twentyone: {
                year: 2021,
                gdp: 20214259934,
                gni: 51660000,
                gdpNum: "$4,259,930,000,000",
                population: "83,408,554",
                debtRatio: "69.64%"
            }
        }
    },
    { 
        coordinates: [20.593684,78.96288],
        country: {
            name: "India"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 1827637859506,
                gni: 1470000,
                gdpNum: "$1,827,640,000,000",
                population: "1,274,487,215",
                debtRatio: 0
            },
            thirteen: {
                year: 2013,
                gdp: 1856722121394,
                gni: 1500000,
                gdpNum: "$1,856,720,000,000",
                population: "1,291,132,063",
                debtRatio: 0
            },
            fourteen: {
                year: 2014,
                gdp: 2039127446299,
                gni: 1550000,
                gdpNum: "$2,039,130,000,000",
                population: "1,307,246,509",
                debtRatio: 0
            },
            fifteen: {
                year: 2015,
                gdp: 2103587813813,
                gni: 1590000,
                gdpNum: "$2,103,590,000,000",
                population: "1,322,866,505",
                debtRatio: 0
            },
            sixteen: {
                year: 2016,
                gdp: 2294797980509,
                gni: 1660000,
                gdpNum: "$2,294,800,000,000",
                population: "1,338,636,340",
                debtRatio: 0
            },
            seventeen: {
                year: 2017,
                gdp: 2651472946375,
                gni: 1800000,
                gdpNum: "$2,651,470,000,000",
                population: "1,354,195,680",
                debtRatio: "69.68%"
            },
            eighteen: {
                year: 2018,
                gdp: 2702929718960,
                gni: 1980000,
                gdpNum: "$2,702,930,000,000",
                population: "1,369,003,306",
                debtRatio: "70.39%"
            },
            nine: {
                year: 2019,
                gdp: 2831552222520,
                gni: 2080000,
                gdpNum: "$2,831,550,000,000",
                population: "1,383,112,050",
                debtRatio: "75.12%"
            },
            twenty: {
                year: 2020,
                gdp: 2667687951797,
                gni: 1890000,
                gdpNum: "$2,667,690,000,000",
                population: "1,396,387,127",
                debtRatio: "89.18%"
            },
            twentyone: {
                year: 2021,
                gdp: 3176295065497,
                gni: 2150000,
                gdpNum: "$3,176,300,000,000",
                population: "1,407,563,842",
                debtRatio: "84.16%"
            }
        }
    },
    { 
        coordinates: [55.378051,-3.435973],
        country: {
            name: "United Kingdom"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 2706340967031,
                gni: 41810000,
                gdpNum: "$2,706,340,000,000",
                population: "63,808,727",
                debtRatio: "98.73%"
            },
            thirteen: {
                year: 2013,
                gdp: 2786315215250,
                gni: 42800000,
                gdpNum: "$2,786,320,000,000",
                population: "64,302,297",
                debtRatio: "94.55%"
            },
            fourteen: {
                year: 2014,
                gdp: 3065223279584,
                gni: 44590000,
                gdpNum: "$3,065,220,000,000",
                population: "64,773,504",
                debtRatio: "105.41%"
            },
            fifteen: {
                year: 2015,
                gdp: 2934857946213,
                gni: 44480000,
                gdpNum: "$2,934,860,000,000",
                population: "65,224,364",
                debtRatio: "104.16%"
            },
            sixteen: {
                year: 2016,
                gdp: 2699659680997,
                gni: 43150000,
                gdpNum: "$2,699,660,000,000",
                population: "65,655,203",
                debtRatio: "113.77%"
            },
            seventeen: {
                year: 2017,
                gdp: 2683399006716,
                gni: 41740000,
                gdpNum: "$2,683,400,000,000",
                population: "66,064,804",
                debtRatio: "85.15%"
            },
            eighteen: {
                year: 2018,
                gdp: 2878152147316,
                gni: 42180000,
                gdpNum: "$2,878,150,000,000",
                population: "66,432,993",
                debtRatio: "84.49%"
            },
            nine: {
                year: 2019,
                gdp: 2857057847953,
                gni: 43380000,
                gdpNum: "$2,857,060,000,000",
                population: "66,778,659",
                debtRatio: "83.85%"
            },
            twenty: {
                year: 2020,
                gdp: 2704609160088,
                gni: 38590000,
                gdpNum: "$2,704,610,000,000",
                population: "67,059,474",
                debtRatio: "102.61%"
            },
            twentyone: {
                year: 2021,
                gdp: 3131377762926,
                gni: 44480000,
                gdpNum: "$3,131,380,000,000",
                population: "67,281,039",
                debtRatio: "95.35%"
            }
        }
    },
    { 
        coordinates: [46.227638,2.213749],
        country: {
            name: "France"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 2683671716967,
                gni: 43410000,
                gdpNum: "$2,683,670,000,000",
                population: "63,071,416",
                debtRatio: 0
            },
            thirteen: {
                year: 2013,
                gdp: 2811876903329,
                gni: 43800000,
                gdpNum: "$2,811,880,000,000",
                population: "63,335,180",
                debtRatio: 0
            },
            fourteen: {
                year: 2014,
                gdp: 2855964488590,
                gni: 43340000,
                gdpNum: "$2,855,960,000,000 ",
                population: "63,588,491",
                debtRatio: 0
            },
            fifteen: {
                year: 2015,
                gdp: 2439188643163,
                gni: 41130000,
                gdpNum: "$2,439,190,000,000",
                population: "63,809,769",
                debtRatio: 0
            },
            sixteen: {
                year: 2016,
                gdp: 2472964344587,
                gni: 39100000,
                gdpNum: "$2,472,960,000,000",
                population: "63,989,319",
                debtRatio: 0
            },
            seventeen: {
                year: 2017,
                gdp: 2595151045198,
                gni: 38320000,
                gdpNum: "$2,595,150,000,000",
                population: "64,144,086",
                debtRatio: "98.13%"
            },
            eighteen: {
                year: 2018,
                gdp: 2790956878747,
                gni: 41170000,
                gdpNum: "$2,790,960,000,000",
                population: "64,277,808",
                debtRatio: "97.78%"
            },
            nine: {
                year: 2019,
                gdp: 2728870246706,
                gni: 42460000,
                gdpNum: "$2,728,870,000,000",
                population: "64,399,759",
                debtRatio: "97.43%"
            },
            twenty: {
                year: 2020,
                gdp: 2639008701648,
                gni: 39440000,
                gdpNum: "$2,639,010,000,000",
                population: "64,480,053",
                debtRatio: "114.65%"
            },
            twentyone: {
                year: 2021,
                gdp: 2957879759264,
                gni: 44160000,
                gdpNum: "$2,957,880,000,000",
                population: "64,531,444",
                debtRatio: "112.58%"
            }
        }
    },    
    { 
        coordinates: [41.87194,12.56738	],
        country: {
            name: "Italy"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 2086957656822, 
                gni: 36220000,
                gdpNum: "$2,086,960,000,000",
                population: "60,190,145",
                debtRatio: "126.49%"
            },
            thirteen: {
                year: 2013,
                gdp: 2141924094299,
                gni: 35570000,
                gdpNum: "$2,141,920,000,000",
                population: "60,312,599",
                debtRatio: "132.46%"
            },
            fourteen: {
                year: 2014,
                gdp: 2162009615997,
                gni: 34910000,
                gdpNum: "$2,162,010,000,000",
                population: "60,322,791",
                debtRatio: "135.37%"
            },
            fifteen: {
                year: 2015,
                gdp: 1836637711061,
                gni: 33000000,
                gdpNum: "$1,836,640,000,000",
                population: "60,232,906",
                debtRatio: "135.28%"
            },
            sixteen: {
                year: 2016,
                gdp: 1877071687634,
                gni: 31970000,
                gdpNum: "$1,877,070,000,000",
                population: "60,118,626", 
                debtRatio: "134.78%"
            },
            seventeen: {
                year: 2017,
                gdp: 1961796197354,
                gni: 31380000,
                gdpNum: "$1,961,800,000,000",
                population: "60,004,032",
                debtRatio: "134.13%"
            },
            eighteen: {
                year: 2018,
                gdp: 2091932426267,
                gni: 33850000,
                gdpNum: "$2,091,930,000,000",
                population: "59,877,425",
                debtRatio: "134.4%"
            },
            nine: {
                year: 2019,
                gdp: 2011302198827,
                gni: 34930000,
                gdpNum: "$2,011,300,000,000",
                population: "59,727,932",
                debtRatio: "134.56%"
            },
            twenty: {
                year: 2020,
                gdp: 1896755301518,
                gni: 32410000,
                gdpNum: "$1,896,760,000,000",
                population: "59,500,579",
                debtRatio: "155.81%"
            },
            twentyone: {
                year: 2021,
                gdp: 2107702842670,
                gni: 35990000,
                gdpNum: "$2,107,700,000,000",
                population: "59,240,329",
                debtRatio: "132.63%"
            }
        }
    },
    { 
        coordinates: [56.130366,-106.346771],
        country: {
            name: "Canada"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 1828366481522,
                gni: 51080000,
                gdpNum: "$1,828,366,481,522",
                population: "34,691,878",
                debtRatio: 0
            },
            thirteen: {
                year: 2013,
                gdp: 1846597421835,
                gni: 52800000,
                gdpNum: "$1,846,597,421,835",
                population: "35,063,691",
                debtRatio: 0
            },
            fourteen: {
                year: 2014,
                gdp: 1805749878440,
                gni: 52200000,
                gdpNum: "$1,805,749,878,440",
                population: "35,404,608",
                debtRatio: 0
            },
            fifteen: {
                year: 2015,
                gdp: 1556508816217,
                gni: 47590000,
                gdpNum: "$1,556,508,816,217",
                population: "36,113,532",
                debtRatio: 0
            },
            sixteen: {
                year: 2016,
                gdp: 1527994741907,
                gni: 43890000,
                gdpNum: "$1,527,994,741,907",
                population: "36,554,348",
                debtRatio: 0

            },
            seventeen: {
                year: 2017,
                gdp: 1649265644244,
                gni: 42900000,
                gdpNum: "$1,649,265,644,244",
                population: "37,035,254",
                debtRatio: "88.85%"
            },
            eighteen: {
                year: 2018,
                gdp: 1725329192783,
                gni: 45080000,
                gdpNum: "$1,725,329,192,783",
                population: "37,035,254",
                debtRatio: "88.85%"
            },
            nine: {
                year: 2019,
                gdp: 1742015045482,
                gni: 46540000,
                gdpNum: "$1,742,015,045,482",
                population: "37,522,584",
                debtRatio: "87.16%"
            },
            twenty: {
                year: 2020,
                gdp: 1645423407568,
                gni: 43540000,
                gdpNum: "$1,645,423,407,568",
                population: "37,888,705",
                debtRatio: "117.75%"
            },
            twentyone: {
                year: 2021,
                gdp: 1988336331717,
                gni: 48310000,
                gdpNum: "$1,988,336,331,717",
                population: "38,155,012",
                debtRatio: "112.85%"
            }
        }
    },    
    { 
        coordinates: [35.907757,127.766922],
        country: {
            name: "South Korea"
        },
        year: {
            twelve: {
                year: 2012,
                gdp:  1278427634343,
                gni: 25660000,
                gdpNum: "$1,278,430,000,000",
                population: "49,634,185",
                debtRatio: "32.41%"
            },
            thirteen: {
                year: 2013,
                gdp: 1370795199976,
                gni: 26980000,
                gdpNum: "$1,370,800,000,000",
                population: "50,098,229",
                debtRatio: "34.93%"
            },
            fourteen: {
                year: 2014,
                gdp: 1484318219634,
                gni: 28160000,
                gdpNum: "$1,484,320,000,000",
                population: "50,558,043",
                debtRatio: "36.5%"
            },
            fifteen: {
                year: 2015,
                gdp: 1465773245547,
                gni: 28720000,
                gdpNum: "$1,465,770,000,000",
                population: "50,994,401",
                debtRatio: "37.49%"
            },
            sixteen: {
                year: 2016,
                gdp: 1500111596236,
                gni: 29330000,
                gdpNum: "$1,500,110,000,000",
                population: "51,309,984",
                debtRatio: "38.07%"
            },
            seventeen: {
                year: 2017,
                gdp: 1623901496836,
                gni: 30300000,
                gdpNum: "$1,623,900,000,000",
                population: "51,511,639",
                debtRatio: "40.05%"
            },
            eighteen: {
                year: 2018,
                gdp: 1724845615629,
                gni: 32750000,
                gdpNum: "$1,724,850,000,000",
                population: "51,676,900",
                debtRatio: "40.02%"
            },
            nine: {
                year: 2019,
                gdp: 1651422932448,
                gni: 33830000,
                gdpNum: "$1,651,420,000,000",
                population: "51,803,829",
                debtRatio: "42.12%"
            },
            twenty: {
                year: 2020,
                gdp: 1644312831906,
                gni: 33040000,
                gdpNum: "$1,644,310,000,000",
                population: "51,844,690",
                debtRatio: "48.7%"
            },
            twentyone: {
                year: 2021,
                gdp: 1810955871381,
                gni: 35110000,
                gdpNum: "$1,810,960,000,000",
                population: "51,830,139",
                debtRatio: "51.33%"
            }
        }
    }
];

// Define arrays to hold the country markers for years
var countryOne = [];
var countryTwo = [];
var countryThree = [];
var countryFour = [];
var countryFive = [];
var countrySix = [];
var countrySeven = [];
var countryEight = [];
var countryNine = [];
var countryTen = [];


// Loop through the locations and create the country markers per year
for (var i = 0; i < locations.length; i++ ) {
    countryOne.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "white",
            fillColor: "white",
            radius: markerSize(locations[i].year.twelve.gdp)
        }).bindPopup(`<h1> <center> ${locations[i].country.name}</h1> <hr> <h3> <center> ${locations[i].year.twelve.year} </center> </h3> <hr> </h3> <strong> GDP:</strong> ${locations[i].year.twelve.gdpNum}  <p> 
            <p> <strong> GNI: </strong> ${locations[i].year.twelve.gni} </p> <strong> Debt to GDP Ratio: </strong> ${locations[i].year.twelve.debtRatio} 
            <p> <strong> Population: </strong> ${locations[i].year.twelve.population}`)
    );
    countryTwo.push(
        L.circle(locations[i].coordinates, {
            stroke: false,
            fillOpcaity: 0.5,
            color: "purple",
            fillColor: "purple",
            radius: markerSize(locations[i].year.thirteen.gdp)
        }).bindPopup(`<h1> <center> ${locations[i].country.name}</h1> <hr> <h3>  <center>  ${locations[i].year.thirteen.year} </h3> <hr> </h3> <strong> GDP: </strong>${locations[i].year.thirteen.gdpNum} 
            <p> <strong> GNI: </strong> ${locations[i].year.thirteen.gni} </p> <strong> Debt to GDP Ratio: </strong> ${locations[i].year.thirteen.debtRatio} 
            <p> <strong> Population: </strong> ${locations[i].year.thirteen.population}`)
    );
    countryThree.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "red",
            fillColor: "red",
            radius: markerSize(locations[i].year.fourteen.gdp)
        }).bindPopup(`<h1> <center> ${locations[i].country.name}</h1> <hr> <h3>  <center>  ${locations[i].year.fourteen.year} </h3> <hr> </h3> <strong> GDP: </strong> ${locations[i].year.fourteen.gdpNum} 
            <p> <strong> GNI: </strong> ${locations[i].year.fourteen.gni} </p> <strong> Debt to GDP Ratio: </strong> ${locations[i].year.fourteen.debtRatio} 
            <p> <strong> Population: </strong> ${locations[i].year.fourteen.population}`)
    );
    countryFour.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "blue",
            fillColor: "blue",
            radius: markerSize(locations[i].year.fifteen.gdp)
        }).bindPopup(`<h1>  <center> ${locations[i].country.name}</h1> <hr> <h3>  <center> ${locations[i].year.fifteen.year} </h3> <hr> </h3> <strong> GDP: </strong> ${locations[i].year.fifteen.gdpNum}
            <p> <strong> GNI: </strong> ${locations[i].year.fifteen.gni} </p> <strong> Debt to GDP Ratio: </strong> ${locations[i].year.fifteen.debtRatio} 
            <p> <strong> Population: </strong> ${locations[i].year.fifteen.population}`)
    );
    countryFive.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "green",
            fillColor: "green",
            radius: markerSize(locations[i].year.sixteen.gdp)
        }).bindPopup(`<h1>  <center> ${locations[i].country.name}</h1> <hr> <h3> <center>  ${locations[i].year.sixteen.year} </h3> <hr> </h3> <strong> GDP: </strong> ${locations[i].year.sixteen.gdpNum}
            <p> <strong> GNI: </strong> ${locations[i].year.sixteen.gni} </p> <strong> Debt to GDP Ratio: </strong> ${locations[i].year.sixteen.debtRatio} 
            <p> <strong> Population: </strong> ${locations[i].year.sixteen.population}`)
    );
    countrySix.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "orange",
            fillColor: "orange",
            radius: markerSize(locations[i].year.seventeen.gdp)
        }).bindPopup(`<h1> <center> ${locations[i].country.name}</h1> <hr> <h3> <center>  ${locations[i].year.seventeen.year} </h3> <hr> </h3> <strong> GDP: </strong> ${locations[i].year.seventeen.gdpNum}
            <p> <strong> GNI: </strong> ${locations[i].year.seventeen.gni} </p> <strong> Debt to GDP Ratio: </strong> ${locations[i].year.seventeen.debtRatio} 
            <p> <strong> Population: </strong> ${locations[i].year.seventeen.population}`)
    );
    countrySeven.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "yellow",
            fillColor: "yellow",
            radius: markerSize(locations[i].year.eighteen.gdp)
        }).bindPopup(`<h1> <center> ${locations[i].country.name}</h1> <hr> <h3> <center>  ${locations[i].year.eighteen.year} </h3> <hr> </h3> <strong> GDP: </strong> ${locations[i].year.eighteen.gdpNum}
            <p> <strong> GNI: </strong> ${locations[i].year.eighteen.gni} </p> <strong> Debt to GDP Ratio: </strong> ${locations[i].year.eighteen.debtRatio} 
            <p> <strong> Population: </strong> ${locations[i].year.eighteen.population}`)
    );
    countryEight.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "brown",
            fillColor: "brown",
            radius: markerSize(locations[i].year.nine.gdp)
        }).bindPopup(`<h1> <center> ${locations[i].country.name}</h1> <hr> <h3> <center>  ${locations[i].year.nine.year} </h3> <hr> </h3> <strong> GDP: </strong> ${locations[i].year.nine.gdpNum}
        <p> <strong> GNI: </strong> ${locations[i].year.nine.gni} </p> <strong> Debt to GDP Ratio: </strong> ${locations[i].year.nine.debtRatio} 
        <p> <strong> Population: </strong> ${locations[i].year.nine.population}`)
    );
    countryNine.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "black",
            fillColor: "black",
            radius: markerSize(locations[i].year.twenty.gdp)
        }).bindPopup(`<h1> <center> ${locations[i].country.name}</h1> <hr> <h3>  <center> ${locations[i].year.twenty.year} </h3> <hr> </h3> <strong> GDP: </strong> ${locations[i].year.twenty.gdpNum}
            <p> <strong> GNI: </strong> ${locations[i].year.twenty.gni} </p> <strong> Debt to GDP Ratio: </strong> ${locations[i].year.twenty.debtRatio} 
            <p> <strong> Population: </strong> ${locations[i].year.twenty.population}`)
    );
    countryTen.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "white",
            fillColor: "white",
            radius: markerSize(locations[i].year.twentyone.gdp)
        }).bindPopup(`<h1> <center> ${locations[i].country.name}</h1> <hr> <h3> <center>  ${locations[i].year.twentyone.year} </h3> <hr> </h3> <strong> GDP:</strong> ${locations[i].year.twentyone.gdpNum} 
            <p> <strong> GNI: </strong> ${locations[i].year.twentyone.gni} </p> <strong> Debt to GDP Ratio: </strong> ${locations[i].year.twentyone.debtRatio} 
            <p> <strong> Population: </strong> ${locations[i].year.twentyone.population}`)
    );    
}

// Create seperate layer groups for each year
var mapTwelve = L.layerGroup(countryOne);
var mapThirteen = L.layerGroup(countryTwo);
var mapFourteen = L.layerGroup(countryThree);
var mapFifteen = L.layerGroup(countryFour);
var mapSixteen = L.layerGroup(countryFive);
var mapSeventeen = L.layerGroup(countrySix);
var mapEighteen = L.layerGroup(countrySeven);
var mapNine = L.layerGroup(countryEight);
var mapTwenty = L.layerGroup(countryNine);
var mapTwentyone = L.layerGroup(countryTen);

//Create base layers
var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create baseMaps to hold the basemap layer
var baseMaps = {
    "Street Map": streetmap,
    "Topographic Map": topo
};

// Create an overlay object
var overlayMaps = {
    "2012": mapTwelve,
    "2013": mapThirteen,
    "2014": mapFourteen,
    "2015": mapFifteen,
    "2016": mapSixteen,
    "2017": mapSeventeen,
    "2018": mapEighteen,
    "2019": mapNine,
    "2020": mapTwenty,
    "2021": mapTwentyone
};

var myMap = L.map("map", {
    center: [32.30368, 64.77691],
    zoom: 2,
    layers: [streetmap, mapTwelve]
});

var overlayMaps2 = {
    "2013": mapThirteen
};

// Pass map layers to our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(myMap);



