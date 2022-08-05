import { Button } from "./Button";
import { Card } from "./Card";

function Index(theme) {
  return {
    ...Card(theme),
    ...Button(theme),
  };
}

export default Index;

