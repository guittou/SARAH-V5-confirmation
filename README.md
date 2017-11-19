### Module Node-Red pour S.A.R.A.H V5

Ce module sarah-confirmation permet de renvoyer un texte aléatoire pour confirmer que sarah va éffectuer un action.


telecharger, extraire puis copier le repertoire **sarah-confirmation** dans le dossier `\sarah\viseo-bot-framework\node_modules\`

relancer sarah

configuration du module :

![GitHub Logo](/images/confirm1.png)

module à placer avec un **win-speak** avant les modules effectuant une action

permet de renvoyer un texte aléatoire pour confirmer que sarah va éffectuer un action

![GitHub Logo](/images/flow_all.png)


### Inputs

- `msg.payload`

### Outputs

- `msg.payload`: renvoyé par win-sarah

- `msg.speak`: texte à lire par win-speak(ou autre)

![GitHub Logo](/images/speak1.png)

