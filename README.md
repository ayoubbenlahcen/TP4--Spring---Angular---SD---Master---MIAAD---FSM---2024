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

### 11. Une fois que tout est configuré : Vous pouvez ouvrir votre projet dans Visual Studio Code ou tout autre IDE. Nous utiliserons IntelliJ IDEA.
Pour nous a essayer d'utiliser IntelliJ IDEA .

### 12.Structure du projet : Voici la structure typique d'un projet Angular.
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/c1763d73-a366-4c03-ad1e-65a7b64af509)

### Rappel :
  - Une fois qu'une application Angular est lancée, le fichier affiché est index.html.
    index.html appelle main.ts.
    main.ts démarre un module appelé app.module.ts, qui est le fichier suivant :
    ![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/218b080a-8ae8-43ff-95dc-88f86bf1f602)

    Le fichier app.module.ts contient les déclarations des composants, les importations des modules nécessaires,
    le bootstrap du composant principal (Bootstrap component), ainsi que la configuration des services.

    Le fichier app.component.html contient la partie HTML de la composante principale (AppComponent) de
    l'application Angular Voici ce que contient ce fichier jusqu'a maintenant:
    ![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/c13651a3-e11d-46ab-a852-cb624b55370a)
    
    Le fichier app.component.ts contient la partie TypeScript de la composante principale (AppComponent) de
    l'application Angular.
    ![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/821e4344-6dde-46ad-8faf-f5b4a02a6ef9)
    Le fichier app.component.spec.ts est conservé pour les tests unitaires. Nous n'allons pas l'utiliser pour
    l'instant.

    La dernière partie est le fichier app.component.css, qui est vide au début du projet Angular.

    Maintenant, dans la partie HTML (app.component.html), je vais ajouter :
    ![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/221baa66-a0bb-48fa-8916-1204bbe8711f)

    Alors, dans l’application, voici le résultat que nous avons obtenu :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/d9ebba37-3c6c-4a1b-a97c-97e3db539164)

### 13. Ce que je dois faire maintenant c’est essayer de créer une petite application avec deux composants et un petit menu, en utilisant Bootstrap. Voici les étapes à suivre :.
    1) Installation de Bootstrap :
          Exécutez la commande suivante pour installer Bootstrap et Bootstrap-icons : npm install bootstrap bootstrap-icons
    2) Vérification de l’installation :
    Une fois que Bootstrap et Bootstrap-icons sont installés, vous pouvez les voir dans le dossier node_modules
    où toutes les dépendances sont installées. Vous devriez trouver les dossiers bootstrap et bootstrap-icons
    ajoutés dans ce répertoire. Voici comment cela devrait apparaître dans votre projet :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/6eee287d-6a80-4f43-b4c4-b4c8b347e5d0)

    3) Alors jusqu’à maintenant vous avez installé les dépendances de Bootstrap et Bootstrap-icons. Comment les
    utiliser ?
    
###### ====> Pour cela, nous allons éditer le fichier angular.json pour les déclarer, comme suit :

Ouvrez le fichier angular.json et ajoutez les chemins de Bootstrap et Bootstrap-icons dans les sections styles et scripts sous les options de build du projet. Voici comment procéder :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/4b0b5566-0cc8-4da2-800b-ddcb96536852)

### 14. Une fois que tout est configuré : Vous pouvez ouvrir votre projet dans Visual Studio Code ou tout autre IDE. Nous utiliserons IntelliJ IDEA.
### 15. Une fois que tout est configuré : Vous pouvez ouvrir votre projet dans Visual Studio Code ou tout autre IDE. Nous utiliserons IntelliJ IDEA.
### 10. Une fois que tout est configuré : Vous pouvez ouvrir votre projet dans Visual Studio Code ou tout autre IDE. Nous utiliserons IntelliJ IDEA.
### 10. Une fois que tout est configuré : Vous pouvez ouvrir votre projet dans Visual Studio Code ou tout autre IDE. Nous utiliserons IntelliJ IDEA.
### 10. Une fois que tout est configuré : Vous pouvez ouvrir votre projet dans Visual Studio Code ou tout autre IDE. Nous utiliserons IntelliJ IDEA.
### 10. Une fois que tout est configuré : Vous pouvez ouvrir votre projet dans Visual Studio Code ou tout autre IDE. Nous utiliserons IntelliJ IDEA.
### 10. Une fois que tout est configuré : Vous pouvez ouvrir votre projet dans Visual Studio Code ou tout autre IDE. Nous utiliserons IntelliJ IDEA.
### 10. Une fois que tout est configuré : Vous pouvez ouvrir votre projet dans Visual Studio Code ou tout autre IDE. Nous utiliserons IntelliJ IDEA.
### 10. Une fois que tout est configuré : Vous pouvez ouvrir votre projet dans Visual Studio Code ou tout autre IDE. Nous utiliserons IntelliJ IDEA.
### 10. Une fois que tout est configuré : Vous pouvez ouvrir votre projet dans Visual Studio Code ou tout autre IDE. Nous utiliserons IntelliJ IDEA.


