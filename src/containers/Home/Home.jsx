import React from "react"
import "./Home.scss"

const Home = () => {

    return (
        <div className="homeMainBox">
            <div className="borderHomeDiv">
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
                    <img src="https://www.orbitbooks.net/wp-content/uploads/2022/06/Sapkowski_TimeofContempt_HC-scaled.jpg" alt="TheWitcher" />
                    <img src="https://i.pinimg.com/originals/8c/bd/88/8cbd8847e672daa899214b2ffa43b65c.jpg" alt="GameOfThrones" />
                    <img src="https://www.17thshard.com/forum/uploads/monthly_2020_08/5f2ef18807cbb_PORTADA-ElRitmodelaGuerra-Nova_Gigamesh.jpg.dcfea507801ad0f4dbf02af7d1b0d63a.jpg" alt="ElArchivoDeLasTormentas" />
                </section>
                <div className="homeTextDiv">
                    <p className="homeTextStyles"> 
                        <h1>Bienvenido a mi web de reseñas liteararias</h1>
                        <hr />
                        Aquí podrás encontrar un catálogo con algunos de los libros que he leido y
                        mi opinión personal de cada uno de ellos. Además de servirte como referencia para quien busque opiniones de un libro,
                        si has leído alguno y quisieras dejar tu opinión, únicamente necesitas darte de alta en la web en la sección "registrarse",
                        y podrás opinar de cualquier libro del catálogo.
                        <hr />

                        Ten en cuenta que las reseñas que encuentres aquí son carácter amateur y pueden distar mucho tanto de tu opinión personal,
                        como de opiniones más profesionales. 
                    </p>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Home