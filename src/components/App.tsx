import {
  MessageBoxProvider,
  ModalProvider,
  SnackbarProvider,
} from "@banpudev/react-components";
import { Alert, Snackbar } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Env, messageBoxProviderOption } from "../lib/config";
import {
  authComponoentBuilder,
  authContext,
  AuthProvider,
} from "../lib/config/Auth";
import { TransitionsModal } from "./common";
import { Layout } from "./Layout";

function App() {
  return (
    <BrowserRouter basename={Env.BASE_NAME}>
      <AuthProvider
        context={authContext}
        urlGetProfileByEmail="user-profile?email=:email"
        componoentBuilder={authComponoentBuilder}
      >
        <ModalProvider Modal={TransitionsModal}>
          <MessageBoxProvider option={messageBoxProviderOption}>
            <SnackbarProvider Snackbar={Snackbar} Alert={Alert}>
              <Layout>
                <div>Test</div>
              </Layout>
              {/* <Layout>
                <PageProvider>
                  <Router />
                </PageProvider>
              </Layout> */}
            </SnackbarProvider>
          </MessageBoxProvider>
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
