export default class Api {
  static url = `http://localhost:3001`;

  static request = (status, link, options) => {
    return new Promise(async (res, rej) => {
      const result = await fetch(link, options);
      if (result.status === status) {
        res(await result.json());
      } else {
        rej(await result.json());
      }
    });
  };

  static getPeople = () => this.request(200, `${Api.url}/people`);

  static getUserDetails = (id) => this.request(200, `${Api.url}/people/${id}`);

  static setNewUser = (data) =>
    this.request(201, `${Api.url}/people`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

  static editUser = (data, id) =>
    this.request(200, `${Api.url}/people/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

  static removeUser = (id) =>
    this.request(200, `${Api.url}/people/${id}`, {
      method: 'DELETE',
    });
}
