import liff from '@line/liff/core';
import GetOS from '@line/liff/get-os';
import GetLanguage from '@line/liff/get-language';
import GetLogin from '@line/liff/login';
import GetIsClient from '@line/liff/is-in-client';
import Isloggerin from '@line/liff/is-logged-in';
import GetProfile from '@line/liff/get-profile';
liff.use(new GetOS());
liff.use(new GetLanguage());
liff.use(new GetLogin());
liff.use(new GetIsClient());
liff.use(new Isloggerin());
liff.use(new GetProfile());
export async function initializeLiff(liffId) {
  try {
    await liff.init({ liffId });
    console.log('LIFF 初始化成功');
  } catch (err) {
    console.error('LIFF 初始化失败', err);
  }
}

export default liff;