import './Header.css';
import icone_logo from '../../assets/icone-Logo.png'
import { Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Header() {

    const [pesquisa, setPesquisa] = useState<string>("");
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/produtos/pesquisa?query=${encodeURIComponent(pesquisa)}`)
    }

    const handleKeyDown = (evento: React.KeyboardEvent<HTMLInputElement>) => {
        if (evento.key === 'Enter') { //se o usurio usar a tecla enter para pesquisar
            handleSearch();
        }
    }

    return (
        <header>
            <Navbar expand="md" className="container_cabecalho">
                <img className="logo_mobile" src={icone_logo} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto conteudo-nav">
                        {/* 1/3: Icone seta */}
                        <Nav.Item>
                            <svg className="icone_seta" width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.31032 55.2665C7.3133 55.7456 7.70771 56.1351 8.18679 56.1321C8.66586 56.1291 9.05539 55.7347 9.0524 55.2556L8.8027 15.1877C8.79971 14.7086 8.4053 14.3191 7.92623 14.3221C7.44715 14.3251 7.05763 14.7195 7.06061 15.1986L7.31032 55.2665ZM21.3688 34.5344C21.0333 34.874 21.0368 35.4293 21.3764 35.7647L38.0294 52.2114C38.369 52.5468 38.9243 52.5434 39.2597 52.2037C39.5951 51.8641 39.5917 51.3088 39.2521 50.9734L24.1 35.9982L62.0665 35.7616C62.5456 35.7586 62.9351 35.3642 62.9322 34.8851C62.9292 34.406 62.5348 34.0165 62.0557 34.0195L24.0891 34.2561L39.0534 19.1041C39.3889 18.7645 39.3854 18.2092 39.0458 17.8738C38.7061 17.5384 38.1508 17.5418 37.8154 17.8814L21.3688 34.5344Z"
                                    fill="white" />
                            </svg>
                        </Nav.Item>

                        {/* 2/3: Barra de pesquisa Central */}
                        <Nav.Item className="box_busca">
                            <svg className="icone_lupa" width="27" height="32" viewBox="0 0 27 32" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.4062 12.7141C19.4062 10.1203 18.5173 7.63267 16.935 5.79855C15.3526 3.96443 13.2065 2.93403 10.9688 2.93403C8.73099 2.93403 6.58487 3.96443 5.00254 5.79855C3.4202 7.63267 2.53125 10.1203 2.53125 12.7141C2.53125 15.308 3.4202 17.7956 5.00254 19.6297C6.58487 21.4638 8.73099 22.4942 10.9688 22.4942C13.2065 22.4942 15.3526 21.4638 16.935 19.6297C18.5173 17.7956 19.4062 15.308 19.4062 12.7141ZM17.7768 22.6837C15.91 24.4013 13.5422 25.4282 10.9688 25.4282C4.90957 25.4282 0 19.7374 0 12.7141C0 5.69079 4.90957 0 10.9688 0C17.0279 0 21.9375 5.69079 21.9375 12.7141C21.9375 15.697 21.0516 18.4416 19.5697 20.6054L26.6309 28.7901C27.1266 29.3647 27.1266 30.2938 26.6309 30.8623C26.1352 31.4308 25.3336 31.4369 24.8432 30.8623L17.7768 22.6837Z"
                                    fill="#867B7B" />
                            </svg>
                            <input className="campo_busca"
                                name="campo_busca"
                                type="text"
                                value={pesquisa}
                                onChange={p => setPesquisa(p.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder='pesquisar'
                            />
                        </Nav.Item>

                        {/* 3/3: Logo Pizza */}
                        <Nav.Item className="div_logo">
                            <img className="logo" src={icone_logo} />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto' />
            </Navbar>

        </header>
    )
}
