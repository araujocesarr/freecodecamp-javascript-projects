const currencyUnit = [
  ["ONE HUNDRED", 10000],
  ["TWENTY", 2000],
  ["TEN", 1000],
  ["FIVE", 500],
  ["ONE", 100],
  ["QUARTER", 25],
  ["DIME", 10],
  ["NICKEL", 5],
  ["PENNY", 1],
];

function checkCashRegister(price, cash, cid) {
  let difference = (cash - price) * 100;
  let differenceCopy = difference;
  let objectReturn = { status: "", change: [] };
  let cidSum = 0; //dinero disponible en caja

  cid.reverse(); // reverse del cid para ir verificando desde el mayor
  //recorrer el cid para verificar el vuelto disponible
  cid.forEach((item, index) => {
    let amount = 0;
    let currSum = item[1] * 100;
    cidSum += currSum;

    //ciclo para sumar al cambio a regresar y restar lo que corresponde
    while (difference >= currencyUnit[index][1] && currSum > 0) {
      amount += currencyUnit[index][1];
      difference -= currencyUnit[index][1];
      cidSum -= currencyUnit[index][1];
      currSum -= currencyUnit[index][1];
    }
    //agregar monto del vuelto
    if (amount != 0) {
      objectReturn.change.push([item[0], amount / 100]);
      objectReturn.status = "OPEN";
    }
  });

  //vuelto insuficiente y falto dinero por regresar
  if (difference > 0) {
    objectReturn = { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  //vuelto justo
  if (difference == 0 && cidSum == 0) {
    objectReturn.status = "CLOSED";
    objectReturn.change = cid.reverse();
  }
  return objectReturn;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
