export const filterDates = (sales, month) => {
    const filter_sales = sales.filter(
        (s) =>
          new Date(s.dateOfSale).getMonth() + 1 === month &&
          new Date(s.dateOfSale).getFullYear() === new Date().getFullYear()
      );
      return filter_sales.length;
};

export const dataFilter = (dates) => {
  return [
    { mes: "Enero", ventas: filterDates(dates, 1) },
    { mes: "Febrero", ventas: filterDates(dates, 2) },
    { mes: "Marzo", ventas: filterDates(dates, 3) },
    { mes: "Abril", ventas: filterDates(dates, 4) },
    { mes: "Mayo", ventas: filterDates(dates, 5) },
    { mes: "Junio", ventas: filterDates(dates, 6) },
    { mes: "Julio", ventas: filterDates(dates, 7) },
    { mes: "Agosto", ventas: filterDates(dates, 8) },
    { mes: "Septiembre", ventas: filterDates(dates, 9) },
    { mes: "Octubre", ventas: filterDates(dates, 10) },
    { mes: "Noviembre", ventas: filterDates(dates, 11) },
    { mes: "Diciembre", ventas: filterDates(dates, 12) },
  ];
};

export const reduceTotal = (sales) => {
    const total = sales.map((s) => Number(s.total)).reduce((a, b) => a + b,0);
    return total;
  };