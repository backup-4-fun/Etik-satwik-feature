import React from 'react'
import { Bar, defaults, Pie } from 'react-chartjs-3'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

function BarChart ()  {



  return (
    <div>
      <Pie
        data={{
          labels: ['Gold','Silver','Bronze'],
          datasets: [
            {
              label: '# of tickets sold',
              data: [12, 19, 3],
              backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                
              ],
              borderColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderWidth: 1,
            },
             {
               label: 'Revenue',
              data: [47, 52, 67],
               backgroundColor: 'orange',
               borderColor: 'red',
             },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default BarChart