var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
console.log(CognitoUserPool)
var poolData = {
	UserPoolId: 'eu-central-1_B711TPFsr', // Your user pool id here
	ClientId: '5r4grlcsa0uaa1llt8v94e34n9', // Your client id here
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var userData = {
	Username: '2d0826a3-9eb0-4936-aeda-71391486bece',
	Pool: userPool,
};
var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
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
