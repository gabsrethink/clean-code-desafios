// Boleanos

const user = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
};

const minimumHeightToRide = 130;

const currentHour = new Date().getHours();

const isParkOpen = currentHour > 9 && currentHour < 18;

if (!isParkOpen) {
  throw new Error('O parque está fechado!');
}

const hasValidTicket = user.hasTicket;

if (!hasValidTicket) {
  throw new Error('O Diego não possui um bilhete para entrar no parque!');
}

const isTallEnough = user.height > minimumHeightToRide;

if (!isTallEnough) {
  throw new Error('O Diego não pode entrar no brinquedo!');
}

console.log('O Diego se divertiu muito! :)');
