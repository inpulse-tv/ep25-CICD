
BEGIN;
CREATE TABLE Entrees (
jour INTEGER,
Nom TEXT,
Description TEXT,
Vegan INTEGER);
INSERT INTO Entrees VALUES(1,'Tartare de thon','Emincé de thon rouge qui n''avait rien demandé à personne et surtout pas de se retrouver sur notre délicieux lit de roquette',0);
INSERT INTO Entrees VALUES(1,'Mi-cuit de canard','Sa mère la ***** ce truc est tellement bon que je pourrais me déguiser en canard pour en choper plus',0);
INSERT INTO Entrees VALUES(1,'Tartare de tofu','Emincé de tofu rouge qui n''avait rien demandé à personne et surtout pas de se retrouver sur notre délicieux lit de roquette',1);
INSERT INTO Entrees VALUES(1,'Mi-cuit de pain de soja','Sa mère la ***** ce truc est tellement bon que je pourrais me déguiser en pain de soja pour en choper plus',1);
INSERT INTO Entrees VALUES(2,'Wraps laitue lentilles','Il est si beau ce wrap avec sa chevelure verte et ses lentilles lui vont mieux que des lunettes!',1);
INSERT INTO Entrees VALUES(2,'Soupe de potiron','Chez nous c''est halloween chaque mardi!',1);
INSERT INTO Entrees VALUES(3,'Croquettes pois chiches curcuma','On voyage avec nos papilles plus loin qu''avec un vol long courrier',1);
INSERT INTO Entrees VALUES(4,'Soupe thaï au lait de coco et tofu','Mercredi c''est déjà le milieu de la semaine, plus que deux dodos et c''est week end',1);
INSERT INTO Entrees VALUES(4,'Rouleaux nori tofu concombre','Nori moi le concombre grand tofu!',1);
INSERT INTO Entrees VALUES(5,'Aubergine, ail et câpres','Tout ce que je détestait quand j''étais môme, et que j''aime depuis que je suis vegan',1);
INSERT INTO Entrees VALUES(5,'Tartare de tofu','Emincé de tofu rouge qui n''avait rien demandé à personne et surtout pas de se retrouver sur notre délicieux lit de roquette',1);
INSERT INTO Entrees VALUES(6,'Mi-cuit de pain de soja','Sa mère la ***** ce truc est tellement bon que je pourrais me déguiser en pain de soja pour en choper plus',1);
INSERT INTO Entrees VALUES(6,'Wraps laitue lentilles','Il est si beau ce wrap avec sa chevelure verte et ses lentilles lui vont mieux que des lunettes!',1);
INSERT INTO Entrees VALUES(7,'Soupe de potiron','Chez nous c''est halloween chaque mardi!',1);
INSERT INTO Entrees VALUES(7,'Croquettes pois chiches curcuma','On voyage avec nos papilles plus loin qu''avec un vol long courrier',1);
INSERT INTO Entrees VALUES(2,'Pain à l’ail','Je vais avoir une haleine de phoque mais j''adore trop ce pain là',0);
INSERT INTO Entrees VALUES(2,'Oeufs Bénédicte au saint nectaire','Oeuf et fromage, le mariage qui dure!',0);
INSERT INTO Entrees VALUES(3,'Salade d''asperges aux crevettes','Il était une fois une crevette qui rêvait de gouter une asperge, c''est glauque, mais délicieux!',0);
INSERT INTO Entrees VALUES(3,'Salade de melon et jambon','Je ne vais pas vous parler de ce plat. Je me le garde que pour moi!',0);
INSERT INTO Entrees VALUES(4,'Roulé salé au thon','On en l''a tellement roulé ce saumon qu''on en a le tournis',0);
INSERT INTO Entrees VALUES(4,'Oeufs de caille au saumon fumé','Quand le ciel rencontre la mer!',0);
INSERT INTO Entrees VALUES(5,'Velouté de chou-fleur et ses tortillas au fromage','Rencontre entre le nord de et le sud de l''Europe... avec un fromage bien de chez nous pour lien.',0);
INSERT INTO Entrees VALUES(5,'Poivrons farcis au thon',' Un poivrons farcis au thon',0);
INSERT INTO Entrees VALUES(6,'Feuilletés au poulet et poivron grillé','A découvrir dans toutes les bonnes librairies',0);
INSERT INTO Entrees VALUES(6,'Brick de Thon à l''Oeuf','Avec des brick, on fait de jolies maisons!',0);
INSERT INTO Entrees VALUES(7,'Muffins chorizo poivron au pie magic','Ce on en parle pas... on le dévore!',0);
INSERT INTO Entrees VALUES(7,'Salade de chèvre chaud','C''est dimanche, on se calfeutre bien au chaud!',0);
COMMIT;
