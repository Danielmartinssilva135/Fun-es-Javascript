const  alunos  =  [
	{
		nome : 'João' ,
		nota : 5 ,
		turma : '1B' ,
	} ,
	{
		nome : 'Sófia' ,
		nota : 9 ,
		turma : '1B' ,
	} ,
	{
		nome : 'Paulo' ,
		nota : 6 ,
		turma : '2C' ,
	} ,
] ;

função  alunos ( alunos ,  mídia )  {
	deixe  aprovados  =  [ ] ;

	for  ( let  i  =  0 ;  i  <  alunos . comprimento ;  i ++ )  {
		let  { nota , nome }  =  alunos [ i ] ;

		if  ( nota  >=  mídia )  {
			aprovados . empurrar ( nome ) ;
		}
	}

	        aprovados de retorno ;
}

consola . log ( alunosAprovados ( alunos ,  5 ) ) ;