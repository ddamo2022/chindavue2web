// plugins/facebook-sdk.js
import Vue from 'vue';
export default {
  install(Vue, options) {
    Vue.prototype.$loadFacebookSDK = function() {
      return new Promise((resolve, reject) => {
        if (window.FB) {
          resolve(window.FB);
          return;
        }
        
        window.fbAsyncInit = function() {
          FB.init({
            appId: options.appId,
            cookie: true,
            xfbml: true,
            version: 'v20.0'
          });
          resolve(FB);
        };

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {
            resolve(window.FB);
            return;
          }
          js = d.createElement(s);
          js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      });
    };

    Vue.prototype.$checkLoginState = function() {
      return new Promise((resolve, reject) => {
        FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
            resolve(response.authResponse);
          } else {
            reject('User not authenticated.');
          }
        });
      });
    };

    Vue.prototype.$fetchUserInformation = function() {
      return new Promise((resolve, reject) => {
        FB.api('/me', function(response) {
          if (response && !response.error) {
            resolve(response);
          } else {
            reject(response.error);
          }
        });
      });
    };
  }
}
