import  os

import numpy as np
import pandas as pd
from sqlalchemy import create_engine

from config import user, passw, host, port, name

path = os.path.join("")

def extract():
    ""

def transform():
    gdp_df = pd.read_csv(os.path.join(path, "gdp.csv"), index_col = "id")

def load(df, table_name):
    engine = create_engine(f"postgresql://{user}:{passw}@{host}:{port}/{name}")
    connection = engine.connect()
    df.to_sql(table_name, connection, if_exists="replace")
    print(f"Loading into {name}.{table_name} complete ✅")