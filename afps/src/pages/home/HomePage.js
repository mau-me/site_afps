import { Link } from "react-router-dom"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import './Home.css'

function HomePage() {
    const imgHomePath = process.env.PUBLIC_URL + './assets/imgs/saia.png'
    return (
        <>
            <Header />
            <div class="container">
                <div class="text">
                    <h1>Bem-vindo à HomePage</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div class="img-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/imgs/saia.jpg`} alt="Imagem" />
                </div>
            </div>
            <Footer />
        </>
    )

}
export default HomePage