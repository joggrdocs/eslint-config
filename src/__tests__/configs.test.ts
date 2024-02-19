import fs from 'node:fs/promises';
import path from 'node:path';

const listConfigFiles = async (): Promise<string[]> => {
  const configFiles = await fs.readdir(
    path.resolve(__dirname, '..', 'configs')
  );
  return configFiles.filter((file) => file.endsWith('.ts'));
};

// @todo add better tests https://medium.com/@michalozogan/test-your-eslint-config-1652e4cd48ec
describe('configs', async () => {
  let configFiles: string[] = await listConfigFiles();
  configFiles.forEach((configFile) => {
    it(`should have a valid config file: ${configFile}`, async () => {
      const config = await import(`../configs/${configFile}`);
      expect(config).toMatchSnapshot();
    });
  });
});
