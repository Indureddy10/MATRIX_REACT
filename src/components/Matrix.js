import React, { useState } from "react";
import "./Matrix.css";

const Matrix = () => {
    const [matrix, setMatrix] = useState(Array(9).fill(null));
    const [clickOrder, setClickOrder] = useState([]);

    const handleClick = (index) => {
        if (matrix[index] === null) {
            const newMatrix = [...matrix];
            newMatrix[index] = "green";
            setMatrix(newMatrix);

            const newClickOrder = [...clickOrder, index];
            setClickOrder(newClickOrder);

            if (newClickOrder.length === 9) {
                newClickOrder.forEach((idx, i) => {
                    setTimeout(() => {
                        setMatrix((prevMatrix) => {
                            const updatedMatrix = [...prevMatrix];
                            updatedMatrix[idx] = "orange";
                            return updatedMatrix;
                        });
                    }, (i + 1) * 500);
                });
            }
        }
    };

    return (
        <div className="grid">
            {matrix.map((color, index) => (
                <div
                    key={index}
                    className="box"
                    style={{ backgroundColor: color || "#eee" }}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default Matrix;
