import {Tcarro, frota}  from "./frota"

function buscarCarrosPorMarca(frota: Tcarro[], marca: string):Tcarro[] {
  if (marca === undefined) {
    return frota
  }

  return frota.filter((carro) => {
      return carro.marca === marca
    }
  )
}
console.table(buscarCarrosPorMarca(frota, 'Ford'));

