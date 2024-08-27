import React, { useState } from 'react';
import './styles.css'; // Import the CSS file for styling

function DiamondPricePredictor() {
    const [formData, setFormData] = useState({
        carat: 0,
        depth: 0,
        table: 0,
        x: 0,
        y: 0,
        z: 0,
        cut_Fair: false,
        cut_Good: false,
        cut_Ideal: false,
        cut_Premium: false,
        cut_Very_Good: false,
        color_D: false,
        color_E: false,
        color_F: false,
        color_G: false,
        color_H: false,
        color_I: false,
        color_J: false,
        clarity_I1: false,
        clarity_IF: false,
        clarity_SI1: false,
        clarity_SI2: false,
        clarity_VS1: false,
        clarity_VS2: false,
        clarity_VVS1: false,
        clarity_VVS2: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call your FastAPI backend with the formData here
        fetch("https://web-app-api-rakbank-rnd.azurewebsites.net/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => alert(`Predicted Price: ${data.price}`))
        .catch((error) => console.error('Error:', error));
    };

    return (
        <div className="container">
            <div className="header">Diamond Price Predictor</div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Carat:
                        <input type="number" name="carat" value={formData.carat} onChange={handleChange} />
                    </label>
                    <label>Depth:
                        <input type="number" name="depth" value={formData.depth} onChange={handleChange} />
                    </label>
                    <label>Table:
                        <input type="number" name="table" value={formData.table} onChange={handleChange} />
                    </label>
                    <label>X:
                        <input type="number" name="x" value={formData.x} onChange={handleChange} />
                    </label>
                    <label>Y:
                        <input type="number" name="y" value={formData.y} onChange={handleChange} />
                    </label>
                    <label>Z:
                        <input type="number" name="z" value={formData.z} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <div className="checkbox-group">
                        <label><input type="checkbox" name="cut_Fair" checked={formData.cut_Fair} onChange={handleChange} /> Cut Fair</label>
                        <label><input type="checkbox" name="cut_Good" checked={formData.cut_Good} onChange={handleChange} /> Cut Good</label>
                        <label><input type="checkbox" name="cut_Ideal" checked={formData.cut_Ideal} onChange={handleChange} /> Cut Ideal</label>
                        <label><input type="checkbox" name="cut_Premium" checked={formData.cut_Premium} onChange={handleChange} /> Cut Premium</label>
                        <label><input type="checkbox" name="cut_Very_Good" checked={formData.cut_Very_Good} onChange={handleChange} /> Cut Very Good</label>
                    </div>
                    <div className="checkbox-group">
                        <label><input type="checkbox" name="color_D" checked={formData.color_D} onChange={handleChange} /> Color D</label>
                        <label><input type="checkbox" name="color_E" checked={formData.color_E} onChange={handleChange} /> Color E</label>
                        <label><input type="checkbox" name="color_F" checked={formData.color_F} onChange={handleChange} /> Color F</label>
                        <label><input type="checkbox" name="color_G" checked={formData.color_G} onChange={handleChange} /> Color G</label>
                        <label><input type="checkbox" name="color_H" checked={formData.color_H} onChange={handleChange} /> Color H</label>
                        <label><input type="checkbox" name="color_I" checked={formData.color_I} onChange={handleChange} /> Color I</label>
                        <label><input type="checkbox" name="color_J" checked={formData.color_J} onChange={handleChange} /> Color J</label>
                    </div>
                    <div className="checkbox-group">
                        <label><input type="checkbox" name="clarity_I1" checked={formData.clarity_I1} onChange={handleChange} /> Clarity I1</label>
                        <label><input type="checkbox" name="clarity_IF" checked={formData.clarity_IF} onChange={handleChange} /> Clarity IF</label>
                        <label><input type="checkbox" name="clarity_SI1" checked={formData.clarity_SI1} onChange={handleChange} /> Clarity SI1</label>
                        <label><input type="checkbox" name="clarity_SI2" checked={formData.clarity_SI2} onChange={handleChange} /> Clarity SI2</label>
                        <label><input type="checkbox" name="clarity_VS1" checked={formData.clarity_VS1} onChange={handleChange} /> Clarity VS1</label>
                        <label><input type="checkbox" name="clarity_VS2" checked={formData.clarity_VS2} onChange={handleChange} /> Clarity VS2</label>
                        <label><input type="checkbox" name="clarity_VVS1" checked={formData.clarity_VVS1} onChange={handleChange} /> Clarity VVS1</label>
                        <label><input type="checkbox" name="clarity_VVS2" checked={formData.clarity_VVS2} onChange={handleChange} /> Clarity VVS2</label>
                    </div>
                </div>
                <button type="submit">Predict Price</button>
            </form>
        </div>
    );
}

export default DiamondPricePredictor;
