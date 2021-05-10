import io from 'socket.io-client';

export const socket = io('https://api.radiopanel.co', {
	withCredentials: false,
	transports: ['websocket'],
});

socket.on('connect', () => {
	socket.emit('authenticate-client', { tenant: auth.headers['x-tenant'], apiKey: auth.headers['Authorization'] });
});

socket.on('auth-ok', ({ rooms }) => {
	//console.log('auth ok', rooms);
});