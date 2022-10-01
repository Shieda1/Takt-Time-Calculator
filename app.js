// https://www.omnicalculator.com/other/takt-time

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const takttimeRadio = document.getElementById('takttimeRadio');
const availableproductiontimeRadio = document.getElementById('availableproductiontimeRadio');
const consumerdemandRadio = document.getElementById('consumerdemandRadio');

let takttime;
let availableproductiontime = v1;
let consumerdemand = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

takttimeRadio.addEventListener('click', function() {
  variable1.textContent = 'Available production time';
  variable2.textContent = 'Consumer demand';
  availableproductiontime = v1;
  consumerdemand = v2;
  result.textContent = '';
});

availableproductiontimeRadio.addEventListener('click', function() {
  variable1.textContent = 'Takt time';
  variable2.textContent = 'Consumer demand';
  takttime = v1;
  consumerdemand = v2;
  result.textContent = '';
});

consumerdemandRadio.addEventListener('click', function() {
  variable1.textContent = 'Takt time';
  variable2.textContent = 'Available production time';
  takttime = v1;
  availableproductiontime = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(takttimeRadio.checked)
    result.textContent = `Takt time = ${computetakttime().toFixed(2)}`;

  else if(availableproductiontimeRadio.checked)
    result.textContent = `Available production time = ${computeavailableproductiontime().toFixed(2)}`;

  else if(consumerdemandRadio.checked)
    result.textContent = `Consumer demand = ${computeconsumerdemand().toFixed(2)}`;
})

// calculation

function computetakttime() {
  return (Number(availableproductiontime.value) / Number(consumerdemand.value)) * 60;
}

function computeavailableproductiontime() {
  return (Number(takttime.value) / 60) * Number(consumerdemand.value);
}

function computeconsumerdemand() {
  return Number(availableproductiontime.value) / (Number(takttime.value) / 60);
}