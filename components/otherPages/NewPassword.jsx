"use client";

import { useParams, useRouter } from "next/navigation";

import { useState } from "react";

export default function NewPassword() {
  const { token } = useParams(); // récupère le token depuis l'URL
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("❌ Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password/${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Votre mot de passe a été réinitialisé avec succès.");
        router.push("/login_register");
      } else {
        setMessage(data.message || "Erreur lors de la réinitialisation.");
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
        Nouveau mot de passe
      </h2>
      <p>Entrez votre nouveau mot de passe ci-dessous.</p>

      <div className="reset-form">
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="form-floating mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control form-control_gray"
              placeholder="Nouveau mot de passe *"
              required
            />
            <label>Nouveau mot de passe *</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control form-control_gray"
              placeholder="Confirmer le mot de passe *"
              required
            />
            <label>Confirmer le mot de passe *</label>
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
              "Réinitialiser"
            )}
          </button>

          {message && <p className="mt-3 text-center">{message}</p>}
        </form>
      </div>
    </section>
  );
}