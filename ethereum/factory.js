import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xA6FD3E21Fc41Bba9665819499424b7Aa5604b45b'
  );

export default instance;
