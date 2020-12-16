SELECT title, director FROM movies 
WHERE title LIKE "Toy Story%";

SELECT DISTINCT director FROM movies
ORDER BY director ASC;

SELECT title, year FROM movies
ORDER BY year DESC
LIMIT 4;

SELECT city, latitude FROM north_american_cities
WHERE country = "United States"
ORDER BY latitude DESC;

SELECT city, latitude FROM north_american_cities
WHERE country = "United States"
ORDER BY latitude DESC;

SELECT title, domestic_sales, international_sales 
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id;

SELECT title, domestic_sales, international_sales
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id
WHERE international_sales > domestic_sales;


SELECT DISTINCT building FROM employees;

SELECT DISTINCT building_name, role 
FROM buildings 
  LEFT JOIN employees
    ON building_name = building;


SELECT name, role FROM employees
WHERE building IS NULL;

SELECT DISTINCT building_name
FROM buildings 
  LEFT JOIN employees
    ON building_name = building
WHERE role IS NULL;
