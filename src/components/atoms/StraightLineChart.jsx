import React from 'react'
import Chart from 'react-apexcharts'

const StraightLineGraph = () => {
    const chartOptions = {
        options: {
            selection: {
                enabled: false
            },
            states: {
              hover: {
                  filter: {
                      type: 'none',
                  },
              },
              active: {
                filter: {
                  type: 'none'
                }
              }
          },
            tooltip: {
                enabled: false
            },
            grid: {
                show: false,
            },
            legend: {
                show: false
            },
            chart: {
              type: 'rangeBar',
              toolbar: {
                  show: false
              },
            },
            plotOptions: {
              bar: {
                borderRadius: 200,
                horizontal: true,
                barHeight: '35%',
              }
            },
            dataLabels: {
                enabled: false,

            },
            xaxis: {
              type: 'datetime',
              labels: {
                  show: false,
              },
              axisBorder: {
                  show: false,
              }
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'left',
                    maxWidth: 160,
                    style: {
                        colors: '#808191',
                        fontSize: '0.8rem',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                    },
                },
              }
          },
    }

    const chartSeries = {
        series: [
            {
              data: [
                {
                  x: 'Mon',
                  y: [
                    new Date('2019-03-02').getTime(),
                    new Date('2019-03-10').getTime()
                  ],
                  fillColor: '#7B080F'
                },
                {
                  x: 'Tues',
                  y: [
                    new Date('2019-03-04').getTime(),
                    new Date('2019-03-18').getTime()
                  ],
                  fillColor: '#B9181E'
                },
                {
                  x: 'Wed',
                  y: [
                    new Date('2019-03-04').getTime(),
                    new Date('2019-03-12').getTime()
                  ],
                  fillColor: '#CA5359'
                },
                {
                  x: 'Thurs',
                  y: [
                    new Date('2019-02-28').getTime(),
                    new Date('2019-03-18').getTime()
                  ],
                  fillColor: '#7B080F'
                },
                {
                    x: 'Fri',
                    y: [
                      new Date('2019-03-03').getTime(),
                      new Date('2019-03-10').getTime()
                    ],
                    fillColor: '#CA5359'
                  },
                  {
                    x: 'Sat',
                    y: [
                      new Date('2019-03-5').getTime(),
                      new Date('2019-03-16').getTime()
                    ],
                    fillColor: '#B9181E'
                  },
                  {
                    x: 'Sun',
                    y: [
                      new Date('2019-03-02').getTime(),
                      new Date('2019-03-09').getTime()
                    ],
                    fillColor: '#7B080F'
                  },
              ]
            }
          ],
    }

    return <Chart options={chartOptions.options} series={chartSeries.series} type="rangeBar" width="100%" height="85%" />
}

export default StraightLineGraph;
