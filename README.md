
# <center>Mi web personal de reseñas liteararias</center>

El proyecto ha sido realizada usando HTML, SASS y JavaScript, React y Redux. 
Para las animaciones he utilizado framer motion y para los estilos y mdb-react y bootstrap-react, con lo que además es totalmente resposive. La web también consta de un back-end realizado en PHP/Laravel que es parte de este mismo proyecto (añado el enlace al final).


---

>Esta proyecto lo he diseñado con la finalidad de ser una web personal de reseñas litearias aunque está preparada para que nuevos usuarios se registren y publiquen sus reseñas o añadan nuevos libros.
---

# 💻 Tech Stack:

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white) ![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)

---
## Vista principal
<img src="public/Img/home.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;"/>
<img src="public/Img/homeFrontCard.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;"/>
<img src="public/Img/homeBackCard.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;"/>

>Vista de inicio donde se da información del proyecto, una galería con un ejemplo de libros que puedes encontrar y una tarjeta de identificación.

---

### Inicio de sesión
<img src="public/Img/Login_validacion.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;"/>
---

### Nuevo usuario
<img src="public/Img/Registro.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;"/>

>Todos los formularios ya sea para crear un registro nuevo, editarlo o eliminarlo, constan de un sistema de validaciones.

---

### Vista sin autentificar
<img src="public/Img/booksNoAuth.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;"/>

>Vista de los libros con la barra de búsqueda cuando no ha iniciado sesión un usuario.

---
### Vista autentificado
<img src="public/Img/booksAuth.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;"/>

>Vista de los libros con la barra de búsqueda cuando no ha iniciado sesión un usuario.

---

### Editar o eliminar un libro
<div style="display: flex;align-items: center;justify-content: center; flex-direction: row; gap: 1em;margin-bottom: width: 100vw">
    <img src="public/Img/editCardButton.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; 0.3em; width: 45%"/>
    <img src="public/Img/deleteCardButton.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; width: 45%"/>
</div>
<img src="public/Img/Ventana_eliminar.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;margin-top: 0.3em;"/>

>Botones para eliminar o modificar un libro existente, solo visible y accesible para el administrador o el SuperAdmin con una ventana de seguridad para confirmar que se quiere eliminar el libro.

---

### Añadir un nuevo libro
<img src="public/Img/Nuevo_libro.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;"/>

>Cualquier usuario registrado puede añadir libros nuevos en la biblioteca, quizás en un futuro esta opción cambie y solo pueda añadir libros el administrador o el SuperAdmin.

---

### Formulario de edición de libros
<img src="public/Img/Editar_libro.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;"/>

>Formulario con sus validaciones correspondientes para editar un libro existente, solo accesible para un administrador o el SuperAdmin.

---

### Vista de reseñas
<img src="public/Img/Reseña.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;"/>

>Vista de las reseñas del libro seleccionado con opción de modificarlas o eliminarlas.

---

### Añadir una nueva reseña
<img src="public/Img/Nueva_reseña.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;"/>

>Cualquier usuario registrado puede añadir reseñas, pero únicamente el usuario que haya creado la reseña podrá editarla o eliminarla.

---

### Vista del perfil de usuario
<img src="public/Img/Perfil_usuario.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;"/>
<img src="public/Img/Eliminar_perfil.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;"/>

>Perfil del usuario, con opción de modificarlo o eliminarlo y ventana de seguridad para confirmar.

---

### Modificar datos del perfil

<img src="public/Img/Modificar_usuario.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;"/>

>Vista para modificar los datos de un usuario existente con opción de modificar la imagen por defecto del perfil a elegir entre más de 15 avatares precargados.

---
### Sobre el proyecto

<img src="public/Img/about.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.1em black; margin-bottom: 0.3em;"/>

>Vista con las tecnologías que he utilizado, información del proyecto y enlaces a mi GitHub y Linkedin.

</br>

<div style="display:flex; aling-items: center; justify-content:center;">
    <img src="public/Img/geeks.png" style="border-radius:0.2em;border: 0.1em transparent;box-shadow: 0em 0em 0.1em 0.2em black; margin-bottom: 0.3em; margin-bottom: 0.3em; padding: 0.4em; width: 50%; "/>
</div>

## 🌐 Socials:
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alejandrolaguia/) 

### Repositorio del back-end asociado a este proyecto

https://github.com/Alexdck/Books_reviews_proyect





