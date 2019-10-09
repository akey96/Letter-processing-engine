INSERT INTO person(id, birthday, ci, email, name, person_role, person_status)
VALUES
   (10, '1995-06-24 00:00:00', '12345678 Tja', 'pepito.perez@gmail.com', 'Pepito Perez',  'EDITOR', 'PENDING'),
   (11, '1991-01-21 00:00:00', '98765434 LP', 'lucho.juarez@gmail.com', 'Lucho Juarez',  'REDACTOR', 'PENDING');


INSERT INTO letter(id, creation_date, message, priority, response, status)
VALUES
   (20, '2019-10-02 00:00:00', 'Hola, soy Andres y mis papas ,mucho pelean', 'HIGH_PRIORITY', 'Respuesta para Andres',  'NEW'),
   (21, '2019-10-03 00:00:00', 'Hola, soy Jose y amo mucho a mi gato BLA BLA', 'LOW_PRIORITY', 'Respuesta para Jose',  'NEW');

INSERT INTO letter_images(letter_id, images)
VALUES
   (20, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OnaTiLx1aFg3HfB6ppPakgAZ1F_BcTIG-HI04yakXgRTaYfkaA');
   (21, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPeGcqQ1ZmNJP0RGdcoUQec24Uchbhg80hzJUnfVDMvf4L650vA'),
   (21, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4R-AqRMwvcT4NVnyQDlIUlaBRngH_NrbizVUp-0nbvlq8cAO_');
