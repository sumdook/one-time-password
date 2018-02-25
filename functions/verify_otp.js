const admin = require('firebase-admin');

modules.export = funcion(req, res) {
	if (!req.body.phone || !req.body.code) {
    return res.status(422).send({ error: 'You must provide a phone and code both' });
	
	const phone = String(req.body.phone).replace(/[^\d]/g, ''); 
	const code = parseInt(req.body.code);

	admin.auth().getUser(phone)
	.then(() =>{
		const ref = admin.database().ref('users/'+phone);
		ref.on('value', snapshot ={
			ref.off();
			const user = snapshot.val();

			if(user.code!== code || !user.codeValid){
				return res.status(422).send({error: 'Code not valid'});
			}

			ref.update({codeValid:false});
			admin.auth().createCustomToken(phone)
			.then(token => res.send({token:token}))
		}) 
	})
	.catch(err => res.status(422).send({error:err}))

	}

}