# Images

Convention : un dossier par usage (`projects/`, `team/`, `og/`...), noms
de fichiers en kebab-case explicites (ex. `agriculture-satellite.jpg`).

Les images référencées publiquement (utilisées via une simple URL, comme
dans `src/data/projects.ts`) doivent être placées dans `public/assets/images/`
plutôt qu'ici, pour être servies directement par Vite sans passer par le
bundler.

Ce dossier (`src/assets/images/`) est réservé aux images importées
directement dans le code (`import img from "./mon-image.jpg"`), utile si
vous voulez que Vite optimise/hash ces fichiers au build.
