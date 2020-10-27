/*
Insertamos un documento en la colección motos
tendremos que hacer previamente un:
 use bd
 para posicionarlos o usar una base de datos concreta
*/
db.motos.insertMany([
    {
    "Nombre":"Honda MSX125 Grom 2021", 
    "peso": 103, 
    "cilindrada": 125, //Sin comillas para que se puedan hacer operaciones con ellos
    "cv": 9.66, //Se pone un punto en vez de una coma ya que el código es en estricto inglés
    "motor": "Monocilindrico"
},

{
    "Nombre":"CFMoto 300 SR 2021", 
    "peso": 165, 
    "cilindrada": 292.40,
    "cv": 28.70, 
    "motor": "Monocilindrico"
},

{
    "Nombre":"BMW R 1250 RT 2021", 
    "peso": 279, 
    "cilindrada": 1254,
    "cv": 136, 
    "motor": "Bicilindrico Boxer"
},
{
    "Nombre":"HONDA Forza 125", 
    "peso": 147.5, 
    "cilindrada": 125,
    "cv": 15, 
    "motor": "Monocilindrico"
},
{
    "Nombre":"HONDA VTR 1000 SP-1 2000", 
    "peso": 147.5, 
    "cilindrada": 996,
    "cv": 136, 
    "motor": "Bicilindrico en V"
},
{   
    "Nombre":"KTM 890 Adventure 2021", 
    "cilindrada": 889,
    "cv": 103.25, 
    "motor": "Bicilindrico en línea"
},
    
 ]);
 db.motos.find() //Para que me muestre que todos los valores introducidos están bien.
 db.motos.find({$or:[{"motor":"Monocilindrico"},{"motor":"Bicilindrico en V"}]}) //Find para que me de los que tienen o motor Monocilindrico o Bicilindrico
 db.motos.find( { "motor":"Monocilindrico", "cilindrada": { $lt: 500 } } ) //Find para que me de los que tienen motor monocilindrico y de menos de 500cc
 db.motos.find({"cv": {$gte: 25 }})//Find que da las motos que tienen mas de 25 cv de potencia
 db.motos.find( { "peso":{ $gte:100  }, "peso": { $lte: 200 } } )//Find que da las motos que pesan entre 100 y 200 kgs
 db.motos.find( { "peso": null } ) //Find para los valores de peso que son nulos
 