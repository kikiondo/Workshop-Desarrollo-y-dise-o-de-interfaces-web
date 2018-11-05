import {id} from './helpers'

const screen = id('calculator-screen'),
      keys = id('calculator-keys')



let number1, number2, operationType, operation, result
screen.textContent = '0'


export const writeNumber = () => {
  keys.addEventListener('click', e => {
    const t = e.target,
          data = t.dataset
    if(data.number){
      if(screen.textContent === '0' || operation){
        screen.textContent = data.number
      } else {
        screen.textContent += data.number
      }

      operation = false
    }
  })
}

export const getOperation = () => {
  keys.addEventListener('click', e => {
    const t = e.target,
          data = t.dataset
    if(data.operation && data.operation !== 'equals'){
      operation = true
      number1 = Number(screen.textContent)
      operationType = data.operation
      screen.textContent = t.textContent
    }
  })
}

getOperation()

const getResult = () => {
  keys.addEventListener('click', e => {
    const t = e.target,
          data = t.dataset
    if(data.operation && data.operation === 'equals'){
      number2 = Number(screen.textContent)
      operation = true
      switch(operationType) {
        case 'add':
          result = number1 + number2
          break
        case 'minus':
          result = number1 - number2
          break
        case 'multiply':
          result = number1 * number2
          break
        case 'divide':
          result = number1 / number2
          break
        default:
          break
      }

      screen.textContent = result
    }
  })
}

getResult()

/* ALGORITMO BASICO
  1. Escribo el primer numero
  1.1 Cada vez que pulse un botón su valor debe agregarse al valor en a la pantalla
  1.2 La pantalla debe comenzar en 0, por lo tanto tenemos que evaluar si la pantalla tinene 0 antes de hacer lo anterior
  
  2. Elijo una operación
  2.1 Al pulsar un boton de operación (que no sea igual) debemos guardar que operación ee.
  2.2 Guardo el valor en pantalla en una variable (numero1) y limpiar la pantalla para luego el número 2
  
  3. Elijo el segundo numero
  Es casi lo mismo que el paso 1
  
  4. Obtengo el resultado
  4.1 Capturo si el usuario pulso el botón igual
  4.2 El numero 1 lo tengo en una variable (2.2)
  4.3 La operación la tengo en una variable (2.1)
  4.4 Capturo el número en pantalla (será el número 2)
  4.5 Hago la operación
  4.6 Imprimo el resultado en pantalla
*/
