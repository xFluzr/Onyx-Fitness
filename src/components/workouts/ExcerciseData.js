import React from 'react';

const ExcerciseData = ({value, label}) => {
    return (
        <div className="excercise__data">
            <p className="excercise__data--value">
                {value}
            </p>
            <p className="excercise__data--label">
                {label}
            </p>
        </div>
    );
}

export default ExcerciseData;
