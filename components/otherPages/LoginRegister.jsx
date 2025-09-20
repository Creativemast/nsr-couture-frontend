"use client";

import React, { useState } from "react";

import Cookies from "js-cookie";
import Link from "next/link";

export default function ConnexionInscription() {
  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState("");
  const [succes, setSucces] = useState("");

  // CONNEXION (par nom d’utilisateur)
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErreur("");
    setSucces("");

    const formData = new FormData(e.currentTarget);
    const username_email = formData.get("login_username_email");
    const password = formData.get("login_password");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login_customer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login: username_email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Échec de connexion");

      Cookies.set("token", data.token, { expires: 7, secure: true, sameSite: "strict" });
      localStorage.setItem("token", data.token);
      setSucces("Connexion réussie ! Redirection...");
      window.location.href = "/account_dashboard";
    } catch (err) {
      setErreur(err.message);
    } finally {
      setLoading(false);
    }
  };

  // INSCRIPTION (nom d’utilisateur + prénom + nom + email + téléphone + mot de passe)
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErreur("");
    setSucces("");

    const formData = new FormData(e.currentTarget);
    const username = formData.get("register_username");
    const firstName = formData.get("register_firstName");
    const lastName = formData.get("register_lastName");
    const email = formData.get("register_email");
    const phoneNumber = formData.get("register_phoneNumber");
    const password = formData.get("register_password");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signup_customer`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Échec d’inscription");

      localStorage.setItem("token", data.data.token);
      setSucces("Compte créé avec succès ! Redirection...");
      window.location.href = "/account_dashboard";
    } catch (err) {
      setErreur(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-register container">
      <h2 className="d-none">Connexion & Inscription</h2>

      {/* Onglets */}
      <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link nav-link_underscore active"
            id="login-tab"
            data-bs-toggle="tab"
            href="#tab-item-login"
            role="tab"
            aria-controls="tab-item-login"
            aria-selected="true"
          >
            Connexion
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link nav-link_underscore"
            id="register-tab"
            data-bs-toggle="tab"
            href="#tab-item-register"
            role="tab"
            aria-controls="tab-item-register"
            aria-selected="false"
          >
            Inscription
          </a>
        </li>
      </ul>

      {/* Messages */}
      {erreur && <div className="alert alert-danger">{erreur}</div>}
      {succes && <div className="alert alert-success">{succes}</div>}

      <div className="tab-content pt-2" id="login_register_tab_content">
        {/* FORMULAIRE CONNEXION */}
        <div
          className="tab-pane fade show active"
          id="tab-item-login"
          role="tabpanel"
          aria-labelledby="login-tab"
        >
          <div className="login-form">
            <form onSubmit={handleLogin} className="needs-validation">
              <div className="form-floating mb-3">
                <input
                  name="login_username_email"
                  type="text"
                  className="form-control form-control_gray"
                  placeholder="Nom d’utilisateur ou Email*"
                  required
                />
                <label>Nom d’utilisateur ou Email *</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  name="login_password"
                  type="password"
                  className="form-control form-control_gray"
                  placeholder="Mot de passe *"
                  required
                />
                <label>Mot de passe *</label>
              </div>

              <div className="d-flex align-items-center mb-3 pb-2">
                <div className="form-check mb-0">
                  <input
                    name="remember"
                    className="form-check-input form-check-input_fill"
                    type="checkbox"
                  />
                  <label className="form-check-label text-secondary">
                    Se souvenir de moi
                  </label>
                </div>
                <Link href="/reset_password" className="btn-text ms-auto">
                  Mot de passe oublié ?
                </Link>
              </div>

              <button
                className="btn btn-primary w-100 text-uppercase"
                type="submit"
                disabled={loading}
              >
                {loading ? "Connexion..." : "Se connecter"}
              </button>
            </form>
          </div>
        </div>

        {/* FORMULAIRE INSCRIPTION */}
        <div
          className="tab-pane fade"
          id="tab-item-register"
          role="tabpanel"
          aria-labelledby="register-tab"
        >
          <div className="register-form">
            <form onSubmit={handleRegister} className="needs-validation">
              <div className="form-floating mb-3">
                <input
                  name="register_username"
                  type="text"
                  className="form-control form-control_gray"
                  placeholder="Nom d’utilisateur *"
                  required
                />
                <label>Nom d’utilisateur *</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  name="register_firstName"
                  type="text"
                  className="form-control form-control_gray"
                  placeholder="Prénom *"
                  required
                />
                <label>Prénom *</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  name="register_lastName"
                  type="text"
                  className="form-control form-control_gray"
                  placeholder="Nom *"
                  required
                />
                <label>Nom *</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  name="register_email"
                  type="email"
                  className="form-control form-control_gray"
                  placeholder="Adresse e-mail *"
                  required
                />
                <label>Adresse e-mail *</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  name="register_phoneNumber"
                  type="tel"
                  className="form-control form-control_gray"
                  placeholder="Numéro de téléphone *"
                  required
                />
                <label>Numéro de téléphone *</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  name="register_password"
                  type="password"
                  className="form-control form-control_gray"
                  placeholder="Mot de passe *"
                  required
                />
                <label>Mot de passe *</label>
              </div>

              <div className="d-flex align-items-center mb-3 pb-2">
                <p className="m-0">
                  Vos données personnelles seront utilisées pour faciliter votre
                  expérience, gérer l’accès à votre compte et pour d’autres
                  raisons décrites dans notre politique de confidentialité.
                </p>
              </div>

              <button
                className="btn btn-primary w-100 text-uppercase"
                type="submit"
                disabled={loading}
              >
                {loading ? "Inscription..." : "S’inscrire"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
