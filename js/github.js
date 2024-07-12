class Github {
  constructor() {
    this.client_id = 'Ov23liVgfMqLbmWBhW47';
    this.client_secret = '7590880e59b3c83dfcb83690f5afec01dd489f56';
    this.repos_count = 8;
    this.repos_sort = 'create: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();


    return {
      profile,
      repos
    }
  }
}