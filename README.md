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

On a ajouté dans le products.component.html le bloc suivant où je veux afficher ma liste de produits :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/e83a6f18-1569-47c3-838b-426c2d3e08e4)

Ensuite, dans la méthode ngOnInit(), nous initialisons la liste des produits que nous souhaitons afficher, comme suit :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/03e51c84-90fd-428a-8b85-cfd9ab6653ca)

Comme vous pouvez le voir, pour la liste des produits, nous avons déclaré cette dernière et nous lui avons attribué le type any[], ce qui signifie que la variable produits peut prendre comme valeur n'importe quelle variable de n'importe quel type. Pour Angular, cela correspond à des types comme String, number, etc.

### On rappelle s'il vous plaît qu'à ce stade, nous avons initialisé la liste des produits de manière simple. En réalité, nous devrons envoyer une requête vers le backend pour récupérer la liste des produits depuis la base de données.

Il est essentiel de comprendre que lorsqu'on envoie une requête vers le backend, cela prend du temps. Pour éviter tout problème dans votre application, nous devons conditionner l'affichage de la liste des produits dans le fichier products.component.html. Voici comment nous pouvons régler ce problème en utilisant *ngIf :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/baa9c5f9-54a6-4cfb-ad23-e77747ca6f8e)

Pour ajouter un bouton permettant de supprimer un produit, voici comment vous pouvez le faire :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/34e674bb-809d-40fe-b7e5-eb505ca8f79f)

Comme vous pouvez le voir, nous avons ajouté un bouton avec (click)="deleteProduct()", où deleteProduct() est une méthode que nous devons ajouter à la classe ProductsComponent.

Maintenant, si vous souhaitez ajouter une barre de recherche, voici comment procéder dans products.component.html. Nous allons ajouter un formulaire :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/aac39388-94b5-4993-8733-50dc6a95e45f)

Maintenant, je vais ajouter deux importations dans le fichier app.module.ts pour gérer les formulaires : FormsModule et ReactiveFormsModule. Ces deux modules sont utilisés pour manipuler les formulaires, chacun ayant ses propres caractéristiques.
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/cc8af1dd-b4c1-44ce-979f-335273950d76)

Lorsque nous utilisons la manipulation de formulaires avec FormsModule, nous pouvons utiliser le data binding comme suit :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/09bd83ea-d6f5-4d09-af15-1a4910d703c4)

Il est important de noter que grâce au data binding utilisé par Angular, toute valeur saisie dans un <input> sera automatiquement liée à une propriété du composant, comme keyword. Cela signifie que dès que l'utilisateur saisit quelque chose dans l'input, cette valeur est directement mise à jour dans la propriété keyword du composant.

Toutefois, pour que le data binding fonctionne correctement, il est essentiel de ne pas placer l'attribut [(ngModel)]="keyword" à l'intérieur d'une balise <form>. Si vous le faites, le data binding ne fonctionnera pas comme attendu, à moins d'utiliser ReactiveFormsModule.

Pour résoudre ce problème de data binding, nous devons modifier le code comme suit :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/21c819a3-3b3a-4083-9ba3-8cc9b4a428d1)

Maintenant, chaque fois que je saisis quelque chose dans l'input, la valeur de keyword est mise à jour instantanément. Voici comment cela s'affiche :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/b2bcc990-9901-40a0-8dfe-1bbf30ef0f97)

=======>  Maintenant, la valeur de keyword est la chaîne "je suis ayoub".

Pour effectuer la recherche des produits selon le mot-clé saisi, nous allons ajouter une méthode dans la classe ProductsComponent. Assurez-vous que keyword est déclaré comme attribut dans cette classe.
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/1d5cc952-a212-4b5f-8ddd-ed46130aea07)

N'oubliez pas d'ajouter (click)="search()" dans le bouton "Search". Voici comment vous pouvez le faire :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/cbeecd35-65a1-4fa7-9677-adf56b75c320)

Maintenant, lorsque vous cliquez sur le bouton "Search", la méthode search() sera appelée dans ProductsComponent, où vous pourrez implémenter la logique de recherche pour interagir avec votre backend.

Pour mettre en état actif l'un des boutons "Home" ou "Products" et changer la couleur de fond en rouge par exemple, selon que vous êtes sur la page "Home" ou "Products", vous allez remplacer routerLink="/home" par (click)="gotoHome()" dans le bouton "Home" et (click)="gotoProducts()" dans le bouton "Products".
Voici comment vous pouvez le faire :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/20d02ce8-d8f8-4ca8-925b-1159e39e130d)

Pour créer les méthodes gotoHome() et gotoProducts() dans AppComponent et utiliser l'objet Router pour effectuer les redirections vers les pages "home" et "products", vous devez injecter un objet de type Router dans votre classe AppComponent.
Voici comment vous pouvez procéder :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/ac770dd4-a444-44f7-8505-f5cb195390e1)

Dans app.component.ts, importez Router depuis @angular/router et utilisez-le pour créer les méthodes de redirection :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/962723e3-e0b7-423c-a67f-4d38479b5554)

**** Petit Explication *****************************************************************************************
Dans ces méthodes, this.router.navigate(['/home']) et this.router.navigate(['/products']) sont utilisés pour naviguer vers les routes définies dans AppRoutingModule (ou tout autre module de routage que vous avez créé).

Revenons maintenant au data binding. Qu'est-ce que ce concept ?
Le data binding est un mécanisme qui lie les données stockées dans la classe des composants avec ce qui est affiché dans la vue (template). Cela permet de synchroniser automatiquement les données entre le modèle (classe du composant) et la vue (template).

Par exemple, si vous avez une variable Data dans votre composant et que vous souhaitez l'afficher dans votre vue, vous pouvez utiliser la syntaxe de l'interpolation des chaînes :

Lorsque vous utilisez l'interpolation ({{ }}), Angular va remplacer {{ Data }} par la valeur actuelle de Data définie dans votre composant. Si vous mettez à jour la valeur de Data dans votre composant (par exemple, à partir d'un champ de saisie), Angular mettra automatiquement à jour la vue pour refléter cette nouvelle valeur.

Le data binding fonctionne dans les deux sens : lorsque les données dans le composant changent, la vue est mise à jour pour refléter ces changements, et vice versa. C'est comme si le composant "s'abonne" aux changements de données et que la vue est "notifiée" pour se mettre à jour en conséquence.
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/2b3defc8-3b2c-4b4b-ae15-3f44b57d21aa)

***************************************************************************************************************

## RESTE api  (utilisation de nodeJS)

Pour créer un backend rapidement avec une API REST en utilisant json-server, suivez les étapes ci-dessous :

#### Installation de json-server :
Assurez-vous d'avoir Node.js installé sur votre machine. Ensuite, installez json-server globalement à l'aide de npm avec la commande suivante :

Copier le code
npm install -g json-server
#### Création de la structure pour la base de données :

Créez un dossier nommé data à la racine de votre projet (ou à l'emplacement de votre choix).
À l'intérieur du dossier data, créez un fichier nommé db.json. C'est dans ce fichier que vous définirez vos données JSON simulées, telles que des collections d'objets.
Exemple de structure de db.json pour une collection de clients :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/ad9a609a-96d5-43e9-870e-950103b669dd)

#### Démarrage de json-server :

####  Ouvrez votre terminal.
#### Utilisez la commande suivante pour démarrer json-server et spécifiez le chemin vers votre fichier db.json :

json-server -w data/db.json -p 8089
-w data/db.json indique à json-server de surveiller les modifications dans db.json.
-p 8089 spécifie le port sur lequel json-server sera accessible localement (8089 dans cet exemple).
#### Accès à votre API 
Après avoir démarré json-server, vous verrez des messages dans le terminal indiquant que le serveur est en cours d'exécution. Il affichera également l'URL locale à laquelle votre API est disponible. Par exemple :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/b03d2f51-87b0-4189-b999-18e0513ab546)

Avec l'API REST que json-server nous propose, toutes les opérations de manipulation de la base de données peuvent être réalisées : POST (ajout), PUT (mise à jour), DELETE (suppression). La recherche fonctionne également. Cependant, ce n'est pas efficace pour de grandes quantités de données, mais il est très utile pour tester le frontend.

#### Nous devons créer un constructeur dans la classe de composant ProductsComponent pour injecter un objet de type HttpClient comme suit :

Pour afficher la liste des produits présents dans la base de données créée dans le fichier db.json, nous allons effectuer quelques modifications dans la classe du composant ProductsComponent. Voici ce que nous allons faire :
Implémenter l'interface OnInit et redéfinir la méthode ngOnInit() dans la classe ProductsComponent.
Utiliser le service HTTP pour récupérer la liste des produits en envoyant une requête GET vers le backend comme suit :


##### Voici comment cela fonctionne :
Pour chaque requête envoyée au backend, que ce soit GET, POST, DELETE, toutes ces méthodes retournent des objets de type Observable.
Dans JavaScript, étant donné que c'est un langage single-thread (mono-tâche), pour créer des applications réactives et non bloquantes, nous utilisons des observables.
La méthode get retourne un objet de type Observable. Nous devons donc nous abonner (subscribe) pour obtenir le résultat final.
Pour spécifier comment le résultat de la méthode get sera retourné et le stocker dans un objet de type liste ou tableau, nous devons préciser le type attendu après l'appel à get. Cela se fait en ajoutant le type générique lors de l'appel de la méthode get. Voici comment procéder :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/06399254-3346-40ac-b77d-6ddfc926068a)

Nous voulons maintenant changer l'état d'un produit de "checked" à "unchecked" et répercuter ce changement dans la base de données. Voici comment nous allons procéder :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/672511e2-cd9b-4707-a73f-db5f697db731)

Lorsque nous envoyons une requête au backend, nous devons spécifier l'ID du produit dont nous voulons mettre à jour l'état. Cependant, il est important de se rappeler que chaque fois que nous mettons à jour la base de données, nous devons également mettre à jour la partie front-end pour visualiser le changement.

Pour mieux comprendre, regardons le code que nous avons créé pour gérer l'état d'un produit. Au début, nous devons passer l'ID du produit en paramètre à la fonction, puis envoyer une requête au backend en exécutant :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/8a456172-708e-4a1e-9f03-973e297d85b6)
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/70322630-0b49-45db-a1bf-0be42ba01a0d)


#### Une question : pourquoi effectuons-nous le changement deux fois, à la fois dans le backend et le frontend ?

##### Réponse :
tout simplement pour ne pas perdre de temps à recharger à nouveau les données. Cela signifie que nous n'avons pas besoin de revisiter la base de données pour récupérer à nouveau la liste des produits. Oui, cela fonctionne, mais techniquement parlant, vous allez perdre du temps à le faire.

Avec le data binding, je n'ai pas besoin de le faire, car celui-ci garantit la liaison entre les variables de la classe du composant et la vue. En d'autres termes, si nous modifions l'objet produit, le frontend sera immédiatement informé de ce changement.

#### Remarque importante :
    Ici, nous trouvons la différence entre les applications rendues en HTML côté serveur et les applications
    rendues en HTML côté client. Pour les applications rendues côté serveur, je suis obligé de recharger toute
    la page pour chaque modification, même si elle est simple. En revanche, pour les applications rendues côté
    client, ce n'est pas nécessaire.

**************************************************************************************************************
### Après la pause : 1:15:59

1. Dans un premier temps, nous avons besoin de créer un service. Avec Angular, voici comment nous allons faire cela en tapant la commande suivante :  $ ng g s services/product
Cette commande va créer un service, ajouter un dossier nommé services dans le dossier app, et y créer notre service nommé product. Voici le résultat obtenu :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/1a9acdb6-244c-4e47-b567-f5a57d791e74)

Dans le fichier product.service.ts, voici ce que nous avons :
À savoir que dans le fichier product.service.ts, nous trouvons l'annotation suivante :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/f5035cf3-bf85-4623-9c4f-90de3ff7194d)

Cela signifie que ce service est destiné à être injecté dans un composant, par exemple. Au démarrage, il sera instancié une fois, et une fois que vous l'avez instancié, vous pouvez l'injecter où vous voulez, dans n'importe quel composant.

#### Remarque :
  Quel est l'avantage des services ? C'est que dans un service, nous allons généralement déclarer des méthodes.
  Une bonne pratique est de faire toutes les méthodes pour interagir avec le backend dans les services. Par
  exemple, dans notre cas, nous allons déclarer des méthodes pour manipuler les produits.

Jusqu'à maintenant, nous avons besoin de créer une méthode pour récupérer et chercher les produits à partir de la base de données (dans le backend) qui va prendre le nom de getProducts() dans le fichier product.service.ts. Voici comment nous allons faire cela :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/1c1c5c02-c299-4ba5-b6ac-42bcefb3bb18)

Attention :
    Il faut injecter un objet de type HttpClient dans cette classe. L'une des manières de le faire est, comme
    toujours, dans le constructeur, en ajoutant  private httpClient: HttpClient  comme paramètre.
    
    La deuxième chose à noter ici, comme indiqué dans le code en commentaire, est que nous essayons de définir
    le retour de la fonction getProducts() sous forme Observable<any>. Cela permet de résoudre le problème de
    temps que peut prendre le backend pour traiter la requête, ce qui nous permet aussi de traiter le problème
    de blocage de l'interface utilisateur. En d'autres termes, la gestion de cette réponse se fera au niveau de
    la classe de composant.


En fait, nous avons fait la même chose pour la fonctionnalité de mise à jour de l’état d’un produit. Nous avons laissé la description de la requête à la fonction qui se trouve dans la classe de composant et qui utilise ce service pour effectuer la mise à jour. Vous pouvez voir cela dans le code précédent comment nous avons fait cela.

Voici comment nous avons implémenté dans la classe de composant ProductComponent les deux fonctions getProducts() et aussi la fonction pour faire la mise à jour de l’état d’un produit jusqu’à maintenant :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/67aa6ab1-54e1-4c50-a958-6f3148fda53b)
Comme on a fait la description de la requéte a  l’interieur de chacun de ces fonctions.

Remarque très importante :
    Utilisation d'un service : Pour utiliser un service dans notre projet, il faut le déclarer dans le fichier
    app.module.ts de notre application, précisément dans la section providers. Voici comment on va faire cela :
    ![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/1fd6bdce-9fcb-42ee-b1bc-372d9e557adc)
    
Cependant, grâce à l'attribut providedIn: 'root' dans l'annotation @Injectable, il n'est pas obligatoire de le déclarer explicitement dans app.module.ts. Cet attribut signifie que le service est disponible pour tout module ou composant qui souhaite l'injecter.

##### Les services :
  - Les services sont instanciés une seule fois.
  - Ils peuvent contenir des fonctions ainsi que des données.
  - Grâce aux services, nous pouvons injecter un service quelconque dans d'autres composants.
  - Les services permettent de partager les mêmes données et les mêmes traitements entre l'ensemble des
    composants.
  - Les services permettent de séparer la logique métier de la logique de présentation.

##### Structuration de la programmation :
Pour structurer notre application, par exemple en précisant à Angular que lors de l'exécution de la fonction getProducts(), nous devons obtenir une liste de produits avec les attributs : Id, name, price, checked.
Pour ne pas compliquer les choses, nous allons déclarer la classe Product avec les différents attributs précisés précédemment.

Au lieu d'utiliser le type any, nous allons créer un modèle pour les produits. Par exemple, remplacer l'instruction suivante :
          return this.httpClient.get<Array<any>>("http://localhost:8089/products/");
par :
          return this.httpClient.get<Array<Product>>("http://localhost:8089/products/");
où Product est une classe (ou modèle) que nous devons créer.

#### Création d'un package model : 
Pour organiser notre code, nous allons créer un package appelé model qui contiendra tous nos modèles, y compris le modèle Product que nous allons utiliser dans notre cas. Voici comment procéder :

Créez un dossier nommé models dans votre application Angular.
À l'intérieur de ce dossier, créez un fichier nommé product.model.ts.
Définissez le modèle Product dans ce fichier comme suit :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/e5bfa52e-6abf-49f8-8e35-d471e8aad381)

#### Remarque : 
  Assurez-vous que les noms des attributs de l'interface Product dans votre modèle correspondent aux noms des
  champs dans votre fichier db.json (qui agit comme votre base de données). Par exemple :

#### Modifications dans la classe ProductsComponent
Nous allons maintenant modifier la classe de composant ProductsComponent pour remplacer toutes les occurrences de any par Product là où cela est approprié.
Ouvrez products.component.ts et faites les modifications suivantes :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/3e8716a4-d33f-4c0f-ad06-6117508282c7)

Aussi dans product.service.ts :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/c7ae3a4e-b3f5-48da-87b6-8b38adf6e8a4)

1:30 :15 **************************************************************************************************                                                                                                                     
#### Astuce : 
  On peut obtenir le modèle d'un ensemble de données en visitant l'un des sites qui convertissent des données 
  JSON en TypeScript, par exemple

#### Question : quel est la différence entre Entité et model ?
  Alors le model  sont les structure de donne (des classes) manipuler dans  l’application
  Par contre un Entité c’est un model persistant tel que cette persitance est géré par  un frame Work de
  mapping relationnel comme JPA . 


## Partie 3  de ce TP (l’utilisation des dashboards)

Alors dans la vidéo 3 et après, quand on veut commenter sur la façon dont on va faire la pagination en utilisant notre backend json-server démarré sur le port 8089 dans notre application, comme nous l'avons dit pour la pagination, on a deux attributs que l'on peut utiliser ou spécifier à json-server pour qu'il nous récupère les pages quand on en a besoin :

_page= par exemple 4

_limit= par exemple 7

Cela signifie que je veux, par exemple, la page numéro 4 où chaque page aura une taille de 7 produits (c’est-à-dire 7 produits par page).

Voici comment on peut le faire en créant une fonction à l’intérieur du composant ProductComponent qui utilisera le service ProductService que nous avons créé avec la commande suivante :

                $ ng g services/product

Dans ProductService, nous avons essayé d’inclure toutes les fonctions liées à la logique métier de notre application, c’est-à-dire les fonctions qui contiendront par exemple nos requêtes vers le backend. Cela sera utilisé par le composant pour simplifier le code et le rendre plus lisible, ce qui est une bonne pratique à suivre lors du développement d’un projet informatique.

Aussi, cette fonction nous permettra de rechercher un produit en utilisant un mot-clé.
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/97883294-9404-4b98-bace-21b904b36b15)

De plus, nous avons appris comment manipuler un formulaire pour éditer un produit, comme le montre le nouveau composant appelé EditProductComponent. Nous avons initialisé un formulaire en utilisant le module ReactiveFormsModule. Il est également possible de manipuler les formulaires avec le module FormsModule :

On déclare le module utilisé comme suit dans le fichier app.module.ts :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/ddad0695-8a95-4418-8bff-69b3897732bd)

Ensuite, nous allons créer une variable de type FormGroup qui contiendra les champs de notre formulaire dans le composant NewProductComponent, comme suit :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/3e8dac37-5752-4435-9f6e-c89c50102a8c)

Ici dans notre code, nous avons tenté, comme je l'ai déjà mentionné, de créer un objet de type FormGroup. À l'aide d'un objet de type FormBuilder, nous initialisons le FormGroup créé. Pour cela, nous essayons de l'injecter dans le constructeur et nous injectons également un objet de type ProductService pour manipuler les produits dans la base de données après chaque modification.

Lorsque ce composant sera chargé (ou lancé), nous devons créer l'objet FormGroup. C'est pourquoi nous implémentons l'interface OnInit, qui contient une méthode que nous devons redéfinir : ngOnInit(). Cette méthode est appelée la première fois que le composant est chargé. C'est ici que nous initialisons le formulaire en plaçant les valeurs du produit à éditer dans les valeurs de ce formulaire. Pour visualiser les informations du produit à éditer dans l'interface utilisateur, nous ajoutons également des validateurs pour certains attributs.

La fonction qui va sauvegarder les modifications est la suivante :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/ce6d0cce-a6cf-4ed9-a79f-a1c054bd08db)

Jusqu'à présent, nous avons accompli cela. La phase suivante consiste à utiliser quelques dashboards ou à afficher quelques statistiques.

Notre objectif maintenant est de compléter l'interface suivante :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/de1e4cd6-c681-464c-a9b1-9e6f9e359293)

Pour qu'elle soit structurée comme suit :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/5ca74581-fc5e-4206-a8ff-912d647e76e3)

Voici comment nous pouvons y parvenir :

Supposons, par exemple, que nous avons construit un composant pour la deuxième interface que nous appellerons, par exemple, "Composant2". Le défi que nous pourrions rencontrer est que les données de "Composant2" proviennent d'un ensemble d'autres composants. Comment gérons-nous ces données ?

En général, dans une deuxième interface, nous observons une hiérarchie de composants. Par exemple, le composant contenant les tableaux de bord peut contenir des données qui proviennent du sous-composant qui liste les produits.

L'une des solutions consiste à utiliser les entrées (inputs) et les sorties (outputs), mais cette méthode n'est pas toujours optimale.

C'est pourquoi il est souvent plus utile, lorsque des données doivent être partagées entre différents composants d'une application, d'opter pour des services. Ces services permettent à chaque composant d'accéder aux mêmes données sans avoir à dépendre uniquement des entrées et sorties. C'est ce qu'on appelle le state, c'est l'état de l'application.

Alors dans cette situation, il est très important de centraliser les données de l’application dans un service appelé AppState, tel que ce dernier est un service dans lequel nous allons mettre l’état de l’application. Vous allez voir que cela va nous simplifier le processus de manipulation de données dans l’application.

Alors pour cela et pour effectuer ce travail, je vais suivre les étapes suivantes :

Je dois refactoriser mon application. Cette étape consiste simplement à accéder au fichier ProductsComponent.ts, puis à identifier les différents attributs qui décrivent l’état de ce composant, et ensuite à les déplacer vers notre service que nous allons nommer AppStateService. Nous allons déclarer un dictionnaire qui va contenir les états du ProductsComponent. Ensuite, nous allons créer un setter pour mettre à jour les différents attributs de cet état comme suit :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/dc1caac2-4d39-4c72-8a15-01efca228a8c)

Dans l'exemple ci-dessus, nous avons une variable qui contient l'ensemble des variables caractérisant l'état de ProductsComponent, avec un constructeur et un setter pour mettre à jour les différents attributs.

Maintenant, nous devons injecter un objet de type AppStateService en utilisant le constructeur. Avec ce service, nous allons centraliser les différentes données partagées dans l'application.

Ensuite, nous avons ajouté deux autres composants : un pour les erreurs et un autre pour la barre de navigation, comme suit :

Le premier composant, app-errors :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/e12dab81-192c-48a8-81af-174334457b65)
 
Voici le code qui corresponde a ce composant :  
  Le deusiemme composant navbar : 
 ![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/04b773c5-fe7d-49e3-b8db-274e3deef717)

  Voici le code de composant navbar : 
 ![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/6bc9bb6f-d5c1-4da8-baa8-0f6829909425)

On a fait une petit modification dans le composant app.component.html comme suite: 
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/af094608-4d51-4958-9638-4068ba9c682d)

5.	 Voici une petit vue sur le product.component.ts apres l’ajoute de service AppStateService : 
 ![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/4d67cdbe-131f-4b21-8461-56ea9092df59)
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/1449e52e-f498-45bc-a627-ad49b4cfc182)

Voici le code  du product.component.ts :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/35d28aa6-f768-4960-b5d8-8cde27877370)
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/d563534a-0eff-4c66-b1c6-40b8e0d8ef64)
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/4ce21097-1d36-487e-a819-df84a173b384)
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/455456e9-ec4b-4b27-9667-dbff30c32fe6)
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/1f8e82cc-22f1-4e08-ae90-e4ccc64ffa20)

Selon le code précédent, si une erreur survient lors de l'exécution du code, celle-ci sera affichée dans le composant app-errors, tel que nous avons essayé de l'inclure dans le composant principal app.component.html.

#### Problème :
  Le problème rencontré jusqu'à présent est que je suis obligé à chaque fois, dans n'importe quelle partie du
  programme, d'appeler la fonction setAppStateProducts() qui se trouve dans le service AppStateProduct pour
  mettre à jour la valeur de status dans le dictionnaire productsState. Ce n'est pas optimal car je dois
  constamment mettre à jour cette valeur de status.

#### La solution :
    Utiliser un intercepteur HTTP. Comme nous le savons, pour toute application front-end, il est nécessaire de
    créer des intercepteurs HTTP. Un intercepteur HTTP est un service qui intercepte toutes les requêtes HTTP.
    Par exemple, pour l'authentification, à chaque fois que nous envoyons une requête, nous devons ajouter l'en
    tête d'autorisation et d'autres paramètres. L'intercepteur gère cette tâche.
    
    Dans notre cas, nous devons simplement mettre à jour le statut d'une requête. L'intercepteur va donc mettre
    à jour le statut à "LOADING" lorsqu'une requête est envoyée, puis après réception de la réponse, il mettra
    à jour le statut soit à "ERROR", soit à "LOADED", en fonction du résultat. Cela nous évite de faire des
    copier-coller répétitifs et simplifie notre code.

Maintenant, voyons comment créer et utiliser un intercepteur :
##### Création d'un intercepteur :
                                $ ng g interceptor services/app-http


Nous avons utilisé le dossier des services pour créer l'intercepteur, car un intercepteur est également un service.

##### Après avoir exécuté cette commande, deux fichiers seront créés : app-http.interceptor.ts et son fichier de spécifications.

##### Dans le fichier app-http.interceptor.ts, nous trouvons le code initial de la création d'un conteneur, que nous supprimons. Ensuite, nous programmons une classe qui implémente HttpInterceptor, comme suit :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/bafb6f9f-6085-4772-a00c-cb45192a81a6)
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/0d8cbcd6-64de-4e38-bb1c-d259bafde168)

Alors comme vous pouvez le voir, pour activer cet intercepteur, il faut le déclarer dans le fichier app.module.ts dans la section providers comme suit :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/d7fe906c-92ff-432b-b969-a55f57c29ea7)

Alors nous devons apporter une petite modification dans le service loadingService.ts en le créant tout en injectant un objet de type AppStateService. Ensuite, nous injectons le service loadingService dans notre AppHttpInterceptor, et ainsi nous utilisons l'une des méthodes pour surveiller l'état de la requête.

Nous allons modifier la condition qui nous permet d'afficher le spinner comme suit :
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/065de45e-1b65-47a6-b439-ebfbbbc26e33)
![image](https://github.com/ayoubbenlahcen/TP4--Spring---Angular---SD---Master---MIAAD---FSM---2024/assets/152870306/17593e50-352d-4e21-9659-3b0a8b5ba308)

#### REMARQUE :
    La seule chose à garder à l'esprit est que l'objet isValid$ dans le service LoadingService est de type
    observable. Ainsi, chaque fois que nous voulons l'utiliser ou le consulter, nous pouvons le faire en
    souscrivant pour récupérer sa valeur et ensuite l'affecter à d'autres variables.

