const hora = document.querySelector(`.horas`);
const minutos = document.querySelector(`.minutos`);
const segundos = document.querySelector(`.segundos`);

setInterval(() => {
  let horas = new Date();
  hora.innerText =
    horas.getHours().toString().length < 2
      ? `0` + horas.getHours().toString()
      : horas.getHours().toString();
  minutos.innerText =
    horas.getMinutes().toString().length < 2
      ? `0` + horas.getMinutes().toString()
      : horas.getMinutes().toString();
  segundos.innerText =
    horas.getSeconds().toString().length < 2
      ? `0` + horas.getSeconds().toString()
      : horas.getSeconds().toString();
}, 1000);
