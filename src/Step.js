import React from 'react';

function Step(props) {

    return (
        <div>
            Krok: <input type="number" min="1" value={props.step} onChange={(event) => { props.stepMethod(event) }} />

        </div>
    );
}

export default Step;