module.exports = function(RED) {
    function sarahconfirmation(config) {
        RED.nodes.createNode(this,config);

		
        var node = this;

		this.texte1 = config.texte1;
		this.texte2 = config.texte2;
		this.texte3 = config.texte3;
		this.texte4 = config.texte4;
		this.texte5 = config.texte5;
		
		

		node.on('input', function(msg) {
			let confirmation = [];
			
			function add_texte(texte){
				if (typeof texte !== "undefined"){confirmation.push(texte)}
			};
			
			add_texte(node.texte1);
			add_texte(node.texte2);
			add_texte(node.texte3);
			add_texte(node.texte4);
			add_texte(node.texte1);
			
			random = Math.floor((Math.random()*(confirmation.length-1))+1);
			
			msg.speak = confirmation[random];
			node.send(msg);
        });
    }
	

    RED.nodes.registerType("sarah-confirmation",sarahconfirmation);
}



