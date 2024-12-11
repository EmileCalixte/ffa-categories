# FFA Categories

Un paquet utilitaire permettant de manipuler les catégories de la Fédération Française d'Athlétisme au fil des années.

## Installation

```sh
npm install @emilecalixte/ffa-categories
```

## Utilisation

```js
// Module import
import { getCategory } from "@emilecalixte/ffa-categories";

// CommonJS
const { getCategory } = require("@emilecalixte/ffa-categories");


// Obtenir la catégorie d'un coureur né en 2002 à la date du 29 octobre 2021
getCategory(2002, { date: new Date("2021-10-29") }); // { code: "JU", name: "Juniors" }

// Obtenir la catégorie d'un coureur né en 1970 à la date du 1er janvier 2025, avec ou sans les sous-catégories Masters détaillées
getCategory(1970, { date: new Date("2025-01-01") }); // { code: "M4", name: "Masters 4" }
getCategory(1970, { date: new Date("2025-01-01"), detailed: false }); // { code: "MA", name: "Masters" }

// Obtenir la catégorie d'un coureur né en 1970 à la date du 1er janvier 2015, avec ou sans les sous-catégories Vétérans détaillées
getCategory(1970, { date: new Date("2015-01-01") }); // { code: "V1", name: "Vétérans 1" }
getCategory(1970, { date: new Date("2015-01-01"), detailed: false }); // { code: "VE", name: "Vétérans" }

// Obtenir la catégorie d'un coureur né en 2004 à la date actuelle
getCategory(2004);
```

### Autres fonctions utilitaires

```js
// Module import
import { getCategoryList, getApplicableCategoriesYear, isCategoryCode } from "@emilecalixte/ffa-categories";

// CommonJS
const { getCategoryList, getApplicableCategoriesYear, isCategoryCode } = require("@emilecalixte/ffa-categories");


// Obtenir la liste des catégories existantes à une date donnée
getCategoryList(new Date("2015-01-23")); // { EA: "École d'Athlétisme", PO: "Poussins", ..., V1: "Vétérans 1", V2: ... }

// Obtenir la liste des catégories existantes à une date données sans les détails des catégories "Vétérans" / "Masters"
getCategoryList(new Date("2025-03-21"), false); // { BB: "Baby Athlé", EA: "Éveil Athlétique", ..., MA: "Masters" }

// Obtenir la liste des catégories existantes à l'heure actuelle
getCategoryList();

// Obtenir l'année des catégories applicables à une date donnée
getApplicableCategoriesYear(new Date("2013-12-31")); // 2013
getApplicableCategoriesYear(new Date("2014-10-31")); // 2014
getApplicableCategoriesYear(new Date("2014-11-01")); // 2015
getApplicableCategoriesYear(new Date("2022-08-31")); // 2022
getApplicableCategoriesYear(new Date("2022-09-01")); // 2023

// Savoir si un string est un code de catégorie valide ou non
isCategoryCode("BB"); // true
isCategoryCode("MA"); // true
isCategoryCode("V3"); // true
isCategoryCode("IN"); // false
```

### Constantes

```js
// Module import
import { ALL_CATEGORY_CODES, ALL_CATEGORY_NAMES } from "@emilecalixte/ffa-categories";

// CommonJS
const { ALL_CATEGORY_CODES, ALL_CATEGORY_NAMES } = require("@emilecalixte/ffa-categories");

// Liste de tous les codes de catégories ayant existé
console.log(ALL_CATEGORY_CODES); // ["BB", "EA", ..., "VE", "V1", ..., "MA", "M1", ..., "M10"]

// Liste de tous les noms de catégories ayant existé
console.log(ALL_CATEGORY_NAMES); // ["Baby Athlé", ..., "Vétérans", ..., "Masters 10"]
```

### Limitations

A l'heure actuelle, l'historique des catégories avant 2012 n'est pas garanti.

### Historique des changements de catégories

Liste des événements connus et pris en compte depuis 2012 :

- Avant 2014, les années de naissance pour chaque catégorie changent au 1er janvier de chaque année. A partir du 1er novembre 2014, le changement a lieu au 1er novembre de chaque année (à partir du 1er novembre de l'année N, les catégories de l'année N+1 s'appliquent)
- A partir du 1er novembre 2015 (catégories de 2016) : la catégorie "Baby Athlé" apparaît avant la catégorie "École d'Athlétisme", les catégories "Vétérans" sont appelées "Masters" et la catégorie "Masters 5" apparaît (auparavant la dernière catégorie était "Vétérans 4")
- A partir du 1er novembre 2019 (catégories de 2020) : les catégories "Masters" sont maintenant subdivisées en 11 catégories (Masters 0 à 10, code M0 à M10 contre V1 à V5 auparavant) par tranches de 5 ans (contre 10 ans auparavant), et prennent effet 5 ans plus jeune
- A partir du 1er septembre 2022, les années de naissance pour chaque catégorie changent au 1er septembre (à partir du 1er septembre de l'année N, les catégories de l'année N+1 s'appliquent). Aussi, la catégorie "École d'Athlétisme" est désormais appelée "Éveil Athlétique"
- A partir du 1er septembre 2024 (catégories de 2025) : La catégorie Masters passe de l'historique code "VE" au code "MA"

## Cloner le projet

### Installation des dépendances

```sh
pnpm install
```

### Tests unitaires

```sh
pnpm test
```

### Build

```sh
pnpm build
```
