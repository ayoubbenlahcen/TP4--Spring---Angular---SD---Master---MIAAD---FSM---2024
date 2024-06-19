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
    1- Installation de Bootstrap :
          Exécutez la commande suivante pour installer Bootstrap et Bootstrap-icons : npm install bootstrap bootstrap-icons
    2- Vérification de l’installation :
    Une fois que Bootstrap et Bootstrap-icons sont installés, vous pouvez les voir dans le dossier node_modules
    où toutes les dépendances sont installées. Vous devriez trouver les dossiers bootstrap et bootstrap-icons
    ajoutés dans ce répertoire. Voici comment cela devrait apparaître dans votre projet :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/6eee287d-6a80-4f43-b4c4-b4c8b347e5d0)

    3- Alors jusqu’à maintenant vous avez installé les dépendances de Bootstrap et Bootstrap-icons. Comment les
    utiliser ?
    
###### ====> Pour cela, nous allons éditer le fichier angular.json pour les déclarer, comme suit :

Ouvrez le fichier angular.json et ajoutez les chemins de Bootstrap et Bootstrap-icons dans les sections styles et scripts sous les options de build du projet. Voici comment procéder :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/4b0b5566-0cc8-4da2-800b-ddcb96536852)

On peut inclure Bootstrap aussi en l'important dans le fichier styles.css que vous voyez à côté du fichier main.ts. Voici comment vous pouvez faire cela :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/9a2282e9-8b7b-4d30-a015-4e3d2a4d1e39)

  4- Après, nous retournons à notre app.component.html : nous utilisons Bootstrap comme nous le souhaitons.
    Par exemple, voici ce que nous avons fait :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/0a1cf88c-c8af-40b4-b493-fcac7b8c61da)

  5- Voici le résultat que nous avons obtenu :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/96e49976-4ece-41c4-a703-b87d96a43b84)

  6- Alors, ce que je veux faire, c'est afficher home.component lorsque je clique sur le bouton "Home" et afficher products.component lorsque je clique sur le bouton "Products".

7- Pour faire cela, je vais créer deux composants. Pour créer ces composants, nous allons utiliser les commandes suivantes :
            $ ng g c home
Ici, g signifie generate et c signifie Component.

La même chose pour products.component :
            $ ng g c products
8- Voici à quoi votre projet va ressembler :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/b1d70e6b-52fc-4f2b-ad5d-12172686c84a)

#### Remarque :
    Angular a créé les deux composants en générant deux dossiers, home et products, dans lesquels vous
    trouverez les fichiers des composants.

9- Jusqu’à maintenant, vous avez réussi à créer les composants.

10- L'étape suivante est d'utiliser le système de routage.

11- Dans Angular, vous trouverez un fichier nommé app-routing.module.ts où nous allons déclarer les routes.
    Dans notre cas, nous allons déclarer deux routes de la manière suivante :
    ![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/a7a9880e-b93c-4833-b9cc-9042670097e5)

12- Maintenant, je souhaite que lorsque je clique sur le bouton "Home", je sois redirigé vers HomeComponent. Par défaut, le composant qui s'affiche est app.component.

13- Alors, si je veux faire cela, je dois aller dans app.component.html et ajouter les routerLink de la manière suivante :

![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/8093ce54-0b5a-4c6e-94d9-83d61853bc78)

#### Remarque :
    Lorsque je clique sur "Home", il va vers la route /home. Qu'est-ce que la route /home ? --> /home
    correspond à HomeComponent.
    Vous pouvez également remarquer que lorsque j'utilise la classe HomeComponent dans le fichier app
    routing.module.ts, Angular l'importe automatiquement pour nous, de même pour ProductsComponent.
    Vous remarquez dans l'application que lorsque vous cliquez sur le bouton "Home", l'URL change, mais je ne
    vois aucun changement dans l'interface. Voici ce dont nous parlons :
  ![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/846cbfa6-5a45-42e2-8242-3fdbdf5be032)


Pour résoudre ce petit problème, il faut ajouter un simple tag appelé <router-outlet></router-outlet>. Voici comment nous allons faire cela dans app.component.html :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/eac88d4b-2616-4866-8881-be54ffcea8cf)

### Pourquoi faut-il ajouter <router-outlet></router-outlet> ?

Tout simplement, si nous n'ajoutons pas cet élément, le routeur ne saura pas où afficher les composants.

Maintenant, si vous cliquez sur les boutons "Home" ou "Products", voici ce que vous trouverez :

![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/c8639c0a-234d-4a49-ad44-e275734cd25f)

Maintenant, je vais personnaliser ces composants comme suit :

![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/93e6e4cb-9c96-4bda-a631-5f524028f4dd)

Voici le résultat que j'ai jusqu'à présent :

![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/d780b40c-feed-4e53-a674-334d6a185f96)
Le même processus s'applique pour products.component.

14- Maintenant, supposons que je veuille afficher une liste de produits. Comment dois-je faire cela ?

Tout d'abord, je dois aller dans la classe du composant products.component.ts où je vais ajouter quelques lignes de code :

Alors, dans cette classe de composant, je dois implémenter l'interface OnInit, ce qui nous oblige à redéfinir la méthode ngOnInit(). Pour cela, nous avons besoin d'un constructeur pour la classe de composant, que nous implémentons avec la méthode constructor() dans la classe ProductsComponent.

Jusqu'à présent, le fichier products.component.ts ressemble à ceci :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/2375d5f0-f3e9-4a8b-84bc-f5d60cdf8e34)

Alors, pour afficher la liste de produits, pour le moment nous allons faire quelque chose de statique. Dans la prochaine démo, nous verrons comment interagir en utilisant une API REST, c'est-à-dire comment gérer la partie Backend.

La manière simple de créer une liste de produits est de créer une liste listeProduits qui va contenir des dictionnaires où chaque dictionnaire sera défini comme suit : {"id": 1, "name": "produit1", "price": 4330}. Voici comment :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/c51f4f6a-e661-4011-bfcd-48cde67d5d83)

Bien, maintenant, où allons-nous afficher cette liste de produits ? C'est dans products.component.html. Alors, nous allons ouvrir ce fichier et ajouter ce qui suit :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/ca27c0bf-5bc4-488f-aa58-bd8c11dcb74e)



