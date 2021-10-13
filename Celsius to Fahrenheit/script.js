//Celsius to Fahrenheit

// c = (f - 32) * 5/9
// f = c * 9/5 + 32

//converteCelsiuseFahrenheite('50F)
function transformandoGrau(grau) {
  const celsiusExiste = grau.toUpperCase().includes('C')
  const fahrenheitExiste = grau.toUpperCase().includes('F')

  //fluxo de erro
  if (!celsiusExiste && !fahrenheitExiste) {
    throw new Error('Grau não identificado')
  }

  //fluxo ideal f-> C
  let updateDeGrau = Number(grau.toUpperCase().replace('F', ''))
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  let deGrauSign = 'C'

  //fluxo alternativo
  if (celsiusExiste) {
    updateDeGrau = Number(grau.toUpperCase().replace('C', ''))
    formula = celsius => (celsius * 9) / 5 + 32
    deGrauSign = 'F'
  }

  return formula(updateDeGrau) + deGrauSign
}

try {
  console.log(transformandoGrau('10C'))
  console.log(transformandoGrau('50F'))
  transformandoGrau('50Z')
} catch (error) {
  console.log(error.message)
}
