import * as React from "react";
import { Button, Card, CardContent } from "@mui/material";
import { useTranslate, useLocaleState } from "ra-core";
import { makeStyles } from "@mui/styles";
import { Title, useTheme } from "ra-ui-materialui";
import { darkTheme, lightTheme } from "../../themes";

const useStyles = makeStyles({
  label: { width: "10em", display: "inline-block" },
  button: { margin: "1em" },
});

const Configuration = () => {
  const translate = useTranslate();

  const [locale, setLocale] = useLocaleState();
  const classes = useStyles();
  const [theme, setTheme] = useTheme();
  return (
    <Card>
      <Title title={translate("rin.configuration")} />
      <CardContent>
        <div className={classes.label}>{translate("rin.theme.name")}</div>
        <Button
          variant="contained"
          className={classes.button}
          color={theme === "light" ? "primary" : "secondary"}
          onClick={() => setTheme(lightTheme)}
        >
          {translate("rin.theme.light")}
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          color={theme === "dark" ? "primary" : "secondary"}
          onClick={() => setTheme(darkTheme)}
        >
          {translate("rin.theme.dark")}
        </Button>
      </CardContent>
      <CardContent>
        <div className={classes.label}>{translate("rin.language")}</div>
        <Button
          variant="contained"
          className={classes.button}
          color={locale === "en" ? "primary" : "secondary"}
          onClick={() => setLocale("en")}
        >
          en
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          color={locale === "fr" ? "primary" : "secondary"}
          onClick={() => setLocale("fr")}
        >
          fr
        </Button>
      </CardContent>
    </Card>
  );
};

export default Configuration;
