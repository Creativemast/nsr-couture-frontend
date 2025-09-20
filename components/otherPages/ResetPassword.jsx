"use client";

import Link from "next/link";
import { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("📩 Un email vous a été envoyé pour réinitialiser votre mot de passe.");
      } else {
        setMessage(data.message || "Erreur lors de la demande.");
      }
    } catch (err) {
      setMessage("❌ Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-register container">
      <h2 className="section-title text-center fs-3 mb-xl-5">
        Réinitialiser votre mot de passe
      </h2>
      <p>Entrez votre adresse e-mail et nous vous enverrons un lien.</p>

      <div className="reset-form">
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="form-floating mb-3">
            <input
              name="reset_email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control_gray"
              placeholder="Adresse e-mail *"
              required
            />
            <label>Adresse e-mail *</label>
          </div>

          <button
            className="btn btn-primary w-100 text-uppercase d-flex justify-content-center align-items-center gap-2"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Envoi...
              </>
            ) : (
              "Envoyer"
            )}
          </button>

          {message && <p className="mt-3 text-center">{message}</p>}

          <div className="customer-option mt-4 text-center">
            <span className="text-secondary">Retour à </span>
            <Link href="/login_register" className="btn-text js-show-register">
              Connexion
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
