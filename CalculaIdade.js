função  calculaIdade ( anos )  {
	return  `Daqui a ${ anos } anos, ${ this . nome } terá ${
		isso . idade  +  anos
	} anos de idade.`;
}

const  pessoa1  =  {
	nome : 'Amélia' ,
	idade : 23 ,
} ;

const  pessoa2  =  {
	nome : 'Márcia' ,
	idade : 20 ,
} ;

const  pessoa3  =  {
	nome : 'Jonas' ,
	idade : 13 ,
} ;

consola . log ( calculaIdade.call ( pessoa3,40 ) ) ; _ _ _ _ 
consola . log ( calculaIdade . aplique ( pessoa2 ,  [ 24 ] ) ) ;