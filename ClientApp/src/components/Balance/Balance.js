import React from 'react'
import {Doughnut,Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import {
    NewExpensiveButton,
    ExpensiveSection,
    ExpensiveValue,
    TradeSection,
    IncomeSection,
    NewIncomeButton,
    IncomeValue,
    EmployeeSection,
    AddNewBalance,
    Main,
    H2,
    Div,
    DIV
} from './Elements'
import {BalanceProvider} from '../../Context/BalanceContext';


  

  const plugins = [{
    afterDraw: (chartInstance, easing) => {
        const ctx = chartInstance.chart.ctx;
        ctx.fillText("This text drawn by a plugin", 100, 100);
    }
}];


const getState = () => ({
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
      backgroundColor: [
      '#CCC',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  });

  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const teste = 2000.99;


function Balance() {
    
    if(teste){
        return (
            <Main>
                <BalanceProvider>
                    <DIV>
                        <Div>
                            <Doughnut className="Teste" 
                            data={getState}/>
                        </Div><br/>
                        <TradeSection>
                            <ExpensiveSection>
                                <ExpensiveValue type="submit">{"R$:" + teste}</ExpensiveValue>
                                <Link to="/NewExpense"><NewExpensiveButton type="submit">Nova Despesa</NewExpensiveButton></Link>
                            </ExpensiveSection>
                            <Bar
                                data={barra}
                                options={options}
                                plugins={plugins}
                            />
                            <IncomeSection>
                                <IncomeValue>{"R$:"+ teste}</IncomeValue>
                                <Link to="/NewIncome"><NewIncomeButton>Nova Receita</NewIncomeButton></Link>
                            </IncomeSection>
                        </TradeSection><br/>
                        <EmployeeSection>
                            <h2>Bubble Example</h2><br/>
                            <Line 
                            data={data}
                            height={30}
                            options={{ maintainAspectRatio: false }}/>
                        </EmployeeSection>
                    </DIV>
                </BalanceProvider>
            </Main>
        )
    }else{
        return(
            <Main>
                <AddNewBalance>Adicionar Balanço Anual</AddNewBalance>
            </Main>
        )
    }
}

export default Balance

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };


  const barra = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Sales',
        type:'line',
        data: [51, 65, 40, 49, 60, 37, 40],
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#EC932F',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-2'
      },{
        type: 'bar',
        label: 'Visitor',
        data: [200, 185, 590, 621, 250, 400, 95],
        fill: false,
        backgroundColor: '#71B37C',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      }]
  };

  const options = {
    responsive: true,
    tooltips: {
      mode: 'label'
    },
    elements: {
      line: {
        fill: false
      }
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        }
      ],
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        }
      ]
    }
  };
