// src/Home.tsx
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const handleUser = () => {
        navigate('/User')
    }
    const handleProductMenu = () => {
        navigate('/ProductMenu')
    }
    return (
        <>
            <button onClick={handleUser}>ユーザー画面へ</button>
            <br />
            <button onClick={handleProductMenu}>商品メニュー画面へ</button>
        </>
    )
}
export default Home;