import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "@/lib/firebase";
import { useToastNotification } from "@/components/ToastContainer";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { showToast } = useToastNotification();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const email = username.includes("@") ? username : `${username}@demo.com`;
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      showToast("Wrong email or password. Try again.", "error");
    }
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#F5F0E8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          border: "3px solid #000",
          boxShadow: "8px 8px 0 #000",
          backgroundColor: "#F5F0E8",
          padding: "48px",
          minWidth: "400px",
        }}
      >
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <img
              src="/bloc-logo.png"
              alt="Bloc Logo"
              style={{
                height: "48px",
                width: "auto",
                maxWidth: "200px",
                objectFit: "contain",
              }}
            />
          </div>
          <div style={{ fontSize: "12px", color: "#666", letterSpacing: "0.05em", fontFamily: "'Space Grotesk', sans-serif" }}>
            TEAM TASK COORDINATION
          </div>
          <div
            style={{
              borderTop: "3px solid #000",
              marginTop: "16px",
              paddingTop: "16px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "18px",
              letterSpacing: "0.05em",
            }}
          >
            SIGN IN TO YOUR WORKSPACE
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "0.1em",
                marginBottom: "6px",
              }}
            >
              USERNAME
            </label>
            <input
              data-testid="input-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username..."
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "2px solid #000",
                backgroundColor: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "0.1em",
                marginBottom: "6px",
              }}
            >
              PASSWORD
            </label>
            <input
              data-testid="input-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "2px solid #000",
                backgroundColor: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            data-testid="button-login"
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#000",
              color: "#FFE600",
              border: "3px solid #000",
              boxShadow: "4px 4px 0 #FFE600",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.1em",
              cursor: "pointer",
              transition: "transform 0.1s, box-shadow 0.1s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translate(-2px, -2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "6px 6px 0 #FFE600";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translate(0, 0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "4px 4px 0 #FFE600";
            }}
          >
            ENTER WORKSPACE →
          </button>
        </form>

        <div style={{ marginTop: "20px", fontSize: "11px", color: "#888", textAlign: "center" }}>
          Any credentials work — this is a demo workspace
        </div>
      </div>
    </div>
  );
}
