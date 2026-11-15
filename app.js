const names=['Cabeza',
    'Cuello',
    'Hombro derecho',
    'Hombro izquierdo',
    'Brazo derecho superior',
    'Brazo izquierdo superior',
    'Codo derecho',
    'Codo izquierdo',
    'Antebrazo derecho',
    'Antebrazo izquierdo',
    'Muñeca derecha',
    'Muñeca izquierda',
    'Mano derecha',
    'Mano izquierda',
    'Pecho',
    'Abdomen superior',
    'Abdomen inferior',
    'Muslo derecho',
    'Muslo izquierdo',
    'Rodilla derecha',
    'Rodilla izquierda',
    'Pierna derecha',
    'Pierna izquierda',
    'Pie derecho',
    'Pie izquierdo'];
names[14]='Espalda (zona 14)';
//Colocamos la información a mostrar en cada zona.
const content={
  0:{
    title:'Zona 0: Cebeza - Salud Mental y Sueño',
    intro:'Descanso y Ciclo Circadiano en Urgencias',
    causes:['Turnos rotativos, trabajo nocturno prolongado y alteración del ciclo circadiano inherentes a la operación asistencial continua del servicio de urgencias.'],
    recommendations:
    ['Usa antifaz y cortinas blackout para simular oscurridad total de dia.',
    'Evita pantallas pesadas y cafeína las ultimas 3 horas antes de dormir.',
    'Manejo de estrés: Ante la alta carga y tensión del servicio, recuerda pausar 1 minuto y realizar respiraciones profundas (inhalar en 4 segundos, sostener 4, exhalar 4).',
    ],
    images:[{
        src:'Imagenes/Antifaz.jpg',
        label:'Uso de Antifaz y cortinas blackout'
    },
    {
        src:'Imagenes/Evita Pantallas.jpg',
        label:'Evitar cafeína y pantallas pesadas antes de dormir'
    },
    {
        src:'Imagenes/Manejo Estres.jpg',
        label:'Manejo de estrés: Respiraciones profundas'
    }]},
  1:{
    title:'Zona 1: Cuello - Región Cervical',
    intro:'Alerta de Tensión Cervical',
    causes:['Posturas forzadas con flexión, inclinación y rotación sostenida del tronco y cuello durante la atención y el registro clínico en puestos de trabajo con diseño limitado.'],
    recommendations:
    ['Pausa Activa Exprés (1 Minuto):Flexión lateral: lleva la oreja derecha hacia el hombro derecho (sostén 10 segundos sin forzar). Repite al lado izquierdo.',
    'Rotación suave: gira la cabeza lentamente mirando por encima de cada hombro.',
    'Autocuidado: Evita sostener el teléfono con el hombro mientras escribes o registras datos.',
    ],
    images:[{
        src:'Imagenes/Pausa Activa Expres.jpg',
        label:'Pausa Activa Exprés (1 Minuto): Flexión lateral'
    },
    {
        src:'Imagenes/Rotación Suave.jpg',
        label:'Rotación suave: gira la cabeza lentamente mirando por encima de cada hombro.'
    },
    {
        src:'Imagenes/Autocuidado.jpg',
        label:'Autocuidado: Evita sostener el teléfono con el hombro mientras escribes o registras datos.'
    }]},
  2:{
    title:'Zona 2: Hombro derecho',
    intro:'Movilidad de Hombros y Carga',
    causes:['Sobrecarga biomecánica por movimientos repetitivos y manipulación constante de elementos asistenciales.'],
    recommendations:
   ['Realiza círculos amplios con los hombros hacia atrás 10 veces, y luego hacia adelante 10 veces para liberar la articulación.',],
    images:[{
        src:'Imagenes/Hombros.jpg',
        label:'Realiza círculos amplios con los hombros'
    }]},
  3:{
    title:'Zona 3: Hombro izquierdo',
    intro:'Movilidad de Hombros y Carga',
    causes:['Sobrecarga biomecánica por movimientos repetitivos y manipulación constante de elementos asistenciales.'],
    recommendations:
   ['Realiza círculos amplios con los hombros hacia atrás 10 veces, y luego hacia adelante 10 veces para liberar la articulación.',],
    images:[{
        src:'Imagenes/Hombros.jpg',
        label:'Realiza círculos amplios con los hombros'
    }]},
  4:{
    title:'Zona 4: Brazo derecho superior',
    intro:'Descarga de Extremidades Superiores',
    causes:['Actividades asistenciales repetitivas y soporte de cargas físicas durante la atención de pacientes.'],
    recommendations:
   ['Estira el brazo al frente a la altura del hombro, con la palma hacia afuera, y con la otra mano jala suavemente los dedos hacia ti durante 15 segundos para estirar antebrazo y brazo.'],
    images:[{
        src:'Imagenes/Brazos.jpg',
        label:'Estiramiento de brazo',
    }]},
  5:{
    title:'Zona 5: Brazo izquierdo superior',
    intro:'Descarga de Extremidades Superiores',
    causes:['Actividades asistenciales repetitivas y soporte de cargas físicas durante la atención de pacientes.'],
    recommendations:
   ['Estira el brazo al frente a la altura del hombro, con la palma hacia afuera, y con la otra mano jala suavemente los dedos hacia ti durante 15 segundos para estirar antebrazo y brazo.'],
    images:[{
        src:'Imagenes/Brazos.jpg',
        label:'Estiramiento de brazo',
    }]},
  6:{
    title:'Zona 6: Codo derecho',
    intro:'Prevención de Epicondilitis',
    causes:['Esfuerzo físico directo y tareas asistenciales repetitivas.'],
    recommendations:
   ['Evita la sobrecarga al manipular pacientes o bandejas.',
    'Extiende el brazo completamente con la palma hacia arriba y baja los dedos con ayuda de la otra mano.',],
   images:[{
        src:'Imagenes/Sobrecarga.jpg',
        label:'Evita la sobrecarga al manipular pacientes o bandejas',
    },
    {
        src:'Imagenes/Brazos.jpg',
        label:'Extiende el brazo complematemente con la palma',
    }]},
  7:{
    title:'Zona 7: Codo izquierdo',
    intro:'Prevención de Epicondilitis',
    causes:['Esfuerzo físico directo y tareas asistenciales repetitivas.'],
    recommendations:
   ['Evita la sobrecarga al manipular pacientes o bandejas.',
    'Extiende el brazo completamente con la palma hacia arriba y baja los dedos con ayuda de la otra mano.',],
   images:[{
        src:'Imagenes/Sobrecarga.jpg',
        label:'Evita la sobrecarga al manipular pacientes o bandejas',
    },
    {
        src:'Imagenes/Brazos.jpg',
        label:'Extiende el brazo complematemente con la palma',
    }]},
  8:{
    title:'Zona 8: Antebrazo derecho',
    intro:'Fatiga Muscular en Antebrazo',
    causes:['Demandas operativas continuas y manipulación de dispositivos o instrumental médico.'],
    recommendations:
   ['Alivio para la tensión acumulada por canalizaciones y procedimientos continuos. Realiza masajes circulares suaves desde el codo hacia la muñeca en los momentos de menor flujo.'],
    images:[{
        src:'Imagenes/Antebrazos.jpg',
        label:'Alivio para la tensión acumulada por canalizaciones y procedimientos continuos',
    }]},
  9:{
    title:'Zona 9: Antebrazo izquierdo',
    intro:'Fatiga Muscular en Antebrazo',
    causes:['Demandas operativas continuas y manipulación de dispositivos o instrumental médico.'],
    recommendations:
   ['Alivio para la tensión acumulada por canalizaciones y procedimientos continuos. Realiza masajes circulares suaves desde el codo hacia la muñeca en los momentos de menor flujo.'],
    images:[{
        src:'Imagenes/Antebrazos.jpg',
        label:'Alivio para la tensión acumulada por canalizaciones y procedimientos continuos',
    }]},
  10:{
    title:'Zona 10: Muñeca derecha',
    intro:'Cuidado de Muñecas (Prevención del Sindrome del Túnel Carpiano)',
    causes:['Movimientos repetitivos continuos en digitación de sistemas, procedimientos clínicos y uso de instrumental.'],
    recommendations:
   ['Estiramiento clave: Con el brazo extendido y la palma hacia abajo, lleva la mano hacia abajo (haciendo "p.ej. señal de alto") y ejerce leve presión con la otra mano por 10 segundos. Alterna hacia arriba.'],
    images:[{
        src:'Imagenes/Estiramiento clave.jpg',
        label:'Estiramiento clave para la muñeca derecha',
    }]},
  11:{
    title:'Zona 11: Muñeca izquierda',
    intro:'Cuidado de Muñecas (Prevención del Sindrome del Túnel Carpiano)',
    causes:['Movimientos repetitivos continuos en digitación de sistemas, procedimientos clínicos y uso de instrumental.'],
    recommendations:
   ['Estiramiento clave: Con el brazo extendido y la palma hacia abajo, lleva la mano hacia abajo (haciendo "p.ej. señal de alto") y ejerce leve presión con la otra mano por 10 segundos. Alterna hacia arriba.'],
    images:[{
        src:'Imagenes/Estiramiento clave.jpg',
        label:'Estiramiento clave para la muñeca izquierda',
    }]},
  12:{
    title:'Zona 12: Mano derecha',
    intro:'Ergonomía Manual en Urgencias',
    causes:['Tareas manuales repetitivas en la atención asistencial del servicio.'],
    recommendations:
   ['Abre y cierra las manos con fuerza (formando puños y abriendo los dedos al máximo) 10 veces seguidas para activar la circulación y evitar entumecimientos.'],
    images:[{
        src:'Imagenes/Manos.jpg',
        label:'Abre y cierra las manos con fuerza',
    }]},
  13:{
    title:'Zona 13: Mano izquierda',
    intro:'Ergonomía Manual en Urgencias',
    causes:['Tareas manuales repetitivas en la atención asistencial del servicio.'],
    recommendations:
   ['Abre y cierra las manos con fuerza (formando puños y abriendo los dedos al máximo) 10 veces seguidas para activar la circulación y evitar entumecimientos.'],
    images:[{
        src:'Imagenes/Manos.jpg',
        label:'Abre y cierra las manos con fuerza',
    }]},
  14:{
    title:'Zona 14: Dorsal Espalda Alta',
    intro:'Alivio de la Espalda Dorsal',
    causes:['Posturas forzadas y diseño básico de puestos de trabajo que exigen mantener posiciones estáticas o inclinadas.'],
    recommendations:
   ['Entrelaza tus manos al frente, empuja los brazos hacia adelante y encorva ligeramente la espalda hacia atrás abriendo las escápulas durante 10 segundos'],
    images:[{
        src:'Imagenes/Espalda alta.jpg',
        label:'Estiramiento para la dorsal espalda alta',
    }]},
  15:{
    title:'Zona 15: Lumbar Espalda Baja',
    intro:' ¡Zona Crítica! Prevención de Lumbalgia y Hernias',
    causes:['Traslado, levantamiento y cambio de posición manual de pacientes críticos, sumado a la limitación o subutilización operativa de ayudas mecánicas y alta carga de trabajo.'],
    recommendations:
   ['Flexiona las rodillas, nunca la cintura, al levantar o posicionar a un paciente.',
    'Pide ayuda: No cargues todo el peso tú solo; hazlo en equipo.',
    'Usa ayudas mecánicas: Aprovecha camillas hidráulicas y grúas de transferencia (¡no te saltes este paso aunque haya afán!)'
   ],
    images:[{
        src:'Imagenes/Flexiona las rodillas.jpg',
        label:'Flexiona las rodillas',
    },
    {
        src:'Imagenes/Pide Ayuda.jpg',
        label:'Pide ayuda',
    },
    {
        src:'Imagenes/Sobrecarga.jpg',
        label:'Usa ayudas mecánicas',
    }]},
  16:{
    title:'Zona 16: Cadera, Pelvis y Extremidades Inferiores',
    intro:'Liberación de Cadera y Glúteos',
    causes:['Al estar muchas horas de pie (bipedestación prolongada), la cadera se fatiga, posturas estáticas derivadas de la atención continuada en urgencias.'],
    recommendations:
   ['Apóyate de una pared, lleva una rodilla hacia el pecho y manténla unos segundos; alterna con la otra pierna.'],
    images:[{
        src:'Imagenes/Apoyate pared.jpg',
        label:'Apóyate de una pared, lleva una rodilla hacia el pecho y manténla unos segundos',
    }]},
  17:{
    title:'Zona 17: Muslo derecho',
    intro:'Fatiga en Cuádriceps e Isquiotibiales',
    causes:['Mantenimiento de posturas prolongadas de pie y exigencias de desplazamiento en el área de urgencias.'],
    recommendations:
   ['De pie, flexiona una pierna hacia atrás llevando el talón hacia el glúteo y sujétalo con la mano durante 10 segundos para estirar la parte frontal del muslo.'],
    images:[{
        src:'Imagenes/Muslos.jpg',
        label:'Flexión de pierna hacia atrás para estirar la parte frontal del muslo',
    }]},
  18:{
    title:'Zona 18: Muslo izquierdo',
    intro:'Fatiga en Cuádriceps e Isquiotibiales',
    causes:['Mantenimiento de posturas prolongadas de pie y exigencias de desplazamiento en el área de urgencias.'],
    recommendations:
   ['De pie, flexiona una pierna hacia atrás llevando el talón hacia el glúteo y sujétalo con la mano durante 10 segundos para estirar la parte frontal del muslo.'],
    images:[{
        src:'Imagenes/Muslos.jpg',
        label:'Flexión de pierna hacia atrás para estirar la parte frontal del muslo',
    }]},
  19:{
    title:'Zona 19: Rodilla derecha',
    intro:'Protección de Rodillas ante Giros y Traslados',
    causes:['Giros y traslados de pacientes realizados de forma directa mediante esfuerzo físico y sin soporte mecánico adecuado.'],
    recommendations:
   ['Al girar o trasladar pacientes, evita rotar las rodillas de golpe con el pie fijo en el suelo; mueve siempre todo el cuerpo en bloque para proteger la articulación.'],
    images:[{
        src:'Imagenes/Flexiona las rodillas.jpg',
        label:'Evita rotar las rodillas de golpe con el pie fijo en el suelo',
    }]},
  20:{
    title:'Zona 20: Rodilla izquierda',
    intro:'Protección de Rodillas ante Giros y Traslados',
    causes:['Giros y traslados de pacientes realizados de forma directa mediante esfuerzo físico y sin soporte mecánico adecuado.'],
    recommendations:
   ['Al girar o trasladar pacientes, evita rotar las rodillas de golpe con el pie fijo en el suelo; mueve siempre todo el cuerpo en bloque para proteger la articulación.'],
    images:[{
        src:'Imagenes/Flexiona las rodillas.jpg',
        label:'Evita rotar las rodillas de golpe con el pie fijo en el suelo',
    }]},
  21:{
    title:'Zona 21: Pierna derecha',
    intro:'Circulación y Retorno Venoso',
    causes:['Bipedestación prolongada que dificulta el adecuado retorno venoso durante los turnos asistenciales.'],
    recommendations:
   ['Ejercicio: Ponte en puntas de pie (eleva los talones) y baja lentamente 15 veces para activar la "bomba muscular" de las pantorrillas y mejorar el retorno venoso.'],
    images:[{
        src:'Imagenes/Piernas.jpg',
        label:'Ejercicio: Ponte en puntas de pie y baja lentamente 15 veces para activar la "bomba muscular',
    }]},
  22:{
    title:'Zona 22: Pierna izquierda',
    intro:'Circulación y Retorno Venoso',
    causes:['Bipedestación prolongada que dificulta el adecuado retorno venoso durante los turnos asistenciales.'],
    recommendations:
   ['Ejercicio: Ponte en puntas de pie (eleva los talones) y baja lentamente 15 veces para activar la "bomba muscular" de las pantorrillas y mejorar el retorno venoso.'],
    images:[{
        src:'Imagenes/Piernas.jpg',
        label:'Ejercicio: Ponte en puntas de pie y baja lentamente 15 veces para activar la "bomba muscular',
    }]},
  23:{
    title:'Zona 23: Pie y Tobillo derecho',
    intro:'Descanso para Pies (Calzado y Soporte)',
    causes:['Pisos húmedos, presencia de obstáculos o cables, y largas jornadas de pie que aumentan el riesgo locativo y de caídas al mismo nivel.'],
    recommendations:
   ['Realiza movimientos circulares con cada tobillo hacia ambos lados (10 veces).',
    'Recuerda el uso obligatorio de calzado antideslizante y cómodo, clave para prevenir caídas al mismo nivel'
   ],
    images:[{
        src:'Imagenes/Pies.jpg',
        label:'Realiza movimientos circular con el tobillo derecho hacia ambos lados (10 veces)',
    },
    {
        src:'Imagenes/Pies 2.jpg',
        label:'Recuerda el uso obligatorio de calzado antideslizante y cómodo',
    }]},
  24:{
    title:'Zona 24: Pie y Tobillo izquierdo',
    intro:'Descanso para Pies (Calzado y Soporte)',
    causes:['Pisos húmedos, presencia de obstáculos o cables, y largas jornadas de pie que aumentan el riesgo locativo y de caídas al mismo nivel.'],
    recommendations:
   ['Realiza movimientos circulares con cada tobillo hacia ambos lados (10 veces).',
    'Recuerda el uso obligatorio de calzado antideslizante y cómodo, clave para prevenir caídas al mismo nivel'
   ],
    images:[{
        src:'Imagenes/Pies.jpg',
        label:'Realiza movimientos circular con el tobillo izquierdo hacia ambos lados (10 veces)',
    },
    {
        src:'Imagenes/Pies 2.jpg',
        label:'Recuerda el uso obligatorio de calzado antideslizante y cómodo',
    }]},
  };
    
//Partes del cuerpo y sus posiciones para mostrar el número de zona.
//Cabeza
const paths=['M160 12 Q175 0 190 12 L204 28 L202 64 Q175 79 148 64 L146 28Z',
//Cuello
             'M158 69 L192 69 L194 99 L156 99Z',
//Hombro derecho
              'M154 92 L112 99 L94 124 L113 153 L150 143Z',
//Hombro izquierdo
              'M196 92 L238 99 L256 124 L237 153 L200 143Z',
//Brazo derecho superior 
              'M93 128 L111 156 L98 202 L77 194Z',
//Brazo izquierdo superior
              'M257 128 L239 156 L252 202 L273 194Z',
//Codo derecho
              'M76 196 L99 205 L91 228 L66 222Z',
//Codo izquierdo
              'M274 196 L251 205 L259 228 L284 222Z',
//Antebrazo derecho
              'M65 224 L91 232 L76 271 L50 259Z',
//Antebrazo izquierdo
              'M285 224 L259 232 L274 271 L300 259Z',
//Muñeca derecha
              'M49 261 L76 274 L70 291 L42 281Z',
//Muñeca izquierda
              'M301 261 L274 274 L280 291 L308 281Z',
//Mano derecha
              'M42 283 L69 294 L61 319 L37 331 L23 320 L28 299Z',
//Mano izquierda
              'M308 283 L281 294 L289 319 L313 331 L327 320 L322 299Z',
//Dorsal Espalda Alta
              'M151 100 L199 100 L231 155 L119 155Z',
//Lumbar Espalda Baja
              'M119 158 L231 158 L226 203 L124 203Z',
//Cadera, Pelvis y Extremidades Inferiores
              'M124 206 L226 206 L224 251 Q203 262 175 257 Q147 262 126 251Z',
//Muslo derecho
              'M126 254 Q149 264 173 261 L169 341 L148 384 L113 374 L107 310Z',
//Muslo izquierdo
              'M224 254 Q201 264 177 261 L181 341 L202 384 L237 374 L243 310Z',
//Rodilla derecha
              'M113 377 L148 387 L145 420 L108 416Z',
//Rodilla izquierda
              'M237 377 L202 387 L205 420 L242 416Z',
//Pierna derecha
              'M108 419 L145 423 L129 503 L97 500Z',
//Pierna izquierda
              'M242 419 L205 423 L221 503 L253 500Z',
//Pie derecho
              'M96 503 L129 506 L125 527 L141 541 Q147 552 130 551 L73 550 Q64 545 76 537 L92 525Z',
//Pie izquierdo
              'M254 503 L221 506 L225 527 L209 541 Q203 552 220 551 L277 550 Q286 545 274 537 L258 525Z'];                

//Posiciones de los números de zona
const positions=[[175,43],[175,85],[120,125],[230,125],[94,174],[256,174],
[81,212],[269,212],[69,248],[281,248],[57,280],[293,280],[46,309],
[304,309],[175,132],[175,180],[175,234],[140,315],[210,315],[127,398],
[223,398],[120,463],[230,463],[109,538],[241,538]];

const svg=document.getElementById('zones'),ns='http://www.w3.org/2000/svg';let active=null;
function selectZone(i){active=i;document.querySelectorAll('.zone').forEach(el=>el.classList.toggle('active',Number(el.dataset.zone)===i));
const d=content[i];document.getElementById('title').textContent=d?d.title:`Zona ${i}: ${names[i]}`;
document.getElementById('intro').textContent=d?d.intro:'Esta zona está preparada para que agregues tu propia información.';
const target=document.getElementById('details');
target.replaceChildren();
if(!d){const box=document.createElement('div');
box.className='placeholder';
box.textContent='Contenido pendiente de personalización. Aquí podrás mostrar posibles causas, recomendaciones e ilustraciones para esta zona.';
target.append(box);
return}addList('Posibles causas',d.causes);
addList('Recomendaciones',d.recommendations);

function addImages(images) {

  const h = document.createElement('h3');
  h.textContent = 'Ejemplos visuales';

  const wrap = document.createElement('div');
  wrap.className = 'illustrations';

  images.forEach(image => {

    const box = document.createElement('div');
    box.className = 'pose';

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.label;
    img.loading = 'lazy';

    const label = document.createElement('span');
    label.textContent = image.label;

    box.append(img, label);
    wrap.append(box);

  });

  document.getElementById('details').append(h, wrap);
}
if (d.images && d.images.length > 0) {
  addImages(d.images);
}
const note=document.createElement('div');
note.className='notice';
note.textContent='IMPORTANTE: Las recomendaciones presentadas son medidas ' +
  'generales de autocuidado y prevención. Si experimentas ' +
  'dolor persistente, intenso o que empeora, evita forzar ' +
  'la zona afectada y solicita una valoración por un ' +
  'profesional de la salud. Recuerda que tu bienestar ' +
  'también es fundamental para brindar una atención ' +
  'segura y de calidad a los pacientes.';
target.append(note);
document.getElementById('information').scrollIntoView({behavior:'smooth',block:'nearest'});}
function addList(title,items){const h=document.createElement('h3');
h.textContent=title;
const ul=document.createElement('ul');
ul.className='list';
items.forEach(t=>{const li=document.createElement('li');
li.textContent=t;
ul.append(li)});
document.getElementById('details').append(h,ul)}
paths.forEach((d,i)=>{const g=document.createElementNS(ns,'g'),path=document.createElementNS(ns,'path'),title=document.createElementNS(ns,'title'),t=document.createElementNS(ns,'text');
path.setAttribute('d',d);
path.setAttribute('class','zone');
path.dataset.zone=i;path.setAttribute('tabindex','0');
path.setAttribute('role','button');
path.setAttribute('aria-label',`Zona ${i}: ${names[i]}`);
title.textContent=`${i}: ${names[i]}`;
path.append(title);
t.setAttribute('x',positions[i][0]);
t.setAttribute('y',positions[i][1]+4);
t.setAttribute('class','num');
t.textContent=i;
g.append(path,t);
g.addEventListener('click',()=>selectZone(i));
path.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();
selectZone(i)}});
g.style.cursor='pointer';
svg.append(g)});
//selectZone(14);