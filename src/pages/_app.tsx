import { type AppType } from "next/app";

import { api } from "@app/utils/api";

import "@app/styles/globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Theme appearance="dark">
      <Component {...pageProps} />
    </Theme>
  );
};

export default api.withTRPC(MyApp);
