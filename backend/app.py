from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Input_Data(BaseModel):
    carat :float
    depth: float
    table: float
    x: float
    y: float
    z: float
    cut_Fair:bool
    cut_Good:bool
    cut_Ideal:bool
    cut_Premium:bool
    cut_Very_Good:bool
    color_D:bool
    color_E:bool
    color_F:bool
    color_G:bool
    color_H:bool
    color_I:bool
    color_J:bool
    clarity_I1:bool
    clarity_IF:bool
    clarity_SI1:bool
    clarity_SI2:bool
    clarity_VS1: bool
    clarity_VS2:bool
    clarity_VVS1:bool
    clarity_VVS2:bool


@app.get("/")
def home():
    return "its a Home Page from CI/CD deployment"

@app.post("/predict")
def predict(data: Input_Data):
    import pandas as pd
    import joblib
    dict_data = {
        'carat': data.carat,
        'depth': data.depth,
        'table': data.table,
        'x': data.x,
        'y': data.y,
        'z': data.z,
        'cut_Fair': data.cut_Fair,
        'cut_Good': data.cut_Good,
        'cut_Ideal': data.cut_Ideal,
        'cut_Premium': data.cut_Premium,
        'cut_Very_Good': data.cut_Very_Good,
        'color_D': data.color_D,
        'color_E': data.color_E,
        'color_F': data.color_F,
        'color_G': data.color_G,
        'color_H': data.color_H,
        'color_I': data.color_I,
        'color_J': data.color_J,
        'clarity_I1': data.clarity_I1,
        'clarity_IF': data.clarity_IF,
        'clarity_SI1': data.clarity_SI1,
        'clarity_SI2': data.clarity_SI2,
        'clarity_VS1': data.clarity_VS1,
        'clarity_VS2': data.clarity_VS2,
        'clarity_VVS1': data.clarity_VVS1,
        'clarity_VVS2': data.clarity_VVS2
    }
    input_df = pd.DataFrame([dict_data])
    model = joblib.load("model.joblib")
    result = model.predict(input_df)[0]

    return {"price" : result}




