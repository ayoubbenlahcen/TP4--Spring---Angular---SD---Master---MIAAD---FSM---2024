# TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024

## la partie 1 : 
Pour créer une application Angular, en peux suiver ces étapes : 
### 1. Installer Node.js :
Téléchargez et installez Node.js depuis le site officiel de Node.js. Node.js inclut npm (Node Package Manager).

### 2. Vérifier l'installation de Node.js :
Pour vérifier si Node.js est correctement installé, exécutez la commande suivante dans votre terminal :npm --version

### 3. Installer Angular CLI :
Une fois Node.js installé, installez Angular CLI globalement en utilisant npm : npm install -g @angular/cli 

### 4. Vérifier l'installation de Angular CLI :
Pour vérifier si Angular CLI est correctement installé, exécutez la commande suivante : ng version

### 5. Créer un nouveau projet Angular :
Une fois Angular CLI installé, créez un nouveau projet Angular avec la commande suivante : ng new Nom_projet --no-standalone

##### Remarque : 
À partir de Angular 14, vous avez le choix d'utiliser des composants autonomes (standalone components) ou de les inclure dans un module. La commande ci-dessus crée un projet sans contrainte stricte.

### 6. Choisir le type de feuille de style :
Lors de la création du projet, Angular CLI vous demandera de choisir un préprocesseur CSS :

  - CSS
  - SCSS
  - SASS
  - Less
### 7. Appuyez sur "Entrée" pour choisir CSS.
### 8. Configurer uniquement le frontend :
Angular CLI vous demandera si vous souhaitez développer également le backend avec Node.js. Sélectionnez "N" pour non, car vous développez le backend séparément (par exemple, avec Java, Python, etc.).

### 9. Installer les dépendances :
Angular CLI installera automatiquement les dépendances nécessaires pour votre projet.

### 10. Démarrer l'application Angular :
Après l'installation, accédez au dossier de votre projet : cd Nom_projet
lancez le serveur de développement Angular avec la commande : ng serve

Cela démarre votre application et vous donne un lien local (par défaut, http://localhost:4200) pour visualiser l'application.

##### Remarques : 
  - Modules vs. Standalone Components :
    À partir d'Angular 14, vous avez la possibilité de créer des applications avec des composants autonomes
    (standalone components) qui ne sont pas nécessairement attachés à un module. Cependant, pour les
    applications de taille importante, il est souvent recommandé d'utiliser des modules pour mieux organiser et
    gérer les différentes parties de l'application.

Voici le resulat quand on a apres le run : 
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/91720440-8bb7-4c08-9120-40f8a94798c2)
