Création du Portfolio Développeur de NISHEMZWE Jean Paul
Nous allons construire un portfolio "Single Page" avec React et Tailwind CSS. Le design sera moderne, avec une touche "tech" (mode sombre, couleurs vibrantes, effets "glassmorphism", et animations fluides au survol).

User Review Required
IMPORTANT

Tailwind CSS a été explicitement demandé. Par défaut, nous allons utiliser la dernière version stable de Tailwind CSS. Confirmez-vous que cela vous convient ?

Open Questions
WARNING

Y a-t-il des couleurs spécifiques que vous préférez pour la touche "tech" (ex: un thème sombre avec des accents Cyan, Vert Néon, ou Violet) ?
Souhaitez-vous ajouter des liens vers vos profils GitHub, LinkedIn, ou un lien pour télécharger votre CV ?
Proposed Changes
Nous allons initialiser le projet dans le répertoire actuel c:\Users\DK TECH\Desktop\porto.

Initialisation du Projet
Initialisation avec Vite : npx create-vite@latest . --template react
Installation de Tailwind CSS et configuration associée.
Structure des Fichiers (Composants React)
[NEW] src/components/Hero.jsx
Section d'accueil percutante avec votre nom ("NISHEMZWE Jean Paul"), titre ("Développeur Full Stack"), et une petite animation d'entrée.

[NEW] src/components/About.jsx
Section présentant vos compétences techniques (Django, FastAPI, PHP, React.js, Tailwind CSS, MySQL, PostgreSQL) et votre formation (Licence Informatique - Université du Burundi).

[NEW] src/components/Projects.jsx
Section affichant vos projets sous forme de cartes ("cards") interactives avec des effets de survol ("hover effect") modernes :

Gestion des logements UB (PHP/MySQL)
API notifications temps réel (FastAPI/React)
[NEW] src/components/Contact.jsx
Section de fin de page avec vos informations de contact (email et téléphone).

[MODIFY] src/App.jsx
Le composant principal qui importera et affichera toutes les sections ci-dessus de manière fluide.

[MODIFY] src/index.css
Configuration des directives Tailwind CSS et ajout d'une typographie moderne (ex: Inter ou Roboto via Google Fonts) et de styles de base globaux.

Verification Plan
Automated Tests
Lancer npm run dev pour vérifier la bonne compilation de l'application.
Manual Verification
S'assurer visuellement que le rendu est "responsive" (adapté aux téléphones mobiles, tablettes et écrans larges).
Vérifier les effets de survol sur les projets et les boutons.
S'assurer que le rendu final donne une impression "premium" et très visuelle, comme demandé.
