import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import api from "../../services/api";
import "./styles.css";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post("ong", data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push("/");
        } catch (e) {
            alert("Erro cadastrar ONG. Tente novamente.");
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Login
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome" />
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail" />
                    <input value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="WhatsApp" />
                    <div className="input-group">
                        <input value={city} onChange={e => setCity(e.target.value)} placeholder="Cidade" />
                        <input value={uf} onChange={e => setUf(e.target.value)} placeholder="UF" style={{ width: 80 }} />
                    </div>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}