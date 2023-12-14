function calculateTotalSalesWithTax(products, tax) {
  const totalSales = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const taxAmount=(totalSales * tax)/100;

  const totalSalesWithTaxes= totalSales+taxAmount;


  return parseFloat(totalSalesWithTaxes.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
