import { fetchData } from "./get.js";




const experimento = async () =>{

    const doc = document.querySelector(".experimento")

    try{
        const data = await fetchData("/experimento")

        return data
    }
   catch(error){
       console.error(error)
   }
}

const simulacion = async () => {

    const doc = document.querySelector(".simulacion")

    try {
        const data = await fetchData("/simulacion")
        console.log(data)
        doc.innerHTML = data.probabilidad+"%"
    } catch (error) {
        console.error(error)
    }
}

simulacion()

const draw = async () => {
    const table = document.querySelector(".tabla")
    try {
      const values = await experimento()

      const list = values.list_moves
      
      const xValues = []
      const yValues = []

      for(let i=0;i<list.length;i++){
          xValues.push(list[i].x)
          yValues.push(list[i].y)

          table.innerHTML+=`
          <tr>
          <td>${i===0? 'inicio':i}</td>
          <td>${list[i].x}</td>
          <td>${list[i].y}</td>
        </tr>`
      }


      
      const trace1 = {
        x: xValues,
        y: yValues,
        type: 'scatter'
      }
      const data = [trace1]
      Plotly.newPlot('plot', data)
    }
    catch (err) {
      console.error(err)
      alert(err)
    }
  }

draw()