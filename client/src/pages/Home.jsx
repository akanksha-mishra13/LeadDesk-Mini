import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <nav
        style={{
          background: "#111827",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "28px",
          }}
        >
          LeadDesk Mini
        </h2>

        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "10px 18px",
            border: "1px solid white",
            borderRadius: "6px",
          }}
        >
          Admin Login
        </Link>
      </nav>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "10px",
          }}
        >
          Grow Your Business 🚀
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Submit your project details below.
        </p>

        <LeadForm />
      </div>

      <footer
        style={{
          textAlign: "center",
          padding: "18px",
          background: "#111827",
          color: "#94a3b8",
        }}
      >
        Built for Digital Heroes Training Task ·{" "}
        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#60a5fa",
            textDecoration: "none",
          }}
        >
          digitalheroesco.com
        </a>
      </footer>
    </div>
  );
}

export default Home;