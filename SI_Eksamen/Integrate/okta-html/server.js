const express = require("express");
const session = require("express-session");
const { ExpressOIDC } = require("@okta/oidc-middleware");
const path = require("path");

const app = express();
app.use(
  session({
    secret: "your_secret_here",
    resave: true,
    saveUninitialized: false,
  })
);
const oidc = new ExpressOIDC({
  issuer: "https://dev-42985177.okta.com/oauth2/default",
  client_id: "0oa8z7tnx58kIjm8B5d7",
  client_secret: "your_client_secret_here",
  redirect_uri: "http://localhost:3000/implicit/callback",
  scope: "openid profile email",
  appBaseUrl: "http://localhost:3000",
  routes: {
    loginCallback: {
      path: "/authorization-code/callback",
      afterCallback: "/success",
      errorRedirect: "/failure",
    },
  },
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(oidc.router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/success", (req, res) => {
  res.send("Successfully logged in!");
});

app.get("/failure", (req, res) => {
  res.send("Failed to log in.");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
