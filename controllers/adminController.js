require("dotenv").config();

exports.showLogin = (req, res) => {
  res.render("adminLogin", { error: null });
};

exports.handleLogin = (req, res) => {
  const { password } = req.body;
  if (password === 'admin123') {
    req.session.isAdmin = true;
    res.redirect("/admin/dashboard");
  } else {
    res.render("adminLogin", { error: "Incorrect password" });
  }
};

exports.verifyAdmin = (req, res, next) => {
  if (req.session.isAdmin) {
    next();
  } else {
    res.redirect("/admin/login");
  }
};

exports.dashboard = (req, res) => {
  res.render("adminDashboard");
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/admin/login");
  });
};
