use sakila;
/*1)¿Qué consulta ejecutarías para obtener todos los clientes dentro de city_id = 312? Su 
consulta debe devolver el nombre, apellido, correo electrónico y dirección del cliente.

SELECT ci.city_id,ci.city,cu.first_name AS nombre,cu.last_name AS apellido,cu.email AS correo,ad.address
 from customer cu INNER JOIN address ad ON cu.customer_id=ad.address_id  
 INNER JOIN city ci ON ad.address_id=ci.city_id WHERE ci.city_id=312;
SELECT * FROM city where city_id=312;*/
/*___________________________________________________________*/
SELECT cu.first_name,cu.last_name,cu.email,ad.address,ci.city from customer cu JOIN address ad ON cu.address_id=ad.address_id JOIN city ci ON ad.city_id=ci.city_id
WHERE ci.city_id=312;
/*___________________________________________________________*/
/*2) ¿Qué consulta harías para obtener todas las películas de comedia? Su consulta debe devolver el título de la película,
 la descripción, el año de estreno, la calificación, las características especiales y el género (categoría)*/
 select fi.title AS nombre,fi.description,fi.release_year AS estreno,cat.name FROM film fi JOIN film_category film_cat
 ON fi.film_id = film_cat.film_id JOIN category cat ON cat.category_id = film_cat.category_id
 WHERE cat.name='Comedy';
 
 /*3)¿Qué consulta harías para obtener todas las películas unidas por actor_id = 5? Su consulta debe devolver la identificación 
 del actor, el nombre del actor, el título de la película, la descripción y el año de lanzamiento.*/
 SELECT ac.first_name,ac.last_name,fi.title,fi.description,fi.release_year FROM actor ac JOIN film_actor fil_ac
 ON ac.actor_id=fil_ac.actor_id JOIN film fi ON fi.film_id=fil_ac.film_id WHERE ac.actor_id=5;
 
 /*4)----------¿Qué consulta ejecutaría para obtener todos los clientes en store_id = 1 y dentro de estas ciudades (1, 42, 312 y 459)?
 Su consulta debe devolver el nombre, apellido, correo electrónico y dirección del cliente.*/
 SELECT cu.first_name,cu.last_name,cu.email,ad.address FROM customer cu JOIN address ad ON cu.address_id=ad.address_id 
 JOIN city ci ON ad.city_id=ci.city_id JOIN store sto ON sto.store_id=ad.address_id WHERE ci.city_id=1 OR ci.city_id=42
 OR ci.city_id=312 OR ci.city_id=459 AND cu.store_id=1;
 
 /*5)¿Qué consulta realizarías para obtener todas las películas con una "calificación = G" y "característica especial = 
 detrás de escena" , unidas por actor_id = 15? Su consulta debe devolver el título de la película, la descripción, 
 el año de lanzamiento, la calificación y la función especial. Sugerencia: puede usar la función LIKE para obtener la parte 
 'detrás de escena'.*/
 
 SELECT fi.title,fi.description,fi.release_year,fi.rating,fi.special_features FROM film fi JOIN film_actor fi_ac ON fi_ac.film_id=fi.film_id JOIN actor ac
 ON ac.actor_id=fi_ac.actor_id WHERE fi.rating='G' AND fi.special_features LIKE '%Behind the Scenes' AND ac.actor_id=15;
 
 /*6. ¿Qué consulta harías para obtener todos los actores que se unieron en el film_id = 369? Su consulta debe devolver film_id, title, actor_id y actor_name.*/
 SELECT fi.film_id,fi.title AS titulo,ac.actor_id,ac.first_name AS nombre,ac.last_name AS apellido FROM film fi JOIN film_actor ON fi.film_id=film_actor.film_id
 JOIN actor ac ON ac.actor_id = film_actor.actor_id WHERE fi.film_id=369 ;
 
 /*---------7. ¿Qué consulta harías para obtener todas las películas dramáticas con una tarifa de alquiler de 2.99? Su consulta debe devolver el título 
 de la película, la descripción, el año de estreno, la calificación, las características especiales y el género (categoría).*/
 SELECT fi.title AS titulo,fi.description,fi.release_year AS año_estreno,fi.special_features AS efectos_especiales,pay.amount AS tarifa,fi.rating AS calificacion,cat.name AS categoria 
 FROM film fi join film_category ON fi.film_id=film_category.film_id JOIN
 category cat ON cat.category_id=film_category.category_id JOIN inventory inv ON inv.inventory_id=fi.film_id JOIN rental ren ON 
 inv.inventory_id=ren.inventory_id JOIN payment pay ON  ren.rental_id=pay.rental_id WHERE pay.amount=2.99 AND cat.name='drama' group by titulo;
 /*8)¿Qué consulta harías para obtener todas las películas de acción a las que se une SANDRA KILMER? Su consulta debe devolver el título de la película, la descripción,
 el año de estreno, la calificación, las características especiales, el género (categoría) y el nombre y apellido del actor.*/
 SELECT fi.title AS titulo,fi.description AS descripcion,fi.release_year AS añp_estreno,fi.rental_rate AS calificacion,fi.special_features AS efectos_especiales,
 ac.first_name AS nombre,ac.last_name AS apellido FROM film fi JOIN film_actor ON fi.film_id=film_actor.film_id JOIN actor ac ON ac.actor_id=
 film_actor.actor_id JOIN film_category ON fi.film_id=film_category.film_id JOIN category cat ON cat.category_id=film_category.category_id
 WHERE ac.first_name LIKE 'sandra' AND ac.last_name LIKE 'kilmer' AND cat.name LIKE 'action';