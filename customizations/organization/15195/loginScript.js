cognitoUser.getUserAttributes(function(err, result) {
	if (err) {
		alert(err.message || JSON.stringify(err));
		return;
	}
	for (i = 0; i < result.length; i++) {
		console.log(
			'attribute ' + result[i].getName() + ' has value ' + result[i].getValue()
		);
	}
});
