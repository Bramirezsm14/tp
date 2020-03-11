const fs = require('fs');// llamamos a file systme , es un modulo nativo que viene con node. nos brinda fx de manejos de archivos,

let archivoTareas = { //es objeto completo 
    archivo: 'tareas.json',
    encoding:'utf-8',
    leer: function () {
        //let archivoEnJson = fs.readFileSync(this.archivo, 'utf-8')
        // return Json.parse(archivoEnJson)
        let tareas = fs.readFileSync(this.archivo, this.encoding)
        return JSON.parse(tareas);
    },

    escribirJSON = {
        guardarJson : function (unArray){
            let formatoJson= JSON.stringify(unArray)
             fs.writeFileSync (this.archivo,formatoJson)
        }
    }
    

}


module.exports = archivoTareas;


/*Sobreescribir:function (arrayTareas){
    let arrayTareas=JSON stringify(arrayTareas);
    let escribirJson=fs.writefilsystem(this.archivo,this.encoding)
    guardar 
}*/