import React, { useEffect, useState } from 'react'
import { Doughnut, Line, Bar } from 'react-chartjs-2';
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
import { useBalance } from '../../../context/BalanceContext';

const plugins = [{
  afterDraw: (chartInstance, easing) => {
    const ctx = chartInstance.chart.ctx;
    ctx.fillText("This text drawn by a plugin", 100, 100);
  }
}];

const teste = 2000.99;


function Finance() {

  const [donutData, setDonut] = useState({});
  const [mix, setMix] = useState({});
  const balanceContext = useBalance();

  useEffect(() => {

    console.log(balanceContext.Expensive);
    donutInfo(balanceContext.Expensive).then((response) => {
      console.log(response);
      setDonut(response);
    })
    stateMix(balanceContext.Balance).then((response) => {
      console.log(response);
      setMix(response);
    })

  }, [])
  return (
    <Main>
      <Div>
        <Doughnut className="Teste"
          data={donutData} />
      </Div><br />
      <TradeSection>
        <ExpensiveSection>
          <ExpensiveValue type="submit">{"R$:" + teste}</ExpensiveValue>
          <Link to="/NewExpense"><NewExpensiveButton type="submit">Nova Despesa</NewExpensiveButton></Link>
        </ExpensiveSection>
        <div style={{ "width": "30em", "margin-top": "7em" }}>
          <Bar
            data={mix.barra}
            options={mix.options}
            plugins={plugins}
          />
        </div>
        <IncomeSection>
          <IncomeValue>{"R$:" + teste}</IncomeValue>
          <Link to="/NewIncome"><NewIncomeButton>Nova Receita</NewIncomeButton></Link>
        </IncomeSection>
      </TradeSection><br/>
    </Main>
  )

}

export default Finance;

async function stateMix(obj) {
  console.log(obj);
  return ({
    barra: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [
        {
          type: 'bar',
          label: 'Receita',
          data: obj.Expense,
          fill: false,
          backgroundColor: '#71B37C',
          borderColor: '#71B37C',
          hoverBackgroundColor: '#71B37C',
          hoverBorderColor: '#71B37C',
          yAxisID: 'y-axis-1'
        },
        {
          type: 'bar',
          label: 'Despesa',
          data: obj.Income,
          fill: false,
          backgroundColor: '#e61919',
          borderColor: '#e61919',
          hoverBackgroundColor: '#e61919',
          hoverBorderColor: '#e61919',
          yAxisID: 'y-axis-1'
        },
      ]
    },

    options: {
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

            labels: ['Janeiro', 'Feverreiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
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
    }
  })
}
async function donutInfo(obj) {
  let label = [];
  let data = [];
  obj.map((value, index) => {
    console.log(value);
    label.push(value.category);
    data.push(value.value);
  })
  console.log(label);
  console.log(data);
  return ({
    labels: label,
    datasets: [{
      data: data,
      backgroundColor: [
        'red',
        'green',
        'yellow',
        'gray',
        'blue',
        'darkblue',
        'black',
        'brown',
        'pink',
        'yellow'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  })
}