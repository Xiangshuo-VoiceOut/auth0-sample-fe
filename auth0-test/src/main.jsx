import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App.jsx";
const domain = "dev-3x4dazexttmbmjlg.us.auth0.com";
const clientId = "JsNDTFaS39W0LKpThY5NfHJzx1zA5DD7";
//dev-3x4dazexttmbmjlg.us.auth0.com
//JsNDTFaS39W0LKpThY5NfHJzx1zA5DD7

const AUTH0_BASE_URL = "http://localhost:3000/callback";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: AUTH0_BASE_URL,
        audience: "http://voiceout-dev",
        scope: "openid profile email write:profile",
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
