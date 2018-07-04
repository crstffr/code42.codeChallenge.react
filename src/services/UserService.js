import fetch from 'unfetch';
import urljoin from 'url-join';

const API_PREFIX = 'https://api.github.com/';

class UserService {

  wait = false;

  pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async fetchUsersInOrg(org) {
    if (!org) { return []; }
    return await this._fetch(`/orgs/${org}/public_members`) || [];
  }

  async fetchUserProfile(username) {
    if (!username) { return {}; }
    return await this._fetch(`/users/${username}`) || {};
  }

  async fetchUserRepos(username) {
    if (!username) { return []; }
    return await this._fetch(`/users/${username}/repos?page=1&sort=updated`) || [];
  }

  async _fetch(path) {

    let url = urljoin(API_PREFIX, path);
    let resp = await fetch(url);

    if (!resp.ok) {
      console.error(`Error in UserService fetch: ${resp.status} - ${resp.statusText}`);
      return null;
    }

    if (this.wait) {
      await this.pause((Math.random() * 1000));
    }

    return await resp.json();
  }

}

export default new UserService();
