import React from 'react';
import { Radar } from 'react-chartjs-2';

const options = {
    title: { display:false },
    legend: { display:false },
    tooltips: {
        callbacks: {
            title: function(tooltipItem, data) {
              return data['labels'][tooltipItem[0]['index']];
            },
        }
    },
    scale: {
        ticks: {
            beginAtZero: true,
            suggestedMin: 0,
            suggestedMax: 5,
            stepSize: 1
        }
    }
};

let data = {
    labels: [' ', ' ', ' ', ' ', ' '],
    datasets: [{
        label: 'Rank ',
        backgroundColor: 'rgba(106,106,106,0.5)',
        borderColor: 'rgba(0,0,0,1)',
        data: [0, 0, 0, 0, 0]
    }]
};

const SkillsGraph = (props) => {

    if (props.data !== undefined) {
        console.log( );
        data = {
            labels: Object.keys(props.data),
            datasets: [{
                label: 'Rank ',
                backgroundColor: 'rgba(106,106,106,0.5)',
                borderColor: 'rgba(0,0,0,1)',
                data: Object.values(props.data),
            }]
        };
    }


    return (
        <div className="skills-chart">
            <Radar data={data} options={options}/>
        </div>
    );
};

export default SkillsGraph;