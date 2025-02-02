import { app } from "./configs/express";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});


module.exports = app