import { createClient } from 'contentful';
import getConfig from 'next/config';

const { 
  CTF_SPACE_ID: space, 
  CTF_CDA_ACCESS_TOKEN: accessToken 
} = getConfig().publicRuntimeConfig;

export default createClient({space, accessToken});
