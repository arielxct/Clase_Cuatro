const fs = require('fs');

const tareaParse =JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'))



function tareas(consolaDeUsuario){
    switch(consolaDeUsuario[2]){
        case 'listar':
            tareaParse.forEach(tarea => {
                console.log(tarea.titulo)
            });
        break;
        case undefined:
            console.log('Debes pasar una tarea')
        break;
        case 'crear':
            const tarea= {
                titulo: consolaDeUsuario[3],
                estado: "pendiente"
        }
        guardarJSON(tarea);
        default: 
            console.log('No entiendo que quieres hacer')
        break;
    }
}



function escribirJSON(array) {
        fs.writeFileSync('./tareas.json', array)
    }

function guardarJSON(objetoTareaNueva){
        let nuevaTarea = JSON.stringify([...tareaParse, objetoTareaNueva])
        escribirJSON(nuevaTarea)
    }
    



module.exports = tareas;









