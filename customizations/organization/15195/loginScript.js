var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
console.log(CognitoUserPool)
var poolData = {
	UserPoolId: 'eu-central-1_N6OlPZKBe', // Your user pool id here
	ClientId: '132qeevu4fo2biee2gp40t623d', // Your client id here
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var userData = {
	Username: 'username',
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
