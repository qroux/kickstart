import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x1204E1609DFE683502C89873B9024930E86Df5Ef'
  );

export default instance;
