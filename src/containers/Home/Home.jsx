import React from "react"
import FlipCard from "../../components/FlipCard/FlipCard"
import "./Home.scss"

const Home = () => {

    return (
        <div className="homeMainBox">
            <div className="borderHomeDiv">
                <div className="homeTextDiv">
                    <div className="homeTextP">
                        <h1>Bienvenido a mi web de reseñas liteararias</h1>
                        <hr />
                        <p>
                            En esta web encontrarás un catálogo con algunos de los libros que he leido junto con una reseña en
                            la que doy mi opinión personal. Además de poder servir como referencia para quien busque opiniones de
                            un libro determinado o quisiera dejar la suya propia, para poder hacerlo únicamente necesitarías darte de
                            alta en la web en la sección "registrarse", y podrás añadir tu sensaciones de cualquier libro del catálogo.
                        </p>

                        <hr />
                        <p>
                            En la imagen hay una pequeña selección del tipo de libros que se pueden encontrar.
                        </p>
                        <hr />
                        <p>
                            Las reseñas que se encuentran en esta página son de carácter amateur y pueden distar mucho tanto de tu opinión personal,
                            como de opiniones más profesionales.
                        </p>
                    </div>
                </div>
                <section className="homeImages">
                    <img src="https://m.media-amazon.com/images/I/81S+HqepWwL.jpg" alt="elantris" />
                    <img src="https://pbs.twimg.com/media/DiUSmqFV4AAQ4N4.jpg" alt="Skyward" />
                    <img src="https://m.media-amazon.com/images/I/81NGmugxgSL.jpg" alt="Mistborn" />
                    <img src="https://www.orbitbooks.net/wp-content/uploads/2022/06/Sapkowski_TimeofContempt_HC-scaled.jpg" alt="TheWitcher" />
                    <img src="https://i.pinimg.com/originals/8c/bd/88/8cbd8847e672daa899214b2ffa43b65c.jpg" alt="GameOfThrones" />
                    <img src="https://3.bp.blogspot.com/-hzzvikUp4mk/VYkj8OtJvCI/AAAAAAAA1_E/voleQovN4S4/s1600/Millenium%2527sRule2.jpg" alt="AngelDeLasTormentas" />
                    <img src="https://www.17thshard.com/forum/uploads/monthly_2020_08/5f2ef18807cbb_PORTADA-ElRitmodelaGuerra-Nova_Gigamesh.jpg.dcfea507801ad0f4dbf02af7d1b0d63a.jpg" alt="ElArchivoDeLasTormentas" />
                </section>
                <section className="homeImages2">
                    <img src="https://m.media-amazon.com/images/I/81S+HqepWwL.jpg" alt="elantris" />
                    <img src="https://pbs.twimg.com/media/DiUSmqFV4AAQ4N4.jpg" alt="Skyward" />
                    <img src="https://www.orbitbooks.net/wp-content/uploads/2022/06/Sapkowski_TimeofContempt_HC-scaled.jpg" alt="TheWitcher" />
                    <img src="https://i.pinimg.com/originals/8c/bd/88/8cbd8847e672daa899214b2ffa43b65c.jpg" alt="GameOfThrones" />
                    <img src="https://3.bp.blogspot.com/-hzzvikUp4mk/VYkj8OtJvCI/AAAAAAAA1_E/voleQovN4S4/s1600/Millenium%2527sRule2.jpg" alt="AngelDeLasTormentas" />
                </section>
                <section className="homeImages3">
                    <img src="https://www.orbitbooks.net/wp-content/uploads/2022/06/Sapkowski_TimeofContempt_HC-scaled.jpg" alt="TheWitcher" />
                    <img src="https://i.pinimg.com/originals/8c/bd/88/8cbd8847e672daa899214b2ffa43b65c.jpg" alt="GameOfThrones" />
                    <img src="https://www.17thshard.com/forum/uploads/monthly_2020_08/5f2ef18807cbb_PORTADA-ElRitmodelaGuerra-Nova_Gigamesh.jpg.dcfea507801ad0f4dbf02af7d1b0d63a.jpg" alt="ElArchivoDeLasTormentas" />
                </section>
                <div className="flipCardDiv">
                    <FlipCard />
                </div>
            </div>
        </div>
    )
}

export default Home