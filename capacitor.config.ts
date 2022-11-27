import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
  appId: 'io.ionic.starter',
  appName: 'Recipe Book',
  webDir: 'www',
  bundledWebRuntime: false
};

export default config;
