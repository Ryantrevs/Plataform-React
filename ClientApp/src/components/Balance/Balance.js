import React from 'react'
import {Doughnut,Line} from 'react-chartjs-2'
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
    Main
} from './Elements'
import {BalanceProvider} from '../../context/BalanceContext'


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

const teste = 2000.99

function Balance() {
    if(teste){
        return (
            <main>
                <BalanceProvider>
                    <h2>Dynamicly refreshed Doughnut Example</h2>
                    <Doughnut data={getState} />
                    <TradeSection>
                        <ExpensiveSection>
                            <ExpensiveValue type="submit">{"R$:" + teste}</ExpensiveValue>
                            <Link to="/NewExpense"><NewExpensiveButton type="submit">Nova despesa</NewExpensiveButton></Link>
                        </ExpensiveSection>
                        <IncomeSection>
                            <IncomeValue>{"R$:"+ teste}</IncomeValue>
                            <Link to="/NewIncome"><NewIncomeButton>Nova Receita</NewIncomeButton></Link>
                        </IncomeSection>
                    </TradeSection>
                    <EmployeeSection>
                        <h2>Bubble Example</h2>
                        <Line 
                        data={data}
                        width={50}
                        height={50}
                        options={{ maintainAspectRatio: false }}/>
                    </EmployeeSection>
                </BalanceProvider>
            </main>
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